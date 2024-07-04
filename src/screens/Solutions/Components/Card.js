import { useNavigate } from 'react-router-dom';

import Button from '../../../components/Button';

const Card = ({ image, title, text, type, url }) => {
 const navigate = useNavigate();

 return (
  <div className={`w-full h-96 flex ${type == 1 ? 'justify-end' : 'justify-start'} gap-5 bg-${image} bg-cover bg-center`}>
   <div className={`w-1/2 h-[350] flex flex-col justify-between bg-black/65 px-20 py-10 ${type == 1 ? 'rounded-l-md' : 'rounded-r-md'}`}>
    <div className='flex flex-col gap-3'>
     <p className='text-3xl font-bold text-white'>{title}</p>
     <p className='text-lg font-semibold text-white'>{text}</p>
    </div>
    <div className={`items-center flex ${type == 1 ? 'justify-end' : 'justify-start'}`}>
     <Button
      name='Saber mais'
      width={'w-1/2'}
      height={'h-12'}
      textColor={'text-white'}
      backgroundColor={'bg-primar'}
      type='submit'
      onClick={() => {
       navigate(url);
      }}
     />
    </div>
   </div>
  </div>
 );
};
export default Card;
