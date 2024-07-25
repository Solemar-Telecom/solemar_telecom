import { useState } from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Energy = () => {
 const [control, setControl] = useState(false);
 const [intercom, setIntercom] = useState(false);
 const [cam, setCam] = useState(false);
 const [software, setSoftware] = useState(false);

 return (
  <div className='bg-primar/10'>
   <Header />
   <div className='h-96 flex flex-col justify-center items-start gap-16 pt-32 bg-energy bg-cover bg-center'>
    <div className='h-full w-1/3 flex items-center justify-center bg-black/50 rounded-sm'>
     <p className='text-white text-4xl font-bold flex justify-center'>Energia</p>
    </div>
   </div>
   <div className='flex items-center'>
    <div
     className='w-1/2 h-96 flex items-end justify-center bg-solar2 bg-cover bg-center'
     onMouseEnter={() => {
      setIntercom(true);
     }}
     onMouseLeave={() => {
      setIntercom(false);
     }}
    >
     <div className={`w-full ${intercom ? 'h-full' : 'h-1/4'} bg-primar flex items-center justify-center px-5 duration-500`}>
      {intercom ? (
       <p className='text-white text-lg text-center'>
        Oferecemos geradores solares que podem ser integrados tanto a sistemas on-grid quanto off-grid. Esses geradores proporcionam uma fonte de
        energia adicional e segura, garantindo continuidade elétrica em caso de falhas na rede ou em locais isolados.
       </p>
      ) : (
       <p className='text-white text-lg font-semibold'>Usina Solar e Gerador Solar</p>
      )}
     </div>
    </div>
    <div
     className='w-1/2 h-96 flex items-end justify-center bg-changer bg-cover bg-top'
     onMouseEnter={() => {
      setCam(true);
     }}
     onMouseLeave={() => {
      setCam(false);
     }}
    >
     <div className={`w-full ${cam ? 'h-full' : 'h-1/4'} bg-primar flex items-center justify-center px-5 duration-500`}>
      {cam ? (
       <p className='text-white text-lg text-center'>
        Promova a mobilidade sustentável com nossos carregadores para carros elétricos. Oferecemos estações de carregamento de alta eficiência para
        residências, empresas e áreas públicas. Nossos carregadores são fáceis de instalar e utilizar, proporcionando conveniência e rapidez no
        carregamento dos veículos elétricos. Contribua para um futuro mais verde e sustentável com nossas soluções de carregamento elétrico.
       </p>
      ) : (
       <p className='text-white text-lg font-semibold'>Carregador de Carro Elétrico</p>
      )}
     </div>
    </div>
   </div>
   <Footer />
  </div>
 );
};
export default Energy;
