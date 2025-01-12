console.log(`loaded index.js \n ${Date()}`)

// tip options
const pCs=[0,5,10,15,20,25]
pCs.forEach(pc=>{
    console.log(pc)
    opt = document.createElement('option')
    tip.appendChild(opt)
    opt.textContent=`${pc} %`
    opt.value = pc
})
tip.value=20

