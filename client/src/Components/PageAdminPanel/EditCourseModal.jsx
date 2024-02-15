import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Set the root element for accessibility

const EditCourseModal = ({ isOpen, onClose, course }) => {
  const [editedCourse, setEditedCourse] = useState(null);

  useEffect(() => {
    if (course) {
      setEditedCourse(course);
    }
  }, [course]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedCourse({ ...editedCourse, [name]: value });
  };

  const handleSubmit = () => {
    // Handle submit logic, e.g., updating course details
    onClose(); // Close the modal after submitting
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Edit Course Modal"
    >
      {editedCourse ? (
        <>
          <h2>Edit Course</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Title:
              <input
                type="text"
                name="title"
                value={editedCourse.title}
                onChange={handleInputChange}
              />
            </label>
            {/* Add more input fields for other course details */}
            <button type="submit">Submit</button>
            <button onClick={onClose}>Cancel</button>
          </form>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </Modal>
  );
};

export default EditCourseModal;
