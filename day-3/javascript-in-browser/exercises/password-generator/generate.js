let formTag = document.querySelector("#form");
formTag.addEventListener("submit", generatePassword);

function generatePassword(event) {
	let password="";
    let passwordDiv = document.querySelector("#password");
    
    let digit="0123456789";
	let lower="abcdefghijklmnopqrstuvwxyz";
	let upper=lower.toUpperCase();
	let symbol="!@#$%^&*()_+=_{}[]|\:\"<>?;',./`~";
	
	let isUpperChecked=document.querySelector("#upper").checked;
	let isLowerChecked=document.querySelector("#lower").checked;
	let isDigitChecked=document.querySelector("#digit").checked;
	let isSymbolChecked=document.querySelector("#symbol").checked;
/* we will generate a random password of length 8 based on the conditions entered by the user.
1st part is the appraoch. Logic <---
2. converting your logic to javascript

pseudocode --- like a plain text which looks like a code..
8 characters long
upper lower
upper+lower

(i) Logic / Algorithm / Approach
(ii) Write down in pseudocode
(iii) name the variables well.
(iv) Actual javascript code
 (v) break it into parts and test it out on console.
 

charcterSet =  that has all the valid characters user has chosen

password=""
for i = 0;i<8;i++
  let index = getRandomIndex(0,40)
  let randomCharacter=charcterSet.getCharacterAtIndex(index)
  password+=randomCharacter;
  
0<Math.random <1
0 * 40 < Math.random * 40 < 40
         
*/
let characterSet="";
if(isUpperChecked)
characterSet+=upper;
if(isLowerChecked)
characterSet+=lower;
if(isDigitChecked)
characterSet+=digit;
if(isSymbolChecked)
characterSet+=symbol;


    for( let i=0;i<8;i++){
		let index = Math.floor(Math.random()*characterSet.length);
		  let randomCharacter=characterSet.charAt(index);
		  password+=randomCharacter;
	}
	
	passwordDiv.innerHTML=password;
	event.preventDefault();
	
}