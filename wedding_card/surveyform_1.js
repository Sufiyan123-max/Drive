var obj={}
function firstname(event){
    obj[event.target.name]=event.target.value
// console.log(event.target.value)
}
function middlename(event){
    obj[event.target.name]=event.target.value
}
function lastname(event){
    obj[event.target.name]=event.target.value
}
function contactnumber(event){
    obj[event.target.name]=event.target.value
}
function DOB(event){
    console.log(event.target.value)
    obj[event.target.name]=event.target.value
}
function Submit(event){
    event.preventDefault();
    console.log(obj);

    // document.write(obj);
}
