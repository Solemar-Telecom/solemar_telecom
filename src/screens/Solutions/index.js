import Header from '../../components/Header';
import Card from './Components/Card';

import Footer from '../../components/Footer';

const Solutions = () => {
 return (
  <div className='bg-primar/10'>
   <Header />
   <div class='flex flex-col gap-16 pt-32'>
    <p className='text-4xl font-bold flex justify-center'>S O L U Ç Õ E S</p>
    <div className='flex flex-col'>
     <Card
      type={1}
      image={'condon'}
      title='Condomínios'
      text='Entendemos as necessidades específicas dos condomínios em termos de segurança, conectividade e eficiência. Por isso, oferecemos uma gama de soluções integradas que proporcionam tranquilidade e comodidade para todos os moradores e administradores.'
      url='/solutions/condos'
     />
     <Card
      image={'companies'}
      title='Empresas'
      text='Desafios únicos que as pequenas empresas enfrentam e oferecemos soluções tecnológicas sob medida para ajudá-las a crescer e prosperar. Nosso compromisso é fornecer serviços de alta qualidade que impulsionem sua eficiência, segurança e conectividade.'
      url='/solutions/companies'
     />
     <Card
      type={1}
      image={'energy'}
      title='Energia'
      text='Oferecemos soluções inovadoras em energia sustentável que ajudam a reduzir custos e o impacto ambiental. Nossas tecnologias de ponta garantem eficiência energética e fornecimento confiável para diversas necessidades, desde residências até grandes empresas e propriedades rurais.'
      url='/solutions/energy'
     />
     {/* <Card
      image={'cabes'}
      title='Agronegócio'
      text='A importância do agronegócio e os desafios únicos que esse setor enfrenta. Oferecemos soluções tecnológicas avançadas para aumentar a eficiência, segurança e sustentabilidade das operações agrícolas, ajudando a maximizar a produtividade e a rentabilidade.'
     /> */}
    </div>
   </div>
   <Footer />
  </div>
 );
};
export default Solutions;
