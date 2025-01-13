console.log(`loaded index.js \n ${Date()}`)

// tip options
const pCs=[0,5,10,15,20,25,30,33.333,50]
pCs.forEach(pc=>{
    console.log(pc)
    opt = document.createElement('option')
    tip.appendChild(opt)
    opt.textContent=`${pc} %`
    opt.value = pc
})
tip.value=20 // default

// provide nominal cost value
function calculate(){
    let extra = Math.round(parseFloat(bill.value)*tip.value/100)
    txt.value = `-- integer tip --`
    txt.value += `\n`
    txt.value += `\nBill: $${bill.value}`
    txt.value += `\nTip: $${extra}`
    txt.value += `\n`
    txt.value += `\nTotal: $${parseFloat(bill.value)+extra}`
    return txt
}

calculate() // ini
// calculation listener
tip.onchange=bill.onkeyup=calculate
