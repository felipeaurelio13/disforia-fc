function getGithubPagesConfig(env) {
  const isGithubActions = env.GITHUB_ACTIONS === 'true';
  const repository = env.GITHUB_REPOSITORY ?? '';
  const repoName = repository.split('/')[1] ?? '';
  const hasCustomDomain = !!env.CUSTOM_DOMAIN;

  if (!isGithubActions || !repoName || hasCustomDomain) {
    return {
      basePath: '',
      assetPrefix: '',
    };
  }

  const prefix = `/${repoName}`;

  return {
    basePath: prefix,
    assetPrefix: `${prefix}/`,
  };
}

module.exports = {
  getGithubPagesConfig,
};
