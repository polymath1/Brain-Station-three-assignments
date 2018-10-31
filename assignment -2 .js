/* I started writing a loop 

for (var i = 0; i<7; i++){
  console.log('#' + '#')
}

However I was only getting '##'  7 times. I understood that loop function repeated itself 7 times as per the parameter. 
I could not understand how to add one more # in succesion to the previous result without using the 'console.log()' 7 times. 
After googleing the question, I found the solution! */


var hash = ''

for (var i = 0; i < 7; i++) {
   hash = hash + '#';
    console.log(hash);

}

/* I understand that I first have to declare a variable called hash and assign it an empty value. 
Then create a for loop. Inside the for loop function, declare the variable hash as itself + #. 
As the for loop is executed 7 times,  The for loop updates the hash variable as itself + #, 
retaining en extra # in the process */




/*For Challenge 2, I assigned a variable named number and gave it a value of a random interger.
I then use the if and else if function to see if assigned value of the variale 
is even or odd by using the remainder opertaor.
Depending on the result, "Console.Log" will print even or odd accordingly.
If the result of the operator are neither 1 or 0, " console.log" will print, "not an interger."" */




var number = 1666

	if (number%2 == 0){
		 console.log("even");
  }
else if (number%2 == 1) {
  console.log("odd");
}
else {console.log("not an interger")}