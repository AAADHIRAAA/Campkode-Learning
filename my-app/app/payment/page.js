"use client"
import React, {useState, useEffect} from 'react';
import {useRouter} from 'next/navigation';
import axios from 'axios';
import RazorpayButton from '@/components/Razorpay';
import Link from 'next/link';
import { useFormContext } from '@/components/formContext';
import { getUserId } from '@/utils/getUser';

export default function Payment(){
  let userId = getUserId();
  if(!userId){
    userId='6617f92ed5dedaf2a4c9f5ff';
  }
    const router=useRouter();
    const [message, setMessage] = useState('');
    const { formData } = useFormContext();
    // const enrollmentId='66195220f9b2d7dd30547be4';
    const handleSubmit = async (e) => {
      e.preventDefault();
      const {
        personalDetails,
        fileUploads,
        centerSelection,
        courseId
    } = formData;

    const {
        fname,
        lname,
        email,
        dOB,
        country,
        state,
        city,
        phone,
        altPhone,
    } = personalDetails;

    const {
        photo,
        signature,
        idProof,
    } = fileUploads;

    const {
        examCenter,
        examCity,
    } = centerSelection;
  
      try {
        console.log(userId);
        const enrollmentId = await axios.get(`http://localhost:5500/elearning/exams/getEnrollmentId/${userId}/${courseId}`);
        if(!enrollmentId){
          setMessage('Enrollment Not Found');
          return;
        }
        console.log(enrollmentId);
        
        const response = await axios.post(`http://localhost:5500/elearning/exams/register-exam/${enrollmentId.data}`, {
          firstName: fname,
          lastName: lname,
          email,
          dateOfBirth: dOB,
          country,
          state,
          city,
          phone,
          altPhone,
          idProof,
          signatureProof: signature,
          profilePhoto: photo,
          examCity,
          examCenter,
        });
  
        if (response.status === 201) {
          setMessage('Exam Registered Successfully');
        } else {
          setMessage('An error occurred while exam registration');
        }
      } catch (error) {
        console.log(error);
      }
    };
  
    return(
        <>
      <div className='flex flex-col gap-4 justify-center align-middle items-center h-screen'>
     
                <RazorpayButton />
                <button  onClick={handleSubmit}>Register Exam</button>
                {message && <p className="mt-4 text-center text-red-500">{message}</p>}
    
     </div>
        </>
    )
}