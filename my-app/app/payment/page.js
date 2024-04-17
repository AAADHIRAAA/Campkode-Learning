"use client"
import React, {useState, useEffect} from 'react';
import {useRouter} from 'next/navigation';
import RazorpayButton from '@/components/Razorpay';
import Link from 'next/link';


export default function Payment(){
    const router=useRouter();

   
    return(
        <>
      <div className='flex justify-center align-middle items-center h-screen'>
        <RazorpayButton/>
     </div>
        </>
    )
}