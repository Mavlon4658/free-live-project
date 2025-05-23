import { MonitoringCard } from '../components';
import Calendar from '../components/calendar/Calendar';

export const Monitoring = () => {
  return (
    <div className='container mt-10 mb-30'>
      <div className='flex items-start justify-between gap-30'>
        <div className='w-[738px] space-y-10'>
          <MonitoringCard />
          <MonitoringCard cardHeaderColor='bg-gradient-pink' />
          <MonitoringCard />
        </div>
        <div className='flex-1'>
          <Calendar />
        </div>
      </div>
    </div>
  );
};
