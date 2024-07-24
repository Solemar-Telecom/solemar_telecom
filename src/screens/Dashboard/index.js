import { useNavigate } from 'react-router-dom';

import Header from '../../components/Header';
import Button from '../../components/Button';

import Lok from '../../images/jpg/FechaduraDigital.jpg';
import Condominium from '../../images/jpg/Condominium.jpg';
import SolarEnergy from '../../images/jpg/SolarEnergy.jpg';
import Company from '../../images/jpg/Company.jpg';
import Footer from '../../components/Footer';
import Carousel from '../../components/Carousel';

const Dashboard = () => {
 const navigate = useNavigate();

 return (
  <div className='bg-primar/10'>
   <Header />
   <div class='px-32 mb-11 flex flex-col gap-16 pt-32'>
    <Carousel text1='Estamos a mais de 28 anos no mercado de tecnologia, atendendo com a melhor qualidade e atenção necessária para a satisfação de nossos clientes, sejam eles residenciais, empresas ou condomínios.' />
    <div className='flex items-center gap-14'>
     <img src={Lok} className='h-[500px] rounded-md' />
     <div className='flex flex-col gap-16 '>
      <div className='flex flex-col gap-4'>
       <p className='text-4xl font-bold'>Na Solemar Telecom, estamos ao seu lado em cada passo do caminho</p>
       <p>
        Proporcionando segurança, conectividade e energia tanto em casa quanto no trabalho. Confie em nossa experiência para manter sua vida e seus
        negócios sempre conectados e protegidos.
       </p>
      </div>
      <div className='flex justify-start'>
       <Button
        name='Saber mais'
        width={'w-1/2'}
        height={'h-12'}
        textColor={'text-white'}
        backgroundColor={'bg-primar'}
        type='submit'
        onClick={() => {
         navigate('/aboutus');
        }}
       />
      </div>
     </div>
    </div>
    <div className='flex flex-col gap-4'>
     <p className='text-3xl font-bold '>Onde você pode utilizar nossos serviços ?</p>
     <ul className='flex items-center rounded-md'>
      <li
       className='relative bg-slate-900 w-1/3 h-80 hover:w-2/3 duration-1000 cursor-pointer rounded-tl-md rounded-bl-md'
       onClick={() => {
        navigate('/solutions/condos');
       }}
      >
       <img src={Condominium} className='w-full h-full object-cover rounded-tl-md rounded-bl-md' />
       <div className='flex items-center p-3 absolute bottom-0 bg-black/50 w-full h-1/3'>
        <p className='text-2xl font-medium text-white'>Condomínios</p>
       </div>
      </li>
      <li
       className='relative bg-slate-900 w-1/3 h-80 hover:w-2/3 duration-1000 cursor-pointer'
       onClick={() => {
        navigate('/solutions/companies');
       }}
      >
       <img src={Company} className='w-full h-full object-cover' />
       <div className='flex items-center p-3 absolute bottom-0 bg-black/50 w-full h-1/3'>
        <p className='text-2xl font-medium text-white'>Empresas</p>
       </div>
      </li>
      <li
       className='relative bg-slate-900 w-1/3 h-80 hover:w-2/3 duration-1000 cursor-pointer rounded-tr-md rounded-br-md'
       onClick={() => {
        navigate('/solutions/energy');
       }}
      >
       <img src={SolarEnergy} className='w-full h-full object-cover rounded-tr-md rounded-br-md' />
       <div className='flex items-center p-3 absolute bottom-0 bg-black/50 w-full h-1/3'>
        <p className='text-2xl font-medium text-white'>Energia</p>
       </div>
      </li>
     </ul>
    </div>
    <div className='flex flex-col gap-4 px-36 py-4'>
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
       <div
        className=' flex w-3/4 h-80 cursor-pointer bg-locks bg-cover bg-center rounded-md'
        onClick={() => {
         navigate('/solutions/condos');
        }}
       >
        <div className='w-full h-full flex items-center justify-center hover:bg-black/50 duration-1000 rounded-md'>
         <p className='text-4xl font-bold text-white'>CONTROLE DE ACESSO</p>
        </div>
       </div>
       <div
        className=' flex w-1/4 h-80 cursor-pointer bg-cabes bg-cover bg-center rounded-md'
        onClick={() => {
         navigate('/solutions/companies');
        }}
       >
        <div className='w-full h-full flex items-center justify-center hover:bg-black/50 duration-1000 rounded-md'>
         <p className='text-4xl font-bold text-white'>REDES</p>
        </div>
       </div>
      </div>
      <div className='flex gap-3'>
       <div
        className=' flex w-1/4 h-80 cursor-pointer bg-cams bg-cover bg- rounded-md'
        onClick={() => {
         navigate('/solutions/condos');
        }}
       >
        <div className='w-full h-full flex items-center justify-center hover:bg-black/50 duration-1000 rounded-md'>
         <p className='text-4xl font-bold text-white'>CÂMERAS</p>
        </div>
       </div>
       <div
        className=' flex w-3/4 h-80 cursor-pointer bg-solar bg-cover bg-center rounded-md'
        onClick={() => {
         navigate('/solutions/energy');
        }}
       >
        <div className='w-full h-full flex items-center justify-center hover:bg-black/50 duration-1000 rounded-md'>
         <p className='text-4xl font-bold text-white'>ENERGIA SOLAR</p>
        </div>
       </div>
      </div>
     </div>
    </div>
   </div>
   <Footer />
  </div>
 );
};

export default Dashboard;
