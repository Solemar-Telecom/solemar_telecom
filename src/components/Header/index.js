import { useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

import Logo from '../Logo';
import Button from '../Button';

const Header = () => {
 const navigate = useNavigate();
 const [scrollHeight, setScrollHeight] = useState(0);

 useEffect(() => {
  const handleScroll = () => {
   setScrollHeight(window.scrollY);
  };

  window.addEventListener('scroll', handleScroll);

  return () => {
   window.removeEventListener('scroll', handleScroll);
  };
 }, []);

 return (
  <div
   class={`w-full h-20 px-32 mb-14 py-3 flex items-center justify-between gap-36 rounded-b-2xl fixed z-20 ${scrollHeight > 40 && 'opacity-65'} bg-secondar hover:bg-secondar duration-700`}
  >
   <div
    className='cursor-pointer w-96 flex justify-center'
    onClick={() => {
     navigate('/home');
    }}
   >
    <Logo width={60} />
   </div>
   <div className='w-full flex items-center justify-center'>
    <div class='w-[500px] flex items-center justify-between px-10 py-2 rounded-full'>
     <div class='flex items-center justify-center hover:border-b-2'>
      <p
       class='text-white font-medium cursor-pointer text-lg hover:text-xl  py-1 rounded-full duration-200'
       onClick={() => {
        navigate('/home');
       }}
      >
       Home
      </p>
     </div>
     <div class='flex items-center justify-center hover:border-b-2'>
      <p
       class='text-white font-medium cursor-pointer text-lg hover:text-xl  py-1 rounded-full duration-200'
       onClick={() => {
        navigate('/solutions');
       }}
      >
       Soluções
      </p>
     </div>
     <div class=' flex items-center justify-center hover:border-b-2'>
      <p class='text-white font-medium cursor-pointer text-lg hover:text-xl  py-1 rounded-full duration-200'>Produtos</p>
     </div>

     <div class='flex items-center justify-center hover:border-b-2'>
      <p class='text-white font-medium cursor-pointer text-lg hover:text-xl py-1 rounded-full duration-200'>Sobre nós</p>
     </div>
    </div>
   </div>
   <div className='w-48'>
    <Button name='Entre em contato' width={'w-48'} height={'h-12'} textColor={'text-white'} backgroundColor={'bg-primar'} type='submit' />
   </div>
  </div>
 );
};
export default Header;
