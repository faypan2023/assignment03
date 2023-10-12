//variable
let coinFlip

//prompt the user for the number of times to flip the coin
let times=parseInt(prompt('enter the coinFlip times:'))

//check if the times is valid
if(!isNaN(times)&&times>0){
    for(let i=0; i<times; i++){//creat a for loop to flip the coin
        //times should <times, not =times, because the i++
        let randomNum = Math.round(Math.random())//generate a random number 0 or 1
        if (times===0){
            console.log('Heads')
        }else{
            console.log('Tails')
        }
    }
}else{
    console.log('please enter a valid number for times.')
}
