/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            resolve(`resolve after ${n} seconds`)
        },n*1000)
    })
}

// wait(3).then((value)=>{
//     console.log(value);
// })

//same thing using async & await.
async function main(){
    const val=await wait(3)
    console.log(val);
}

main()

module.exports = wait;
