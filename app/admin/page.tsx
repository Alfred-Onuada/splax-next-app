'use client';

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react';
import { BASE_API } from '../constants/env';
import axios from 'axios';

export default function Home() {
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);

  // login function
  const login = async function name(e:any) {
    e.preventDefault();
    setLoading(true);

    // get form data
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData.entries())

    try {
      const resp = await axios.post(`${BASE_API}/users/login`, data, { headers: { 'Content-Type': 'application/json' } });
      
      setLoading(false);

      const { access_token, refresh_token, user } = resp.data;
      
      // set token in local storage
      localStorage.setItem('access_token', access_token);
      localStorage.setItem('refresh_token', refresh_token);
      localStorage.setItem('user', JSON.stringify(user));

      window.location.href = 'admin/dashboard';
    } catch (error: any) {
      if (error.response.status === 404) {
        setErrorMsg('Invalid Credentials');
      } else {
        setErrorMsg('An error occured, please try again');
      }

      setLoading(false);

      setTimeout(() => {
        setErrorMsg('');
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
      {/* Login Form */}
      <div className="rounded-[18px] bg-[#fff] shadow-custom md:py-[48px] md:px-[40px] py-[32px] px-[20px] flex text-center flex-col md:max-w-[70vw] md:min-w-[70vw] lg:min-w-[50vw] lg:max-w-[50vw] 
        max-w-[90vw] min-w-[90vw]">
        { (errorMsg.length !== 0) && <h4 className='text-red-500 mb-2 animate-bounce'>{errorMsg}</h4> }

        <h1 className="font-normal text-2xl mb-2">Login to your account</h1>
        <h4 className='text-[#5B5B5B] text-sm mb-10'>Kindly input your details to login in to your dashboard</h4>

        <form onSubmit={login}>
          <div className='flex items-start flex-col w-full mb-5'>
            <h4 className='mb-2 text-base'>Email Address</h4>
            <input type="email" placeholder='Enter your email address' 
              name='email'
              className='rounded-[8px] border border-[#BFBFBF] items-center p-[16px] w-full'
              required/>
          </div>

          <div className='flex items-start flex-col w-full mb-5'>
            <div className='flex justify-between w-full'>
              <h4 className='mb-2 text-base'>Password</h4>
              <Link href={""} className='mb-2 text-base text-[#346ED6]'>Forgot Password?</Link>
            </div>
            <div className='w-full'>
              <input type="password" placeholder='**********' 
                name='password'
                className='rounded-[8px] border border-[#BFBFBF] items-center p-[16px] w-full'
                required/>
              {/* TODO: add eye */}

            </div>
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
              Login
            </div>
          </button>
        
          <div className='flex justify-center items-center'>
            <div className='w-[50px] h-[1px] bg-[black]'></div>
            <h4 className='mx-2 text-sm'>Or Sign in With</h4>
            <div className='w-[50px] h-[1px] bg-[black]'></div>
          </div>

          <div className='m-5 flex justify-center items-center'>
            <div className='border-2 border-[#CECECE] p-[10px] rounded-md mx-5'>
              <Image
                src='./Google.svg'
                alt='Google Logo'
                width={25}
                height={25}
              />
            </div>
            <div className='border-2 border-[#CECECE] p-[10px] rounded-md mx-5'>
              <Image
                src='./Apple.svg'
                alt='Apple Logo'
                width={23}
                height={23}
              />
            </div>
            <div className='border-2 border-[#CECECE] p-[10px] rounded-md mx-5'>
              <Image
                src='./Facebook.svg'
                alt='Facebook Logo'
                width={25}
                height={25}
              />
            </div>
          </div>

          <h4 className='text-sm'>Don’t have and account? <Link href={""} className='text-sm mb-2 text-[#346ED6]'>Sign up</Link></h4>
        </form>
      </div>
    </main>
  )
}
