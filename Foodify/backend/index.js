
global.foodData = require('./db')(function call(err, data, CatData) {
  // console.log(data)
  // console.log(CatData);
  // console.log("Yes");
  if(err) console.log(err);
  global.foodData = data;
  global.food_Category = CatData;
})

const express = require('express')
const app = express()
const port = 5000
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "https://foodify-frontend.onrender.com/");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
}); 
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/auth', require('./Routes/Auth'));

app.listen(port, () => {
  console.log(`Example app listening on https://foodify-backend-4l21.onrender.com/`)
})

