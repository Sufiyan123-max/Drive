arr = [];
var on =1;
var cells;
stu1 = {
  Gender:"M",
  name: "sufiyan",
  roll: "22A91A1271",
  age: 21,
};
stu2 = {
  Gender:"M",
  name: "Anil",
  roll: "22MH1A05H2",
  age: 22,
};
stu3 = {
  Gender:"M",
  name: "Amit",
  roll: "22A91A1266",
  age: 23,
};
stu4 = {
  Gender:"M",
  name: "jitendra varma",
  roll: "22MH1A05H4",
  age: 24,
};
arr = [stu1, stu2, stu3, stu4];
// for(var i=arr.length-1;i<=arr.length;i++)
// {

// }

var x = document.getElementsByTagName("button")[0];
console.log(x.innerHTML);

function fun() {
  if (!document.getElementsByTagName("table")[0]) {
    var b = document.getElementsByTagName("body")[0];
    var tab = document.createElement("table");
    b.appendChild(tab);
    // tab.style.cssText = "background-color:blue; border-collapse:collapse; border:5px solid black";

    var row1 = document.createElement("tr");
    tab.appendChild(row1);
    var row2 = document.createElement("tr");
    tab.appendChild(row2);
    var row3 = document.createElement("tr");
    tab.appendChild(row3);
    var row4 = document.createElement("tr");
    tab.appendChild(row4);

    var th0 = document.createElement("th");
    row1.appendChild(th0);
    th0.innerHTML = "Gender";
    var th1 = document.createElement("th");
    row1.appendChild(th1);
    th1.innerHTML = "Student name";
    var th2 = document.createElement("th");
    row1.appendChild(th2);
    th2.innerHTML = "Student roll";
    var th3 = document.createElement("th");
    row1.appendChild(th3);
    th3.innerHTML = "Student age";

    var th4 = document.createElement("th");
    row1.appendChild(th4);
    th4.innerHTML = "Update/Delete";

    for (var i = 0; i < arr.length; i++) {
      var row = document.createElement("tr");
      tab.appendChild(row);

      var td1 = document.createElement("td");
      td1.innerHTML = arr[i].Gender;
      row.appendChild(td1);

      var td2 = document.createElement("td");
      td2.innerHTML = arr[i].name;
      row.appendChild(td2);

      var td3 = document.createElement("td");
      td3.innerHTML = arr[i].roll;
      row.appendChild(td3);

      var td4 = document.createElement("td");
      td4.innerHTML = arr[i].age;
      row.appendChild(td4);

      var td5 = document.createElement("td");
      td5.className="td5"

      var btn_up=document.createElement("button");
      btn_up.innerHTML="modify"
      btn_up.className="btn5"
      td5.appendChild(btn_up)
      btn_up.addEventListener("click", function(e) {
        var val=e.target.closest('tr');
         cells = val.children;
        cells[0].innerHTML=prompt("Enter student Gender");
        cells[1].innerHTML=prompt("Enter student name");
        cells[2].innerHTML=prompt("Enter student roll");
        cells[3].innerHTML=prompt("Enter student age");
                // console.log(val1);
               
             
      });
      // console.log(cells);
      

      var btn_de=document.createElement("button");
      btn_de.innerHTML="Delete"
      btn_de.className="btn5"
      btn_de.addEventListener("click", function(e) {
        e.target.closest('tr').remove();
                  // i--;
      });
      td5.appendChild(btn_de) 

      row.appendChild(td5);


    }

    
  }
  function add1() {
    if (!document.getElementsByTagName("table")[1]) {
      var obj1 = {};
      var tab1 = document.createElement("table");
      b.appendChild(tab1);
      var row1 = document.createElement("tr");
      tab1.appendChild(row1);
      row1.style.fontSize="20px"
      row1.innerHTML = "Enter student detail";
      var row = document.createElement("tr");
      tab1.appendChild(row);

      var td0 = document.createElement("td");
      var int0 = document.createElement("input");
      int0.setAttribute("placeholder","Student Gender");
      td0.appendChild(int0);
      int0.onchange = fun0;
      row.appendChild(td0);

      var td1 = document.createElement("td");
      var int1 = document.createElement("input");
      int1.setAttribute("placeholder","Student name");

      td1.appendChild(int1);
      int1.onchange = fun1;
      row.appendChild(td1);

      var td2 = document.createElement("td");
      var int2 = document.createElement("input");
      int2.setAttribute("placeholder","Student roll");
      td2.appendChild(int2);
      int2.onchange = fun2;
      row.appendChild(td2);

      var td3 = document.createElement("td");
      var int3 = document.createElement("input");
      int3.setAttribute("placeholder","Student age");
      td3.appendChild(int3);
      int3.onchange = fun3;
      row.appendChild(td3);
      
      var td4 = document.createElement("td");
      var int4 = document.createElement("button");
      int4.innerHTML="Submit"
      int4.className="btn5"
      td4.appendChild(int4);
        int4.onclick = fun4;
      row.appendChild(td4);
   
      function fun0() {
        obj1["Gender"] = int0.value;
      }
      function fun1() {
        obj1["name"] = int1.value;
      }
      function fun2() {
        obj1["roll"] = int2.value;
      }
      function fun3() {
        obj1["age"] = int3.value;
      }
    }

    arr.push(obj1);
    // print();
  }

 
    function fun4(){
     
      
      var row = document.createElement("tr");
      tab.appendChild(row);

      var td1 = document.createElement("td");
      td1.innerHTML = arr[i].Gender;
      row.appendChild(td1);

      var td2 = document.createElement("td");
      td2.innerHTML = arr[i].name;
      row.appendChild(td2);

      var td3 = document.createElement("td");
      td3.innerHTML = arr[i].roll;
      row.appendChild(td3);

      var td4 = document.createElement("td");
      td4.innerHTML = arr[i].age;
      row.appendChild(td4);

      var td5 = document.createElement("td");
      td5.className="td5"

      var btn_up=document.createElement("button");
      btn_up.innerHTML="modify"
      btn_up.className="btn5"
      td5.appendChild(btn_up)
      btn_up.addEventListener("click", function(e) {
        var val=e.target.closest('tr');
        var cells = val.children;
        cells[0].innerHTML=prompt("Enter student Gender");
        cells[1].innerHTML=prompt("Enter student name");
        cells[2].innerHTML=prompt("Enter student roll");
        cells[3].innerHTML=prompt("Enter student age");
        

      });

      var btn_de=document.createElement("button");
      btn_de.innerHTML="Delete"
      btn_de.className="btn5"
      btn_de.addEventListener("click", function(e) {
        e.target.closest('tr').remove();
        i--;
      });
      i++;
      td5.appendChild(btn_de) 

      row.appendChild(td5);
        
        document.getElementsByTagName("table")[1].remove()
      
    }

  var div1 = document.createElement("div");
  b.appendChild(div1);
  div1.className = "main";

  var div11 = document.createElement("div");
  div1.appendChild(div11);
  var btn1 = document.createElement("div");
  div1.appendChild(btn1);
  btn1.innerHTML = "Add data";
  btn1.className = "add";
  btn1.addEventListener("click", add1);
  // btn1.addEventListener("onchange", Submit);

}