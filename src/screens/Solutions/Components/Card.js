import Button from '../../../components/Button';

const Card = ({ image, title, text, type }) => {
 return (
  <div className='w-full h-full flex gap-5 px-20'>
   {type == 1 ? (
    <>
     <div className='w-1/2'>
      <img src={image} style={{ width: '100%' }} />
     </div>
     <div className='w-1/2 h-[350] flex flex-col justify-between '>
      <div className='flex flex-col gap-3'>
       <p className='text-2xl font-bold'>{title}</p>
       <p className='text-lg'>{text}</p>
      </div>
      <div className=' items-center flex justify-end'>
       <Button name='Saber mais' width={'w-1/2'} height={'h-12'} textColor={'text-white'} backgroundColor={'bg-primar'} type='submit' />
      </div>
     </div>
    </>
   ) : (
    <>
     <div className='w-1/2 h-[350] flex flex-col justify-between '>
      <div className='flex flex-col gap-3'>
       <p className='text-2xl font-bold'>{title}</p>
       <p className='text-lg'>{text}</p>
      </div>
      <div className='flex items-start  justify-start'>
       <Button name='Saber mais' width={'w-1/2'} height={'h-12'} textColor={'text-white'} backgroundColor={'bg-primar'} type='submit' />
      </div>
     </div>
     <div className='w-1/2'>
      <img src={image} style={{ width: '100%' }} />
     </div>
    </>
   )}
  </div>
 );
};
export default Card;
