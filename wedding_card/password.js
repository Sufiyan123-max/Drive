function generator(len)
{
    let total = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$`;
    let password='';
    for(let i=1;i<=len;i++){
        let index = Math.floor(Math.random() * total.length);
        password += total.charAt(index)


    }
    return password;
}
console.log(generator(9))
console.log(generator(5))
console.log(generator(7))
// const fun = () => console.log("hii how are  you")
// fun();