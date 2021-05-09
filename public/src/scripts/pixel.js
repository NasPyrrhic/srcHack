
async function digestMessage(message) {
  const msgUint8 = new TextEncoder().encode(message);                           // encode as (utf-8) Uint8Array
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8);           // hash the message
  const hashArray = Array.from(new Uint8Array(hashBuffer));                     // convert buffer to byte array
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join(''); // convert bytes to hex string
  return hashHex;
}

// const digestHexFirstName = await digestMessage(firstName);
// const digestHexlastName = await digestMessage(lastName);
// const digestHexEmail = await digestMessage(email);

let digestHexFirstName 
let digestHexlastName 
let digestHexEmail 

digestMessage(firstName).then(foo => {
  digestHexFirstName = foo;
})
digestMessage(lastName).then(foo => {
  digestHexLastName = foo;
})
digestMessage(email).then(foo => {
  digestHexEmail = foo;
})

const img = document.createElement("img");

// const text = 'An obscure body in the S-K System, your majesty. The inhabitants refer to it as the planet Earth.';

// digestMessage = async (message) => {
//   const msgUint8 = new TextEncoder().encode(message);                           // encode as (utf-8) Uint8Array
//   const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8);           // hash the message
//   const hashArray = Array.from(new Uint8Array(hashBuffer));                     // convert buffer to byte array
//   const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join(''); // convert bytes to hex string
//   return hashHex;
// }

// digestMessage(text).then((foo)=>{
//   console.log(foo);
// });
