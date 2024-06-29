import { BsInstagram, BsLinkedin } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';
import Logo from '../Logo';

const Footer = () => {
 return (
  <div className='w-full h-40 bg-secondar px-32 text-white flex items-start justify-between pt-6'>
   <div className='w-64 flex flex-col gap-2'>
    <p className='text-lg font-semibold'>Conectados com Você</p>
    <p className='text-xs '>
     Oferecemos soluções de segurança, conectividade e energia que você pode confiar. Garantindo qualidade e inovação para sua casa e negócio.
    </p>
   </div>
   <div>
    <p className='text-sm text-border'>Contatos</p>
    <div className='py-1'>
     <p>+55 (11)981467352</p>
     <p>solemarti@mail.com</p>
    </div>
   </div>
   <div>
    <p className='text-sm text-border'>Redeis Sociais</p>
    <div className='py-3 flex gap-2 items-center justify-center'>
     <BsInstagram className='text-2xl cursor-pointer' />
     <FaFacebook className='text-2xl cursor-pointer' />
     <BsLinkedin className='text-2xl cursor-pointer' />
    </div>
   </div>
   <Logo width={120} />
  </div>
 );
};
export default Footer;
