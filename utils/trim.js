const fs = require('fs');
var lineReader = require('line-reader');

var eachLine = function (filename, options, iteratee) {
    return new Promise(function (resolve, reject) {
        lineReader.eachLine(filename, options, iteratee, function (err) {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    });
};

let str = '';
eachLine('math_3.txt', function (line, done) {
    if (line.trim() != '') {
        str += line + '\r\n';
    }
    if (done) {
        fs.writeFileSync('./math_3.txt', str);
    }
}).then(function () {
    console.log('done');
}).catch(function (err) {
    console.error(err);
});
