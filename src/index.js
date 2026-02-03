const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello from project-alpha! Created via Backstage.');
});

app.listen(port, () => {
    console.log(`Service listening at http://localhost:${port}`);
});