import { chromium } from "playwright";
import { spawn } from "node:child_process";
import { mkdirSync } from "node:fs";
import http from "node:http";
import path from "node:path";

const PORT = process.env.PORT || 3000;
const BASE_URL = process.env.BASE_URL || `http://localhost:${PORT}`;
const ROUTE = "/curriculo";
const OUTPUT_DIR = path.join(process.cwd(), "public", "pdf");
const OUTPUT_PATH = path.join(OUTPUT_DIR, "victor-nascimento-cv.pdf");

function pingServer(url) {
  return new Promise((resolve) => {
    const req = http.get(url, (res) => {
      resolve(res.statusCode < 500);
      res.resume();
    });
    req.on("error", () => resolve(false));
    req.setTimeout(2000, () => {
      req.destroy();
      resolve(false);
    });
  });
}

function waitForServer(url, timeoutMs = 60000) {
  const start = Date.now();
  return new Promise((resolve, reject) => {
    const check = async () => {
      if (await pingServer(url)) return resolve();
      if (Date.now() - start > timeoutMs) {
        return reject(new Error(`Tempo esgotado aguardando o servidor em ${url}`));
      }
      setTimeout(check, 500);
    };
    check();
  });
}

async function main() {
  const targetUrl = `${BASE_URL}${ROUTE}`;
  let serverProcess = null;
  const alreadyRunning = await pingServer(BASE_URL);

  if (!alreadyRunning) {
    console.log("Nenhum servidor local detectado. Iniciando `next dev`...");
    serverProcess = spawn("npx", ["next", "dev", "--port", String(PORT)], {
      stdio: "inherit",
      shell: true,
    });
    await waitForServer(targetUrl);
  } else {
    console.log(`Servidor local já em execução em ${BASE_URL}`);
  }

  mkdirSync(OUTPUT_DIR, { recursive: true });

  const SITE_WIDTH = 1440;

  const browser = await chromium.launch();
  try {
    const context = await browser.newContext({
      viewport: { width: SITE_WIDTH, height: 1080 },
    });
    const page = await context.newPage();
    await page.goto(targetUrl, { waitUntil: "networkidle" });
    const contentHeight = await page.evaluate(() => document.documentElement.scrollHeight);
    await page.pdf({
      path: OUTPUT_PATH,
      printBackground: true,
      width: `${SITE_WIDTH}px`,
      height: `${contentHeight}px`,
      margin: {
        top: "0px",
        right: "0px",
        bottom: "0px",
        left: "0px",
      },
    });
    console.log(`✅ PDF gerado com sucesso em: ${OUTPUT_PATH}`);
  } finally {
    await browser.close();
    if (serverProcess) {
      serverProcess.kill();
    }
  }
}

main().catch((error) => {
  console.error("❌ Erro ao gerar PDF do currículo:", error);
  process.exitCode = 1;
});
