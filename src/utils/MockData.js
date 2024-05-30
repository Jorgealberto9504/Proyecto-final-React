export const products = [
    {
    id: 1,
    name: 'LTD EC-401',
    description: 'Una guitarra eléctrica es un instrumento musical que convierte las vibraciones de sus cuerdas metálicas en señales eléctricas, amplificadas para producir sonido, ideal para diversos géneros musicales.',
    price: 12000,
    category: "electricas",
    stock: 3,
    image: "https://gamamusic.com/cdn/shop/files/LEC401BLK-5.jpg?v=1696010313&width=1000"
},

{
    id: 2,
    name: 'Gibson SG',
    description: 'Una guitarra eléctrica es un instrumento musical que convierte las vibraciones de sus cuerdas metálicas en señales eléctricas, amplificadas para producir sonido, ideal para diversos géneros musicales.',
    price: 20000,
    category: "electricas",
    stock: 2,
    image: 'https://eusica.mx/content/files/EYC/Im%C3%A1genes%20de%20producto/Gibson%20SG%20Standard%20%2761/Gibson%20SG%20Standard%20%2761%20Maestro%20Vibrola.png'
},

{
    id: 3,
    name: 'LTD Deluxe',
    description: 'Una guitarra eléctrica es un instrumento musical que convierte las vibraciones de sus cuerdas metálicas en señales eléctricas, amplificadas para producir sonido, ideal para diversos géneros musicales.',
    price: 15000,
    category:"electricas",
    stock: 5,
    image: "https://media.musicarts.com/is/image/MMGS7/512954000001000-02-720x720.jpg"
},

 {
    id: 4,
    name: 'LTD Andromeda',
    description: 'Una guitarra eléctrica es un instrumento musical que convierte las vibraciones de sus cuerdas metálicas en señales eléctricas, amplificadas para producir sonido, ideal para diversos géneros musicales.',
    price: 32000,
    category:"electricas",
    stock: 6,
    image: "https://cdn.connectsites.net/user_files/esp/product_images/000/027/784/original.png?1610245115"
},

{
    id: 5,
    name: 'Fender Telecaster',
    description: 'Una guitarra eléctrica es un instrumento musical que convierte las vibraciones de sus cuerdas metálicas en señales eléctricas, amplificadas para producir sonido, ideal para diversos géneros musicales.',
    price: 21000,
    category:"electricas",
    stock: 7,
    image: "https://guitardepotmx.com/cdn/shop/products/0149872302-01_1000x.jpg?v=1661364361"
},
{
    id: 6,
    name: 'Taylor 214ce-K DLX',
    description: 'Una guitarra acustica es un instrumento musical que convierte las vibraciones de sus cuerdas metálicas en señales eléctricas, amplificadas para producir sonido, ideal para diversos géneros musicales.',
    price: 33000,
    category:"acusticas",
    stock: 7,
    image: "https://northernlightsmusic.com/cdn/shop/products/DSC00236_1600x2400.jpg?v=1640191711"
},

{
    id: 7,
    name: 'Taylor BT2e',
    description: 'Una guitarra acustica es un instrumento musical que convierte las vibraciones de sus cuerdas metálicas en señales eléctricas, amplificadas para producir sonido, ideal para diversos géneros musicales.',
    price: 11000,
    category:"acusticas",
    stock: 7,
    image: "https://therocklab.mx/cdn/shop/products/bt2e_1024x1024.jpg?v=1571608792"

},

{
    id: 8,
    name: 'Fender FA-15 3/4',
    description: 'Una guitarra acustica es un instrumento musical que convierte las vibraciones de sus cuerdas metálicas en señales eléctricas, amplificadas para producir sonido, ideal para diversos géneros musicales.',
    price: 3500,
    category:"acusticas",
    stock: 7,
    image: "https://therocklab.mx/cdn/shop/products/0971170106_fen_ins_frt_1_rr_1024x1024.png?v=1613090011"

}
]

export const getProducts = () => {
/*     return fetch("https://fakestoreapi.com/products").then((res) => res.json())
 */    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve(products)

           // reject('no se pudo traer los prodctos')
        },1000)
    }) 
};

export const getProductsByCategory = (categoryId) => {
    /*     return fetch("https://fakestoreapi.com/products").then((res) => res.json())
     */    return new Promise((resolve, reject) => {
            setTimeout(() =>{
                const filteredProducts = products.filter(
                    (elem) => elem.category === categoryId
                    );
                    
                resolve(filteredProducts)
    
               // reject('no se pudo traer los prodctos')
            },1000)
        }) 
    };


    export const getProductById = (productId) => {
        return new Promise((resolve, reject) => {
            setTimeout(() =>{

                const product = products.find((elem) => elem.id === parseInt(productId));

                resolve(product);
    
               // reject('no se pudo traer los prodctos')
            },1000);
        });
    };
    
/* export const setProduct = () => {
    
    return fetch("https://fakestoreapi.com/products", {
        method: "POST", 
        body:JSON.stringify({
            title: 'test product',
            price: 13.5,
            description: 'lorem ipsum set',
            image: 'https://i.pravatar.cc',
            category: 'electronic'
        }),
}).then((res) => res.json()) */




  /*   new Promise((resolve)=>{
        setTimeout(() =>{
            resolve(products)

           // reject('no se pudo traer los prodctos')
        },2000)
    }) */

/* aca aprendemos como usar promesas con useEffect, revisar de igual forma el compononte itemListContainer.jsx para ver bien todo 
despues de 4 segundos realiza la promesa*/