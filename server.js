const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./dist/salt'));

app.get('/*', (req, res) => {
    res.sendFile('index.html', { root: 'dist/salt/' })
});

app.listen(process.env.PORT || 8000);