const express = require("express")
const cors = require("cors")
require("dotenv").config()
const port = process.env.PORT
const { BookingRoute } = require("./routes/Booking")
const { DataBase } = require("./DBconnection")
const { Payment } = require("./routes/payment")
const userrouter = require("./routes/user.router")
const doctorroute = require("./routes/doctor.route")
const auth = require("./middleware/auth")
const app = express()
const bodyParser = require('body-parser');
app.use(express.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/user", userrouter)
app.use("/doctor", doctorroute)
app.use("/appointment", BookingRoute)
app.use("/petcare", Payment)



app.listen(port, () => {
    try {
        DataBase()
        console.log(`Server is running on port${port}`)
    } catch (error) {
        console.error(error)
    }

})


