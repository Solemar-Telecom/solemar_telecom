/** @type {import('tailwindcss').Config} */

// Se quiser adicionar mais cores, acesse o site: https://paletadecores.com/
// Alguns nomes de cor nao funcionam, cuidado ao nomear com pavavras reservadas

module.exports = {
 content: ['./src/**/*.{html,js,jsx}'],
 theme: {
  extend: {
   fontFamily: {
    lightc: ['Comfortaa-Light'],
    regularc: ['Comfortaa-Regular'],
    mediumc: ['Comfortaa-Medium'],
    semiboldc: ['Comfortaa-SemiBold'],
    boldc: ['Comfortaa-Bold'],
   },
   colors: {
    border: '#d7d7d7',
    primar: '#0056C0',
    secondar: '#002e62',
    tertiar: '#171923',
    font: '#575757',
    transparent: 'transparent',

    offWhite: '#F5F5F5',

    green1: '#3cb844',
    green2: '#1e9422',
    green3: '#006f00',

    red1: '#ff3b25',
    red2: '#d31e13',
    red3: '#a60000',

    blue1: '#026ae3',
    blue2: '#014cbd',
    blue3: '#002e97',

    yellow1: '#f3b70d',
    yellow2: '#f9db49',
    yellow3: '##ffff84',
   },
   backgroundImage: {
    cabes: "url('/src/images/jpg/Cabes.jpg')",
    cabes2: "url('/src/images/jpg/Cabes2.jpg')",
    cabes3: "url('/src/images/jpg/Cabes3.jpg')",
    equipment: "url('/src/images/png/Equipamentos.png')",
    condon: "url('/src/images/jpg/Condon.jpg')",
    companies: "url('/src/images/jpg/Companies.jpg')",
    energy: "url('/src/images/jpg/Energy.jpeg')",
    aboutus: "url('/src/images/jpg/AboutUs.jpg')",
    contact: "url('/src/images/jpg/Contact.jpg')",
    form: "url('/src/images/jpg/Form.jpg')",
    lock: "url('/src/images/jpg/Fechadura.jpg')",
    digitalLock: "url('/src/images/jpg/FechaduraDigital2.jpg')",
    locks: "url('/src/images/jpg/Loks.jpg')",
    fone: "url('/src/images/png/Intercom.png')",
    cam: "url('/src/images/jpg/Cam.jpg')",
    cams: "url('/src/images/jpg/Cams.jpg')",
    software: "url('/src/images/jpg/Software.jpg')",
    solar: "url('/src/images/jpg/SolarEnergy2.jpg')",
    solar2: "url('/src/images/jpg/SolarEnergy.jpg')",
    clound: "url('/src/images/jpg/Clound.jpg')",
    changer: "url('/src/images/png/CarChanger.png')",
   },
  },
 },
 plugins: [],
};
