const express = require('express');
const cors = require('cors');

const app = express();

var corOptions = {
    origin: 'https://localhost:8081'
};


// Middleware
app.use(cors(corOptions));

app.use(express.json());

app.use(express.urlencoded({
    extended: true
}));

// Routers
const router = require('./routes/productRouter.js')
app.use('/api/products', router)

// Testing API
app.get('/', (req, res) => {
    res.json({
        message: 'Hello From API!'
    });
});

// Port
const PORT = process.env.PORT || 8080

// Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});
 