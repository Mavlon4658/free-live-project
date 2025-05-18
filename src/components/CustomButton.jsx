export const CustomButton = ({ label, to, grayBtn, className }) => {
  return (
    <a
      href={to}
      className={`md:text-base text-sm leading-custom font-medium p-5  cursor-pointer rounded-xl shadow-btn w-fit md:h-[60px] h-[50px] text-center flex justify-center items-center dark:shadow-button-dark w-full ${
        grayBtn ? 'text-black bg-bg-color' : 'text-white bg-gradient-primary '
      } ${className}`}
    >
      {label}
    </a>
  );
};
