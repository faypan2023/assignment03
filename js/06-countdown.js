let num=parseInt(prompt("enter a int number:"))
if (!isNaN(num)){
    for(let i=num; i>=0; i--){
        console.log(i)
    }
}else{
    console.log('please enter a valid number.')
}