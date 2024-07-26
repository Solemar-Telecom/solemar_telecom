import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Logo from '../../images/png/Logo.png';

const Carousel = ({ image1, image2, div2, image3, div3 }) => {
 const settings = {
  dots: true,
  infinite: true,
  speed: 900,
  slidesToShow: 1,
  slidesToScroll: 1,
  //   autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  arrows: false,
 };

 return (
  <Slider {...settings}>
   <div className='h-96 rounded-l-md bg-primar/80'>
    <div className='flex flex-row h-full w-full'>
     <div className='w-2/3 h-full bg-cabes2 bg-cover bg-center rounded-r-[170px]' />
     <div className='w-1/3 pl-9 p-10 flex flex-col gap-3 justify-center items-center'>
      <p className='text-2xl font-bold text-white'>Estamos a mais de 28 anos no mercado de tecnologia</p>
      <p className='font-medium text-white'>
       Atendendo com a melhor qualidade e atenção necessária para a satisfação de nossos clientes, sejam eles residenciais, empresas ou condomínios.
      </p>
     </div>
    </div>
   </div>
   <div className=' h-96 bg-gradient-to-r from-primar/80  to-green1 '>
    <div className='w-full h-full p-10 flex flex-col gap-5 relative'>
     <p className='text-3xl font-bold text-white'>Não perca mais o seu tempo!</p>
     <div className='w-full flex '>
      <div className='w-1/2 flex flex-col gap-14'>
       <p className='text-xl font-medium text-white'>
        Garantimos que você receba o que há de melhor em tecnologia para voz, dados, imagens, controle de acesso e energia{' '}
       </p>
       <p className=' w-full text-xl font-medium text-white'>
        Eficiência, segurança e inovação para o seu negócio. Confie em quem entende do assunto. Confie na Solemar Telecom.
       </p>
      </div>
      <div className='w-1/2 flex flex-col justify-center items-center gap-2'>
       <p className='text-xl font-medium text-white'>Experiência e Credibilidade</p>
       <p className='text-xl font-medium text-white'>Parceria Sólida</p>
       <p className='text-xl font-medium text-white'>Soluções Completas</p>
       <p className='text-xl font-medium text-white'>Suporte Especializado</p>
      </div>
     </div>
     <img src={Logo} className='w-28 absolute right-10 bottom-10' />
    </div>
   </div>
   <div className={`h-96 rounded-r-md bg-green1`}>
    <div className='flex flex-row h-full w-full'>
     <div className='w-1/3 pl-9 p-10 flex flex-col gap-3 justify-center items-center'>
      <p className='text-2xl font-bold text-white'>Temos o orgulho de ser autorizados e certificados pela Intelbras</p>
      <p className='font-medium text-white'>
       Essa parceria garante que nossos serviços e produtos atendem aos mais altos padrões de qualidade e inovação, proporcionando segurança,
       conectividade e eficiência para nossos clientes.
      </p>
     </div>
     <div className='w-2/3 h-full bg-equipment bg-cover bg-center rounded-l-[170px]' />
    </div>
   </div>
  </Slider>
 );
};

export default Carousel;
