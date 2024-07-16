//  const h2=document.querySelector("h2")
//  console.dir(h2.innerText);
//  h2.innerText=h2.innerText+"from apna college";

//  x.innerText="Hello javascript"
//  const y=x.innerText+"from apna college"
//  console.log(y)
//  const divs=document.querySelectorAll(".box");
//  let idx=1;
//  for(div of divs){
//     console.log(div)
//     div.innerText=`new unique value ${idx}`
//     idx++;

//  }
// //  console.log(div[0]);
// //  div[0].innerText="sufi";
 let newbtn=document.createElement("button")
 newbtn.innerText="click me!"
 newbtn.style.color="white";
 newbtn.style.backgroundColor="red";
 document.querySelector("body").prepend(newbtn)
