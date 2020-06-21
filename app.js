// CHAPTER 21-25

// TASK 1

// var name = prompt("Enter first name");
// var lastName = prompt("Enter Last Name");
// var fullName = name + lastName;
// alert("Welcome " + fullName)


// TASK 2

// var model = prompt("Enter your  favorite mobile phone model");
// var len = model.length;
// document.write("My favoutite Phone is " + model + "<br> Length of string "+ len)


// TASK 3

//  var country = "Pakistan";
//  var index = country.indexOf("n");
//  document.write("String : " + country + "<br> Index of ' n '  : " + index)


// TASK 4

// var  a = "Hello World";
// var index = a.lastIndexOf("l")
// document.write("String : " + a + "<br> Last Index of ' l '  : " + index)


// Task 5

// var country = "Pakistan";
// var index = country.charAt(3);
// document.write("String : " + country + "<br>  Character at index 3  : " + index)


// TASK 6


//  var name = prompt("Enter first name");
//  var lastName = prompt("Enter Last Name");
//  var fullName =  name.concat(lastName);
//  alert("Welcome " + fullName)


// TASK 7

// var city = "Hyderabad";
// var city2 = "Islam";
// var rep = city.replace("Hyder",city2);
// document.write("city : " + city + "<br> After replacement : " + rep)


// TASK 8

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var rep = message.replace(/and/g , "&");
// document.write(rep) ;


// TASK 9

// var str = "472";
// var num = parseInt(str);
// document.write(" Value " + str + "<br> Type : String" + "<br> Value : " + num + "<br> Type : Number")


// TASk 10

// var name = prompt("Enter your name");
// document.write(name );
// name = name.toUpperCase();
// document.write("<br> " + name);


// TASK 11

// var word = prompt("Enter any word");
// var firstChar = word.slice(0,1);
// firstChar = firstChar.toUpperCase();
// var otherChar = word.slice(1);
// otherChar = otherChar.toLowerCase();
// document.write("User Input : " + word + " <br> Title Case : " + firstChar+otherChar);



// TASK 12

// var num = Number(35.36);
// var str = num.toString();
// var str = "3536"
// document.write("Number : " + num + "<br> Result : " +str )



// TASK 13
 
// var name = prompt("enter username");
// for (var i = 0; i < name.length ; i++ ){
//     if (name[i].charCodeAt(0) === 33 || name[i].charCodeAt(0) === 44 || name[i].charCodeAt(0) === 46 || name[i].charCodeAt(0) === 64){
//        alert("Please Enter A Valid Username")
//     }
// }


// TASK 14


// var items = ["cake"  ,"apple pie" , "cookie" , "chips" , "patties"];
// var order = prompt("Welcome to ABC bakery! What do you want to order sir/ma'am").toLowerCase();
// var a = items.indexOf(order);

// if(items.indexOf(order) !== -1 ){
//     alert(order +" is availabe at index " + a + " in out bakery" )
// }
// else{
//     alert("We are Sorry " + order + " is not avilable in our bakey")
// }



// TASK 15

// var password = prompt("Enter your Password");
 
// if(password.match(/[^0-9a-z]/i)){
//     alert("Only letters and digits allowed!");}
// else if(!password.match(/\d/)){
//     alert("At least one digit required!");}
// else if(!password.match(/[a-z]/i)){
//     alert("At least one letter required!");}

// if (password.charAt(0)>=48 || password.charAt(0)<=57 ){
//     alert("Password should not start with a number")
// }
// if (password.length < 6){
//     alert("password  must be at least 6 characters long")
// }


// TASK 16

// var uni = "Universirty Of Karachi";
// var spl = uni.split("");

// for (var i = 0;  i <  spl.length; i++){
//     document.write(spl[i] + "<br>")
// }

// TASK 17

// var char = prompt("enter a word");
// var lastchar =  char.charAt(char.length-1)
// document.write("User input " + char + "<br> Last character " + lastchar)

// TASK 19

// var eg = "the quick brown fox jumps over the lazy dog";
// var count = 0;
// for (var i = 0; i<eg.length; i++ ){
//     if (eg.slice(i, i+3)==="the"){
//         ++count
       
//     }
// }
// document.write( "Text : "+ eg + "<br> Occourences of the word 'the' : " + count)






// CHAPTER 26 - 30

// TASK 1

// var num = prompt(Number("enter a number"));
// var round = Math.round(num);
// var floor = Math.floor(num);
// var ceil = Math.ceil(num);
// document.write( "Number  : " + num);
// document.write ( "<br> round off value " + round);
// document.write ( "<br> Floor   value " + floor);
// document.write ( "<br>  ceil   value " + ceil);



// TASK 2

// var num = prompt(Number("enter a negative number"));
// var round = Math.round(num);
// var floor = Math.floor(num);
// var ceil = Math.ceil(num);
// document.write( "Number  : " + num);
// document.write ( "<br> round off value " + round);
// document.write ( "<br> Floor   value " + floor);
// document.write ( "<br>  ceil   value " + ceil);


// TASK 3

// var num = prompt(Number("enter a number"));
 
// document.write( "The Absolute value of " + num + " is " +  Math.abs(num))


// TASK 4

// var num = (Math.random()*6)+1;
// var round = Math.floor(num);
// document.write("Random dice value : " + round)


// TASK 5

// var num = (Math.random()*2)+1;
// var round = Math.floor(num);
 
// if (round === 1){
//     document.write(round + "<br> random coin value : Heads")
// }
// else {
//     document.write( round+ "<br> random coin value : Tails")
// }



// TASK 6

// var num = (Math.random()*100)+1;
// var round = Math.floor(num);
// document.write("Random  Number between 1 and 100 : " + round)


// TASK 7

// var weight = prompt ("enter your weight in Kgs");
// var int = parseFloat(weight);
// document.write("The weight of the user is " + int + " Kilograms")


// TASK 8


// var guess = prompt("Guess a number");
// guess = parseFloat(guess)
// var num = (Math.random()*10)+1;
// var round = Math.floor(num);
// if (guess === round){
//     alert("Congratulations you won . The number was " + round)
// }
// else {
//     alert("You loose.  The number was "  + round)
// }






// CHAPTER 31 - 34


// TASK 1

// var date = new Date;
//  document.write(date)


// TASK 2

// var month = ["Jan" , "Feb" , "Mar" , "Apr" , "May" , "June" , "July" , "Aug" , "Sep" , "Oct" , "Nov" , "Dec"];
// var date = new Date();
// var nameMonth = date.getMonth();
// var name = month[nameMonth];
// document.write("Current Month : " + name)


// TASK 3

// var dayNames = ["Sunday", "Monday", "Tueday", "Wednesday", "Thursday", "Friday", "Satday"];
// var now = new Date();
// var today = now.getDay();
// var name = dayNames[today];
// var half = name.slice(0,3);
// document.write(half);


// TASK 4

// var dayNames = ["Sunday", "Monday", "Tueday", "Wednesday", "Thursday", "Friday", "Satday"];
// var now = new Date();
// var today = now.getDay();
// var name = dayNames[today];
// if (name ===  dayNames[0]  || name === dayNames[6]){
//     alert("its fun day")
// }


// TASK 5

// var newDate = new Date();
// var today = newDate.getDate();
// if (today < 16){
//     alert("First Fifteen days of the month")
// }
// else {
//     alert("Last days of the month")
// }


// TASK 6

// var current = new Date();
// var jan = current.getTime();

// var min = jan/(1000*60);
// document.write("Seconds = " + jan + "<br> minutes " + min);


// TASK 7

// var current = new Date();
// var tme = current.getHours();
// if (tme <= 12){
//     alert("Its AM")
// }
// else {
//     alert("Its PM")
// }


// TASK 8

// var d = new Date();
// d.setFullYear(2020);
// d.setMonth(11);
// d.setDate(31);
// d.setHours(0);
// d.setMinutes(0);
// d.setSeconds(0);
// var laterDate = d;
// alert(laterDate)


// TASK 9

// var today = new Date();
// today = today.getTime();
// var ramzan = new Date("april 25,2020");
// ramzan = ramzan.getTime();
// var diff = today - ramzan;
// var days = Math.floor(diff/(1000*60*60*24));
// alert(days + " days have passes since 1st ramzan, 2020");


// TASK 10


// var refernce = new Date("december 5, 2015");
// var timee = refernce.getTime();
// var begining = new Date("January 1, 2015");
// var  timee2 = begining.getTime();
// var diff = timee-timee2;
// var sec = Math.floor(diff/(1000))
// document.write("on refernce date " + refernce + " , " + sec + " have passed away since the begining of 2015" )


// TASK 11

// var today = new Date();
// var hours = today.getHours();
// var before = new Date();
// before.setHours(hours-1);
 
// document.write("Current date = " + today + " <br> 1 Hour ago it was = " + before )


// TASK 12

// var today = new Date();
// var years = today.getFullYear();
// var before = new Date();
// before.setFullYear(years-100);
 
// document.write("Current date = " + today + " <br> 1 Hour ago it was = " + before )


// TASK 13

// var age = prompt("Enter your age : ");
// var before = new Date().getFullYear();
// var birthYear = before - age;
// document.write("Your age is  = " + age + " <br> Your birth year is  = " +  birthYear)

// TASK 14

// var name = "Tanzeel" , month = "June" , units = 234 , ChargesUnit = 10.20,
// DueDate = units*ChargesUnit, late = 251.75 , afterDue = DueDate + late;

// document.write("Customer name : " + name + " <br> Month : " + month + " <br> Number of units : " +
// units + "<br> Charges per unit : " + ChargesUnit + " <br> <br> Net amount payable (within due date) :  " + 
// DueDate.toFixed(2) + " <br> Late payement surcharge : " + late + " <br> Gross amount payable (after due date  ) : "
// + afterDue.toFixed(2))






// CHAPTER  35 - 38

// TASK 1


// function today(){
//     document.write(new Date);
// }
// today();



// TASK 2

// function fullname(){
//     var a =  prompt("Enter first name : ");
//     var b =  prompt("Enter last name");
//     alert(" Welcome " +  a + " " +  b)
// }
// fullname();


// TASK 3

// function sum(){
//     var num1 = parseInt(prompt("Enter first number"));
//     var num2 = parseInt(prompt("Enter second number"));
//     return num1+num2;
// }
// alert(sum());


// TASK 4

// function calc(num1,opr,num2){
//     if(opr === "+"){
//         return num1+num2
//     }
//     else if (opr === "-"){
//         return num1-num2
//     }
//     else if (opr === "*"){
//         return num1*num2
//     }
//     else if (opr === "/"){
//         return num1/num2
//     }
//     else{
//         return "Invalid operator"
//     }
// }
// var result = calc( parseInt(prompt("Enter first number")) , prompt("Enter operator") , parseInt(prompt("Enter second number")))
// console.log(result) ;


// TASK 5

// function num(sqr){
//     var z = sqr*sqr;
//     return z;
// }
// var a = num(prompt("enter a num"));
// alert ( "The square of a  number is "  + a )


// TASK 6

// function factorial(num){
//     for (var i = num - 1; i>=1; i--){
//         num = num*i;
//     }
//     return num
// }
// var ans = factorial(prompt("Enter a number"))
// alert("Factorial of a number is " +  ans)


// TASK 7

// function count(){
//     var a = prompt("enter a number");
//     var b = prompt ("enter second nuumber");
//      for(var i = a; i<=b;i++){
//       document .write(i + "<br>")
//      }
// }
// count();


// TASK 8

// function hypo(base,perp){
//     function square(x){
//         return x*x;
//     }
//     return Math.sqrt(square(base)+square(perp))
// }
// var a = hypo(prompt("Enter base value"),prompt("Enter perpendicular Value"));
// alert("Hypotenous value is " +  a);
 

// TASK 9

// function area(width,height){
//     var calc = width*height;
//     return calc;
// }
// var ans = area(prompt("Enter width value"), prompt("Enter height value"));
// alert(ans);


// TASK 10

// function palindrome(word){
 
//     var check = "";
//   for (var i = word.length - 1 ; i>=0;i--){
//       check+=word[i];
// }
//      if(word === check){
//          alert(word + " is a palindrome word")
//      }
//     else{
//         alert(word + " is not a palindrome word")
//     }
// }
// palindrome( prompt("Enter a word"));
 
 
// TASK 11
 

// function cap(sentence){
//     var str = sentence.toLowerCase().split(' ');
//     for (var i = 0; i < str.length; i++ ){
//         str[i] = str[i].charAt(0).toUpperCase() + str[i].substring(1);
//     }
//     return str.join(' ')
// }
// document.write( "Capatilized text : " )
// document.write (cap (prompt("Enter sentence")))


// TASK 12

// function longestStr(sentence){
//     var arr = sentence.split(' ');
//     var longest = arr[0];
//     for(var i=0 ; i<arr.length;i++){
//         if(arr[i].length>longest.length){
//             var longest = arr[i]
//         } 
        
//     }

//     return longest
    
// }
// var ans = longestStr(prompt("Enter a sentence"));
// alert(ans)


// TASK 13

// function counting(sentence,letter){
//     var count = 0;
//     for (var i=0; i<sentence.length; i++ ){
//         if(sentence.slice(i,i+1)===letter){
//             ++count
//         }

//     }
//     return count
    
// }
// var ans = counting(prompt("Enter a sentence"), "o")

// alert("Occurences of letter O in a sentence is " +  ans)

 

// TASK 14

// function calcCircumference(radius){
//   var pie = 3.142;
//   var ans = (2 * pie * radius).toFixed(2);
//   return ans
// }
// function calcArea(radius){
//   var pie = 3.142
//   var ans2 = pie*(Math.pow(radius,2))
//   return ans2;    
// }

// var answer = prompt("Enter radius calue")
// document.write("Cirumference  of a circle  is  : " + calcCircumference(answer))
// document.write("<br> Area of a circle iss : " + calcArea(answer))