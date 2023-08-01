import { BiChevronDown } from "react-icons/bi";

// eslint-disable-next-line react/prop-types
function Modal({ isOpen, onClose,  children }) {
  const showHideClassName = isOpen ? "block" : "hidden";

  return (
    <div className={`fixed z-20 inset-0 overflow-y-auto ${showHideClassName}`}>
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center  ">
        <div className="fixed inset-0 transition-opacity">
          <div
            className="absolute inset-0 backdrop-blur-sm bg-gray-900/40  "

          ></div>
        </div>

        <div
          className="inline-block bg-white overflow-hidden shadow-xl transform transition-all sm:my-8 align-middle  w-10/12 sm:max-w-xl"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          {children}

          <div className="p-2 sm:p-5 flex justify-between text-xs sm:text-base">
            <div 
            onClick={onClose}
            className="cursor-pointer flex justify-center items-center sm:gap-2 sm:text-sm p-2 text-[#30A8CE]">
              View full description
              <span>
                <BiChevronDown size={20} />
              </span>
            </div>
            <button
              onClick={onClose}
              type="button"
              className="h-9 flex justify-center items-center rounded-md border border-transparent shadow-sm px-3 sm:px-4 py-1 bg-[#30A8CE] hover:bg-[#279ec2] text-white"
              title="Update"
            >
              Submit Application
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
