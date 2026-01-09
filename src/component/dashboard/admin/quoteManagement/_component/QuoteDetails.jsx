import { useState } from "react";
import ReusableModal from "../../../../reusable/modal/ReusableModal";
import AssignAgentForm from "../../../../reusable/dashboard/AssignAgentForm";
import DocumentItem from "../../../../reusable/dashboard/DocumentItem";

const Section = ({ icon, title, children }) => (
  <div className="space-y-3">
    <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
      <span className="text-[#1C398E]">{icon}</span>
      <span className="text-[16px] robReg">{title}</span>
    </div>
    {children}
  </div>
);

const Item = ({ label, value }) => (
  <div>
    <p className="text-[16px] robReg text-gray-500">{label}</p>
    <p className="text-[20px] robReg font-medium">{value}</p>
  </div>
);

const QuoteDetails = () => {
  const [isAssignModalOpen, setIsAssignModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [selectedDocument, setSelectedDocument] = useState(null);

  // Mock documents with image URLs (replace with actual URLs)
  const documents = [
    {
      title: "Business License",
      imageUrl: "https://fastly.picsum.photos/id/111/536/354.jpg?hmac=fHcbrbPdjjAKJDWHzXpGbfQ9Jbxs3x-FEQNm_rQrmzQ",
    },
    {
      title: "Tax Certificate",
      imageUrl: "https://fastly.picsum.photos/id/111/536/354.jpg?hmac=fHcbrbPdjjAKJDWHzXpGbfQ9Jbxs3x-FEQNm_rQrmzQ",
    },
    {
      title: "Insurance Certificate",
      imageUrl: "https://via.placeholder.com/800x600?text=Insurance+Certificate",
    },
    {
      title: "ID Verification",
      imageUrl: "https://via.placeholder.com/800x600?text=ID+Verification",
    },
  ];

  const handleAssignClick = () => {
    setIsAssignModalOpen(true);
  };

  const handleAssignSubmit = (values) => {
    console.log("Assign Agent Form Submitted:", values);
    setIsAssignModalOpen(false);
  };

  const handleViewDocument = (doc) => {
    setSelectedDocument(doc);
    setIsViewModalOpen(true);
  };

  const handleCloseViewModal = () => {
    setIsViewModalOpen(false);
    setSelectedDocument(null);
  };

  const handleVerify = () => {
    alert(`Verifying document: ${selectedDocument?.title}`);
    handleCloseViewModal();
  };

  return (
    <div>
      <p className="border-b-2 robReg text-[20px] border-[#E5E7EB] p-7">
        Quote Details
      </p>
      <div className="max-w-8xl flex bg-white border mt-8 rounded-xl p-6">
        {/* Left Column - Details */}
        <div className="space-y-9 flex-1 pr-8">
          {/* Route */}
          <Section icon="📍" title="Route">
            <div className="grid grid-cols-2 gap-6">
              <Item label="From" value="India" />
              <Item label="To" value="Bangladesh" />
            </div>
          </Section>

          {/* Shipment Details */}
          <Section icon="📦" title="Shipment Details">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <Item label="Transport Mode" value="Road" />
              <Item label="Weight" value="8000 kg" />
              <Item label="Category" value="Industrial" />
            </div>
          </Section>

          {/* Timeline */}
          <Section icon="📅" title="Timeline">
            <div className="grid grid-cols-2 gap-6">
              <Item label="Pickup Date" value="ASAP" />
              <Item label="Expected Delivery" value="Within 2–3 days" />
            </div>
          </Section>
        </div>

        {/* Right Column - Documents */}
        <div className="w-[40vw] space-y-3 border-l pl-8">
          <h3 className="text-sm font-medium text-gray-700 mb-2">Documents</h3>
          {documents.map((doc, index) => (
            <DocumentItem
              key={index}
              title={doc.title}
              onView={() => handleViewDocument(doc)}
            />
          ))}
        </div>
      </div>
      <div className="flex gap-5 justify-end py-6">
        <button className="py-1 px-6 border">Back</button>
        <button
          onClick={handleAssignClick}
          className="py-1 px-6 border bg-black text-white"
        >
          Assign a Agent
        </button>
      </div>

      {/* View Document Modal */}
      <ReusableModal
        open={isViewModalOpen}
        onClose={handleCloseViewModal}
        title={selectedDocument?.title}
        footer={[
          <button
            key="verify"
            onClick={handleVerify}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
          >
            Verify
          </button>,
        ]}
      >
        {selectedDocument && (
          <img
            src={selectedDocument.imageUrl}
            alt={selectedDocument.title}
            className="w-full h-auto rounded-lg"
          />
        )}
      </ReusableModal>

      {/* Assign Agent Modal */}
      <ReusableModal
        open={isAssignModalOpen}
        onClose={() => setIsAssignModalOpen(false)}
        title="Assign Agent"
        footer={null}
      >
        <AssignAgentForm onSubmit={handleAssignSubmit} />
      </ReusableModal>
    </div>
  );
};

export default QuoteDetails;