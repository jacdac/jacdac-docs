export function withPrefix(path: string): string {
  return path;
}

export function navigate(path: string): void {
  if (typeof window !== 'undefined') {
    window.location.href = path;
  }
}

const GatsbyLinkShim = {
  withPrefix,
  navigate,
};

export default GatsbyLinkShim;
