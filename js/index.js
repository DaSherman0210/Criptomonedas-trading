//selectores
let cantidad
let valorActual;
let nime;
let nome;
let mon;
const dia=document.querySelector('#dias')
const optio=document.querySelector('#cripto')
const cant=document.querySelector('#monedaC ')
const porcentaje=document.querySelector('#porcentaje')
const btnEnviarTabla = document.querySelector('#btnEnviarCarrito')
const formulario = document.querySelector('.formulario')

btnEnviarTabla.addEventListener('click' , ()=>{
    insertarNumero();
    borrarContenido();
})

document.addEventListener('DOMContentLoaded',()=>{
dias() 
})
const moneda=document.querySelector('#moneda')
moneda.addEventListener('change', dataC)

cant.addEventListener('change',(e)=>{
    cantidad = e.target.value
})
optio.addEventListener('change',(e)=>{
const selectedOptions = optio.querySelector(`option[value="${e.target.value}"]`)
nome = selectedOptions.textContent;
nime = selectedOptions.value
console.log(nome);
console.log(nime);
})

/* function enviarTabla(e) {
    const coso = e.target.value
    console.log(e.target.value);
    const tableishon = document.querySelector('#tablaBody')
    const pedazoTabla = document.createElement ('td')
    pedazoTabla.innerHTML = `
    ${coso}
    `
    tableishon.appendChild(pedazoTabla)
} */

function borrarContenido() {
    console.log(4);
    formulario.reset();
}

function insertarNumero() {
    const tabla = document.querySelector('.trr')
    const cuerpo = document.createElement ('tr')
    const numeroTot = nime * cantidad
    cuerpo.innerHTML = `
    <td>${mon}</td>
    <td>${nome} </td>
    <td>${cantidad}</td>
    <td>${nime}</td>
    <td>${numeroTot}</td>
    `
    console.log(numeroTot);
    tabla.appendChild(cuerpo)
}


function dias() {
for (let a = 0; a < 31; a++) {
    const opt=document.createElement("option")
    opt.value=`${a}`
    opt.textContent=`${a}`
}
}
async function dataC(e) {
mon=e.target.value
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
    nome=CoinInfo.FullName
    const opti=document.createElement('option')
    opti.classList.add('criptomon')
    opti.value=RAW[mon].PRICE
    opti.name=nome
    opti.textContent=nome
    optio.appendChild(opti)
});

console.log(dat[0].RAW[mon]);
}

