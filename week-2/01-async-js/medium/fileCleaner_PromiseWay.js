const { log } = require('console')
const fs=require('fs')
const path=require('path')

const currentPath=path.join(__dirname)

function readFile(){
    return new Promise(function(resolve){
        fs.readFile(`${currentPath}/a.txt`,'utf-8',(err,data)=>{
            resolve(data)
        })
    })
}

function writeTheFile(content){
    return new Promise(function(resolve){
        fs.writeFile(`${currentPath}/a.txt`,content,(err,data)=>{
            resolve("Removal Successful!")
        })
    })
}

async function correctFile(){
    let read=await readFile()
    console.log(read);

    read=read.replace(/\s+/g, ' ')

    let write=await writeTheFile(read)
    console.log(write);

    let readAgain=await readFile()
    console.log(readAgain);
}

correctFile()