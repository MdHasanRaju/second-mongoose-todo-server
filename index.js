const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 9000;
const app = express();
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const blogRoutes = require('./routers/blogRoutes')

mongoose.connect('mongodb://localhost:27017/blogs',
{useNewUrlParser:true},
() => {
    console.log('database connected successfully');
})

app.use('/api/blogs', blogRoutes);

app.get('/', (req, res) => {
    res.json("Hello world!")
}) 

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)
})
