const producto= document.getElementById('producto');
const productoImagen = producto.querySelector('.producto__imagen')
const thumbs = producto.querySelector('.producto__thumbs')

//color
const propiedadColor = producto.querySelector('#propiedad-color')
//cantidad
const btnDisminuirCantidad= producto.querySelector('#disminuir-cantidad')
const btnIncrementarCantidad= producto.querySelector('#incrementar-cantidad')
const inputCantidad =producto.querySelector('#cantidad')


thumbs.addEventListener('click', (e) =>{
    if(e.target.tagName === 'IMG'){
        const imagenSrc = e.target.src;

        //obtener l posicion del ultimo
        const lastIndex= imagenSrc.lastIndexOf('/')

        //cortamols la cadena de texto para obtener solamente una parte
        const nombreImagen= imagenSrc.substring(lastIndex +1);

        //cambiamos la ruta de la imagen del producto
        productoImagen.src = `./img/tennis/${nombreImagen}`
    }
})

propiedadColor.addEventListener('click', (e)=> {
    if(e.target.tagName=== 'INPUT'){
        //console.log(e.target.value);
        productoImagen.src = `./img/tennis/${e.target.value}.jpg`

    }
})

btnIncrementarCantidad.addEventListener('click', (e)=>{
    inputCantidad.value = parseInt(inputCantidad.value )+1;
})

btnDisminuirCantidad.addEventListener('click', (e)=>{
    if(parseInt(inputCantidad.value) >1){
        inputCantidad.value = parseInt(inputCantidad.value ) -1;
    }
})
