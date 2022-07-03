import mongoose from "mongoose";

//mongodb://localhost/collegedb
mongoose.connect("mongodb://mongo:Yi8APvNYTR55vpF3VrbQ@containers-us-west-66.railway.app:8077",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(db => console.log('DB id connected'))
    .catch(error => console.log('error'))