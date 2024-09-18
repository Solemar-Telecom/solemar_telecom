import { BsInstagram, BsWhatsapp } from 'react-icons/bs';
import { Slide, toast } from 'react-toastify';

import LogoImage from '../../images/png/Logo.png';

const Footer = () => {
 const playToast = (text) => {
  toast.success(text, {
   position: 'top-right',
   autoClose: 5000,
   hideProgressBar: false,
   closeOnClick: true,
   pauseOnHover: true,
   draggable: true,
   progress: undefined,
   theme: 'light',
   transition: Slide,
  });
 };

 return (
  <div className='w-full h-40 max-md:h-32 bg-secondar px-32 max-md:px-5 text-white flex items-start max-md:items-center justify-between pt-6 max-md:pt-2'>
   <div className='w-64 flex flex-col gap-2 max-md:hidden'>
    <p className='text-lg font-semibold'>Conectados com Você</p>
    <p className='text-xs '>
     Oferecemos soluções de segurança, conectividade e energia que você pode confiar. Garantindo qualidade e inovação para sua casa e negócio.
    </p>
   </div>
   <div>
    <p className='text-sm text-border'>Contatos</p>
    <div className='py-1'>
     <p
      className='cursor-pointer max-md:text-xs'
      onClick={() => {
       navigator.clipboard.writeText('(11)981467352');
       playToast('Número copiado!');
      }}
     >
      +55 (11)981467352
     </p>
     <p
      className='cursor-pointer max-md:text-xs'
      onClick={() => {
       navigator.clipboard.writeText('(11)981467352');
       playToast('Número copiado!');
      }}
     >
      +55 (11)4171-9954
     </p>
     <p
      className='cursor-pointer max-md:text-xs'
      onClick={() => {
       //    window.location.href = 'mailto:marcio@solemarti.com.br?subject=Assunto%20do%20Email&body=Corpo%20do%20Email';
       navigator.clipboard.writeText('marcio@solemarti.com.br');
       playToast('Email copiado!');
      }}
     >
      marcio@solemarti.com.br
     </p>
    </div>
   </div>
   <div>
    <p className='text-sm text-border'>Redeis Sociais</p>
    <div className='py-3 flex gap-3 items-center justify-center'>
     <BsInstagram
      className='text-2xl max-md:text-sm cursor-pointer'
      onClick={() => {
       window.open('https://www.instagram.com/solemartelecom/');
      }}
     />
     <BsWhatsapp
      className='text-2xl max-md:text-sm cursor-pointer'
      onClick={() => {
       window.open(
        'https://wa.me/5511981467352?text=Ol%C3%A1!%20Vim%20atrav%C3%A9s%20do%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%2C%20por%20favor.',
       );
      }}
     />
    </div>
   </div>
   {/* <Logo width={120} /> */}
   <img src={LogoImage} className='w-32 max-md:w-9' />
  </div>
 );
};
export default Footer;
