import { MonitoringCard } from '../components';
import Calendar from '../components/calendar/Calendar';

export const Monitoring = () => {
  return (
    <div className='container mt-10 mb-30'>
      <div className='flex md:flex-row flex-col-reverse items-start justify-between lg-max:gap-30 gap-5'>
        <div className='flex-1 md:w-auto w-full space-y-10'>
          <MonitoringCard cardTitle="Углеводный коэффициент еды" />
          <MonitoringCard cardTitle='Ручные замеры сахара' cardHeaderColor='bg-gradient-pink' />
          <MonitoringCard cardTitle='Прием лекарств и витаминов' />
        </div>
        <div className='xl-max:w-[560px] lg-max:w-[380px] md:w-[333px] w-full'>
          <Calendar />
        </div>
      </div>
    </div>
  );
};