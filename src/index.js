const express= require("express")
const cors= require("cors")
const connect= require("./config/db")
const app= express()
app.use(express.json())
app.use(cors())








app.listen(process.env.PORT || 8888 , async ()=>{
        try {
           await connect()  
           console.log("listening port number 8888")
          
        } catch (error) {
            console.log(error.message)
        }
})