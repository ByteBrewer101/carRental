const { default: mongoose } = require("mongoose");

async function dbConnect(URI){
    const connection = await mongoose.connect()

    if(connection){
        console.log("DB Connected");
    }
}

module.exports={
    dbConnect
}