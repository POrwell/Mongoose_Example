//Make sure to require your model so you can connect to the DB
//This line of code connects to the Database
const {Schema, model} = require("./db");

//Iteration 2:
//create a user as an object
const vikingSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    familyName: {
        type: String,
        required: true
    },
    strength: Number,
    weapon: String
})

const vikingModel = model("viking", vikingSchema);

model.exports = vikingModel;

//Iteration 3:
//Insert the new user that you created into the Database
//Note: Make sure to close your DB connection afterwards

//Iteration 4:
//Find the user that you created and update their name to something new
