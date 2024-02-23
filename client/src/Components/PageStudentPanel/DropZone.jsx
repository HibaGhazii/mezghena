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

  const deleteImage = (index) => {
    const updatedImages = images.filter((_, i) => i !== index);
    setImages(updatedImages);
  };

  return (
    <div className="mb-2 flex items-center">
      <div className="flex-1"> 
        <div 
          className="border-2 border-gray-300 p-[7px] rounded-l-xl" 
          onDrop={handleDrop}
          onDragOver={handleDragOver} 
        >
          {images.length === 0 ? (
            <p className="text-gray-500 w-[435px]">No images uploaded</p>
          ) : ( 
            <ul className="flex flex-wrap ">
              {images.map((image, index) => (
                <li key={index} className="mr-2 mb-2 relative">
                  <img src={URL.createObjectURL(image)} alt={`Image ${index + 1}`} className="max-w-xs max-h-xs rounded-full cursor-pointer w-14 h-14" onClick={() => window.open(URL.createObjectURL(image))} />
                  <button onClick={() => deleteImage(index)} className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 19a9 9 0 100-18 9 9 0 000 18zm-3.293-9.707a1 1 0 011.414-1.414L10 8.586l2.879-2.879a1 1 0 111.414 1.414L11.414 10l2.879 2.879a1 1 0 01-1.414 1.414L10 11.414l-2.879 2.879a1 1 0 01-1.414-1.414L8.586 10 5.707 7.121a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
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
        className="bg-first-color hover:bg-bg-toggle text-white font-bold py-2 px-4 rounded-r-xl"
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
