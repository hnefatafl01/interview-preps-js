const fs = require('fs');

fs.readdir('/Users/Hnefatafl/workspace', 'utf-8', (err, files) => {
    if (err) {
        console.log(err);
    } else {
        console.log(files);
    }
});