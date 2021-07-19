const { response } = require('express');
const express = require('express');
const app = express();

const authRoute = require('./routes/auth');



app.use('/api/user', authRoute);


app.listen(3000, () => console.log('Server up and running at http://127.0.0.1:3000'));


