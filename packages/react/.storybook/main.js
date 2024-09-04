import { dirname, join } from "path";
module.exports = {
    stories: ['../src/**/*.stories.tsx'],
    addons: [
        getAbsolutePath("@storybook/preset-typescript"),
        "@storybook/addon-webpack5-compiler-babel",
        "@chromatic-com/storybook", "@storybook/addon-controls"

    ],

    framework: {
        name: getAbsolutePath("@storybook/react-webpack5"),
        options: {}
    },

    docs: {
        autodocs: true
    },

    typescript: {
        reactDocgen: "react-docgen-typescript"
    }
}

function getAbsolutePath(value) {
    return dirname(require.resolve(join(value, "package.json")));
}