import { Link } from 'react-router-dom';

export const Map = () => {
  return (
    <ul className='m-16'>
      <Link className='text-blue-500 block' to='/home'>
        Home
      </Link>
      <Link className='text-blue-500 block' to='/monitoring'>
        Мониторинг - Дневник 1920
      </Link>

      <Link className='text-blue-500 block' to='/monitoring-report'>
        Мониторинг - Отчеты 1920
      </Link>
    </ul>
  );
};
