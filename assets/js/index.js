const { createApp } = Vue

createApp({
    data() {
    return {
        message: 'Hello Vue!',
        distributors: [{city:'Caracas', address1:'Av. Lecuna', address2: 'Esquina el conde', address3: 'frente al campo de Beisbol "El Capu"',   ws: 'https://api.whatsapp.com/send?phone=' + encodeURIComponent('584122091837') + '&text=' + encodeURIComponent('¡Hola buenas tardes!'), image:'./assets/heladerias-img/GUAO AV LECUNA.png', number: '+584122091837', map:`https://www.google.com/maps/place/Guao+helados/@10.4981888,-66.9047197,17z/data=!3m1!4b1!4m6!3m5!1s0x8c2a59d3cef74a87:0xaa1838c341d38a6a!8m2!3d10.4981888!4d-66.9047197!16s%2Fg%2F11llkn4l_h?hl=es-VE`}, 
                        {city:'Caracas', address1:'Catia', address2: 'Calle Bolivia', address3: '2da avenida Nueva Caracas', ws:'https://api.whatsapp.com/send?phone=584241505167&text=¡Hola buenas tardes!', image:'./assets/heladerias-img/catia.jpg', number: '+584241505167', map:`https://www.google.com/maps/place/Helader%C3%ADa+Guao/@10.5116725,-66.9440731,17z/data=!3m1!4b1!4m6!3m5!1s0x8c2a5feccd190569:0xe40b498ed1c74611!8m2!3d10.5116725!4d-66.9440731!16s%2Fg%2F11rq2p5p7d?hl=es-VE`},
                        {city:'Caracas', address1:'Caricuao', address2: 'Redoma de Ruiz Pineda, frente al supremo.', address3: '', ws:'https://api.whatsapp.com/send?phone=584125931370&text=¡Hola buenas tardes!', image:'./assets/heladerias-img/', number: '+584125931370', map:`https://www.google.com/maps/place/10%C2%B026\'03.8%22N+67%C2%B000\'06.5%22W/@10.4344,-67.0039887,17z/data=!3m1!4b1!4m4!3m3!8m2!3d10.4344!4d-67.0018?hl=es-VE`},
                        {city:'Miranda', address1:'Guatire', address2: 'Calle sucre y Anzoátegui,', address3: 'Res. Belén Blanco, local B, PB. Guatire.', ws:'https://api.whatsapp.com/send?phone=584124221688&text=¡Hola buenas tardes!', image:'./assets/heladerias-img/GUATIRE.jpg', number: '+584124221688', map:`https://www.google.com/maps/place/10.470619,-66.542296/data=!4m6!3m5!1s0!7e2!8m2!3d10.4706189!4d-66.5422961?utm_source=mstt_1&entry=gps`},
                        {city:'Miranda', address1:'Los Teques', address2: 'Bajada El Tambor', address3: 'frente a la urbanización Simón Bolívar , Centro Comercial San José.', ws:'https://api.whatsapp.com/send?phone=584120195058&text=¡Hola buenas tardes!', image:'./assets/heladerias-img/Los Teques.jpg', number: '+58412019505', map:`https://www.google.com/maps?q=9X38+JM6+Guao+Helados,+Los+Teques+1201,+Miranda&ftid=0x8c2a8d4a60ecabd9:0xf26168c0133c7747&hl=es-VE&gl=ve&entry=gps&lucs=47062714&g_ep=CAISBjYuNTQuMRgAINeCAyoINDcwNjI3MTRCAlZF&g_st=iwb`}
                        ],
        iceCreamShops: [{city:'Caracas', address1:'CC Propatria', address2: 'Calle sucre y Anzoátegui,', address3: 'Res. Belén Blanco, local B, PB. Guatire.', ws:'https://api.whatsapp.com/send?phone=584241505167&text=¡Hola buenas tardes!', image:'./assets/heladerias-img/heladeria propatria.jpg'}, 
                    {city:'Caracas', address1:'Centro', address2: 'Av. José Vicente Rangel', address3: 'Norte 4, esquina el conde.', ws:'https://api.whatsapp.com/send?phone=584241505167&text=¡Hola buenas tardes!', image:'./assets/heladerias-img/'},
                    ],
    }
    }
}).mount('#app')