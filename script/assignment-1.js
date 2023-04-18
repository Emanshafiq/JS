//TASK 1:

//Calculate the zakat value, first, create a variable named "zakatPercentage" and
//store the value of 2.5% in it (hint: 2.5% means 0.025). Next, create another variable
//named "userInput" and take the input from the user using the prompt. Make sure
//the input value is of a type number by converting the input string to a number
//using a suitable method. Then, create a variable named "result" and assign its value
//to the multiplication of the zakat percentage and user input. Finally, use an alert
//message to display the calculated zakat value. The message should look like this:
//"Your zakat value is xxx".

/*var zakat_percentage = 0.025
var UserInput = + prompt ("UserInput")
var result = zakat_percentage*UserInput
alert("your zakat value is="+result)*/

//TASK 2:

//calculate the fitrah amount, first, ask the user to enter the total number of family
//members using the prompt and store the value in a variable called
//"familyMembers". Next, ask the user to choose a fitrah method by providing them
//options using the prompt, and store the selected method and its price in variables.
//Then, use an if-else block to check the user's input and calculate the fitrah amount
//by multiplying the selected method's price with the number of family members.
//Finally, display the calculated fitrah amount using an alert message.

/*var Family_Members = +prompt ("enter the value of Family_Members");
var Fitra_method = +prompt ("choose Fitra_method");
var wheat = 250
var barley = 250
var date = 2100
var raisin = 2800

var wheat = wheat*Family_Members;
alert(wheat);

var barley = barley*Family_Members;
alert(barley);

var date = date*Family_Members;
alert(date);

var raisin= raisin*Family_Members;
alert(raisin);*/

//TASK 3:

//Create a program that generates a random number between 1 and 10 and stores it
//in a variable called "secretNumber". Then, ask the user to enter a guess for the
//secret number using a prompt.
//Use an if-else statement to check if the user's guess matches the secret number. If
//the guess is correct, display a message using an alert saying "Congratulations! You
//guessed the secret number". Otherwise, if the guess is too high or too low, display
//an appropriate message informing the user to guess again.

/*var Secret_Number = 5;
var UserInput= +prompt ("Guess any number between 1 and 10");

if (UserInput == Secret_Number)
 {
 alert('Conratulations');
 }

 else
 {
 alert('Guess_again');
 }*/

 // TASK 4:

 //Create a program that asks the user to enter a name, and then prints out the name
//with the first letter capitalized (Make your name in capitalized case).

var UserName = prompt("enter your name")
var CapitalLetter= UserName.slice(0,1).toUpperCase()  +UserName.slice(1).toLowerCase();
console.log(CapitalLetter);



//TASK 5:

//In this task, you will be creating two empty arrays called "contactNumbers" and
//"contactNames". Using the prompt, you will ask the user to enter a contact number
//and contact name. You will then push these values into their respective arrays
//using the push method. After adding all the contacts, you will display the contact
//numbers and names in the console. To do this, you will need to use a for loop to
//iterate through both arrays and log each element to the console.
//Make sure to use descriptive variable names and comment on your code for clarity.


/*Contact_Names=[];
Contact_Numbers=[];


for(i=0 ; i<5 ; i++)

{
 var Username=prompt("Enter Contact Name");
 Contact_Names.push(Username);                 
    
    
 var Usernumber=+prompt("Enter Contact Number");
 Contact_Numbers.push(Usernumber);              
}

console.log("Names:  Numbers");            

for(i=0 ; i<5 ; i++)

{
    console.log(Contact_Names[i] + " / " + Contact_Numbers[i]);
    
}*/




//TASK 6:

//Create an Array that contains different products, and get input from the user in which you
//ask your user to give the position of that element he/she wants. Now remove that Item
//from your array and console the removed item, Also display the remaining items in the
//array and total number of items remaining.

/*var Products = ["Watch","Nacklace","Ear Ring","Hand Beg","Shoes","Perfume"];
var User_Position = +prompt("Enter the position of element to remove, There are total 5 items: \n 0. Watch \n 1. Nacklace \n 2. Ear Ring \n 3. Hand Beg \n 4. Shoes \n 5. Perfume");
var RemovedItem = Products.splice(User_Position, 5);

console.log("The Removed item is : " + RemovedItem);
console.log("The remaining items are:");

for(i=0 ; i<Products.length; i++ )
{
    console.log(i + ": " + Products[i]);
}
console.log("The total number of items remaining are: " + Products.length);*/

//TASK 7:

//Create a program that asks the user for their nationality, gender, and age using the prompt
//function. The program should then use nested if-else statements to determine if the
//person is eligible to vote.
//First, the program should check if the person is Pakistani or Indian. If they are not, the
//program should display a message saying they are not eligible to vote.
//If they are Pakistani or Indian, the program should then check their gender. If the person is
//male and over the age of 18, they are eligible to vote. If the person is female and over the
//age of 18, the program should ask if they are married. If they are married, they are eligible
//to vote. If they are not married, they are not eligible to vote.
//If the person is under 18, the program should display a message saying they are not eligible
//to vote.

/*var Nationality = prompt("enter your Nationality");
var Gender = prompt("enter your Gender:  Male / Female");
var Your_age = +prompt("enter your age");

if((Nationality=='pakistani' || Nationality=='indian')){
    if((Gender=='male' && Your_age>18)){
        alert("You are eligible to vote");
    }

    else if(Gender=='female' && Your_age>18){
        var Marriage= prompt("enter your Marrital status: Married / Unmarried");
        
        
        if(Marriage=='married'){
            alert("You are eligible to vote");
        }

        else{
            alert("You are not eligible to vote");
        }
    }

    else{
       alert("You are not eligible to vote");
    }
    }

else{
    alert("You are not eligible to vote");
}*/

//TASK 8:

//You have an array of that contains the name of Pakistani Teams Player selected for
//WorldCup (15 Players) named as WorldCupSquad. Now tomorrow we have a match with
//India, So make an array of final team players (11 Players) that will be playing in tomorrows
//match from the WorldCupSquad array.
//(Hint : Make sure it should not disturb the array that contains 15 players instead you have
//to make a copy of this array)


/*var Worldcup_Squad = ["Shahid Afridi" , "Babar Aazam" , "Shaheen Afridi", "Inzamam-ul-Haq" , "Shadab Khan" , "Naseem Shah" , "Muhammad Rizwan" , "Asif Ali" , "Waseem Akram" , "Misbah-ul-Haq" , "Sarfaraz Ahmed" , "Mohammad Amir" , "Wahab Riaz","Shoib Malik , Fakhar Zaman"]
var Finalteam = [];
 var Finalteam = Worldcup_Squad.slice(0, 11);
 console.log("Team Members whose playing against India");
 for (var i = 0; i < Finalteam.length; i++)
  {
  console.log(i + 1 + " : "  + Finalteam[i]);
 }*/



 




