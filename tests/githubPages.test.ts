const { getGithubPagesConfig } = require('@/lib/githubPages');

describe('getGithubPagesConfig', () => {
  it('returns empty prefixes outside GitHub Actions', () => {
    const config = getGithubPagesConfig({
      GITHUB_ACTIONS: 'false',
      GITHUB_REPOSITORY: 'owner/disforia-fc',
    });

    expect(config).toEqual({
      basePath: '',
      assetPrefix: '',
    });
  });

  it('returns repo-based prefixes on GitHub Actions', () => {
    const config = getGithubPagesConfig({
      GITHUB_ACTIONS: 'true',
      GITHUB_REPOSITORY: 'owner/disforia-fc',
    });

    expect(config).toEqual({
      basePath: '/disforia-fc',
      assetPrefix: '/disforia-fc/',
    });
  });

  it('returns empty prefixes when repository is unavailable', () => {
    const config = getGithubPagesConfig({
      GITHUB_ACTIONS: 'true',
    });

    expect(config).toEqual({
      basePath: '',
      assetPrefix: '',
    });
  });
});
