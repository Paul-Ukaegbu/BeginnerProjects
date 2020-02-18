var name = "Bob";
var isRaining = true;
var hasPet = false;
var job = "Web Developer";
var cash = 100;

if(isRaining == true){
console.log("It is raining and I need a coat, ");
cash = cash - 50
console.log ("but it's going to me cost $" + cash)
}
else
    console.log("I don't need a coat");

//First request done

if(name != "Bob"){
    console.log("Hello Stranger");
}

else{
    console.log("Hello Bob I see you're a " + job);
}

//second request done
if (job == "Web Developer"){
    console.log ("Keep up the good work!");
    cash = cash + 500
    console.log("I see you are a web developer, but I would actually like to make you a senior web developer!");
    job = "Senior Web Developer"
}
else {
    console.log("Quit your job and become a software developer!");
}

//Third request done
if (hasPet != true){
    hasPet = true
    cash = cash - 1500
}
 //fourth request done

if (cash > 1000){
    console.log("Vacation time!");
    cash = cash - 1200
}

//fifth request done

console.log("Payday!")

cash = cash + 2000

console.log("Your name is " + name + ". You have a coat right? " + isRaining + 
". You have pets? " + hasPet + ". You are now a " + job + ", and money in the bank has increased to $" + 
cash + ".");