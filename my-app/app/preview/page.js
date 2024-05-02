"use client"
import React from 'react';
import Link from 'next/link';
import { useFormContext } from '@/components/formContext';

const PreviewPage = () => {
  const { formData } = useFormContext();
  const toggleFile = (fileType) => {
    const file = formData.files[fileType];
    const fileName = formData.fileNames[fileType];
    const img = document.getElementById(fileType + 'Img');
  
    if (file) {
      if (img.style.display === 'none' || img.style.display === '') {
        img.src = URL.createObjectURL(file);
        img.style.display = 'block';
      } else {
        img.style.display = 'none';
      }
    } else {
      img.style.display = 'none'; // Hide the image if no file is uploaded
    }
  };
  
  
  
  return (
    <div className=" w-[600px] h-full mx-auto mt-5 bg-blue-200 p-4 rounded-2xl shadow-2xl mb-5">
      <h2 className="text-center mt-4 font-bold text-red-700 mb-5">Preview Page</h2>

      <form >
        {/* Personal Details */}
        <div className="form-section p-4">
          <h3 className="text-center font-bold ">Personal Details:</h3>
          <p>First Name: {formData.personalDetails.fname}</p>
          <p>Last Name: {formData.personalDetails.lname}</p>
          <p>Email: {formData.personalDetails.email}</p>
          <p>Date of Birth: {formData.personalDetails.dOB}</p>
            <p>Country: {formData.personalDetails.country}</p>
            <p>State: {formData.personalDetails.state}</p>
            <p>City: {formData.personalDetails.city}</p>
            <p>Phone: {formData.personalDetails.phone}</p>
            <p>Alternate Phone: {formData.personalDetails.altPhone}</p>
        </div>

        {/* File Uploads */}
        <div className="form-section p-4">
          <h3 className="text-center font-bold ">File Uploads:</h3>
          <div className="file-upload">
            <p>Photo:
           
              {formData.files.photo ? formData.fileNames.photo : 'Not Uploaded'}</p>
      
            <p>Signature: {formData.files.signature ? formData.fileNames.signature : 'Not Uploaded'}</p>
            <p>ID Proof: {formData.files.idProof ?formData.fileNames.idProof : 'Not Uploaded'}</p>
          </div>
        </div>

        {/* Center Selection */}
        <div className="form-section p-4">
          <h3 className="text-center font-bold ">Center Selection:</h3>
          <p>Exam Center: {formData.centerSelection.examCenter}</p>
          <p>Exam City: {formData.centerSelection.examCity}</p>
        </div>

        

        {/* Buttons */}
        <div className="flex flex-row">
          <Link href="/exam_center" className="rounded-xl bg-blue-300 hover:bg-blue-400 px-2 py-2 flex mr-auto">Edit</Link>
          <Link href="/payment" className="rounded-xl bg-green-500 hover:bg-green-600 px-2 py-2 flex ml-auto">Proceed to Payment</Link>
        </div>
      </form>

    </div>
  );
};

export default PreviewPage;
