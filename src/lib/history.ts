export function pushPathname(pathname: string) {
  if (window.location.pathname !== pathname) {
    window.history.pushState(null, "", pathname);
  }
}

export function replacePathname(pathname: string) {
  if (window.location.pathname !== pathname) {
    window.history.replaceState(null, "", pathname);
  }
}
