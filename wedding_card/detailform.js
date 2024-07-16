var obj={}
function namefirst(event){
    obj[event.target.name]=event.target.value
console.log(event.target.value)
}
function SecondName(event){
    console.log(event.target.value)
    obj[event.target.name]=event.target.value
}
function age(event){
    obj[event.target.name]=event.target.value
    console.log(event.target.value)
}
function fathername(event){
    obj[event.target.name]=event.target.value
    console.log(event.target.value)
}
function mothername(event){
    console.log(event.target.value)
    obj[event.target.name]=event.target.value
}
function address(event){
    console.log(event.target.value)
    obj[event.target.name]=event.target.value
}
function Male(event){
    console.log(event.target.value)
    obj[event.target.name]=event.target.value
}
function female(event){
    obj[event.target.name]=event.target.value
    console.log(event.target.value)
}
function skills(event){
    obj[event.target.name]=event.target.value
    console.log(event.target.value)
}
function hobbies(event){
    obj[event.target.name]=event.target.value
    console.log(event.target.value)
}
function Profilepic(event){
    obj[event.target.name]=event.target.value
}
function year(event){
    obj[event.target.name]=event.target.value
}
function Percentage(event){
    obj[event.target.name]=event.target.value
}
function year1(event){
    obj[event.target.name]=event.target.value
}
function Percentage1(event){
    obj[event.target.name]=event.target.value
}
function year2(event){
    obj[event.target.name]=event.target.value
}
function Percentage2(event){
    obj[event.target.name]=event.target.value
}
function submit(event){
    event.preventDefault();
    console.log(obj);
    // form.reset()
    // document.write(obj);
}
