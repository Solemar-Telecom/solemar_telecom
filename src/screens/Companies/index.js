import { useState } from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Companies = () => {
 const [control, setControl] = useState(false);
 const [intercom, setIntercom] = useState(false);
 const [cam, setCam] = useState(false);
 const [software, setSoftware] = useState(false);

 return (
  <div className='bg-primar/10'>
   <Header />
   <div className='h-96 flex flex-col justify-center items-start gap-16 pt-32 bg-companies bg-cover bg-center'>
    <div className='h-full w-1/3 flex items-center justify-center bg-black/50 rounded-sm'>
     <p className='text-white text-4xl font-bold flex justify-center'>Empresas</p>
    </div>
   </div>
   <div className='flex items-center'>
    <div
     className='w-1/4 h-96 flex items-end justify-center bg-clound bg-cover bg-center'
     onMouseEnter={() => {
      setIntercom(true);
     }}
     onMouseLeave={() => {
      setIntercom(false);
     }}
    >
     <div className={`w-full ${intercom ? 'h-full' : 'h-1/4'} bg-primar flex items-center justify-center px-5 duration-500 `}>
      {intercom ? (
       <p className='text-white text-lg text-center'>
        Modernize sua comunicação com nossas soluções de telefonia em nuvem. Proporcionamos chamadas de alta qualidade, flexibilidade e integração com
        outros sistemas, ajudando sua empresa a se comunicar de maneira eficaz e profissional.
       </p>
      ) : (
       <p className='text-white text-lg font-semibold'>Telefonia em nuvem</p>
      )}
     </div>
    </div>
    <div
     className='w-1/4 h-96 flex items-end justify-center bg-cabes3 bg-cover bg-center'
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
        Garantimos conectividade rápida e estável com nossas soluções completas de rede. Desde a instalação até a manutenção, nossa equipe
        especializada cuida de tudo para que você possa se concentrar no que realmente importa: o crescimento do seu negócio.
       </p>
      ) : (
       <p className='text-white text-lg font-semibold'>Redes</p>
      )}
     </div>
    </div>
    <div
     className='w-1/4 h-96 flex items-end justify-center'
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
        Otimize a gestão da sua frota com nossas soluções avançadas de monitoramento e rastreamento. Oferecemos ferramentas de análise de dados e
        rastreamento em tempo real para melhorar a eficiência operacional e reduzir custos.
       </p>
      ) : (
       <p className='text-white text-lg font-semibold'>Controle de frota</p>
      )}
     </div>
    </div>
    <div
     className='w-1/4 h-96 flex items-end justify-center bg-digitalLock bg-cover bg-center'
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
        Implemente sistemas avançados de controle de acesso para proteger suas instalações. Oferecemos monitoramento em tempo real e gestão eficiente
        de entradas e saídas, garantindo segurança máxima para seus colaboradores e ativos.
       </p>
      ) : (
       <p className='text-white text-lg font-semibold'>Controle de acesso</p>
      )}
     </div>
    </div>
   </div>
   <Footer />
  </div>
 );
};
export default Companies;
