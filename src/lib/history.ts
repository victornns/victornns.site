// Pathname changes keep the current query, so state carried in it (e.g. the
// projects list filters) survives opening and closing the project drawer.
export function pushPathname(pathname: string) {
  if (window.location.pathname !== pathname) {
    window.history.pushState(null, "", `${pathname}${window.location.search}`);
  }
}

export function replacePathname(pathname: string) {
  if (window.location.pathname !== pathname) {
    window.history.replaceState(
      null,
      "",
      `${pathname}${window.location.search}`,
    );
  }
}

/** `search` is either empty or starts with `?`, matching `window.location.search`. */
export function pushSearch(search: string) {
  if (window.location.search !== search) {
    window.history.pushState(null, "", `${window.location.pathname}${search}`);
  }
}
