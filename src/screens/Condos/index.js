import { useState } from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Condos = () => {
 const [control, setControl] = useState(false);
 const [intercom, setIntercom] = useState(false);
 const [cam, setCam] = useState(false);
 const [software, setSoftware] = useState(false);

 return (
  <div className='bg-primar/10'>
   <Header />
   <div className='h-96 flex flex-col justify-center items-start gap-16 pt-32 bg-condon bg-cover bg-center'>
    <div className='h-full w-1/3 flex items-center justify-center bg-black/50 rounded-sm'>
     <p className='text-white text-4xl font-bold flex justify-center'>Condomínios</p>
    </div>
   </div>
   <div className='flex items-center'>
    <div
     className='w-1/4 h-96 flex items-end justify-center bg-lock bg-cover bg-center'
     onMouseEnter={() => {
      setControl(true);
     }}
     onMouseLeave={() => {
      setControl(false);
     }}
    >
     <div className={`w-full ${control ? 'h-full' : 'h-1/4'} bg-primar flex items-center justify-center px-5 duration-500`}>
      {control ? (
       <p className='text-white text-lg text-center'>
        Garanta a segurança do seu condomínio com nossos avançados sistemas de controle de acesso. Monitoramento em tempo real e gestão eficiente de
        entradas e saídas asseguram um ambiente protegido para todos.
       </p>
      ) : (
       <p className='text-white text-lg font-semibold'>Controle de acesso</p>
      )}
     </div>
    </div>
    <div
     className='w-1/4 h-96 flex items-end justify-center bg-fone bg-cover bg-center bg-primar/50'
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
        Facilite a comunicação interna com nossos sistemas de interfonia modernos e eficazes. Nossas soluções garantem uma comunicação clara e rápida
        entre os moradores e a administração do condomínio.
       </p>
      ) : (
       <p className='text-white text-lg font-semibold'>Interfonia</p>
      )}
     </div>
    </div>
    <div
     className='w-1/4 h-96 flex items-end justify-center bg-cam bg-cover bg-center bg-primar/50'
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
        Mantenha a vigilância constante com nossas câmeras de alta definição e software de gestão. Com funcionalidades como visão noturna e detecção
        de movimento, você pode monitorar todas as áreas comuns do condomínio com facilidade.
       </p>
      ) : (
       <p className='text-white text-lg font-semibold'>Câmeras de segurança</p>
      )}
     </div>
    </div>
    <div
     className='w-1/4 h-96 flex items-end justify-center bg-software bg-cover bg-center'
     onMouseEnter={() => {
      setSoftware(true);
     }}
     onMouseLeave={() => {
      setSoftware(false);
     }}
    >
     <div className={`w-full ${software ? 'h-full' : 'h-1/4'} bg-primar flex items-center justify-center px-5 duration-500`}>
      {software ? (
       <p className='text-white text-lg text-center'>
        Mantenha a vigilância constante com nossas câmeras de alta definição e software de gestão. Com funcionalidades como visão noturna e detecção
        de movimento, você pode monitorar todas as áreas comuns do condomínio com facilidade.
       </p>
      ) : (
       <p className='text-white text-lg font-semibold'>Software</p>
      )}
     </div>
    </div>
   </div>
   <Footer />
  </div>
 );
};
export default Condos;
