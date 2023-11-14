const prompt= require("prompt-sync")();
const  rn = Math.random()*100;
 const rrn = Math.round(rn);
let enter;
let scoure = 0;
let scouremain;
const main = ()=>{
 if((enter-rrn)>0){
   console.log("Right number is less than your guess");
 }else if ((enter-rrn)<0){
   console.log("Right number is greater than your guess");
   
 }else{
   console.log(enter ===rrn?'':"Enter your number");
 }
}
do{
enter =prompt("Guess the number - ");
  enter = Number.parseInt(enter);
  main();
  scouremain = scoure++;
}while(enter !==rrn)
console.log(`chance ${scouremain+1}`)
console.log(100-scoure?"Your scoure is : "+ (((100-scoure)+1)**1):+"Your scoure : is "+(100-scoure))
console.log("YOU WIN")