const express = require('express');
const router = express.Router();
const app = express();

const five = require('johnny-five');
const board = new five.Board({ port: 'COM3' });

board.on("ready", () => {
    console.log('Ready');

    let led, temperature;

    led = new five.Led(13);
    temperature = new five.Thermometer({
        controller: "LM35",
        pin: "A0"
    });

    const config = { router, led, temperature };

    app.use('/led', require('./src/led')(config));
    app.use('/temperatura', require('./src/thermometer')(config));
});

app.get('/status', (req, res) => res.send('OK'));
app.listen(3000, () => console.log('Listening http://localhost:3000'));
