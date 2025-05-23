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
    <div className='bg-light-surface p-30 rounded-2xl shadow-base w-full text-primary-black'>
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
            <img src={assets.arrowLeft} alt='' />
          </button>
          <button
            onClick={nextMonth}
            className='w-11 h-11 flex items-center justify-center'
            aria-label='Next month'
          >
            <img src={assets.arrowRight} alt='' />
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
              border border-[#9ca2a7] aspect-square w-16 h-16 flex items-center justify-center text-center
              ${!day.isCurrentMonth ? 'text-primary-black opacity-20' : ''}
              ${day.isSelected ? 'bg-gradient-primary text-white' : ''}
              hover:bg-gray-100 cursor-pointer transition-colors
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
