//selectores
const dia=document.querySelector('#dias')
const optio=document.querySelector('#cripto')
const cant=document.querySelector('#monedaC ')
const porcentaje=document.querySelector('#porcentaje')

document.addEventListener('DOMContentLoaded',()=>{
    dias() 
})
const moneda=document.querySelector('#moneda')
moneda.addEventListener('change', dataC)

cant.addEventListener('change',(e)=>{
    console.log(e.target.value);
})
optio.addEventListener('change',(e)=>{
    console.log(e.target.value);
})
function dias() {
    for (let a = 0; a < 31; a++) {
        const opt=document.createElement("option")
        opt.value=`${a}`
        opt.textContent=`${a}`
    }
}
async function dataC(e) {
    const mon=e.target.value
    const url=`https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=${mon}`
    try {
        const result=await fetch(url)
        const datos=await result.json()
        datosC(datos.Data,mon)
    } catch (error){
        console.log("error",error);
    }
    
}
function clear() {
    const opti=document.querySelectorAll('#cripto .criptomon')
    opti.forEach(el=>{
        el.remove()
    })
}
function datosC(dat,mon) {
    clear()
    dat.forEach(element => {
        const {CoinInfo,RAW}=element
        const name=CoinInfo.FullName
        const opti=document.createElement('option')
        opti.classList.add('criptomon')
        opti.value=RAW[mon].PRICE
        opti.textContent=name
        optio.appendChild(opti)
    });
    console.log(dat[0].RAW[mon]);
}

