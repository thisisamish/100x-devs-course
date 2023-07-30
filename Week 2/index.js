const express = require("express");
const app = express();
const port = 8000;

function calculateSum(count) {
    let sum = 0;
    while (count) {
        sum += count--;
    }
    return sum;
}

app.get('/:username', (req, res) => {
    console.log(req);
    res.send("Hello, world!");
})

app.listen(port, () => {
    console.log(`Listening on port ${port}...`)
})