import { memo } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const CustomCard = ({ title, className, children }) => (
  <div
    className={clsx(
      'bg-white rounded-xl shadow-base dark:bg-dark-surface dark:text-white dark:shadow-card-black',
      'max-xs:p-10 md:py-10 md:px-[30px] sm:py-[30px] px-[10px] py-10',
      className
    )}
    role='region'
    aria-label={title ? `${title} card` : 'Content card'}
  >
    {title && (
      <h2 className='font-medium text-xl leading-tight uppercase mb-[35px]'>
        {title}
      </h2>
    )}
    {children}
  </div>
);

CustomCard.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default memo(CustomCard);
