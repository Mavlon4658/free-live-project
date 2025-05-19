import { useState, useEffect, useRef, useCallback, memo } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { CustomButton, CustomForm, Switch, Tab } from '../components';
import assets from '../assets';
import CustomCard from '../components/card/CustomCard';
// Static data
const TAB_ITEMS = ['Профиль', 'Основные', 'Общий доступ', 'Финансы'];
const CARB_OPTIONS = ['UTC 0', 'UTC 1', 'UTC 2'];
const INITIAL_FORM_DATA = {
  carbUnit: 'UTC 0',
  highSugar: 14,
  upperLimit: 14,
  lowerLimit: 14,
  lowSugar: 14,
};
const INITIAL_NOTIFICATIONS = {
  veryHigh: false,
  high: true,
  low: true,
  veryLow: true,
};

// Dropdown component extracted for reusability
const Dropdown = memo(
  ({ options, selectedOption, onSelect, isOpen, toggle, dropdownRef }) => (
    <div
      className='relative border flex items-center border-primary-black rounded-[10px] sm:min-h-[60px] min-h-[50px] outline-none w-full dark:bg-gray-muted dark:border-white'
      ref={dropdownRef}
    >
      <button
        type='button'
        className='flex items-center justify-between w-full sm:min-h-[60px] min-h-[50px] cursor-pointer sm:px-10 px-5'
        onClick={toggle}
        aria-expanded={isOpen}
        aria-haspopup='listbox'
      >
        <span>{selectedOption}</span>
        <svg
          width='20'
          height='12'
          viewBox='0 0 20 12'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className='dark:fill-white'
          aria-hidden='true'
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
              <stop offset='1' stopColor='#020A0D' stopOpacity='0.4' />
            </linearGradient>
          </defs>
        </svg>
      </button>
      <div
        className={clsx(
          'absolute top-full mt-2 w-full p-4 z-10 bg-white dark:bg-gray-muted dark:border-white rounded-xl space-y-3 shadow-base dark:shadow-card-dark',
          { block: isOpen, hidden: !isOpen }
        )}
        role='listbox'
      >
        {options.map((option) => (
          <span
            key={option}
            className='block cursor-pointer hover:bg-gray-100 dark:hover:bg-neutral-gray p-2 rounded'
            onClick={() => onSelect(option)}
            role='option'
            aria-selected={selectedOption === option}
          >
            {option}
          </span>
        ))}
      </div>
    </div>
  )
);

Dropdown.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedOption: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  dropdownRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) })
    .isRequired,
};

export const Main = () => {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [notifications, setNotifications] = useState(INITIAL_NOTIFICATIONS);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Memoized handlers for performance
  const handleSelectOption = useCallback((option) => {
    setFormData((prev) => ({ ...prev, carbUnit: option }));
    setIsDropdownOpen(false);
  }, []);

  const toggleDropdown = useCallback(() => {
    setIsDropdownOpen((prev) => !prev);
  }, []);

  const handleNotificationChange = useCallback((key) => {
    setNotifications((prev) => ({ ...prev, [key]: !prev[key] }));
  }, []);

  const toggleTheme = useCallback(() => {
    setIsDarkTheme((prev) => !prev);
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      console.log('Form submitted:', { formData, notifications, isDarkTheme });
      // Add API call or other submission logic here
    },
    [formData, notifications, isDarkTheme]
  );

  const handleTimerSettings = useCallback(() => {
    console.log('Opening timer settings');
    // Add timer settings logic here
  }, []);

  // Handle click outside for dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside, {
      passive: true,
    });
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className='my-[100px]'>
      <div className='container mx-auto px-4'>
        <div className='hidden md:block'>
          <Tab items={TAB_ITEMS} activeIndex={1} />
        </div>
        <form
          onSubmit={handleSubmit}
          className='mt-10 flex items-start flex-col md:flex-row md:gap-5 gap-8 sm-min:max-w-[485px] max-w-[292px] md:max-w-full md:ml-0 ml-auto'
        >
          <CustomCard
            title='Настройки пороговых значений'
            className='flex-1 w-full md:w-auto'
          >
            <CustomForm formData={formData} setFormData={setFormData} />
          </CustomCard>
          <div className='space-y-8 w-full xl:max-w-[560px] lg:max-w-[380px] md:max-w-[333px]'>
            <CustomCard title='Настройки оповещений'>
              <Switch
                notifications={notifications}
                handleNotificationChange={handleNotificationChange}
              />
              <CustomButton
                label='Сохранить'
                className='mt-8 w-full'
                type='submit'
              />
            </CustomCard>
            <CustomCard title='Другие'>
              <label className='form-label block mb-2 text-lg'>
                Часовой пояс
              </label>
              <Dropdown
                options={CARB_OPTIONS}
                selectedOption={formData.carbUnit}
                onSelect={handleSelectOption}
                isOpen={isDropdownOpen}
                toggle={toggleDropdown}
                dropdownRef={dropdownRef}
              />
              <CustomButton
                label='Сохранить'
                className='mt-8 w-full'
                type='submit'
              />
            </CustomCard>
            <CustomCard>
              <p className='font-medium text-xl leading-tight mb-5'>
                Вы можете переключить тему или настроить переключение по таймеру
              </p>
              <div className='flex flex-col xl:flex-row gap-5'>
                <button
                  type='button'
                  className={clsx(
                    'flex items-center justify-between h-[50px] rounded-[32px] sm:min-h-[60px] min-w-[100px] max-w-[100px] sm:min-w-[130px] sm:max-w-[130px] cursor-pointer',
                    isDarkTheme
                      ? 'dark:bg-gray-muted'
                      : 'bg-light-surface dark:bg-dark-surface'
                  )}
                  onClick={toggleTheme}
                  aria-label={`Switch to ${
                    isDarkTheme ? 'light' : 'dark'
                  } theme`}
                >
                  <span
                    className={clsx(
                      'w-full h-full rounded-full flex items-center px-[4px] shadow-switch transition-colors duration-300 dark:shadow-button-dark',
                      isDarkTheme ? 'justify-end' : 'justify-start'
                    )}
                  >
                    <span
                      className={clsx(
                        'w-10 h-10 sm:w-[50px] sm:h-[50px] flex items-center justify-center rounded-full shadow-btn',
                        isDarkTheme
                          ? 'bg-gradient-dark dark:shadow-button-dark'
                          : 'bg-gradient-orange dark:shadow-button-dark'
                      )}
                    >
                      <img
                        src={isDarkTheme ? assets.moon : assets.soon}
                        alt={isDarkTheme ? 'Moon icon' : 'Sun icon'}
                        className='w-6 h-6'
                      />
                    </span>
                  </span>
                </button>
                <CustomButton
                  label='Настроить по таймеру'
                  className='w-full'
                  onClick={handleTimerSettings}
                />
              </div>
            </CustomCard>
          </div>
        </form>
      </div>
    </div>
  );
};
