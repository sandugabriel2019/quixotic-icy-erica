const express = require("express");
const app = express();

app.get('/', (req, res) => {
    res.send('Hello Worldy!');
});

const port = process.env.port || 3456;

app.listen(port, () => console.log(`Listening on port ${port} ...`));