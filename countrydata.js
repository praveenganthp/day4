var req = new XMLHttpRequest();
//new will create an Object with specific class
//What is Rest Countries APi - documentatio n
req.open('GET','https://restcountries.com/v3.1/all',true);
//When you are retriving the data if server is busy so it delays or because of any exception codnition so in that case we need true so that it should not the execution of 
//this code or other code // optional parameter as it generally always work
//Step 3 Initiate a connection
req.send();

//if data is there in server : http:200
//onload is an event  // this data will work once the data has been loaded into the server

//once the data is received , we need to convert the data

//WHy we need to convert the data?
//What is the use of it?
//Once the data is returned from server it would be in format of string , so we need to ocnver string to array of Object


req.onload = function(){
var result = JSON.parse(req.response);
for(let i = 0 ; i< result.length ; i++){
    console.log(result[i].name);
 
    console.log(result[i].capital)
    console.log(result[i].flags)
}
}


/*
var arr = [1, 2 , 3 ,4];

for (variable of object){
    console.log(variable)
}

for(var i of arr){
    console.log(i)
}

var obj = {
    name : "guvi",
    age : 23,
}
for(var i of obj){
    console.log()
}

for in: key - value
for of : object srructure would not work
*/