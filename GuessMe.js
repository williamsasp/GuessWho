
function Guesswho(){
       var ans = 'y';
       var guess = prompt("Did Alecia went to Holy Childhood High School? y/n").toLowerCase();
if (guess == ans){
       alert("Awesome, Next Question");
       guesswhoques2();
       //score = score + 1;
}else {
       alert("Sorry, I thought you knew me");
       guesswhoques2();
}
};


function guesswhoques2(){
       var ans = 'y';
       var guess = prompt("Do I have a Degree? y/n").toLowerCase();
if (guess == ans){
       alert("Awesome, Next Question");
       guesswhoques3();
       //score = score + 1;
}else {
       alert("Sorry, I thought you knew me");
       guesswhoques3();
}
};


function guesswhoques3(){
       var ans = 'n';
       var guess = prompt("Did I attend UWI? y/n").toLowerCase();
if (guess == ans){
       alert("Awesome, You really know me. Next Question");
       //score = score + 1;
       guesswhoques4();
}else {
       alert("Wrong Reponds");
       guesswhoques4();
}
};

function guesswhoques4(){
       var ans = 'n';
       var guess = prompt("Was my last education a Masters? y/n").toLowerCase();
if (guess == ans){
       alert("Great Job");
       //score = score + 1;
       guessrate();
}else {
       alert("Wrong Reponds. Let's try some more question");
       guessrate();
}
};

function guessrate(){
  var ans = 5;
  var guess = prompt("How much do i rate Sinach as my favourite singer?");
  if(guess < ans){
    window.alert("Your guess is too low, try again");
    guessrate();
    }else if(guess > ans){
          window.alert("Your guess is too high, try again");
          guessrate();
    }
    else if (guess == ans){
      window.alert("Hurray! You guessed it. You's doing great");
      //score = score + 1;
      guessrate2();
    }
  };

function guessrate2(){
  var ans = 2;
  var guess = prompt("Let's see if you can get this. How much do I rate Tamela Mann");
  if (guess < ans)
    {
    window.alert("Your guess is too low, try again");
    guessrate2();
    }else if(guess > ans){
      window.alert("Your guess is too high, try again");
      guessrate2();
    }
    else if (guess == ans){
      window.alert("Hurray! You guessed it. You's doing great");
      //score = score + 1;
    grades();
    }
  };


function grades(){
  var ans = 9;
  var guess = prompt("How many CXC subjects did Ally received");
  if (guess < ans)
    {
    window.alert("Your guess is too low, try again");
    grades();
    }else if(guess > ans){
      window.alert("Your guess is too high, try again");
      grades();
    }
    else if (guess == ans){
      window.alert("Hurray! You guessed it. You's doing great");
      //score = score + 1;
      return;
    }
};

//var score = 0;
//for (var i=0; i < questions.length; i++)
//{
  //var response = guess;
  //if (response == questions[i].ans){
    //score++;
    //alert("Your score is: " + score);
  //}
//}

