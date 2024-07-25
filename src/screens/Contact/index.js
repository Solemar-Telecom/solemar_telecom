import { useForm } from 'react-hook-form';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Input from '../../components/Input';
import InputXL from '../../components/InputXL';
import Button from '../../components/Button';

const Contact = () => {
 const {
  handleSubmit,
  control,
  formState: { errors },
 } = useForm({
  defaultValues: {
   email: '',
   password: '',
  },
 });

 const postForm = (data) => {};

 return (
  <div className='bg-primar/10'>
   <Header />
   <div className='bg-form bg-cover bg-center'>
    <div className='h-60 flex flex-col justify-center items-start gap-16 pt-16'>
     <div className='h-full w-full flex items-center justify-start pl-32 pt-4 bg-black/50 rounded-sm'>
      <p className='text-white text-4xl font-bold'>Estamos aqui para te ajudar</p>
     </div>
    </div>
    <div className='py-14 px-32 flex gap-10'>
     <div className='w-1/2'></div>
     <form onSubmit={handleSubmit(postForm)} className='flex flex-col items-center p-4 w-1/2 bg-white/50  rounded-md'>
      <Input
       label='Nome Completo'
       name='name'
       control={control}
       placeholder='Insira o seu nome'
       rules={{
        required: 'Campo obrigatório!',
       }}
       error={errors.name}
      />
      <div className='w-full flex items-center gap-4'>
       <Input
        label='E-mail'
        name='email'
        control={control}
        placeholder='Insira o e-mail'
        rules={{
         required: 'Campo obrigatório!',
         pattern: {
          value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
          message: 'E-mail inválido!',
         },
        }}
        error={errors.email}
       />
       <Input
        label='Celular'
        name='celphone'
        control={control}
        placeholder='Insira o seu número de celular'
        rules={{
         required: 'Campo obrigatório!',
         pattern: {
          value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
          message: 'E-mail inválido!',
         },
        }}
        error={errors.celphone}
       />
      </div>
      <div className='w-full flex items-center gap-4'>
       <Input
        label='CEP'
        name='CEP'
        control={control}
        placeholder='Insira o seu CEP'
        rules={{
         required: 'Campo obrigatório!',
        }}
        error={errors.CEP}
       />
       <Input
        label='Cidade'
        name='city'
        control={control}
        placeholder='Insira a sua cidade'
        rules={{
         required: 'Campo obrigatório!',
        }}
        error={errors.city}
       />
       <Input
        label='Estado'
        name='state'
        control={control}
        placeholder='Insira o seu estado'
        rules={{
         required: 'Campo obrigatório!',
        }}
        error={errors.state}
       />
      </div>
      <Input
       label='Assunto'
       name='subject'
       control={control}
       placeholder='Insira o assunto'
       rules={{
        required: 'Campo obrigatório!',
       }}
       error={errors.subject}
      />
      <InputXL
       height='h-28'
       label='Menssagem'
       name='message'
       control={control}
       placeholder='Insira a sua menssagem'
       rules={{
        required: 'Campo obrigatório!',
       }}
       error={errors.message}
      />
      <Button name='Login' width={'w-full'} height={'h-12'} textColor={'text-white'} backgroundColor={'bg-primar'} type='submit' />
     </form>
    </div>
   </div>
   <Footer />
  </div>
 );
};
export default Contact;
