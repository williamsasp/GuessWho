function Guesswho(){
       var ans = 'y';
       var guess = prompt("Did Alecia went to Holy Childhood High School? y/n").toLowerCase();
if (guess == ans){
       alert("Awesome, Next Question");
       guesswhoques2()
}else {
       alert("Sorry, I thought you knew me");
}
};
function guesswhoques2(){
       var ans = 'y';
       var guess = prompt("Do I have a Degree? y/n").toLowerCase();
if (guess == ans){
       alert("Awesome, Next Question");
       guesswhoques3()
}else {
       alert("Sorry, I thought you knew me");
}
};
function guesswhoques3(){
       var ans = 'n';
       var guess = prompt("Did I attend UWI? y/n").toLowerCase();
if (guess == ans){
       alert("Awesome, You really know me. Next Question");
       guesswhoques4()
}else {
       alert("Wrong Reponds");
}
};
function guesswhoques4(){
       var ans = 'n';
       var guess = prompt("Was my last education a Masters? y/n").toLowerCase();
if (guess == ans){
       prompt("Great Job");
       return
}else {
       alert("Wrong Reponds");
}
};