//console.log('hello world');

const express = require('express')
const app = express()
const port = 1206

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))



var gsjson = require('google-spreadsheet-to-json');





gsjson({
        spreadsheetId: '1omktI230oCNJiY1_ckgyiqFxbs-_uRpWWoagOjJBKMM',
        // other options...
    })
    .then(function(result) {
        console.log(result.length);
        console.log(result);
    })
    .catch(function(err) {
        console.log(err.message);
        console.log(err.stack);
    });

app.get('/json', (req, res) => {
    
    gsjson({
        spreadsheetId: '1omktI230oCNJiY1_ckgyiqFxbs-_uRpWWoagOjJBKMM',
        // other options...
    })
    .then(function(result) {
        console.log(result.length);
        console.log(result);
        res.send(result)
    })
    .catch(function(err) {
        console.log(err.message);
        console.log(err.stack);
    });
})