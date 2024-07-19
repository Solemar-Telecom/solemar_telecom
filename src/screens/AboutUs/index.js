import Header from '../../components/Header';
import Footer from '../../components/Footer';

const AboutUs = () => {
 return (
  <div className='bg-primar/10'>
   <Header />
   <div className='h-96 flex flex-col justify-center items-start gap-16 pt-16 bg-aboutus bg-cover bg-center'>
    <div className='h-full w-full flex items-center justify-center pt-4 bg-black/50 rounded-sm'>
     <p className='text-white text-4xl font-bold flex justify-center'>Solemar Telecom</p>
    </div>
   </div>
   <div className='py-14 px-32 flex flex-col gap-5'>
    <div className='flex flex-col gap-2'>
     <p className='text-3xl font-bold text-primar'>Quem somos?</p>
     <p className='text-lg'>
      Há mais de 28 anos, atuamos na área de tecnologia, sempre buscando agregar soluções inovadoras ao nosso portfólio. Desde nossa fundação em 1996,
      temos nos dedicado a fornecer aos nossos clientes um parceiro com profundo conhecimento em diversas soluções tecnológicas. Começamos como uma
      empresa de telefonia parceira da Siemens, e ao longo dos anos, expandimos nossa atuação para acompanhar as novas tecnologias de comunicação.
     </p>
    </div>
    <div className='flex flex-col gap-2'>
     <p className='text-3xl font-bold text-primar'>O que fazemos?</p>
     <p className='text-lg'>
      Com o surgimento de novas demandas, ampliamos nossa expertise para as áreas de rede e segurança eletrônica. Atualmente, temos uma parceria
      sólida com a Intelbrás, que nos permite oferecer soluções tecnológicas abrangentes para voz, dados, imagens, controle de acesso, energia solar,
      entre outras. Nosso compromisso é proporcionar um suporte completo e de alta qualidade, garantindo que nossos clientes tenham acesso às melhores
      e mais modernas soluções disponíveis no mercado.
     </p>
    </div>
    <div className='flex flex-col gap-2'>
     <p className='text-3xl font-bold text-primar'>Onde estamos?</p>
     <p className='text-lg'>
      Estamos localizados em todo o estado de São Paulo, oferecendo nossos serviços com eficiência e qualidade. Nossa abrangência nos permite atender
      clientes em todas as regiões do estado, garantindo suporte e soluções tecnológicas de ponta onde quer que estejam. Além disso, expandimos nossa
      atuação para outros estados quando necessário, assegurando que nossos clientes recebam o melhor atendimento e as melhores soluções,
      independentemente de sua localização.
     </p>
    </div>
    <div className='flex flex-col gap-2'>
     <p className='text-3xl font-bold text-primar'>Parceria Intelbras</p>
     <p className='text-lg'>
      Temos o orgulho de ser autorizados e certificados pela Intelbras, uma das principais referências em soluções tecnológicas no Brasil. Essa
      certificação confirma nosso compromisso com a qualidade, a inovação e a excelência em todos os nossos serviços e produtos.
     </p>
     <p className='text-lg'>
      Como parceiros certificados da Intelbras, oferecemos uma ampla gama de soluções que atendem aos mais altos padrões do mercado, garantindo
      segurança, conectividade e eficiência para nossos clientes. Seja na implementação de sistemas de segurança, infraestrutura de rede ou soluções
      de energia, você pode confiar na Solemar Telecom para entregar resultados confiáveis e de alta performance.
     </p>
     <p className='text-lg'>
      Nosso relacionamento com a Intelbras nos permite estar sempre atualizados com as últimas tecnologias e melhores práticas do setor,
      proporcionando a você, nosso cliente, as melhores soluções do mercado. Conte com a Solemar Telecom e a Intelbras para transformar suas
      necessidades em realidade.
     </p>
    </div>
    <div className='flex flex-col gap-2'>
     <p className='text-3xl font-bold text-primar'>Missão Valores e Política</p>
     <p className='text-lg'>
      Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it
      over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,
      consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
      Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
      BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
      amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.
      Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by
      English versions from the 1914 translation by H. Rackham.
     </p>
    </div>
   </div>
   <Footer />
  </div>
 );
};
export default AboutUs;
