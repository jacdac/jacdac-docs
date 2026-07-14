import React from 'react';
import { Button as MuiButton, Link as MuiLink } from '@mui/material';

export const Button = MuiButton;

export function Link(props: any) {
  const { to, href, ...rest } = props || {};
  return <MuiLink href={href || to || '#'} {...rest} />;
}
