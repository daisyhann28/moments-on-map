const e = require("express");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const pinRoute = require("./routes/pins");
const userRoute = require("./routes/users");

app.use(express.json());
mongoose.connect(process.env.MONGO_URL, 
    {useNewUrlParser:true, useUnifiedTopology:true})
    .then(()=>{
        console.log("mongoDB connected");
    })
    .catch((err)=>console.log(err));

    app.use("/api/pins", pinRoute);
    app.use("/api/users", userRoute);

app.listen(process.env.PORT || 8080, ()=>{
    console.log("listening");
})