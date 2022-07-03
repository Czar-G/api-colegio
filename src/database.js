import mongoose from "mongoose";

mongoose.connect("mongodb://localhost/collegedb",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(db => console.log('DB id connected'))
    .catch(error => console.log('error'))