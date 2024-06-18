import LogoImage from '../../images/png/Logo.png';

const Logo = ({ width }) => {
 return (
  <div>
   <img src={LogoImage} style={{ width: width }} />
   {/* <p>SOLEMAR</p> */}
  </div>
 );
};
export default Logo;
