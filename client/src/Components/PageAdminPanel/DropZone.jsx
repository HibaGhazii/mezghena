import React, { useState } from 'react';

const DropZone = () => {
  const [images, setImages] = useState([]);

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFiles = [...e.dataTransfer.files];
    const imageFiles = droppedFiles.filter(file => file.type.startsWith('image/'));
    setImages((prevImages) => [...prevImages, ...imageFiles]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleFileUpload = (e) => {
    const selectedImages = [...e.target.files];
    setImages([...images, ...selectedImages]);
  };

  return (
    <div className="mb-2 flex items-center">
      <div className="flex-1"> 
        <div 
          className="border-2 border-gray-400 p-[7px] rounded-l-lg" 
          onDrop={handleDrop}
          onDragOver={handleDragOver} 
        >
          {images.length === 0 ? (
            <p className="text-gray-500">No images uploaded</p>
          ) : ( 
            <ul className="flex flex-wrap">
              {images.map((image, index) => (
                <li key={index} className="mr-2 mb-2">
                  <img src={URL.createObjectURL(image)} alt={`Image ${index + 1}`} className="max-w-xs max-h-xs" />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <input
        type="file"
        id="image-upload"
        className="hidden" 
        accept="image/*"
        onChange={handleFileUpload}
        multiple
      /> 
      <button
        className="bg-first-color hover:bg-bg-toggle text-white font-bold py-2 px-4 rounded-r-lg"
        onClick={() => document.getElementById('image-upload').click()}
      >
        Browse
      </button>
    </div>
  );
};

const Label = ({ htmlFor, value }) => (
  <label htmlFor={htmlFor} className="block text-sm font-medium text-gray-700">
    {value}
  </label>
);

export default DropZone;
