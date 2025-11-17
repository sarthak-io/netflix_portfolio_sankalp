// getDatoCmsToken.ts

type TokenMap = Record<string, string | undefined>;

const TOKEN_MAP: TokenMap = {
  'ror.sumanthsamala.com': process.env.REACT_APP_DATOCMS_ROR_TOKEN,
  'sumanthsamala.com': process.env.REACT_APP_DATOCMS_ROR_TOKEN,
  'ror.localhost': process.env.REACT_APP_DATOCMS_ROR_TOKEN,
  'localhost': process.env.REACT_APP_DATOCMS_FRONTEND_TOKEN ?? process.env.REACT_APP_DATOCMS_ROR_TOKEN,
  'java.sumanthsamala.com': process.env.REACT_APP_DATOCMS_JAVA_TOKEN,
  'java.localhost': process.env.REACT_APP_DATOCMS_JAVA_TOKEN,
  'frontend.sumanthsamala.com': process.env.REACT_APP_DATOCMS_FRONTEND_TOKEN,
  'frontend.localhost': process.env.REACT_APP_DATOCMS_FRONTEND_TOKEN,
  'node.sumanthsamala.com': process.env.REACT_APP_DATOCMS_NODE_TOKEN,
  'node.localhost': process.env.REACT_APP_DATOCMS_NODE_TOKEN,
};

const getHostname = (): string | null => {
  if (typeof window !== 'undefined' && window.location?.hostname) {
    return window.location.hostname;
  }

  if (process.env.REACT_APP_DEPLOYMENT_HOST) {
    return process.env.REACT_APP_DEPLOYMENT_HOST;
  }

  return null;
};

const resolveTokenForHostname = (hostname: string | null): string | undefined => {
  if (!hostname) return undefined;

  if (hostname.endsWith('.netlify.app')) {
    return process.env.REACT_APP_DATOCMS_FRONTEND_TOKEN ?? process.env.REACT_APP_DATOCMS_DEFAULT_TOKEN;
  }

  return TOKEN_MAP[hostname];
};

export const getDatoCmsToken = (): string => {
  const hostname = getHostname();
  const matchedToken = resolveTokenForHostname(hostname);

  if (matchedToken) {
    return matchedToken;
  }

  const fallbackToken =
    process.env.REACT_APP_DATOCMS_DEFAULT_TOKEN ??
    process.env.REACT_APP_DATOCMS_FRONTEND_TOKEN ??
    process.env.REACT_APP_DATOCMS_ROR_TOKEN ??
    '';

  if (!hostname) {
    console.warn('DatoCMS token fallback used because hostname is unavailable at build time.');
  } else {
    console.warn(`DatoCMS token fallback used for unmatched hostname: ${hostname}`);
  }

  return fallbackToken;
};
