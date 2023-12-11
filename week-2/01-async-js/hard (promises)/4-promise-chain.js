/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait1(t) {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(`wait1 resolved after ${t} seconds`)
        },t)
    })    
}

function wait2(t) {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(`wait2 resolved after ${t} seconds`)
        },t)
    })    
}

function wait3(t) {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(`wait3 resolved after ${t} seconds`)
        },t)
    })    
}


wait1(1000)
.then((value)=>{ 
    console.log(value);
    return wait2(2000)
})
.then((value)=>{
    console.log(value);
    return wait3(4000)
})
.then((value) => {
    console.log(value);
    console.log("All functions executed sequentially.");
})
.catch(error => {
    console.error("An error occurred:", error);
});



// module.exports = calculateTime;
