"use client"
import React ,{useState, useEffect} from 'react';
import { Axios } from 'axios';
import { useRouter } from 'next/navigation';
import { useFormContext } from '@/components/formContext';

export default function ExamRegistration({formData, updateFormData}) {
    const router = useRouter();
  
  

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        updateFormData({ [e.target.name]: e.target.value });
      };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validateForm();
        if (Object.keys(errors).length === 0) {
            
        } else {
            setErrors(errors);
        }
    };

    const validateForm = () => {
        const errors = {};
        const currentDate = new Date();
        const dobDate = new Date(formData.dOB);
        if(dobDate< new Date(currentDate.getFullYear()-15,currentDate.getMonth(),currentDate.getDate()) || dobDate>currentDate){
            errors.dOB='Invalid DOB'
        }
        if (formData.phone.toString().length!==10) {
            errors.fname = 'Invalid Phone Number';
        }
        if(formData.rePhone.toString()!==(formData.phone).toString()){
            errors.rePhone='Phone Number Mismatched';
        }
        if(formData.altPhone.toString().length!==10){
            errors.altPhone='Invalid Alternate Phone Number';
        }
        

        return errors;
    };
   
    return (
        <div>
            <h1 className="bg-teal-500 text-white text-center h-20 pt-10">EXAM REGISTRATION</h1>
            <div className="register-box w-96 h-full mx-auto mt-10 bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-center mt-4">Personal Details</h3>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="fname" className="block">First Name:</label>
                    <input type="text" id="fname" value={formData.fname} onChange={handleChange} className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 mb-4" required />
                    {errors.fname}
                    <label htmlFor="lname" className="block">Last Name:</label>
                    <input type="text" id="lname" value={formData.lname} onChange={handleChange} className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 mb-4" required/>

                    <label htmlFor="email" className="block">Email:</label>
                    <input type="email" id="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 mb-4" required />

                    <label htmlFor="Date" className="block">Date Of Birth:</label>
                    <input type="date" id="dOB" value={formData.dOB} onChange={handleChange} className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 mb-4" required />

                    <label htmlFor="Country" className="block">Country:</label>
                    <input type="text" id="country" value={formData.country} onChange={handleChange} className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 mb-4" required />

                    <label htmlFor="State" className="block">State:</label>
                    <input type="text" id="state" value={formData.state} onChange={handleChange} className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 mb-4" required />

                    <label htmlFor="City" className="block">City:</label>
                    <input type="text" id="city" value={formData.city} onChange={handleChange} className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 mb-4" required />

                    <label htmlFor="phone" className="block">Phone Number:</label>
                    <input type="number" id="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 mb-4" required />

                    <label htmlFor="phone1" className="block">Re-enter Phone Number:</label>
                    <input type="number" id="rePhone" value={formData.rePhone} onChange={handleChange} className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 mb-4" required />

                    <label htmlFor="phone2" className="block">Alternative Number:</label>
                    <input type="number" id="altPhone" value={formData.altPhone} onChange={handleChange} className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 mb-4" required />

                    {/* <label htmlFor="role" className="block">What is your role:</label>
                    <input type="text" id="role" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 mb-4" required /> */}

                    <button type="submit" className="submit-button" >Continue</button>
                </form>
            </div>
        </div>
    );
}
