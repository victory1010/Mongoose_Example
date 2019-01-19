//jshint esversion:6

const mongoose = require('mongoose');

// Connection URL
mongoose.connect("mongodb://localhost:27017/peopleDB", { useNewUrlParser: true });

// Create schema
const personSchema = new mongoose.Schema ({
  name: String,
  age: Number
});

// Create model
const Person = mongoose.model("Person", personSchema);

// Add a single entry to the DB.
const person = new Person ({
  name: "John",
  rating: 37,
});

person.save();

// Add multiple entries to the DB.
const person2 = new Person ({
  name: Victoria,
  age: 31
});

const person3 = new Person ({
  name: Diana,
  age: 25
});

const person4 = new Person ({
  name: Mark,
  age: 45
});

Person.insertMany([person2, person3, person4], function(err){
  if(err) {
    console.log(err);
  } else {
    console.log("Succesfully saved all the people to peopleDB.");
  }
});
