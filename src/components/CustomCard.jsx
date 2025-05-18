export const CustomCard = ({ cardTitle, className, children }) => {
  return (
    <div
      className={`${
        className && className
      } bg-white rounded-xl shadow-base max-xs:p-10 md:py-10 md:px-[30px] sm:py-[30px] px-[10px] py-10 dark:bg-dark-surface dark:text-white dark:shadow-card-black `}
    >
      {cardTitle && (
        <h2 className='font-medium text-xl leading-tight uppercase  mb-[35px]'>
          {cardTitle}
        </h2>
      )}
      {children}
    </div>
  );
};
