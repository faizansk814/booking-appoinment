const mongoose = require("mongoose")
const BlaclistSchemaSchema = mongoose.Schema({
   token:String
})
const BlacklistModel=mongoose.model("Blacklist",BlaclistSchemaSchema)

module.exports={BlacklistModel}