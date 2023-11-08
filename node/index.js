console.log('hello node')

setImmediate(()=>{
    console.log('set immediate')
})

const fs = require('fs');
const dns = require('dns');

fs.writeFile('./test.txt','hello world',()=>{
console.log('file written')
})


process.nextTick(()=>{
    console.log('next tick')
})

dns.lookup('google.com',(err,address,family)=>{
    console.log('google add',address)
    console.log(family)

    Promise.resolve().then(()=> console.log('promise'))

    process.nextTick(()=> console.log('Next 2'))
})
let count = 0;
// const interval = setInterval(()=> {
//     if(count >= 2){
//         clearInterval(interval)
//     }
//     console.log(`${count += 1}`)
// },1000);
let cache = new Map();
function fib(n) {
    return new Promise((resolve)=>{
        if(n === 0 || n === 1) {
            return resolve(n);
        }
        if(cache.has(n)) {
            return resolve(cache.get(n));
        }

        setImmediate(()=>{
            fib(n - 1).then((res)=> fib(n - 2).then((data)=> {
                cache.set(n, res + data);
                resolve(res + data)
            }))
        })
    })
}

fib(400).then((res)=> console.log(res))

