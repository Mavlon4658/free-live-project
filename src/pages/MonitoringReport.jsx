import { CreateReportModal, MonitoringStatusCard } from "../components";

export const MonitoringReport = () => {
  return (
    <>
      <div className="container py-30 space-y-[45px]">
        <div>
          <MonitoringStatusCard />
        </div>
      </div>
      <CreateReportModal />
    </>
  );
};
