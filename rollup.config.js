import { createPlugins, createConfig } from 'rollup-plugin-atomic'

const plugins = createPlugins(['ts', 'js'], false) // babel is false

const config = createConfig(
	'src/main.ts',
	'dist',
	'cjs',
	['atom'],
	plugins)

export default config
