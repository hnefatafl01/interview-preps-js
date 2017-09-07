const fs = require('fs');
const path = require('path');
const dir = '/Users/Hnefatafl/workspace/angular4-apps';
// search directories for .js files
// base case 
// termination case
// recursive case
// search files for string const
function walk(locationPath) {
    var files = fs.readdirSync(locationPath); 
    for (let i = 0; i < files.length; i++) {
        var filename = files[i];
        var newPath = path.join(locationPath, filename);
        var stats = fs.lstatSync(newPath);
        if (stats.isDirectory()) {
            console.log(newPath);
            walk(newPath);
        } else if (stats.isFile()) {
            const jsFile = newPath.endsWith('.js')
            if (jsFile) {
                var jsfile = fs.readFileSync(newPath, 'utf-8');
                if (jsfile.indexOf('const') >= 0) {
                    console.log("const found");
                }
            }
        } else {
            console.log('closed');
        }
    }
}

walk(dir);