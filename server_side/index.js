const app = require('express')();
const cors = require('cors');
const pizzaModel = require('./models/pizza.model');
const db = require('./db');

app.use(cors());

app.get('/', (_req, res) => {
    res.send("Server listening");
});

app.get('/getPizzas', (_req, res) => {
    pizzaModel.find({}, (err, docs) => {
        if (err) {
            console.log(error);
        }
        else {
            res.send(docs)
        }
    })
})

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});