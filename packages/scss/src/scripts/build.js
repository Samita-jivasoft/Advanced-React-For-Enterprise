const Fs = require('fs');
const Path = require('path');
const Sass = require('sass'); // Changed from 'node-sass' to 'sass'

// Function to get all component SCSS files
const getComponents = () => {
    let allComponents = [];

    const types = ['atoms', 'molecules', 'organisms']; //Which folder we are going into

    types.forEach(type => {
        const allFiles = Fs.readdirSync(`src/${type}`).map(file => ({
            input: `src/${type}/${file}`,
            output: `lib/${file.slice(0, -4) + 'css'}` 
        })); //Read the src/type and it gives the array of all files found

        allComponents = [
            ...allComponents,
            ...allFiles
        ]; 
    });

    return allComponents;
};

console.log(getComponents())
// Function to compile SCSS to CSS
const compile = (path, fileName) => {
    const result = Sass.renderSync({
        file: Path.resolve(path), // Changed 'data' to 'file' for compiling a file directly
        outputStyle: 'expanded',
        includePaths: [Path.resolve('src')]
    });

    Fs.writeFileSync(
        Path.resolve(fileName),
        result.css.toString()
    );    
};
try{
    Fs.mkdirSync(Path.resolve('lib'))
} catch(e){}

// Compile global SCSS file
compile('src/global.scss', 'lib/global.css');

// Compile each component SCSS file
getComponents().forEach(component => {
    compile(component.input, component.output);
});
