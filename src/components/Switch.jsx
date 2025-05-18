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
            className={`w-14 h-7 rounded-full flex items-center transition-colors duration-300 shadow-switch bg-light-surface ${
              notifications[key] ? 'justify-end' : 'justify-start'
            }`}
          >
            <span
              className={`w-5 h-5 rounded-full mx-1 shadow-btn ${
                notifications[key] ? 'bg-gradient-primary' : 'bg-gray-muted'
              }`}
            ></span>
          </button>
        </div>
      ))}
    </div>
  );
};
