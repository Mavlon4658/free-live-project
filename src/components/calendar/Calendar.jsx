'use client';

import { useState } from 'react';
import assets from '../../assets';

export default function Calendar({ initialDate = new Date(), onDateSelect }) {
  const [currentDate, setCurrentDate] = useState(initialDate);
  const [selectedDate, setSelectedDate] = useState(initialDate);

  // Get the current month and year
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  // Get the first day of the month
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
  const dayOfWeek = firstDayOfMonth.getDay() || 7; // Convert Sunday (0) to 7 for easier calculation

  // Get the number of days in the current month
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  // Get the number of days in the previous month
  const daysInPrevMonth = new Date(currentYear, currentMonth, 0).getDate();

  // Russian month names
  const monthNames = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
  ];

  // Russian day abbreviations
  const dayNames = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

  // Navigate to the previous month
  const prevMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth - 1, 1));
  };

  // Navigate to the next month
  const nextMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth + 1, 1));
  };

  // Handle date selection
  const handleDateClick = (day, isCurrentMonth) => {
    let newDate;
    if (isCurrentMonth) {
      newDate = new Date(currentYear, currentMonth, day);
    } else if (day > 20) {
      // Previous month
      newDate = new Date(currentYear, currentMonth - 1, day);
    } else {
      // Next month
      newDate = new Date(currentYear, currentMonth + 1, day);
    }

    setSelectedDate(newDate);
    if (onDateSelect) {
      onDateSelect(newDate);
    }
  };

  // Generate calendar days
  const generateCalendarDays = () => {
    const days = [];

    // Previous month days
    for (let i = dayOfWeek - 1; i > 0; i--) {
      days.push({
        day: daysInPrevMonth - i + 1,
        isCurrentMonth: false,
        isPrevMonth: true,
      });
    }

    // Current month days
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({
        day: i,
        isCurrentMonth: true,
        isSelected:
          i === selectedDate.getDate() &&
          currentMonth === selectedDate.getMonth() &&
          currentYear === selectedDate.getFullYear(),
      });
    }

    // Next month days
    const remainingDays = 42 - days.length; // 6 rows * 7 days = 42
    for (let i = 1; i <= remainingDays; i++) {
      days.push({
        day: i,
        isCurrentMonth: false,
        isNextMonth: true,
      });
    }

    return days;
  };

  const calendarDays = generateCalendarDays();

  return (
    <div className='bg-light-surface p-30 rounded-2xl shadow-base w-full text-primary-black dark:bg-dark-surface dark:shadow-card-dark dark:text-white'>
      <div className='flex justify-between items-center mb-3'>
        <h2 className='text-2xl font-bold'>
          {monthNames[currentMonth]} {currentYear}
        </h2>
        <div className='flex space-x-2'>
          <button
            onClick={prevMonth}
            className='w-11 h-11 flex items-center justify-center'
            aria-label='Previous month'
          >
            <svg
              width='8'
              height='14'
              viewBox='0 0 8 14'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M6.00163 0.71811C6.37537 0.32692 7.00004 0.32692 7.37378 0.71811C7.72416 1.08485 7.72416 1.6623 7.37378 2.02904L2.62459 7L7.37378 11.971C7.72416 12.3377 7.72416 12.9152 7.37378 13.2819C7.00004 13.6731 6.37537 13.6731 6.00163 13.2819L8.34742e-08 7L6.00163 0.71811Z'
                fill='url(#paint0_linear_2028_1405)'
                className='dark:fill-white'
              />
              <defs>
                <linearGradient
                  id='paint0_linear_2028_1405'
                  x1='-1.33333'
                  y1='7'
                  x2='7.11111'
                  y2='7'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#020A0D' />
                  <stop offset='1' stopColor='#020A0D' stop-opacity='0.2' />
                </linearGradient>
              </defs>
            </svg>
          </button>
          <button
            onClick={nextMonth}
            className='w-11 h-11 flex items-center justify-center'
            aria-label='Next month'
          >
            <svg
              width='8'
              height='14'
              viewBox='0 0 8 14'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M1.99837 0.71811C1.62463 0.32692 0.999959 0.32692 0.626222 0.71811C0.275843 1.08485 0.275843 1.6623 0.626222 2.02904L5.37541 7L0.626221 11.971C0.275843 12.3377 0.275843 12.9152 0.626222 13.2819C0.999959 13.6731 1.62463 13.6731 1.99837 13.2819L8 7L1.99837 0.71811Z'
                fill='url(#paint0_linear_2028_143)'
                className='dark:fill-white'
              />
              <defs>
                <linearGradient
                  id='paint0_linear_2028_143'
                  x1='9.33333'
                  y1='7'
                  x2='0.888888'
                  y2='7'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#020A0D' />
                  <stop offset='1' stopColor='#020A0D' stopOpacity='0.2' />
                </linearGradient>
              </defs>
            </svg>
          </button>
        </div>
      </div>

      <div className='grid grid-cols-7 gap-0 w-[442px] mx-auto'>
        {/* Day names */}
        {dayNames.map((day, index) => (
          <div
            key={index}
            className='text-center font-medium w-16 h-16 flex items-center justify-center'
          >
            {day}
          </div>
        ))}

        {/* Calendar days */}
        {calendarDays.map((day, index) => (
          <div
            key={index}
            className={`
              border border-[#9ca2a7] dark:border-[#7d7f84] aspect-square w-16 h-16 flex items-center justify-center text-center
              ${
                !day.isCurrentMonth
                  ? 'text-primary-black opacity-20 dark:opacity-100 dark:text-white'
                  : ''
              }
              ${day.isSelected ? 'bg-gradient-primary text-white' : ''}
              cursor-pointer transition-colors hover:bg-gradient-primary
              ${day.isSelected ? 'hover:bg-blue-600' : ''}
            `}
            onClick={() => handleDateClick(day.day, day.isCurrentMonth)}
          >
            {day.day}
          </div>
        ))}
      </div>
    </div>
  );
}
