import fs from 'fs'

fs.writeFile('test.txt','Hello node',()=> {
    console.log('file has been added')
})

fs.readFile('test.txt','utf-8',(err,data)=>{
    console.log(data)
})

fs.unlink('test.txt',()=>{
    console.log('file has been removed')
})