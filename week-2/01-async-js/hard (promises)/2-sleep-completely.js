/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
    return new Promise(resolve => {
      setTimeout(resolve, milliseconds);
    });
  }
  
  async function myFunction() {
    console.log("Start");
  
    await sleep(2000);
    console.log("This code runs after a 2-second delay");
  
    await sleep(1000);
    console.log("This code runs after an additional 1-second delay");
  
    console.log("End");
  }
  
  myFunction().catch(error => {
    console.error("An error occurred:", error);
  });
  

module.exports = sleep;
