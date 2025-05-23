import assets from '../../assets';

export const MonitoringCard = ({ cardHeaderColor }) => {
  return (
    <div className='bg-white rounded-xl dark:bg-gray-muted shadow-base dark:shadow-card-dark'>
      <div
        className={`flex items-center justify-between relative py-6 px-10 rounded-xl h-[80px] pr-0 shadow-base dark:shadow-card-dark ${
          cardHeaderColor ? cardHeaderColor : 'bg-gradient-primary'
        }`}
      >
        <h3 className='text-white text-xl font-medium'>
          Углеводный коэффициент еды
        </h3>
        <button
          className={`w-[120px] h-[120px] flex items-center justify-center rounded-full -mr-2 shadow-base ${
            cardHeaderColor ? cardHeaderColor : 'bg-gradient-primary'
          }`}
        >
          <img src={assets.plus} alt='' />
        </button>
      </div>

      <div className='pt-10 space-y-[45px] pb-5'>
        <div className='bg-light-surface dark:bg-dark-surface dark:border-[#55585c] dark:shadow-card-dark py-5 px-30 border-y border-[#c2c8cd] shadow-base min-h-[140px] flex items-start justify-between gap-3 relative'>
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
        <div className='bg-light-surface dark:bg-dark-surface dark:border-[#55585c] dark:shadow-card-dark py-5 px-30 border-y border-[#c2c8cd] shadow-base min-h-[140px] flex items-start justify-between gap-3 relative'>
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
        <div className='bg-light-surface dark:bg-dark-surface dark:border-[#55585c] dark:shadow-card-dark py-5 px-30 border-y border-[#c2c8cd] shadow-base flex items-start justify-between gap-3 relative'>
          <span className='text-base font-medium text-primary-black dark:text-white  opacity-60 block'>
            Общее количество ХЕ:
          </span>
          <span className='text-base font-medium text-primary-black dark:text-white '>310</span>
        </div>
      </div>
    </div>
  );
};
