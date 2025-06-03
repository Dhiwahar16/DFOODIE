const mongoose = require('mongoose');

const deliverySchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, required: true },
  pincode: { type: String, required: true },
  mobile: { type: String, required: true },

  cartItems: [{
    itemName: String,
    quantity: Number,
    itemPrice: Number
  }]
}, { timestamps: true });


const Delivery = mongoose.model('Delivery', deliverySchema);

module.exports = Delivery;
