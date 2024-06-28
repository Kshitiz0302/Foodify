const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000;


global.foodData = require('./db')(function call(err, data, CatData) {
  if (err) console.log(err);
  global.foodData = data;
  global.food_Category = CatData;
});

const corsOptions = {
  origin: 'https://foodify-frontend.onrender.com', // frontend URL
  optionsSuccessStatus: 200, // Some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.get('/hi', (req, res) => {
  res.send('Hi!!!! ');
})
app.use('/api/auth', require('./Routes/Auth'));

// Start the server
app.listen(port, () => {
  console.log(`Example app listening on https://foodify-backend-4l21.onrender.com/`);
});


