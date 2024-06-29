import Header from '../../components/Header';
import Card from './Components/Card';

import Cabes from '../../images/jpg/Cabes.jpg';
import Footer from '../../components/Footer';

const Solutions = () => {
 return (
  <div className='bg-primar/10'>
   <Header />
   <div class='px-32 pb-11 flex flex-col gap-16'>
    <p className='text-4xl font-bold'>Soluções</p>
    <div className='flex flex-col gap-20'>
     <Card
      type={1}
      image={Cabes}
      title='Condomínios'
      text='Entendemos as necessidades específicas dos condomínios em termos de segurança, conectividade e eficiência. Por isso, oferecemos uma gama de soluções integradas que proporcionam tranquilidade e comodidade para todos os moradores e administradores.'
     />
     <Card
      image={Cabes}
      title='Pequenas e Médias Empresas'
      text='Desafios únicos que as pequenas empresas enfrentam e oferecemos soluções tecnológicas sob medida para ajudá-las a crescer e prosperar. Nosso compromisso é fornecer serviços de alta qualidade que impulsionem sua eficiência, segurança e conectividade.'
     />
     <Card
      type={1}
      image={Cabes}
      title='Grandes Empresas'
      text='Sabemos que grandes empresas enfrentam desafios complexos e exigem soluções tecnológicas robustas e personalizadas. Oferecemos uma gama de serviços que atendem às necessidades específicas de grandes organizações, garantindo segurança, eficiência e conectividade de alta qualidade.'
     />
     <Card
      image={Cabes}
      title='Agronegócio'
      text='A importância do agronegócio e os desafios únicos que esse setor enfrenta. Oferecemos soluções tecnológicas avançadas para aumentar a eficiência, segurança e sustentabilidade das operações agrícolas, ajudando a maximizar a produtividade e a rentabilidade.'
     />
    </div>
   </div>
   <Footer />
  </div>
 );
};
export default Solutions;
