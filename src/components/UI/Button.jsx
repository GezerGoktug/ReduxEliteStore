const Button = ({ children, className, onClick, isDisabled, type }) => {
  return (
    <button
      type={type || "button"}
      disabled={isDisabled || false}
      onClick={onClick}
      className={` flex justify-center cursor-pointer items-center gap-1 sm:gap-2 px-2 sm:px-4 py-2  text-base rounded-lg transition-colors ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
