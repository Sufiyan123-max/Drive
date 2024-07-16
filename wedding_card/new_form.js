var obj={
    first_name:"",
    second_name:"",
    dob:"",
    age:"",
    father:"",
    mother:"",
    address:"",
    gender:"",
    certification:"",
    row1:{
        "education":"ssc",
        "year":"",
        "percentage":""
    },
    row2:{
        "education":"inter",
        "year":"",
        "percentage":""
    },
    row3:{
        "education":"btech",
        "year":"",
        "percentage":""
    },
    skills:"",
    hobbies:"",
    profile:"",
    badges:"",
    description:""

}
function First(event){
    obj.first_name=event.target.value;
    console.log(obj.first_name);
    
}
function Last(event){
    obj.second_name=event.target.value;
    console.log(obj.first_name);
    
}
function DOB(event) {
    obj.dob=event.target.value;
}
function AGE(event){
    obj.age=event.target.value
}
function FATHER(event){
    obj.father=event.target.value
}
function MOTHER(event){
    obj.mother=event.target.value
}
function Textarea(event) {
    obj.address=event.target.value
}
function Certification(event){
    obj.certification=event.target.value
}
function Year(event){
    obj.row1.year=event.target.value
}
function Percentage(event){
    obj.row1.percentage=event.target.value
}
function Year1(event){
    obj.row2.year=event.target.value
}
function Percentage1(event){
    obj.row2.percentage=event.target.value
}
function Year2(event){
    obj.row3.year=event.target.value
}
function Percentage2(event){
    obj.row3.percentage=event.target.value
}
function Skills(event){
    obj.skills=event.target.value
}
function Hobbies(event){
    obj.hobbies=event.target.value
}
function Profile(event){
    obj.profile=event.target.value
}
function Badges(event){
    obj.badges=event.target.value
}
function Description(event){
    obj.description=event.target.value
}
function Gender(event){
    obj.gender=event.target.value
    console.log(obj.gender);
    
}
function Submit(event) {
    event.preventDefault();
    const form=event.target;
    console.log(obj)
form.reset()
}