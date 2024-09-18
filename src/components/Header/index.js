import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import LogoImage from '../../images/png/Logo.png';

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
   className={`w-full h-20 px-32 max-md:px-2 mb-14 py-3 max-md:py-1 flex items-center justify-between rounded-b-2xl fixed z-30 ${scrollHeight > 40 && 'opacity-65'} bg-secondar md:hover:opacity-100 duration-700`}
  >
   <div
    className='cursor-pointer w-96 max-md:w-16 h-full flex justify-center max-md:hidden'
    onClick={() => {
     navigate('/home');
    }}
   >
    <img src={LogoImage} className='h-full' />
   </div>
   <div className='w-full flex items-center justify-center'>
    <div class='flex items-center gap-16 max-md:gap-4 px-10 max-md:px-0 py-2 rounded-full'>
     <div
      class='flex items-center justify-center md:hover:border-b-2'
      onClick={() => {
       navigate('/home');
      }}
     >
      <p class='text-white font-medium cursor-pointer text-lg max-md:text-sm md:hover:text-xl  py-1 rounded-full duration-200'>Home</p>
     </div>
     <div
      class='flex items-center justify-center md:hover:border-b-2'
      onClick={() => {
       navigate('/solutions');
      }}
     >
      <p class='text-white font-medium cursor-pointer text-lg max-md:text-sm md:hover:text-xl py-1 rounded-full duration-200'>Soluções</p>
     </div>
     <div
      class='min-w-32 max-md:min-w-20 flex items-center justify-center md:hover:border-b-2 '
      onClick={() => {
       navigate('/aboutus');
      }}
     >
      <p class='text-white font-medium cursor-pointer text-lg max-md:text-sm md:hover:text-xl py-1 rounded-full duration-200'>Sobre nós</p>
     </div>
    </div>
   </div>
   <div className='w-48 max-md:hidden'>
    <Button
     name='Entre em contato'
     width={'w-48'}
     height={'h-12'}
     textColor={'text-white'}
     backgroundColor={'bg-primar'}
     type='submit'
     onClick={() => {
      navigate('/contact');
     }}
    />
   </div>
   <div className='w-20 md:hidden'>
    <Button
     name='Contato'
     width={'w-20'}
     height={'h-10'}
     fontSize={'text-xs'}
     textColor={'text-white'}
     backgroundColor={'bg-primar'}
     type='submit'
     onClick={() => {
      navigate('/contact');
     }}
    />
   </div>
  </div>
 );
};
export default Header;
