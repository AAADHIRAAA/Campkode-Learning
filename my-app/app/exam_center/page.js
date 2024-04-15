"use client"
import React, {useState, useEffect} from 'react';
import {useRouter} from 'next/navigation';
import useFormContext from '@/components/formContext';

export default function ExamCenter(){
    const router=useRouter();

    const { formData, updateFormData } = useFormContext();
  

    const handleChange = (e) => {
        updateFormData({ [e.target.name]: e.target.value });
      };
    

    const handleSubmit=(e)=>{
        e.preventDefault();
        router.push('/payment');
    }

  
    return(
        <>
      <div className='mx-auto'>
        <h1 className='flex justify-center px-8 py-6 bg-emerald-600 mb-4 text-lg font-bold'>EXAM REGISTRATION</h1>
        <div className='flex justify-center align-middle items-center'>
           
            <form className='mx-auto form' onSubmit={handleSubmit}>
            <h3>Exam Center Details</h3>
                <label for="City">City</label>
                <select name="City" id="city" onChange={handleChange}>
                    <option value="select">Select City</option>
                    <option value="Chennai">Chennai</option>
                </select>


                <label for="Center">Center</label>
                <select name="City" id="city" onChange={handleChange}>
                    <option value="select">Select Center</option>
                    <option value="Sri Sairam Engineering College">Sri Sairam Engineering College</option>
                </select>
                
                <button class="submit-button" type="submit">Continue</button>
            </form>
        </div>    
     </div>
        </>
    )
}