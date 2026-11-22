import { tw } from "@/lib/tailwind";

type BrowserBarVariant = "desktop" | "phone";

// Sized in `cqw` of the device it sits in, so a phone's narrower width needs larger values.
const VARIANT_CLASSNAMES: Record<
  BrowserBarVariant,
  { bar: string; address: string }
> = {
  desktop: {
    bar: tw`flex h-[5.6cqw] shrink-0 items-center gap-[1.2cqw] border-b border-neutral-200 bg-neutral-100 px-[2.6cqw]`,
    address: tw`mx-auto max-w-[46%] truncate rounded-full bg-neutral-200 px-[2.4cqw] text-[clamp(0.5rem,1.6cqw,0.75rem)] leading-[3cqw] text-neutral-500`,
  },
  phone: {
    bar: tw`flex h-[14cqw] shrink-0 items-center border-t border-neutral-200 bg-neutral-100 px-[5cqw]`,
    address: tw`w-full truncate rounded-full bg-neutral-200 px-[4cqw] text-center text-[clamp(0.3rem,5cqw,0.75rem)] leading-[8cqw] text-neutral-500`,
  },
};

const WINDOW_DOT_CLASSNAME = tw`size-[1.4cqw] rounded-full bg-neutral-300`;

type BrowserBarProps = {
  address?: string;
  variant?: BrowserBarVariant;
};

/** A browser's toolbar showing the page address; desktop bars add the window controls. */
export function BrowserBar({ address, variant = "desktop" }: BrowserBarProps) {
  const classNames = VARIANT_CLASSNAMES[variant];

  return (
    <div className={classNames.bar}>
      {variant === "desktop" && (
        <>
          <span className={WINDOW_DOT_CLASSNAME} />
          <span className={WINDOW_DOT_CLASSNAME} />
          <span className={WINDOW_DOT_CLASSNAME} />
        </>
      )}
      {address && <span className={classNames.address}>{address}</span>}
    </div>
  );
}
