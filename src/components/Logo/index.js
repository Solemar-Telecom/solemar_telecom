import LogoImage from '../../images/png/Logo.png';

const Logo = ({ width }) => {
 return (
  <div>
   <img src={LogoImage} style={{ width: width }} />
  </div>
 );
};
export default Logo;
