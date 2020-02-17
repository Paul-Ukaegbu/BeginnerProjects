var name = "Bruce";
if (name != "Bruce") {    
    console.log("What's your name?");
} else {    
    console.log("Hello, Bruce!");
}
//This will print "Hello Bruce!"

var num1 = 10;
if(num1 == 20){
    console.log("Num is 20");
}
else{
    console.log("Adding 5");
    num1 = num1 + 5;
}
if(num1 == 15){
    console.log("Adding another 5")
    num1 = num1 + 5;
} 
else if(num1 == 20) {
    console.log("Now it is 20");
}

//Variable is 10. Conditions--> if variable is 20 print 
//"Num is 20" if not keep adding five until it is 20. 
//once you reach 20 print "Now it is 20"