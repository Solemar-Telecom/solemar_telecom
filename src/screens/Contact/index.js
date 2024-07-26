import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import { Slide, toast } from 'react-toastify';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Input from '../../components/Input';
import InputXL from '../../components/InputXL';
import Button from '../../components/Button';
import { useEffect, useState } from 'react';

const Contact = () => {
 const {
  handleSubmit,
  control,
  formState: { errors },
  reset,
 } = useForm({
  defaultValues: {
   name: '',
   email: '',
   celphone: '',
   CEP: '',
   city: '',
   state: '',
   subject: '',
   message: '',
  },
 });

 const [load, setLoad] = useState(false);
 const [disabled, setDisabled] = useState(false);
 const [score, setScore] = useState(0);

 const postForm = async (data) => {
  setLoad(true);
  setDisabled(true);

  try {
   await emailjs.send('service_mdsivmj', 'template_xmcl3ol', data, 'qppAHpd1ZuuG2QJ19');
   toast.success('Seu formulário foi enviado para o nosso email!', {
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
   reset();
   setScore(score + 1);
   setLoad(false);
   setDisabled(false);
  } catch (error) {
   toast.error('Problemas ao enviar o seu formulário!', {
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
   setLoad(false);
   setDisabled(false);
  }
 };

 useEffect(() => {
  if (score > 2) {
   setDisabled(true);
   toast.warn('Limite de envios atingido!', {
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
  }
 }, [score]);

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
          value: /^\(?\d{2}\)?\s?9\d{4}-?\d{4}$/,
          message: 'Numero inválido!',
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
      <Button
       name='Login'
       disabled={disabled}
       loading={load}
       width={'w-full'}
       height={'h-12'}
       textColor={'text-white'}
       backgroundColor={'bg-primar'}
       type='submit'
      />
     </form>
    </div>
   </div>
   <Footer />
  </div>
 );
};
export default Contact;
