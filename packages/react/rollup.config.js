import Ts from 'rollup-plugin-typescript2';

export default {
    input: [
        'src/index.ts',
        'src/atoms/Color/index.ts',
        'src/atoms/Margin/index.ts',
    ],
    output: {
        dir: 'lib',
        format: 'esm',
        sourcemap: true,
        preserveModules: true,  
        preserveModulesRoot: 'src',  
    },
    plugins: [Ts()],
    external: ['react', '@advanced-react-for-enterprise/foundation']
};
