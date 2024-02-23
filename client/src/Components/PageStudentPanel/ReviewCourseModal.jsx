import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Set the root element for accessibility

const ReviewCourseModal = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Review Course Modal"
    >
      <h2>Review Course</h2>
      {/* Add review form or content */}
      <button onClick={onClose}>Close</button>
    </Modal>
  );
};

export default ReviewCourseModal;
