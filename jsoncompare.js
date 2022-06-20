// create first object
var obj1={name1 : "praveen" , age : 5};

// create second object
var obj2={ age : 5 , name1 : "praveen" };

// convert object values to JSON value
let jsonObj1=JSON.stringify(obj1)
console.log(jsonObj1);

let jsonObj2 = JSON.stringify(obj2)
console.log(jsonObj2)

//console.log(_.isEqualto(jsonObj1 , jsonObj2))
//return true;

if(jsonObj1===jsonObj2){
    console.log("true");
}else{
    console.log("false")
}