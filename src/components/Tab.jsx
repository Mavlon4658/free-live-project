export const Tab = ({ items = [], activeIndex = 0 }) => {
  return (
    <ul className='flex items-center gap-2 border-b border-gray w-fit'>
      {items.length > 0 &&
        items.map((item, idx) => {
          const isActive = idx === activeIndex;

          return (
            <li
              key={idx}
              className={`pb-2 text-xl leading-tight font-medium cursor-pointer px-5 relative
                before:content-[""] before:bottom-[-1px] before:absolute before:left-0 before:w-full before:h-[1px] before:bg-black
                ${
                  isActive
                    ? 'primary-black before:opacity-100 dark:text-white dark:before:bg-white'
                    : 'text-gray before:opacity-0 dark:text-[#b2b3b5]'
                }`}
            >
              {item}
            </li>
          );
        })}
    </ul>
  );
};
