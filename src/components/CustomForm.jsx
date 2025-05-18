import { useState, useRef, useEffect } from 'react';
import { CustomButton } from './CustomButton';

export const CustomForm = () => {
  const [formData, setFormData] = useState({
    highSugar: 14,
    upperLimit: 14,
    lowerLimit: 14,
    lowSugar: 14,
    carbUnit: 'Хлебная единица (15 гр)',
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const carbOptions = [
    'Хлебная единица (15 гр)',
    'Граммы углеводов',
    'Калории',
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectOption = (option) => {
    setFormData((prev) => ({
      ...prev,
      carbUnit: option,
    }));
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add submission logic here (e.g., API call)
  };

  return (
    <div onSubmit={handleSubmit}>
      <div className='space-y-4'>
        {[
          { label: 'Опасное превышение сахара', name: 'highSugar' },
          { label: 'Верхняя граница нормы', name: 'upperLimit' },
          { label: 'Нижняя граница нормы', name: 'lowerLimit' },
          { label: 'Слишком низкий сахар', name: 'lowSugar' },
        ].map(({ label, name }) => (
          <div key={name} className='space-y-[10px]'>
            <label className='form-label'>{label}</label>
            <input
              className='form-control'
              type='number'
              name={name}
              value={formData[name]}
              onChange={handleInputChange}
            />
          </div>
        ))}
      </div>
      <CustomButton className='mt-30' label='Сохранить' type='submit' />
      <div className='mt-10'>
        <h2 className='font-medium text-xl leading-tight uppercase mb-30'>
          Единицы измерения
        </h2>
        <div className='space-y-[10px]'>
          <label className='form-label'>Единицы углеводов</label>
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
                    <stop offset='1' stopColor='#020A0D' stopOpacity='0.4' />
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
                  className='block cursor-pointer hover:bg-gray-100 dark:hover:dark:bg-neutral-gray p-2 rounded'
                  onClick={() => handleSelectOption(option)}
                >
                  {option}
                </span>
              ))}
            </div>
          </div>
        </div>
        <CustomButton className='mt-30' label='Сохранить' type='submit' />
      </div>
    </div>
  );
};
