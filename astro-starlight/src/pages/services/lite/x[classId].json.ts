import type { APIRoute } from 'astro';
import { getServices, toLiteServiceSpec } from '../../../lib/specData';

export function getStaticPaths() {
  return getServices().map((service) => ({
    params: { classId: service.classIdentifier.toString(16) },
    props: { service },
  }));
}

export const GET: APIRoute = ({ props }) => {
  return new Response(JSON.stringify(toLiteServiceSpec(props.service), null, 2), {
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'public, max-age=3600',
    },
  });
};

export const prerender = true;
