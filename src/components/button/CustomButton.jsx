export const CustomButton = ({ label, className }) => {
  return (
    <button
      className={`md:text-base text-sm leading-custom font-medium p-5  cursor-pointer rounded-xl shadow-btn md:h-[60px] h-[50px] text-center flex justify-center items-center dark:shadow-button-dark w-full text-white bg-gradient-primary  ${className}`}
    >
      {label}
    </button>
  );
};
