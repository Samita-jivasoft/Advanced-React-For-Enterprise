const Fs = require('fs');
const Path = require('path');
const Sass = require('sass');

const outputDir = Path.resolve('src/lib');
const outputFile = Path.join(outputDir, 'global.css');

// Ensure the output directory exists
if (!Fs.existsSync(outputDir)) {
    Fs.mkdirSync(outputDir, { recursive: true });
}

const result = Sass.renderSync({
    file: Path.resolve('src/global.scss'),
    outputStyle: 'expanded',
    includePaths: [Path.resolve('src')]
});

console.log(result.css.toString())
Fs.writeFileSync(outputFile, result.css.toString());

