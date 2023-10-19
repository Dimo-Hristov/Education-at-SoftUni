const express = require('express');
const path = require('path');
const handlebars = require('express-handlebars');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const { auth } = require('./middlewares/authMiddleare')



const { PORT, DB_URL } = require('./constants');
const routes = require('./router');


const app = express();

// Express configurations
app.use(express.static(path.resolve(__dirname, './public')));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(auth)

// Handlebars configuration
app.engine('hbs', handlebars.engine({ extname: 'hbs' }));
app.set('view engine', 'hbs');
app.set('views', 'src/views');

// Database connection
async function dbConnect() {
    await mongoose.connect(DB_URL);
}

dbConnect()
    .then(() => console.log('Database connected'))
    .catch(err => console.log('Error while connecting to database'))

// Routes
app.use(routes)

app.listen(PORT, () => console.log(`Server connected at port ${PORT}...`));