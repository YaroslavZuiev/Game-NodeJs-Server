import http from 'http'


const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type');
    res.write('<h1>Hello Node</h1>');
    res.end('Greeting from Node.js');
})

const test = 'Alica'

console.log(test.split('').reverse().join(''));

server.listen(3000,'localHost',()=>{
    console.log('server was started')
})