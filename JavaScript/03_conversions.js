let score="Manas";

console.log(typeof score);

let toNumber=Number(score);

console.log(typeof toNumber);
console.log(toNumber);//NAN not a number

//Comvert to Number
//"33" -> 33
//null -> 0
//undefined -> NAN
//true -> 1
//"manas" -> NAN

let isLoggedIn=1;

let boolisLoggedIn=Boolean(isLoggedIn);
console.log(typeof boolisLoggedIn);
console.log(boolisLoggedIn);


//Convert to Boolean
//1 -> true
//"" -> false
//"manas" -> true

let num=43;
let stringNumber=String(num);
console.log(typeof stringNumber);
console.log(stringNumber);