const mongoose = require("mongoose");
require("dotenv").config()
const DataBase = async () => {
    await mongoose.connect(process.env.databaseurl)
    console.log("connected to DataBase");
}
  
  
  module.exports={DataBase}
