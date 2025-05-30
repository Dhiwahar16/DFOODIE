const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const loginRouter = require('./routes/login.routes.js');
const deliveryRouter = require('./routes/delivery.routes.js'); // Import delivery routes

const Login = require('./models/login.models.js');

const PORT = process.env.PORT || 9000;

const app = express();

// Middleware to parse JSON and URL-encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Routes
app.use('/signup', loginRouter);
app.use('/delivery', deliveryRouter); 

// Homepage
app.get('/', (req, res) => {
  res.send("Homepage Of Website");
});

// Login 
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await Login.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Email not found, please sign up!" });
    }
    if (password !== user.password) {
      return res.status(401).json({ message: "Invalid password" });
    }
    return res.status(200).json({ message: "Login successful" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

mongoose.connect("mongodb://localhost:27017/", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("Connected to database");
  app.listen(PORT, () => {
    console.log(`Server is running on PORT : ${PORT}`);
  });
})
.catch((error) => {
  console.log("Not connected to database:", error.message);
});
