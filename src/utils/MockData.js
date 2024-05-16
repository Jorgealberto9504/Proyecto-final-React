export const guitarras = [
    {
    marca: 'LTD',
    modelo: 'EC-401',
    precio: 12000,
    cantidad: 3,
    image: "https://gamamusic.com/cdn/shop/files/LEC401BLK-5.jpg?v=1696010313&width=1000"
},

{
    marca: 'Gibson',
    modelo: 'SG',
    precio: 20000,
    cantidad: 2,
    image: 'https://eusica.mx/content/files/EYC/Im%C3%A1genes%20de%20producto/Gibson%20SG%20Standard%20%2761/Gibson%20SG%20Standard%20%2761%20Maestro%20Vibrola.png'
},

{
    marca: 'LTD',
    modelo: 'Deluxe',
    precio: 15000,
    cantidad: 5,
    image: "https://media.musicarts.com/is/image/MMGS7/512954000001000-02-720x720.jpg"
},

 {
    marca: 'LTD',
    modelo: 'Andromeda',
    precio: 32000,
    cantidad: 6,
    image: "https://cdn.connectsites.net/user_files/esp/product_images/000/027/784/original.png?1610245115"
},

{
    marca: 'Fender',
    modelo: 'Telecaster',
    precio: 21000,
    cantidad: 7,
    image: "https://guitardepotmx.com/cdn/shop/products/0149872302-01_1000x.jpg?v=1661364361"
}]

export const getProducts = () => {
    return new Promise((resolve)=>{
        setTimeout(() =>{
            resolve(guitarras)

           // reject('no se pudo traer los prodctos')
        },2000)
    })
}

/* aca aprendemos como usar promesas con useEffect, revisar de igual forma el compononte itemListContainer.jsx para ver bien todo 
despues de 4 segundos realiza la promesa*/