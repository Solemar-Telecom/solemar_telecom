import { useNavigate } from 'react-router-dom';

import Logo from '../Logo';

const Header = () => {
 const navigate = useNavigate();

 return (
  <div class='w-full px-32 mb-14 py-3 flex items-center gap-24 rounded-b-2xl'>
   <div
    className='cursor-pointer'
    onClick={() => {
     navigate('/home');
    }}
   >
    <Logo width={120} />
   </div>
   <div className='min-h-10 min-w-0.5 bg-secondar rounded-full'></div>
   <div class='w-full flex items-center justify-between bg-secondar px-10 py-2 rounded-full'>
    <div class=' flex items-center justify-center'>
     <p
      class='text-white font-medium cursor-pointer hover:text-lg hover:underline py-1 rounded-full duration-200'
      onClick={() => {
       navigate('/solutions');
      }}
     >
      Soluções
     </p>
    </div>
    <div class=' flex items-center justify-center'>
     <p class='text-white font-medium cursor-pointer hover:text-lg hover:underline py-1 rounded-full duration-200'>Produtos</p>
    </div>
    <div class=' flex items-center justify-center'>
     <p class='text-white font-medium cursor-pointer hover:text-lg hover:underline py-1 rounded-full duration-200'>Contato</p>
    </div>
    <div class='flex items-center justify-center'>
     <p class='text-white font-medium cursor-pointer hover:text-lg hover:underline py-1 rounded-full duration-200'>Sobre nós</p>
    </div>
   </div>
  </div>
 );
};
export default Header;
