import assets from '../../assets';

export const MonitoringCard = ({ cardHeaderColor, cardTitle }) => {
  return (
    <div className='bg-white rounded-xl dark:bg-gray-muted shadow-base dark:shadow-card-dark'>
      <div
        className={`flex items-center justify-between relative lg-max:py-6 lg-max:px-10 py-4 pl-5 rounded-xl h-[80px] pr-0 shadow-base dark:shadow-card-dark ${
          cardHeaderColor ? cardHeaderColor : 'bg-gradient-primary'
        }`}
      >
        <h3 className='text-white md:text-xl text-sm font-medium uppercase'>
          {cardTitle}
        </h3>
        <button
          className={`lg-max:w-[120px] lg-max:h-[120px] sm-min:w-[90px] sm-min:h-[90px] w-[70px] h-[70px] gap-2 flex items-center justify-center rounded-full sm:-mr-2 shadow-base ${
            cardHeaderColor ? cardHeaderColor : 'bg-gradient-primary'
          }`}
        >
          <img src={assets.plus} alt='' />
        </button>
      </div>

      <div className='pt-10 space-y-[45px] pb-5'>
        <div className='bg-light-surface dark:bg-dark-surface dark:border-[#55585c] dark:shadow-card-dark py-5 px-30 border-y border-[#c2c8cd] shadow-base min-h-[140px] flex sm:flex-row flex-col items-start justify-between gap-3 relative'>
          <div className='space-y-5'>
            <span className='text-base font-medium text-primary-black dark:text-white opacity-60 block'>
              Время
            </span>
            <span className='text-base font-medium text-primary-black dark:text-white'>
              20:04
            </span>
          </div>
          <div className='space-y-5'>
            <span className='text-base font-medium text-primary-black dark:text-white opacity-60 block'>
              Название продукта
            </span>
            <span className='text-base font-medium text-primary-black dark:text-white'>
              Бутерброд с тунцом
            </span>
          </div>
          <div className='space-y-5'>
            <span className='text-base font-medium text-primary-black dark:text-white opacity-60 block'>
              Вес (г)
            </span>
            <span className='text-base font-medium text-primary-black dark:text-white'>
              300 г
            </span>
          </div>
          <div className='space-y-5'>
            <span className='text-base font-medium text-primary-black dark:text-white opacity-60 block'>
              ХЕ (15г)
            </span>
            <span className='text-base font-medium text-primary-black dark:text-white'>
              155
            </span>
          </div>
          <div className='flex gap-5 absolute -bottom-6 right-5'>
            <button className='rounded-full w-[50px] h-[50px] flex items-center justify-center bg-gradient-orange shadow-btn dark:shadow-button-dark'>
              <img src={assets.trash} alt='' />
            </button>
            <button className='rounded-full w-[50px] h-[50px] flex items-center justify-center bg-gradient-orange shadow-btn dark:shadow-button-dark'>
              <img src={assets.edit} alt='' />
            </button>
          </div>
         </div>
        <div className='bg-light-surface dark:bg-dark-surface dark:border-[#55585c] dark:shadow-card-dark py-5 px-30 border-y border-[#c2c8cd] shadow-base min-h-[140px] flex items-start sm:flex-row flex-col justify-between gap-3 relative'>
          <div className='space-y-5'>
            <span className='text-base font-medium text-primary-black dark:text-white  opacity-60 block'>
              Время
            </span>
            <span className='text-base font-medium text-primary-black dark:text-white '>
              20:04
            </span>
          </div>
          <div className='space-y-5'>
            <span className='text-base font-medium text-primary-black dark:text-white  opacity-60 block'>
              Название продукта
            </span>
            <span className='text-base font-medium text-primary-black dark:text-white '>
              Бутерброд с тунцом
            </span>
          </div>
          <div className='space-y-5'>
            <span className='text-base font-medium text-primary-black dark:text-white  opacity-60 block'>
              Вес (г)
            </span>
            <span className='text-base font-medium text-primary-black dark:text-white '>
              300 г
            </span>
          </div>
          <div className='space-y-5'>
            <span className='text-base font-medium text-primary-black dark:text-white  opacity-60 block'>
              ХЕ (15г)
            </span>
            <span className='text-base font-medium text-primary-black dark:text-white '>
              155
            </span>
          </div>
          <div className='flex gap-5 absolute -bottom-6 right-5'>
            <button className='rounded-full w-[50px] h-[50px] flex items-center justify-center bg-gradient-orange shadow-btn dark:shadow-button-dark'>
              <img src={assets.trash} alt='' />
            </button>
            <button className='rounded-full w-[50px] h-[50px] flex items-center justify-center bg-gradient-orange shadow-btn dark:shadow-button-dark'>
              <img src={assets.edit} alt='' />
            </button>
          </div>
        </div>
        <div className='bg-light-surface dark:bg-dark-surface dark:border-[#55585c] dark:shadow-card-dark py-5 px-30 border-y border-[#c2c8cd] shadow-base flex items-start sm:flex-row flex-col justify-between gap-3 relative'>
          <span className='text-base font-medium text-primary-black dark:text-white  opacity-60 block'>
            Общее количество ХЕ:
          </span>
          <span className='text-base font-medium text-primary-black dark:text-white '>310</span>
        </div>
      </div>
    </div>
  );
};
