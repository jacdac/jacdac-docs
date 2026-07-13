import React from 'react';

export function withPrefix(path: string): string {
  return path;
}

export function navigate(path: string): void {
  if (typeof window !== 'undefined') {
    window.location.href = path;
  }
}

export function graphql(strings: TemplateStringsArray, ...values: unknown[]): string {
  const parts: string[] = [];
  for (let i = 0; i < strings.length; i++) {
    parts.push(strings[i]);
    if (i < values.length) parts.push(String(values[i]));
  }
  return parts.join('');
}

export function useStaticQuery(): Record<string, unknown> {
  return {};
}

export const Link = ({
  to,
  children,
  ...props
}: {
  to?: string;
  children?: React.ReactNode;
  [key: string]: unknown;
}) => {
  return (
    <a href={to || '#'} {...props}>
      {children}
    </a>
  );
};

const GatsbyShim = {
  withPrefix,
  navigate,
  graphql,
  useStaticQuery,
  Link,
};

export default GatsbyShim;
