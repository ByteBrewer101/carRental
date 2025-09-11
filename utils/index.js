const z = require("zod")


const userSchema = z.object({
    username : z.string(),
    email : z.email().min(2,"error 1"),
    password : z.string().min(8,"must be atleast 8 char long")
})


const sampleUser = {
    username :"palak",
    email :"palak@gmail.com",
    password :"pas"
}


const result = userSchema.safeParse(sampleUser)

console.log(result.error.errors);
console.log(typeof(result.error.errors));
if(!result.success){
    console.log("there is some error ", result.error.message);
}else {
    console.log("code is running fine");
}

