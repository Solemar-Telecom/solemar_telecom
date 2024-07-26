import Loading from '../../images/gif/Loading.gif';

const Button = ({ name, disabled, loading, onClick, type, width, height, backgroundColor, border, textColor, fontSize }) => {
 return (
  <button
   className={`
             px-3 rounded-full font-mediumc text-base
             ${textColor ? textColor : 'text-white'}
             ${border}
             ${width}
             ${height}
             ${backgroundColor}
             ${fontSize}
             `}
   disabled={disabled}
   onClick={onClick}
   type={type}
  >
   {loading ? (
    <div className='w-full h-full flex items-center justify-center'>
     <img src={Loading} alt='Loading' width={'40px'} />
    </div>
   ) : (
    name
   )}
  </button>
 );
};

export default Button;
