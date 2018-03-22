module.exports = (config) => {

    const { router, temperature } = config;

    router.get('/', (req, res) => {
        res.json({ temperatura: 111 });
    });

    router.post('/', (req, res) => {
        temperature.on("change", () => {
            console.log(temperature.celsius + "°C", temperature.fahrenheit + "°F");
        });
        res.send('Thermometer');
    });

    return router;
};