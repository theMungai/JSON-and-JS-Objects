

// Create a literal object
const userDetails = {
    name : "Charlie Pele",
    gender : "Male",
    Residence : {
        country : "United States",
        state : "California",
    },
    age :  24,
    email : "charlie.pele@gmail.com",
    fun : function function1(){
        console.log("Function inside an object is called a method")
    }
}
console.log(userDetails)

// Convert JS Object to JSON
const JSONfile = JSON.stringify(userDetails);
console.log(JSONfile)

// convert JSON to object we use JSON.parse()
const convertedJSON = JSON.parse(JSONfile);
console.log(convertedJSON)
