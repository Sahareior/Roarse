import { Spin } from "antd";
import { CheckCircleFilled } from "@ant-design/icons";

const FindingCarriersLoader = () => {
  return (
    <div className="bg-white border rounded-xl p-10 flex flex-col items-center justify-center space-y-6">

      {/* Spinner */}
      <Spin size="large" />

      {/* Text */}
      <div className="text-center space-y-1">
        <p className="text-[18px] font-semibold text-gray-900">
          AI is finding the best carriers...
        </p>
        <p className="text-sm text-gray-500">
          This usually takes 3–5 minutes
        </p>
      </div>

      {/* Progress Steps */}
      <div className="space-y-3 mt-4">
        <div className="flex items-center gap-2 text-sm text-gray-700">
          <CheckCircleFilled className="text-green-500" />
          Analyzing carrier availability
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-700">
          <CheckCircleFilled className="text-green-500" />
          Matching transport capabilities
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-700">
          <Spin size="small" />
          Calculating optimal matches
        </div>
      </div>
    </div>
  );
};
export default FindingCarriersLoader