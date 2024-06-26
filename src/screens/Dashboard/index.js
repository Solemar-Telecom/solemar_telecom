import Header from '../../components/Header';
import Button from '../../components/Button';

import Cabes from '../../images/jpg/Cabes.jpg';

const Dashboard = () => {
 return (
  <div class='ml-32 mr-32 mb-11 flex flex-col gap-16'>
   <Header />
   <div className='flex items-center gap-14'>
    <img src={Cabes} style={{ width: '600px' }} />
    <div className='flex flex-col gap-3'>
     <p className='text-4xl font-bold'>Na Solemar Telecom, estamos ao seu lado em cada passo do caminho</p>
     <p>
      Proporcionando segurança, conectividade e energia tanto em casa quanto no trabalho. Confie em nossa experiência para manter sua vida e seus
      negócios sempre conectados e protegidos.
     </p>
     <Button />
    </div>
   </div>
   <div className='flex flex-col gap-4'>
    <p className='text-3xl font-bold '>Onde você pode utilizar nossos serviços ?</p>
    <ul className='flex items-center'>
     <li className='relative bg-slate-900 w-1/4 h-80 hover:w-2/4 duration-1000 cursor-pointer'>
      <img src={Cabes} className='w-full h-full object-cover' />
      <div className='flex items-center p-3 absolute bottom-0 bg-black/50 w-full h-1/3'>
       <p className='text-2xl font-medium text-white'>Condomínios</p>
      </div>
     </li>
     <li className='relative bg-slate-900 w-1/4 h-80 hover:w-2/4 duration-1000 cursor-pointer'>
      <img src={Cabes} className='w-full h-full object-cover' />
      <div className='flex items-center p-3 absolute bottom-0 bg-black/50 w-full h-1/3'>
       <p className='text-2xl font-medium text-white'>Pequenas e médias empresas</p>
      </div>
     </li>
     <li className='relative bg-slate-900 w-1/4 h-80 hover:w-2/4 duration-1000 cursor-pointer'>
      <img src={Cabes} className='w-full h-full object-cover' />
      <div className='flex items-center p-3 absolute bottom-0 bg-black/50 w-full h-1/3'>
       <p className='text-2xl font-medium text-white'>Grandes empresas ou projtos</p>
      </div>
     </li>
     <li className='relative bg-slate-900 w-1/4 h-80 hover:w-2/4 duration-1000 cursor-pointer'>
      <img src={Cabes} className='w-full h-full object-cover' />
      <div className='flex items-center p-3 absolute bottom-0 bg-black/50 w-full h-1/3'>
       <p className='text-2xl font-medium text-white'>Agronegócio</p>
      </div>
     </li>
    </ul>
   </div>
   <div className='flex flex-col gap-4 px-36'>
    <p className='text-3xl font-bold text-center'>Somos mais do que um fornecedor de serviços</p>
    <p className='text-xl text-center'>
     Somos seu parceiro de confiança. Estamos comprometidos em oferecer soluções que fazem a diferença no seu dia a dia, garantindo segurança,
     eficiência e inovação em todas as nossas entregas.
    </p>
   </div>
   <div className='flex flex-col gap-4'>
    <div className='flex justify-end gap-3'>
     <p className='text-3xl font-bold text-right'>Quais são os nossos serviços ?</p>
     <Button />
    </div>
    <div className='flex flex-col gap-3'>
     <div className='flex gap-3'>
      <div className='relative bg-slate-900 w-3/4 h-80 duration-1000 cursor-pointer'>
       <img src={Cabes} className='w-full h-full object-cover' />
       <div className='w-full h-full flex items-center justify-center absolute bottom-0 hover:bg-black/50'>
        <p className='text-4xl font-bold text-white'>CONTROLE DE ACESSO</p>
       </div>
      </div>
      <div className='relative bg-slate-900 w-1/4 h-80 duration-1000 cursor-pointer'>
       <img src={Cabes} className='w-full h-full object-cover' />
       <div className='w-full h-full flex items-center justify-center absolute bottom-0 hover:bg-black/50'>
        <p className='text-4xl font-bold text-white'>REDES</p>
       </div>
      </div>
     </div>
     <div className='flex gap-3'>
      <div className='relative bg-slate-900 w-1/4 h-80 duration-1000 cursor-pointer'>
       <img src={Cabes} className='w-full h-full object-cover' />
       <div className='w-full h-full flex items-center justify-center absolute bottom-0 hover:bg-black/50'>
        <p className='text-4xl font-bold text-white'>CÂMERAS</p>
       </div>
      </div>
      <div className='relative bg-slate-900 w-3/4 h-80 duration-1000 cursor-pointer'>
       <img src={Cabes} className='w-full h-full object-cover' />
       <div className='w-full h-full flex items-center justify-center absolute bottom-0 hover:bg-black/50'>
        <p className='text-4xl font-bold text-white'>ENERGIA SOLAR</p>
       </div>
      </div>
     </div>
    </div>
   </div>
  </div>
 );
};

export default Dashboard;
