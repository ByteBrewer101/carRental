const { default: mongoose } = require("mongoose");

async function dbConnect(URI){
    const connection = await mongoose.connect(URI)

    if(connection){
        console.log("DB Connected");
    }
}

module.exports={
    dbConnect
}