import { defineConfig } from 'tsup';

export default defineConfig((options) => {
    return {
        entry: ['src/index.ts'],
        splitting: false,
        outDir: 'dist',
        format: ['esm', 'cjs'],
        sourcemap: !!options.watch,
        clean: true,
        minify: !options.watch,
    }
})