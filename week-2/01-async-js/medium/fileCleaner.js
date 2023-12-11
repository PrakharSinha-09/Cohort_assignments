const fs=require('fs')
const path=require('path')

const currentPath=path.join(__dirname)

function readFile(cb){
    const data1=fs.readFile(`${currentPath}/a.txt`,'utf-8',(err,data)=>{    
        const value=data

        // Using a regular expression to remove extra spaces
        const removeExtraSpaces = value.replace(/\s+/g, ' ');

        //checking if it really contains extra space
        const hasExtraSpaces=value !== removeExtraSpaces;

        if(hasExtraSpaces){
            fs.writeFile(`${currentPath}/a.txt`,removeExtraSpaces,(err,data)=>{
                cb("Extra Space Removed Successfully!... Check Your File Now!")
            })
        }
        else{
            cb("No Extra Space Found!")
        }

    })
}

function workDone(result){
    console.log(result);
}


readFile(workDone)