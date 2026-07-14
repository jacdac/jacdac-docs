import React from 'react';
import {
  Button as MuiButton,
  CardActionArea as MuiCardActionArea,
  IconButton as MuiIconButton,
  Link as MuiLink,
  ListItemButton as MuiListItemButton,
} from '@mui/material';

export const Button = MuiButton;
export const CardActionArea = MuiCardActionArea;
export const IconButton = MuiIconButton;

export function Link(props: any) {
  const { to, href, ...rest } = props || {};
  return <MuiLink href={href || to || '#'} {...rest} />;
}

export function ListItemButton(props: any) {
  const { to, href, component, ...rest } = props || {};
  return <MuiListItemButton component={component || 'a'} href={href || to || '#'} {...rest} />;
}
