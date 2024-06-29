const Button = ({ name, disabled, onClick, type, width, height, backgroundColor, border, textColor, fontSize }) => {
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
   {name}
  </button>
 );
};

export default Button;
