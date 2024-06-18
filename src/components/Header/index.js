import Logo from '../Logo';

const Header = () => {
 return (
  <div class='flex items-center gap-24'>
   <Logo width='120px' />
   <div class='w-full flex items-center justify-between'>
    <div class='w-20 flex items-center justify-center'>
     <p class='text-base font-medium cursor-pointer hover:text-primar hover:text-lg duration-200'>Soluções</p>
    </div>
    <div class='w-20 flex items-center justify-center'>
     <p class='text-base font-medium cursor-pointer hover:text-primar hover:text-lg duration-200'>Produtos</p>
    </div>
    <div class='w-20 flex items-center justify-center'>
     <p class='text-base font-medium cursor-pointer hover:text-primar hover:text-lg duration-200'>Contato</p>
    </div>
    <div class='w-24 flex items-center justify-center'>
     <p class='text-base font-medium cursor-pointer hover:text-primar hover:text-lg duration-200'>Sobre nós</p>
    </div>
   </div>
  </div>
 );
};
export default Header;
