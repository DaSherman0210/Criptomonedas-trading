//selectores
let cantidad;
let valorActual;
let nime;
let nome;
let mon;
let numeroTot;
let array = [];
const dia=document.querySelector('#dias')
const optio=document.querySelector('#cripto')
const cant=document.querySelector('#monedaC ')
const porcentaje=document.querySelector('#porcentaje')
const btnEnviarTabla = document.querySelector('#btnEnviarCarrito')
const formulario = document.querySelector('.formulario')
const comprar = document.querySelector('.boton')

comprar.addEventListener('click' , ()=>{
    guardarTabla();
    eliminarTabla();
})

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

function guardarTabla() {
    objeto = {
        moneda: mon,
        nombre: nome,
        cuantos: cantidad,
        precioSolo: nime,
        precioTot: numeroTot
    }
    array = [...array, objeto]
    localStorage.setItem("tabla", JSON.stringify(array))
}

function eliminarTabla() {
    const tabla = document.querySelectorAll('.paElimin')
    tabla.forEach((tablita)=>{
        tablita.remove();    
    })
}

function borrarContenido() {
    formulario.reset();
}

function insertarNumero() {
    const buscador = document.querySelector('#monedaC')
    if (buscador.textContent == "") {
        alert('Rellene los campos necesarios')
    }else{
       const tabla = document.querySelector('.trr')
        const cuerpo = document.createElement ('tr')
        numeroTot = nime * cantidad
        cuerpo.innerHTML = `
        <td class = "paElimin">${mon}</td>
        <td class = "paElimin">${nome} </td>
        <td class = "paElimin">${cantidad}</td>
        <td class = "paElimin">${nime}</td>
        <td class = "paElimin">${numeroTot}</td>
        `
        console.log(numeroTot);
        tabla.appendChild(cuerpo) 
    } 
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

