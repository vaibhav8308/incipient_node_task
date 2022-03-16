const express = require("express")
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/create");
const userRoute = require("./routes/users");


var cors = require('cors');

dotenv.config();

app.use(cors());
app.use(express.json())


mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,


}).then(console.log("connected to Database Successfully")).catch((err) => console.log(err))



app.use("/backend/auth", authRoute);
app.use("/backend/users", userRoute);


app.listen("5000", () => {
    console.log("server is running.")

})