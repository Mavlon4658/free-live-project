import { useState } from "react";
import { CreateReportModal, MonitoringStatusCard } from "../components";

export const MonitoringReport = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <>
      <div className="container py-30 space-y-[45px]">
        <div>
          <MonitoringStatusCard onAddReportClick={toggleModal} />
        </div>
      </div>
      <CreateReportModal isOpen={isModalOpen} onClose={toggleModal} />
    </>
  );
};