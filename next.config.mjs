import githubPagesModule from './lib/githubPages.js';

const { getGithubPagesConfig } = githubPagesModule;
const githubPagesConfig = getGithubPagesConfig(process.env);

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  ...githubPagesConfig,
};

export default nextConfig;
