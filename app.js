//jshint esversion:6

const mongoose = require('mongoose');

// Connection URL
mongoose.connect("mongodb://localhost:27017/peopleDB", {
  useNewUrlParser: true
});

// Create a schema with validation.
const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please check your data entry. No name specified!"]
  },
  age: {
    type: Number,
    min: 1,
    max: 120
  },
});

// Create a model
const Person = mongoose.model("Person", personSchema);

// Add a single entry to the DB.
const person = new Person({
  name: "John",
  rating: 37,
});

//Comment out the following line when you launch the app.js for second time or it will insert the data again.
person.save();

// Add multiple entries to the DB.
const person2 = new Person({
  name: "Victoria",
  age: 31
});

const person3 = new Person({
  name: "Diana",
  age: 25
});

const person4 = new Person({
  name: "Mark",
  age: 45
});

//Comment out the following lines when you launch the app.js for second time or it will insert the data again.
Person.insertMany([person2, person3, person4], function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Succesfully saved all the people to peopleDB.");
  }
});

//Read from the database. Return an array of js objects.
Person.find(function(err, people) {
  if (err) {
    console.log(err);
  } else {

    mongoose.connection.close(); // CLose the connection

    console.log(people);
  }
});

//Read from the database. Return only the names.
Person.find(function(err, people) {
  if (err) {
    console.log(err);
  } else {
    people.forEach(function(person) {
      console.log(person.name);
    });
  }
});

// Update document. Specify the id.
// Person.updateOne({_id: ""}, {age: 34}, function(err) {
//   if(err){
//     console.log(err);
//   } else {
//     console.log("Succesfully updated the document.");
//   }
// });

// Delete document.
// Person.deleteOne({name: "John"}, function(err) {
//   if(err){
//     console.log(err);
//   } else {
//     console.log("Succesfully deleted the document.");
//   }
// });

// Delete all documents.
// Person.deleteMany({name: "John"}, function(err) {
//   if(err){
//     console.log(err);
//   } else {
//     console.log("Succesfully deleted all the documents.");
//   }
// });
