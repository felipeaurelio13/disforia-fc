import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();

describe('brand palette alignment', () => {
  it('keeps official palette tokens in globals.css', () => {
    const globalsCss = readFileSync(join(root, 'app/globals.css'), 'utf8');

    expect(globalsCss).toContain('--color-sky: #89c2e3;');
    expect(globalsCss).toContain('--color-magenta: #bd2b71;');
    expect(globalsCss).toContain('--color-lavender: #835ca3;');
    expect(globalsCss).toContain('--color-offwhite: #ffffff;');
    expect(globalsCss).toContain('--color-charcoal: #000000;');
  });

  it('keeps official palette entries in tailwind theme', () => {
    const tailwindConfig = readFileSync(join(root, 'tailwind.config.ts'), 'utf8');

    expect(tailwindConfig).toContain("primary: '#BD2B71'");
    expect(tailwindConfig).toContain("secondary: '#835CA3'");
    expect(tailwindConfig).toContain("accent: '#89C2E3'");
    expect(tailwindConfig).toContain("bg: '#FFFFFF'");
    expect(tailwindConfig).toContain("text: '#000000'");
  });
});
