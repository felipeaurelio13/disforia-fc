describe('withBasePath', () => {
  const original = process.env.NEXT_PUBLIC_BASE_PATH;

  afterEach(() => {
    jest.resetModules();
    process.env.NEXT_PUBLIC_BASE_PATH = original;
  });

  it('returns same root src when base path is empty', async () => {
    process.env.NEXT_PUBLIC_BASE_PATH = '';
    const { withBasePath } = await import('@/lib/assets');
    expect(withBasePath('/images/disforia-logo.svg')).toBe('/images/disforia-logo.svg');
  });

  it('prefixes local paths with basePath', async () => {
    process.env.NEXT_PUBLIC_BASE_PATH = '/disforia-fc';
    const { withBasePath } = await import('@/lib/assets');
    expect(withBasePath('/images/disforia-logo.svg')).toBe('/disforia-fc/images/disforia-logo.svg');
    expect(withBasePath('images/chris-erlandsen.svg')).toBe('/disforia-fc/images/chris-erlandsen.svg');
  });

  it('does not alter external URLs', async () => {
    process.env.NEXT_PUBLIC_BASE_PATH = '/disforia-fc';
    const { withBasePath } = await import('@/lib/assets');
    expect(withBasePath('https://example.com/image.png')).toBe('https://example.com/image.png');
  });
});
