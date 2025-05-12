function firstWord(s) {
 let res=''
  s=s.trim();
  if(s.length===0) return '';
  let i=0
  while(s.charAt(i)!==' ' && i<s.length) {
   res+=s.charAt(i)
   i++
  }
 
  return res
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
