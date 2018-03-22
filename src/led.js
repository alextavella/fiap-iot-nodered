module.exports = (config) => {

    const { router, led } = config;

    router.post('/on', (req, res) => {
        if (led) led.on();
        res.send('Led Ligado!');
    });

    router.post('/off', (req, res) => {
        if (led) led.off();
        res.send('Led Desligado!');
    });

    router.post('/blink', (req, res) => {
        if (led) led.blink(500);
        res.send('Led Piscando!');
    });

    return router;
};
