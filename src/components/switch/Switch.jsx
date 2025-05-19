import { useState } from 'react';

export const Switch = () => {
  const [notifications, setNotifications] = useState({
    veryHigh: false,
    high: true,
    low: true,
    veryLow: true,
  });

  const handleNotificationChange = (key) => {
    setNotifications((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const switchItems = [
    {
      key: 'veryHigh',
      label: 'Оповещение при очень высоком сахаре',
    },
    {
      key: 'high',
      label: 'Оповещение при высоком сахаре',
    },
    {
      key: 'low',
      label: 'Оповещение при низком сахаре',
    },
    {
      key: 'veryLow',
      label: 'Оповещение при очень низком сахаре',
    },
  ];

  return (
    <div className='space-y-5 select-none'>
      {switchItems.map(({ key, label }) => (
        <div
          key={key}
          className='flex items-center justify-between mb-4 cursor-pointer'
          onClick={() => handleNotificationChange(key)}
        >
          <span className='text-base font-medium'>{label}</span>
          <button
            className={`md:w-[80px] h-10 w-[80px] rounded-full flex items-center transition-colors duration-300 shadow-switch bg-light-surface dark:bg-gray-muted dark:shadow-button-dark ${
              notifications[key] ? 'justify-end' : 'justify-start'
            }`}
          >
            <span
              className={`w-[34px] h-[34px] rounded-full mx-1 shadow-btn ${
                notifications[key]
                  ? 'bg-gradient-primary dark:bg-[#F2F7FD] dark:shadow-button-dark'
                  : 'bg-gray-muted dark:bg-[#F2F7FD] dark:shadow-button-dark'
              }`}
            ></span>
          </button>
        </div>
      ))}
    </div>
  );
};
