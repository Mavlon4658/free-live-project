import { useEffect, useRef, useState } from 'react';
import {
  CustomButton,
  CustomCard,
  CustomForm,
  Switch,
  Tab,
} from '../components';
import assets from '../assets';

const items = ['Профиль', 'Основные', 'Общий доступ', 'Финансы'];

export const Home = () => {
  const [formData, setFormData] = useState({
    carbUnit: 'UTC 0',
    highSugar: 14,
    upperLimit: 14,
    lowerLimit: 14,
    lowSugar: 14,
  });
  const [notifications, setNotifications] = useState({
    veryHigh: false,
    high: true,
    low: true,
    veryLow: true,
  });
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const carbOptions = ['UTC 0', 'UTC 1', 'UTC 2'];

  const handleSelectOption = (option) => {
    setFormData((prev) => ({ ...prev, carbUnit: option }));
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleNotificationChange = (key) => {
    setNotifications((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleTheme = () => {
    setIsDarkTheme((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { formData, notifications, isDarkTheme });
    // Add API call or other submission logic here
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className='my-[100px]'>
      <div className='container'>
        <Tab items={items} activeIndex={1} />
        <form onSubmit={handleSubmit}>
          <div className='mt-10 flex items-start gap-30'>
            <CustomCard
              cardTitle='Настройки пороговых значений'
              className='flex-1'
            >
              <CustomForm formData={formData} setFormData={setFormData} />
            </CustomCard>
            <div className='space-y-30 w-[560px]'>
              <CustomCard cardTitle='Настройки оповещений'>
                <Switch
                  notifications={notifications}
                  handleNotificationChange={handleNotificationChange}
                />
                <CustomButton
                  label='Сохранить'
                  className='mt-30'
                  type='submit'
                />
              </CustomCard>
              <CustomCard cardTitle='Другие'>
                <div className='space-y-[10px]'>
                  <label className='form-label'>Часовой пояс</label>
                  <div
                    className='border border-primary-black rounded-[10px] h-[60px] outline-none w-full block relative z-10 dark:bg-gray-muted dark:border-white'
                    ref={dropdownRef}
                  >
                    <div
                      className='flex items-center justify-between w-full h-full cursor-pointer px-10'
                      onClick={toggleDropdown}
                    >
                      <span>{formData.carbUnit}</span>
                      <svg
                        width='20'
                        height='12'
                        viewBox='0 0 20 12'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M18.3137 0.795607C18.4092 0.70118 18.5214 0.62736 18.6441 0.578362C18.7667 0.529362 18.8974 0.506143 19.0286 0.51003C19.1598 0.513918 19.289 0.544836 19.4089 0.601018C19.5287 0.657201 19.6367 0.737548 19.7269 0.837472C19.8171 0.937396 19.8876 1.05494 19.9344 1.18339C19.9811 1.31185 20.0033 1.44869 19.9996 1.58612C19.9959 1.72355 19.9664 1.85886 19.9127 1.98434C19.8591 2.10982 19.7823 2.223 19.6869 2.31743L10.6922 11.2139C10.5067 11.3976 10.261 11.5 10.0056 11.5C9.75026 11.5 9.50458 11.3976 9.31902 11.2139L0.323299 2.31743C0.225796 2.22363 0.147058 2.11047 0.0916672 1.98453C0.0362759 1.85859 0.00533104 1.72238 0.000629425 1.58381C-0.00407219 1.44524 0.0175667 1.30707 0.0642834 1.17733C0.111002 1.04759 0.18187 0.928868 0.27277 0.828055C0.363672 0.727242 0.472795 0.646349 0.593801 0.590075C0.714806 0.5338 0.845284 0.503267 0.977652 0.500248C1.11002 0.49723 1.24164 0.521784 1.36487 0.572488C1.48811 0.623192 1.60049 0.699033 1.69549 0.795607L10.0056 9.01386L18.3137 0.795607Z'
                          fill='url(#paint0_linear_643_12805)'
                          className='dark:fill-white'
                        />
                        <defs>
                          <linearGradient
                            id='paint0_linear_643_12805'
                            x1='9.33333'
                            y1='-2.9375'
                            x2='9.33333'
                            y2='13.5625'
                            gradientUnits='userSpaceOnUse'
                          >
                            <stop stopColor='#020A0D' />
                            <stop
                              offset='1'
                              stopColor='#020A0D'
                              stopOpacity='0.4'
                            />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <div
                      className={`absolute top-full mt-2 shadow-base dark:shadow-card-dark w-full p-4 z-10 bg-white dark:bg-gray-muted dark:border-white rounded-xl space-y-3 ${
                        isDropdownOpen ? 'block' : 'hidden'
                      }`}
                    >
                      {carbOptions.map((option) => (
                        <span
                          key={option}
                          className='block cursor-pointer hover:bg-gray-100 dark:hover:bg-neutral-gray p-2 rounded'
                          onClick={() => handleSelectOption(option)}
                        >
                          {option}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <CustomButton
                  label='Сохранить'
                  className='mt-30'
                  type='submit'
                />
              </CustomCard>
              <CustomCard>
                <p className='font-medium text-xl leading-tight mb-5'>
                  Вы можете переключить тему или настроить переключение по
                  таймеру
                </p>
                <div className='flex gap-5'>
                  <div
                    className='flex items-center justify-between mb-4 cursor-pointer h-[60px] min-w-[130px] '
                    onClick={toggleTheme}
                  >
                    <button
                      className={`w-full h-full rounded-full flex items-center transition-colors duration-300 shadow-switch px-[4px] bg-light-surface ${
                        isDarkTheme ? 'justify-end' : 'justify-start'
                      }`}
                    >
                      <div className='bg-gradient-orange shadow-btn w-[50px] h-[50px] flex items-center justify-center rounded-full'>
                        <img src={assets.soon} alt='' />
                      </div>
                    </button>
                  </div>
                  <CustomButton
                    label='Настроить по таймеру'
                    className='w-full'
                  />
                </div>
              </CustomCard>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
