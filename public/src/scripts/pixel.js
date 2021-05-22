
const PIXEL_ID = 3582534995116622

async function digestMessage(message) {
  const msgUint8 = new TextEncoder().encode(message);                           // encode as (utf-8) Uint8Array
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8);           // hash the message
  const hashArray = Array.from(new Uint8Array(hashBuffer));                     // convert buffer to byte array
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join(''); // convert bytes to hex string
  return hashHex;
}

const img = document.createElement("img");
const indexBody = document.getElementById("js-body")

let digestHexFirstName
let digestHexlastName 
let digestHexEmail 

(async function(){
  digestHexFirstName = await digestMessage(firstName);
  digestHexlastName = await digestMessage(lastName);
  digestHexEmail = await digestMessage(email);
  
  img.height = 1;
  img.width = 1;
  img.style = "display:none"
  let imgSrc = `https://www.facebook.com/tr/?id=${PIXEL_ID}&ev=PageView` +
    `&ud[em]=${digestHexEmail}` +
    `&ud[fn]=${digestHexFirstName}`
  
  if(lastName!="") 
      imgSrc = imgSrc + `&ud[ln]=${digestHexlastName}`
  
  img.src = imgSrc
  indexBody.appendChild(img)
})();