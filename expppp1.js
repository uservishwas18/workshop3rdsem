console.log("start")
setTimeout(()=>{
    console.log("timeout")
}, 2000)

setImmediate(()=>{
    console.log("immediate")
})

process.nextTick(()=>{
    console.log("next tick")
})

console.log("exit")
