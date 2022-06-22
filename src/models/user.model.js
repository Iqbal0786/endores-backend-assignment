const mongoose= require("mongoose")

// {
//     "_id" : 456,
//     "basic" : {
//             "address" : {
//                 "line2" : "37, Vrindavan Colony",
//                 "city" : "Sonbhadra",
//                 "district" : "Sonbhadra",
//                 "state" : "Uttar Pradesh",
//                 "line1" : "Sector 6A Sonbhadra",
//                 "country" : "India"
//             },
//             "employer" : "",
//             "altMobileNumber" : "",
//             "identityType" : [
//                 "Aadhaar"
//             ],
//             "source" : "Agent",
//             "dob" : "1986-03-03T07:52:43.767Z",
//             "gender" : "Male",
//             "educationalQualification" : "Post-graduate",
//             "specializationOfEducation" : "Commerce",
//             "religion" : "Hinduism",
//             "category" : "General",
//             "pwd" : "",
//             "employmentStatus" : "Unemployed",
//             "currentAnnualIncome" : "Under INR 25000",
//             "experience" : "9 yrs",
//             "mobileNumber" : "894xx508xx",
//             "name" : "Abhijeet Roy",
//             "phase" : "Start-up",
//             "pincode" : 231219
//         }
//     }
    

const userSchema= new mongoose.Schema({
    _id : {type:Number, rquired:true},
    basic : {
            address : {
                line2 :{type:String, required:true},
                city : {type:String, required:true},
                district : {type:String, required:true},
                state : {type:String, required:true},
                line1 : {type:String, required:true},
                country : {type:String, required:true}
            },
            employer :{type:String, required:false},
            altMobileNumber :{type:String, required:false},
            identityType : [
                {type:String,required:true}
            ],
            source : {type:String,required:true},
            dob :  {type:String,required:true},
            gender :  {type:String,required:true},
            educationalQualification :  {type:String,required:true},
            specializationOfEducation :  {type:String,required:true},
            religion :  {type:String,required:true},
            category :  {type:String,required:true},
            pwd :  {type:String,required:false},
            employmentStatus :  {type:String,required:true},
            currentAnnualIncome :  {type:String,required:true},
            experience :  {type:String,required:true},
            mobileNumber : {type:String,required:true},
            name : {type:String,required:true},
            phase : {type:String,required:true},
            pincode : {type:Number,required:true}
        }
    }
    ,{
    versionKey:false,
    timestamps:true
})

module.exports= mongoose.model("users",userSchema)