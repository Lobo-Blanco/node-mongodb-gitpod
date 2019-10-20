const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://nacor:nacor@cluster0-k34mt.mongodb.net/test?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("DB is connected"))
    .catch(e => console.log(e));