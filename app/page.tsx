'use client'

import Image from 'next/image';
import successGif from '../public/success.gif';
import { BASE_API } from './constants/env';
import axios from 'axios';
import { useState } from 'react';

export default function Home() {
  const [registrationSuccessful, setRegistrationSuccessful] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);

  // function to handle registration
  const handleRegistration = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    // get form data
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData.entries())

    try {
      const resp = await axios.post(`${BASE_API}/trainees/enroll`, data, { headers: { 'Content-Type': 'application/json' } });

      setRegistrationSuccessful(true);
      e.target.reset();
      setLoading(false);
      
      setTimeout(() => {
        setRegistrationSuccessful(false)
      }, 3000);
    } catch (error) {
      setErrorMsg('An error occured, please try again');
      setLoading(false);

      setTimeout(() => {
        setErrorMsg('');
        setRegistrationSuccessful(false)
      }, 3000);
    }
  }

  return (
    <main className="bg-[#F3F4F6] min-w-[100vw] min-h-[100vh] flex md:justify-center items-center flex-col p-[20px] md:p-[70px]">
      <div className='md:max-w-[70vw] md:min-w-[70vw] lg:min-w-[50vw] lg:max-w-[50vw] items-start mb-14 max-w-[90vw] min-w-[90vw]'>
        <Image
          src="./softworld-logo.svg"
          alt="Softworld Logo"
          width={100}
          height={100}
          className='float-left'
        />
      </div>
      {/* Registration Form */}
      <div className="rounded-[18px] bg-[#fff] shadow-custom md:py-[48px] md:px-[40px] py-[32px] px-[20px] flex text-center flex-col md:max-w-[70vw] md:min-w-[70vw] lg:min-w-[50vw] lg:max-w-[50vw] 
        max-w-[90vw] min-w-[90vw]">

        { 
          (registrationSuccessful == false) && 
          <div>
            { (errorMsg.length !== 0) && <h4 className='text-red-500 mb-2 animate-bounce'>{errorMsg}</h4> }

            <h1 className="font-semibold text-2xl mb-2 font-sora">Unleash Your Brilliance, Enroll Today!</h1>
            <h4 className='text-[#5B5B5B] text-sm mb-10'>Discover a world of fun learning, dive into exciting courses, and let your brilliance shine. Register now and let the adventure begin!</h4>

            <form onSubmit={handleRegistration}>
              <div className="md:flex md:justify-between mb-5">
                <div className='flex items-start flex-col w-full md:pr-4 mb-5 md:mb-0'>
                  <h4 className='mb-2 text-base'>First Name</h4>
                  <input type="text" placeholder='Enter your first name' 
                    name='firstname'
                    className='rounded-[8px] border border-[#BFBFBF] items-center p-[16px] w-full'
                    required/>
                </div>
                <div className='flex items-start flex-col w-full md:pl-4'>
                  <h4 className='mb-2 text-base'>Last Name</h4>
                  <input type="text" placeholder='Enter your last name' 
                    name='lastname'
                    className='rounded-[8px] border border-[#BFBFBF] items-center p-[16px] w-full'
                    required/>
                </div>
              </div>

              <div className='flex items-start flex-col w-full mb-5'>
                <h4 className='mb-2 text-base'>Email Address</h4>
                <input type="email" placeholder='Enter your email address' 
                  name='email'
                  className='rounded-[8px] border border-[#BFBFBF] items-center p-[16px] w-full'
                  required/>
              </div>

              <div className='flex items-start flex-col w-full mb-5'>
                <h4 className='mb-2 text-base'>Phone Number</h4>
                <input type="text" placeholder='+234 **********' 
                  name='phone'
                  className='rounded-[8px] border border-[#BFBFBF] items-center p-[16px] w-full'
                  required/>
              </div>

              <div className='flex items-start flex-col w-full mb-5'>
                <h4 className='mb-2 text-base'>Gender</h4>
                <select name="gender" 
                  className='rounded-[8px] border border-[#9ca3af] items-center p-[16px] w-full text-[#5B5B5B]'
                  required>
                  <option value="">Choose your gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>

              <div className='flex items-start flex-col w-full mb-5'>
                <h4 className='mb-2 text-base'>Category</h4>
                <select name="category" 
                  className='rounded-[8px] border border-[#9ca3af] items-center p-[16px] w-full text-[#5B5B5B]'
                  required>
                  <option value="">Select your category</option>
                  <option value="career switching">Career Switching</option>
                  <option value="student">Student</option>
                  <option value="graduate">Graduate</option>
                  <option value="corporate">Corporate</option>
                </select>
              </div>

              <div className='flex items-start flex-col w-full mb-5'>
                <h4 className='mb-2 text-base'>Training Interest</h4>
                <select name="interest" 
                  className='rounded-[8px] border border-[#9ca3af] items-center p-[16px] w-full text-[#5B5B5B]'
                  required>
                  <option value="">Select your training interest</option>
                  <option value="data analysis">Data Analysis</option>
                  <option value="uiux design">UI/UX Design</option>
                  <option value="product marketing">Product Marketing</option>
                  <option value="business analyst">Business Analyst</option>
                  <option value="project management">Project Management</option>
                  <option value="product management">Product Management</option>
                  <option value="software quality testing">Software Quality Testing</option>
                  <option value="frontend development">Frontend Development</option>
                  <option value="backend development">Backend Development</option>
                  <option value="mobile app development">Mobile App Development</option>
                  <option value="devops engineering">DevOps Engineering</option>
                </select>
              </div>

              <div className='flex items-start flex-col w-full mb-5'>
                <h4 className='mb-2 text-base'>Programming/Software Experience?</h4>
                <select name="experience" 
                  className='rounded-[8px] border border-[#9ca3af] items-center p-[16px] w-full text-[#5B5B5B]'
                  required>
                  <option value="">Any programming experience?</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>

              <div className='flex items-start flex-col w-full mb-5'>
                <h4 className='mb-2 text-base'>Length of Experience?</h4>
                <select name="experienceLength" 
                  className='rounded-[8px] border border-[#9ca3af] items-center p-[16px] w-full text-[#5B5B5B]'
                  required>
                  <option value="">What is the length of your experience</option>
                  <option value="< 6 months">&lt; 6 Months</option>
                  <option value="> 1 year">&gt; 1 Year</option>
                  <option value="> 2 years">&gt; 2 Years</option>
                </select>
              </div>

              <button className='bg-[#346ED6] py-[16px] px-[96px] text-[#fff] w-[fit-content] self-center rounded-[24px] hover:bg-[#0f429e] my-4' type='submit'>
                <div className='flex items-center'>
                  { 
                    loading && 
                    <div
                      className="mr-[15px] inline-block h-5 w-5 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                      role="status">
                      <span
                        className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                        >Loading...
                      </span>
                    </div>
                  }
                  Apply Now
                </div>
              </button>
            </form>
          </div>
        }

        { 
          (registrationSuccessful) && 
          <div className='flex items-center flex-col w-full mt-10'>
            <Image
              src={successGif}
              alt="Success"
              width={500}
              height={500}
              />
            <h1 className='text-2xl mb-2'>Submitted Successfully</h1>
            <h4 className='text-[#5B5B5B] text-sm mb-10'>you will be notified of next steps via email</h4>
          </div>
        }
      </div>
    </main>
  )
}
