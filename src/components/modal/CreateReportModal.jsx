import { useEffect, useRef, useState } from "react";
import Calendar from "../calendar/Calendar";
import { CustomButton } from "../button/CustomButton";

export const CreateReportModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    highSugar: 14,
    upperLimit: 14,
    lowerLimit: 14,
    lowSugar: 14,
    carbUnit: "Хлебная единица (15 гр)",
    reportType: "Хлебная единица (15 гр)",
    startDate: "2024-05-01",
    endDate: "2024-05-31",
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState({
    carbUnit: false,
    reportType: false,
  });
  const carbDropdownRef = useRef(null);
  const reportTypeDropdownRef = useRef(null);
  const modalContentRef = useRef(null);

  const carbOptions = [
    "Хлебная единица (15 гр)",
    "Граммы углеводов",
    "Калории",
  ];

  const reportTypeOptions = [
    "Хлебная единица (15 гр)",
    "Граммы углеводов",
    "Калории",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectOption = (field, option) => {
    setFormData((prev) => ({
      ...prev,
      [field]: option,
    }));
    setIsDropdownOpen((prev) => ({
      ...prev,
      [field]: false,
    }));
  };

  const toggleDropdown = (field) => {
    setIsDropdownOpen((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if click is outside modal content and dropdowns
      if (
        modalContentRef.current &&
        !modalContentRef.current.contains(event.target) &&
        (!carbDropdownRef.current ||
          !carbDropdownRef.current.contains(event.target)) &&
        (!reportTypeDropdownRef.current ||
          !reportTypeDropdownRef.current.contains(event.target))
      ) {
        setIsDropdownOpen({
          carbUnit: false,
          reportType: false,
        });
        onClose(); // Close the modal
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    onClose(); // Close modal after submission
    // Add your API call or submission logic here
  };

  const renderDropdown = (field, options, selectedValue, dropdownRef) => (
    <div
      className={`border border-primary-black rounded-[10px] sm:h-[60px] h-[50px] outline-none w-full block relative ${
        isDropdownOpen[field] ? "z-50" : "z-10"
      } dark:bg-gray-muted dark:border-white`}
      ref={dropdownRef}
    >
      <div
        className="flex items-center justify-between rounded-[10px] dark:text-white bg-[#F2F7FD] dark:bg-gray-muted w-full h-full cursor-pointer sm-min:px-10 px-5 sm:text-base text-[10px]"
        onClick={() => toggleDropdown(field)}
      >
        <span>{selectedValue}</span>
        <svg
          width="20"
          height="12"
          viewBox="0 0 20 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.3137 0.795607C18.4092 0.70118 18.5214 0.62736 18.6441 0.578362C18.7667 0.529362 18.8974 0.506143 19.0286 0.51003C19.1598 0.513918 19.289 0.544836 19.4089 0.601018C19.5287 0.657201 19.6367 0.737548 19.7269 0.837472C19.8171 0.937396 19.8876 1.05494 19.9344 1.18339C19.9811 1.31185 20.0033 1.44869 19.9996 1.58612C19.9959 1.72355 19.9664 1.85886 19.9127 1.98434C19.8591 2.10982 19.7823 2.223 19.6869 2.31743L10.6922 11.2139C10.5067 11.3976 10.261 11.5 10.0056 11.5C9.75026 11.5 9.50458 11.3976 9.31902 11.2139L0.323299 2.31743C0.225796 2.22363 0.147058 2.11047 0.0916672 1.98453C0.0362759 1.85859 0.00533104 1.72238 0.000629425 1.58381C-0.00407219 1.44524 0.0175667 1.30707 0.0642834 1.17733C0.111002 1.04759 0.18187 0.928868 0.27277 0.828055C0.363672 0.727242 0.472795 0.646349 0.593801 0.590075C0.714806 0.5338 0.845284 0.503267 0.977652 0.500248C1.11002 0.49723 1.24164 0.521784 1.36487 0.572488C1.48811 0.623192 1.60049 0.699033 1.69549 0.795607L10.0056 9.01386L18.3137 0.795607Z"
            fill="url(#paint0_linear_643_12805)"
            className="dark:fill-white"
          />
          <defs>
            <linearGradient
              id="paint0_linear_643_12805"
              x1="9.33333"
              y1="-2.9375"
              x2="9.33333"
              y2="13.5625"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#020A0D" />
              <stop offset="1" stopColor="#020A0D" stopOpacity="0.4" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div
        className={`absolute dark:text-white top-full mt-2 shadow-base dark:shadow-card-dark w-full p-4 bg-white dark:bg-gray-muted dark:border-white rounded-xl space-y-3 ${
          isDropdownOpen[field] ? "block" : "hidden"
        }`}
      >
        {options.map((option) => (
          <span
            key={option}
            className="block cursor-pointer hover:bg-gray-100 dark:hover:bg-neutral-gray p-2 rounded sm:text-base text-[10px]"
            onClick={() => handleSelectOption(field, option)}
          >
            {option}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <div
      className={`modal fixed inset-0 items-center justify-center bg-black bg-opacity-50 ${
        isOpen ? "flex" : "hidden"
      }`}
    >
      <div
        ref={modalContentRef}
        className="modal-content bg-white py-10 sm:px-8 px-[10px] sm:w-[620px] w-[340px] max-h-[90vh] shadow-base rounded-[10px] overflow-y-auto dark:bg-gray-muted no-scroll"
      >
        <h3 className="text-center uppercase sm:text-2xl text-base font-semibold text-gray-900 dark:text-white mb-8">
          Новый отчет
        </h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Carb Unit Dropdown */}
          <div className="space-y-2">
            <label className="form-label sm:text-base text-sm text-primary-black dark:text-white">
              Единицы углеводов
            </label>
            {renderDropdown(
              "carbUnit",
              carbOptions,
              formData.carbUnit,
              carbDropdownRef
            )}
          </div>

          {/* Report Type Dropdown */}
          <div className="space-y-2">
            <label className="form-label sm:text-base text-sm text-primary-black dark:text-white">
              Тип отчёта
            </label>
            {renderDropdown(
              "reportType",
              reportTypeOptions,
              formData.reportType,
              reportTypeDropdownRef
            )}
          </div>

          {/* Date Range Inputs */}
          <div className="space-y-2">
            <label className="form-label sm:text-base text-sm text-primary-black dark:text-white">
              Период отчёта
            </label>
            <div className="flex gap-4">
              <input
                type="text"
                name="startDate"
                value={formData.startDate}
                onChange={handleInputChange}
                className="form-control bg-[#F2F7FD] dark:bg-gray-700 dark:text-white border dark:border-white rounded-[10px] h-[50px] sm:h-[60px] sm:px-4 px-3 w-full focus:outline-none sm:text-base text-[10px] sm:text-left text-center focus:ring-blue-500 dark:bg-gray-muted outline-none"
              />
              <input
                type="text"
                name="endDate"
                value={formData.endDate}
                onChange={handleInputChange}
                className="form-control bg-[#F2F7FD] dark:bg-gray-700 dark:text-white border dark:border-white rounded-[10px] h-[50px] sm:h-[60px] sm:px-4 px-3 w-full focus:outline-none sm:text-base text-[10px] sm:text-left text-center focus:ring-blue-500 dark:bg-gray-muted outline-none"
              />
            </div>
          </div>

          {/* Numeric Inputs */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="form-label sm:text-base text-sm text-primary-black dark:text-white">
                Высокий сахар
              </label>
              <input
                type="number"
                name="highSugar"
                value={formData.highSugar}
                onChange={handleInputChange}
                className="form-control bg-[#F2F7FD] dark:bg-gray-700 dark:text-white border dark:border-white rounded-[10px] h-[50px] sm:h-[60px] sm:px-4 px-3 w-full focus:outline-none sm:text-base text-[10px] focus:ring-blue-500 dark:bg-gray-muted outline-none"
              />
            </div>
            <div className="space-y-2">
              <label className="form-label sm:text-base text-sm text-primary-black dark:text-white">
                Верхний предел
              </label>
              <input
                type="number"
                name="upperLimit"
                value={formData.upperLimit}
                onChange={handleInputChange}
                className="form-control bg-[#F2F7FD] dark:bg-gray-700 dark:text-white border dark:border-white rounded-[10px] h-[50px] sm:h-[60px] sm:px-4 px-3 w-full focus:outline-none sm:text-base text-[10px] focus:ring-blue-500 dark:bg-gray-muted outline-none"
              />
            </div>
            <div className="space-y-2">
              <label className="form-label sm:text-base text-sm text-primary-black dark:text-white">
                Нижний предел
              </label>
              <input
                type="number"
                name="lowerLimit"
                value={formData.lowerLimit}
                onChange={handleInputChange}
                className="form-control bg-[#F2F7FD] dark:bg-gray-700 dark:text-white border dark:border-white rounded-[10px] h-[50px] sm:h-[60px] sm:px-4 px-3 w-full focus:outline-none sm:text-base text-[10px] focus:ring-blue-500 dark:bg-gray-muted outline-none"
              />
            </div>
            <div className="space-y-2">
              <label className="form-label sm:text-base text-sm text-primary-black dark:text-white">
                Низкий сахар
              </label>
              <input
                type="number"
                name="lowSugar"
                value={formData.lowSugar}
                onChange={handleInputChange}
                className="form-control bg-[#F2F7FD] dark:bg-gray-700 dark:text-white border dark:border-white rounded-[10px] h-[50px] sm:h-[60px] sm:px-4 px-3 w-full focus:outline-none sm:text-base text-[10px] focus:ring-blue-500 dark:bg-gray-muted outline-none"
              />
            </div>
          </div>

          <Calendar className="sm:w-full w-[calc(100%_+_20px)] sm:ml-0 -ml-[10px] sm:rounded-2xl rounded-0" />

          <CustomButton
            label="Создать"
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-[10px] h-[60px] font-medium"
          />
        </form>
      </div>
    </div>
  );
};
