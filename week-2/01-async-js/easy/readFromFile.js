const fs=require('fs')
const path=require('path')

const currentPath=path.join(__dirname)

function readFile(cb){
    const data1=fs.readFile(`${currentPath}/a.txt`,'utf-8',(err,data)=>{    
        cb(data)
    })
}

function printFileData(data){
    console.log(data);
}

readFile(printFileData)

setTimeout(()=>{
    console.log("Hey, this gonna be the last line");
},3000)