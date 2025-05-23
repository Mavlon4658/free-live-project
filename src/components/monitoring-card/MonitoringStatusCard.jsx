import assets from '../../assets';

export const MonitoringStatusCard = () => {
  return (
    <div className='bg-white dark:bg-gray-muted rounded-xl shadow-base dark:shadow-card-dark'>
      <div
        className={`flex items-center justify-between relative py-6 px-10 rounded-xl h-[80px] pr-0 shadow-base bg-gradient-primary dark:shadow-card-dark`}
      >
        <h3 className='text-white text-xl font-medium'>Отчеты</h3>
        <div className='flex items-center gap-9'>
          <h3 className='text-white text-xl uppercase font-medium'>
            + добавить отчет
          </h3>
          <button
            className={`w-[120px] h-[120px] flex items-center justify-center rounded-full -mr-2 shadow-base bg-gradient-primary dark:shadow-card-dark`}
          >
            <img src={assets.plus} alt='' />
          </button>
        </div>
      </div>

      <div className='pt-10 space-y-[45px] pb-11'>
        <div className='bg-light-surface dark:bg-dark-surface dark:text-white py-5 dark:border-[#55585c] px-30 border-y border-[#c2c8cd] shadow-base pb-10 flex items-start justify-between gap-3 relative dark:shadow-card-dark'>
          <div className='space-y-5'>
            <span className='text-base font-medium text-primary-black dark:text-white opacity-60 block'>
              Наименование
            </span>
            <span className='text-base font-medium text-primary-black dark:text-white'>
              Полный отчет с 04.05.24 по 04.05.25
            </span>
          </div>
          <div className='space-y-5'>
            <span className='text-base font-medium text-primary-black dark:text-white opacity-60 block'>
              Сервер
            </span>
            <span className='text-base font-medium text-primary-black dark:text-white'>
              Иванов Иван
            </span>
          </div>
          <div className='space-y-5'>
            <span className='text-base font-medium text-primary-black dark:text-white opacity-60 block'>
              Статус
            </span>
            <span className='text-base font-medium text-green'>Выполнено</span>
          </div>
          <div className='space-y-5'>
            <span className='text-base font-medium text-primary-black dark:text-white opacity-60 block'>
              Дата создания
            </span>
            <span className='text-base font-medium text-primary-black dark:text-white'>
              04.05.2025
            </span>
          </div>
          <div className='flex gap-5 absolute -bottom-6 right-5'>
            <button className='rounded-full w-[50px] h-[50px] flex items-center justify-center bg-gradient-orange shadow-btn dark:shadow-button-dark'>
              <img src={assets.download} alt='' />
            </button>
          </div>
        </div>
        <div className='bg-light-surface dark:bg-dark-surface dark:text-white py-5 dark:border-[#55585c] px-30 border-y border-[#c2c8cd] shadow-base pb-10 flex items-start justify-between gap-3 relative dark:shadow-card-dark'>
          <div className='space-y-5'>
            <span className='text-base font-medium text-primary-black dark:text-white opacity-60 block'>
              Наименование
            </span>
            <span className='text-base font-medium text-primary-black dark:text-white'>
              Полный отчет с 04.05.24 по 04.05.25
            </span>
          </div>
          <div className='space-y-5'>
            <span className='text-base font-medium text-primary-black dark:text-white opacity-60 block'>
              Сервер
            </span>
            <span className='text-base font-medium text-primary-black dark:text-white'>
              Иванов Иван
            </span>
          </div>
          <div className='space-y-5'>
            <span className='text-base font-medium text-primary-black dark:text-white opacity-60 block'>
              Статус
            </span>
            <span className='text-base font-medium text-gold'>В процессе</span>
          </div>
          <div className='space-y-5'>
            <span className='text-base font-medium text-primary-black dark:text-white opacity-60 block'>
              Дата создания
            </span>
            <span className='text-base font-medium text-primary-black dark:text-white'>
              04.05.2025
            </span>
          </div>
          <div className='flex gap-5 absolute -bottom-6 right-5'>
            <button className='rounded-full w-[50px] h-[50px] flex items-center justify-center bg-gradient-orange shadow-btn dark:shadow-button-dark'>
              <img src={assets.download} alt='' />
            </button>
          </div>
        </div>
        <div className='bg-light-surface dark:bg-dark-surface dark:text-white py-5 dark:border-[#55585c] px-30 border-y border-[#c2c8cd] shadow-base pb-10 flex items-start justify-between gap-3 relative dark:shadow-card-dark'>
          <div className='space-y-5'>
            <span className='text-base font-medium text-primary-black dark:text-white opacity-60 block'>
              Наименование
            </span>
            <span className='text-base font-medium text-primary-black dark:text-white'>
              Полный отчет с 04.05.24 по 04.05.25
            </span>
          </div>
          <div className='space-y-5'>
            <span className='text-base font-medium text-primary-black dark:text-white opacity-60 block'>
              Сервер
            </span>
            <span className='text-base font-medium text-primary-black dark:text-white'>
              Иванов Иван
            </span>
          </div>
          <div className='space-y-5'>
            <span className='text-base font-medium text-primary-black dark:text-white opacity-60 block'>
              Статус
            </span>
            <span className='text-base font-medium text-red'>Отказано</span>
          </div>
          <div className='space-y-5'>
            <span className='text-base font-medium text-primary-black dark:text-white opacity-60 block'>
              Дата создания
            </span>
            <span className='text-base font-medium text-primary-black dark:text-white'>
              04.05.2025
            </span>
          </div>
          <div className='flex gap-5 absolute -bottom-6 right-5'>
            <button className='rounded-full w-[50px] h-[50px] flex items-center justify-center bg-gradient-orange shadow-btn dark:shadow-button-dark'>
              <img src={assets.download} alt='' />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
