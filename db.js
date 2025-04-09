var mongoose = require("mongoose")
mongoose.connect("mongodb+srv://anajajayan777:anajajayan@cluster0.bwxe3s8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("CONNECTED TO DB")
})
.catch((err)=>{console.log(err)})