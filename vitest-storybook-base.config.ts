/// <reference types="vitest/config" />
import { defineConfig, Plugin } from 'vite';

// https://vite.dev/config/
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';

const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

function angularInMemoryExport(): Plugin {
  return {
    name: 'angular-storybook-in-memory-export',
    enforce: 'pre',
    transform(code: string) {
      if (code.includes('.ts.js')) {
        // For compiled files, re-export all the chunk imports
        const result = code.replaceAll('import "', 'export * from "');

        return {
          code: result
        };
      }

      return;
    }
  }
}

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  optimizeDeps: {
    include: ['rxjs', 'rxjs/operators']
  },
	plugins: [
    angularInMemoryExport(),
		// The plugin will run tests for the stories defined in your Storybook config
		storybookTest({
			configDir: path.join(dirname, '.storybook')
		})
  ],
});
