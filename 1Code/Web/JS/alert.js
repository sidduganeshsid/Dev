// alert("Hello");

var name = "Siddu Ganesh";
var lastName = "Musa";
console.log(name.length);

console.log(name.slice(0,5));

console.log(name.toUpperCase());
console.log(name);
console.log(name.toLowerCase());

console.log(name.slice(0,name.charAt("")));

var email = "sidduganeshm@gmail.com";
console.log(email.charAt('@'));
console.log(email.slice(0,email.indexOf("@")));


// humanAge = (dogAge -2)*4+21;

function hello(){
    console.log("say Hello");
}

hello();

console.log(Math.floor(1.7));

function lifeInWeeks(age) {
    
    /************Don't change the code above************/    
        
        //Write your code here.
        var remainingYears = 90 - age;
        var days = remainingYears * 365;
        var weeks = remainingYears * 52;
        var months = remainingYears * 12;
        
        console.log("You have "+days+" days, "+weeks+" weeks, and "+months+" months left.")
        
        
    /*************Don't change the code below**********/
    }
    
lifeInWeeks(23)


// bmi = kg/m2

var weight = 43;
var height = 1.65;

var bmi = weight/ Math.pow(height, 2);
console.log("bmi is "+Math.floor(bmi));

console.log("random number in fractional : "+Math.floor(Math.random()*10+1));

console.log("Dice :: "+Math.floor(Math.random()*6+1));

function whosPaying(names) {
    
    /******Don't change the code above*******/
        
        //Write your code here.
    var numberOfPeople = names.length;
    var randomPerson = Math.floor(Math.random()*numberOfPeople);
    var randomPosition = names[randomPerson];
    
    return randomPosition+" is going to buy lunch today!";
        
    /******Don't change the code below*******/    
    }
var names = ["ravi","raj","ram"]
console.log( whosPaying(names) );

    function fibonacciGenerator (n) {
        //Do NOT change any of the code above 👆
            
            //Write your code here:f
            var output = [];
            if(n===1){
                output = [0];
            }
            else if(n===2){
                output = [0,1];
            }
            else{
                output = [0,1];
                
                for(var i =2;i<n;i++){
                    output.push(output[output.length-2]+output[output.length-1]);
                    output[output.length - 1];
                }
            }
            return output;
            
            //Return an array of fibonacci numbers starting from 0.
            
        //Do NOT change any of the code below 👇
        }
        
        