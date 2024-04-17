"use client"

import React,{useState, useEffect} from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


export default function AddCourse(){
    const [message, setMessage]= useState('');
    const [formData,setFormData] = useState({
        title:'',
        instructors:'',
        phone:'',
    });

    const handleSubmit=(e)=>{

    };
   
    return(
        <>
  <div className='flex justify-center p-4'>
  <Tabs defaultValue="course" className="w-[900px] ">
  <TabsList className="flex">
    <TabsTrigger value="course" className="w-[450px] p-3">Add New Course</TabsTrigger>
    <TabsTrigger value="assignment" className="w-[450px] p-3">Add new Assignment</TabsTrigger>
  </TabsList>
  <TabsContent value="course" className="flex flex-col p-8">
      <fieldset className="flex gap-4 p-4 " >
        <label className="w-[200px]" htmlFor=" Course ID">
          Course ID
        </label>
        <input className="w-[600px]" id="id" />
      </fieldset>
      <fieldset className="flex gap-4 p-4 " >
        <label className="w-[200px]" htmlFor=" Course name">
          Course Name
        </label>
        <input className="w-[600px]" id="name" />
      </fieldset>
      <fieldset className="flex gap-4 p-4 ">
        <label className="w-[200px]" htmlFor="instructors">
          Instructors
        </label>
        <input className="w-[600px]" id="instructors" />
        </fieldset>
        <fieldset className="flex gap-4 p-4 ">
        <label className="w-[200px]" htmlFor="category">
            Category
        </label>
        <input className="w-[600px]" id="category" />
        </fieldset>
        <fieldset className="flex gap-4 p-4 ">
        <label className="w-[200px]" htmlFor="enrollmentstatus">
            Enrollment Status
        </label>
        <input className="w-[600px]" id="enrollmentstatus"/>
        </fieldset>
        <fieldset className="flex gap-4 p-4 ">
        <label className="w-[200px]" htmlFor="duration">
            Duration
        </label>
        <input className="w-[600px]" id="duration"/>
        </fieldset>
        <fieldset className="flex gap-4 p-4 ">
        <label className="w-[200px]" htmlFor="syllabus">
            Syllabus
        </label>
        <input className="w-[600px]" type='file' id="syllabus"/>
      </fieldset>
      <div style={{ display: 'flex', marginTop: 20, justifyContent: 'flex-end' }}>
        <button className="Button green">Save changes</button>
      </div>
    </TabsContent>

<TabsContent value="assignment" className="flex flex-col p-8">

<fieldset className="Fieldset">
  <label className="w-[200px] mb-3" htmlFor="questions">
    No of questions
  </label>
  <input className="w-[800px] p-3" id="questions" />
</fieldset>
<fieldset className="Fieldset">
  <label className="Label" htmlFor="instructors">
    Instructors
  </label>
  <input className="Input" id="instructors" />
  </fieldset>
  <fieldset className="Fieldset">
  <label className="Label" htmlFor="category">
      Category
  </label>
  <input className="Input" id="enrollmentstatus"/>
  </fieldset>
  <fieldset className="Fieldset">
  <label className="Label" htmlFor="enrollmentstatus">
      Enrollment Status
  </label>
  <input className="Input" id="duration"/>
  </fieldset>
  <fieldset className="Fieldset">
  <label className="Label" htmlFor="duration">
      Duration
  </label>
  <input className="Input" id="duration"/>
  </fieldset>
  <fieldset className="Fieldset">
  <label className="Label" htmlFor="syllabus">
      Syllabus
  </label>
  <input className="Input" id="syllabus"/>
</fieldset>
<div style={{ display: 'flex', marginTop: 20, justifyContent: 'flex-end' }}>
  <button className="Button green">Save changes</button>
</div>
</TabsContent>
</Tabs>
</div>

        {/* <div className="signup-box bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold">Add a new Course</h1>
 
        <form className="mt-4 max-w-[80%] mx-auto" >
        <label htmlFor="title" className="block mt-2">Course Title</label>
          <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500" placeholder="Enter course name" required />
           <label htmlFor="instructors" className="block mt-2">Instructors</label>
           <input type="text" id="title" name="instructors" value={formData.instructors} onChange={handleChange} className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500" placeholder="Enter instructors name" required />
          <label htmlFor="duration" className="block mt-2">Category</label>
          <input type="text" id="duration" name="duration" value={formData.phone} onChange={handleChange} className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500" placeholder="Enter no of weeks" required />
          <label htmlFor="duration" className="block mt-2">Enrollment Status</label>
          <input type="text" id="duration" name="duration" value={formData.phone} onChange={handleChange} className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500" placeholder="Enter no of weeks" required />
          <label htmlFor="duration" className="block mt-2">Syllabus</label>
          <input type="file" id="syllabus" name="duration" value={formData.phone} onChange={handleChange} className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500" placeholder="Enter no of weeks" required />
          <label htmlFor="duration" className="block mt-2">Duration</label>
          <input type="number" id="duration" name="duration" value={formData.phone} onChange={handleChange} className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500" placeholder="Enter no of weeks" required />
          <label htmlFor="duration" className="block mt-2">Duration</label>
          <input type="text" id="duration" name="duration" value={formData.phone} onChange={handleChange} className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500" placeholder="Enter no of weeks" required />
          <label htmlFor="duration" className="block mt-2">Duration</label>
          <input type="text" id="duration" name="duration" value={formData.phone} onChange={handleChange} className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500" placeholder="Enter no of weeks" required />
          <input type="submit" value="Submit" className="w-full mt-4 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 cursor-pointer" />
        </form>
        <p className="mt-4 text-sm">{message}</p> */}
      {/* </div> */}
        </>
    )
}



