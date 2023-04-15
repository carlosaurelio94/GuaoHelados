const { createApp } = Vue

createApp({
    data() {
    return {
        message: 'Hello Vue!',
        distributors: [{city:'Caracas', address1:'Av. Lecuna', address2: 'Esquina el conde', address3: 'frente al campo de Beisbol "El Capu"',   ws:'https://api.whatsapp.com/send?phone=584122091837&text=¡Hola buenas tardes!', image:'./assets/images/carousel4.jpg'}, 
                        {city:'Caracas', address1:'Catia', address2: 'Calle Bolivia', address3: '2da avenida Nueva Caracas', ws:'https://api.whatsapp.com/send?phone=584241505167&text=¡Hola buenas tardes!', image:'./assets/images/carousel4.jpg'},
                        {city:'Caracas', address1:'Caricuao', address2: 'Redoma de Ruiz Pineda, frente al supremo.', address3: '', ws:'https://api.whatsapp.com/send?phone=584125931370&text=¡Hola buenas tardes!', image:'./assets/images/carousel4.jpg'},
                        {city:'Miranda', address1:'Guatire', address2: 'Calle sucre y Anzoátegui,', address3: 'Res. Belén Blanco, local B, PB. Guatire.', ws:'https://api.whatsapp.com/send?phone=584124221688&text=¡Hola buenas tardes!', image:'./assets/images/carousel4.jpg'},
                        {city:'Miranda', address1:'Los Teques', address2: 'Bajada El Tambor', address3: 'frente a la urbanización Simón Bolívar , Centro Comercial San José.', ws:'https://api.whatsapp.com/send?phone=584120195058&text=¡Hola buenas tardes!', image:'./assets/images/carousel4.jpg'}
                        ],
        iceCreamShops: [{city:'Caracas', address1:'CC Propatria', address2: 'Calle sucre y Anzoátegui,', address3: 'Res. Belén Blanco, local B, PB. Guatire.', ws:'#', image:'./assets/images/guatire.jpg'}, 
                    {city:'Caracas', address1:'Centro', address2: 'Av. José Vicente Rangel', address3: 'Norte 4, esquina el conde.', ws:'#', image:'./assets/images/guatire.jpg'},
                    ],
    }
    }
}).mount('#app')