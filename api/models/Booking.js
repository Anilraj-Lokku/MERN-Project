// Importing the mongoose library
const mongoose = require("mongoose");

// Defining a mongoose schema for the booking model
const bookingSchema = new mongoose.Schema({
  // Defining a field for the place, referencing the Place model
  place: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "Place" },
  // Defining a field for the user
  user: { type: mongoose.Schema.Types.ObjectId, required: true },
  // Defining a field for the check-in date
  checkIn: { type: Date, required: true },
  // Defining a field for the check-out date
  checkOut: { type: Date, required: true },
  // Defining a field for the name of the person making the booking
  name: { type: String, required: true },
  // Defining a field for the phone number of the person making the booking
  phone: { type: String, required: true },
  // Defining a field for the price of the booking
  price: Number,
});

// Creating a mongoose model based on the booking schema
const BookingModel = mongoose.model("Booking", bookingSchema);

// Exporting the booking model for use in other parts of the application
module.exports = BookingModel;
