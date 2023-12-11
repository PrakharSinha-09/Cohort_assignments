const fs=require('fs')
const path=require('path')

const currentPath=path.join(__dirname)

function writeFile(data,cb){
    const data1=fs.writeFile(`${currentPath}/a.txt`,data,(err,data)=>{    
        cb(printFileData)
    })
}

function readFile(print){
    const data1=fs.readFile(`${currentPath}/a.txt`,'utf-8',(err,data)=>{    
        // console.log(data);
        print(data)
    })
}

function printFileData(data){
    console.log(data);
}

writeFile("writing into a file using fs module",readFile)
