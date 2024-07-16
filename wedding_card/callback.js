//for time
function fun(){
    var x=new Date();
    document.getElementsByClassName("hours")[0].innerHTML=x.getHours()
    document.getElementsByClassName("minutes")[0].innerHTML=x.getMinutes()
    document.getElementsByClassName("seconds")[0].innerHTML=x.getSeconds()
    // if(x.getSeconds()==0)
    // {
    //     clearInterval(address)
    // }

}

 var address=setInterval(fun,1000)
 function getRandomColor() {
    let val1 = Math.ceil(0 + Math.random() * 255);
    let val2 = Math.ceil(0 + Math.random() * 255);
    let val3 = Math.ceil(0 + Math.random() * 255);
    return `rgb(${val1}, ${val2}, ${val3})`
}
let a = setInterval(() => {
    document.querySelector(".main").style.background = getRandomColor();
}, 1000);

// console.log(a)
//timer
var h=0;
var m=0;
var s=0;
var st;
  function timer()
  {
    s+=1;
  if(s==60)
  {

      m+=1;
      s=0;
      if(m==60)
        {
            h+=1;
            m=0;
        }
      
  }
  document.getElementsByClassName("hour")[0].innerHTML=h;
    
  document.getElementsByClassName("minute")[0].innerHTML=m;

  document.getElementsByClassName("second")[0].innerHTML=s;
  
  
       

       
  }
  function start()
  {
  st=setInterval(timer,1000);
  }
  function stop()
  {
      clearInterval(st)
  }
  function restart()
  {
      clearInterval(st)
      h=0;
      m=0;
      s=0;
      timer();

  }