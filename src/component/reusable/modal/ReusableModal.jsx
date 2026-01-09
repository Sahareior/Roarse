import { Modal } from 'antd';

const ReusableModal = ({ open, onClose, title, children, footer }) => {
  return (
    <Modal
      open={open}
      title={title}
      onCancel={onClose}
      footer={footer}
        maskClosable={false}
      centered
    >
      {children}
    </Modal>
  );
};

export default ReusableModal;