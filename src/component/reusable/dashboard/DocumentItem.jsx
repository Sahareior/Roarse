import { FaRegFileAlt } from 'react-icons/fa';

const DocumentItem = ({ title, onView }) => (
  <div className="flex justify-between items-center border rounded-lg p-3">
    <div className="flex items-center gap-3">
      <p className="p-4 bg-[#F3F4F6] rounded-xl">
        <FaRegFileAlt size={20} className="text-[#6A7282]" />
      </p>
      <div>
        <span className="text-[16px] text-[#000000] robReg">{title}</span>
        <p className="text-[#6A7282] robReg text-xs">Uploaded</p>
        <p className="text-[#6A7282] robReg text-xs">10/11/2022</p>
      </div>
    </div>

    <button
      onClick={onView}
      className="text-xs bg-black text-white px-8 py-2 rounded"
    >
      View
    </button>
  </div>
);

export default DocumentItem;