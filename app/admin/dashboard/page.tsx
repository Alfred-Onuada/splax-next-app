'use client';

import Image from 'next/image'
import userImage from './../../../public/user.png';
import IsAuth from '../isAuthenticated';
import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { BASE_API } from '@/app/constants/env';
import axios from 'axios';

interface userInterface {
  email: string;
  firstname: string;
  gender: string;
  lastname: string;
  phone: string;
  user_type: string;
  userid: number;
}

interface traineesInterface {
  category: string;
  email: string;
  experience: string;
  experienceLength: string;
  firstname: string;
  gender: string;
  interest: string;
  lastname: string;
  phone: string;
  status: "accepted" | "pending" | "rejected";
  user_type: string;
  userid: number;
}

const Home: NextPage = () => {
  // temp store for all data for pagination
  const [traineesAll, setTraineesAll] = useState<traineesInterface[]>([]);

  const user: userInterface = JSON.parse(localStorage.getItem('user') || '{}');
  const [trainees, setTrainees] = useState<traineesInterface[]>([]);
  const [traineeCount, setTraineeCount] = useState<number>(0);
  const [pageNo, setPageNo] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(5);
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const resp = await axios.get(`${BASE_API}/admins/trainees`, { 
          headers: { 
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('access_token') || ''
          } 
        });
        
        setTraineeCount(resp.data.trainee.length);
        setTraineesAll(resp.data.trainee);
        setTrainees(resp.data.trainee.slice(0, pageSize));
      } catch (error: any) {
        if (error.response.status === 401) {
          window.location.href = '/admin';
          return;
        }

        setErrorMsg('An error occured, please try again');
        setLoading(false);
      }
    })()
  }, []);

  const nextPage = () => {
    setPageNo(prevPageNo => {
      const newPageNo = prevPageNo + 1

      setTrainees(traineesAll.slice((newPageNo * pageSize) - pageSize, newPageNo * pageSize));
      
      return newPageNo;
    });
  }

  const prevPage = () => {
    setPageNo(prevPageNo => {
      const newPageNo = prevPageNo - 1

      setTrainees(traineesAll.slice((newPageNo * pageSize) - pageSize, newPageNo * pageSize));
      
      return newPageNo;
    });
  }

  return (
    <main className="bg-[#F3F4F6] min-w-[100vw] min-h-[100vh] py-[20px] md:px-[20px] px-[15px]">
      <div className='flex justify-between items-center'>
        <Image
            src="./../softworld-logo.svg"
            alt="Softworld Logo"
            width={100}
            height={100}
            className='float-left'
          />

        <div className='flex items-center'>
          <div className='relative mr-[50px]'>
            <input type="search" placeholder='Search'
              className='py-[5px] px-[40px] rounded-[40px] border border-[#BFBFBF] w-[300px] bg-[#F4F7FA] font-nunito font-light'
              />
            <Image
              src='./../search.svg'
              alt='Search'
              width={20}
              height={20}
              className='absolute top-0 left-0 ml-3 mt-2'
              />
          </div>
          <div className='relative mr-[30px]'>
            <Image
              src='./../bell.svg'
              alt='Bell'
              width={20}
              height={20}
              />
            <span className='bg-[red] absolute top-[-10px] right-[-10px] w-[20px] h-[20px] rounded-[50%] text-xs text-[#fff] flex justify-center items-center'>8</span>
          </div>
          <div className='flex items-center'>
            <Image
              src={userImage}
              alt='User Image'
              width={35}
              height={35}
              className='rounded-[50%]'
            />
            <Image 
              src='./../arrow-down.svg'
              alt='Arrow Down'
              width={15}
              height={15}
              />
          </div>
        </div>
      </div>
      <hr className='w-full m-5' />
      <div className='flex flex-col'>
        <div className='flex justify-between items-center'>
          <h4 className='text-lg font-semibold'>Welcome, { user.firstname }</h4>
          <h4 className='text-base text-[#637381]'>{ traineeCount } Applicants</h4>
        </div>

        <div className="rounded-[18px] bg-[#FBFBFB] shadow-sm md:py-[48px] md:px-[20px] py-[32px] px-[10px] flex text-center flex-col
          max-w-[100%] min-w-[100%] self-center mt-10">
            <div className='flex justify-between items-center'>
              <h4 className='text-base font-semibold'>Registered Applicants</h4>
              {/* Filters */}
              <div className="flex">
              <div className='flex items-center mr-[30px]'>
                  <Image
                    src='./../ic_filter.svg'
                    alt='Filter Icon'
                    width={15}
                    height={15}
                    className='mx-[10px]'
                    />
                  <h4 className='text-[#637381] font-nunito font-light'>Filter by type</h4>
                </div>
                <div className='flex items-center mr-[30px]'>
                  <h4 className='text-[#637381] font-nunito font-light'>This Month</h4>
                  <Image
                    src='./../sharp-arrow-down.svg'
                    alt='Sharp Arrow Down'
                    width={15}
                    height={15}
                    className='mx-[10px]'
                    />
                </div>
                <div className='relative'>
                  <input type="search" placeholder='Search...'
                    className='py-[5px] px-[40px] rounded-md border border-[#BFBFBF] w-[250px] font-nunito font-light'
                    />
                  <Image
                    src='./../search.svg'
                    alt='Search'
                    width={20}
                    height={20}
                    className='absolute top-0 left-0 ml-3 mt-2'
                    />
                </div>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className='mt-5 w-[100vw] max-w-[100vw] bg-[#FBFBFB]'>
                <thead className='bg-[#F4F6F8]'>
                  <tr>
                    <th className='text-left uppercase text-base font-medium py-[12px] px-[15px]'>Full Name</th>
                    <th className='text-left uppercase text-base font-medium py-[12px] px-[15px]'>Email Address</th>
                    <th className='text-left uppercase text-base font-medium py-[12px] px-[15px]'>Phone Number</th>
                    <th className='text-left uppercase text-base font-medium py-[12px] px-[15px]'>Gender Category</th>
                    <th className='text-left uppercase text-base font-medium py-[12px] px-[15px]'>Training Interest</th>
                    <th className='text-left uppercase text-base font-medium py-[12px] px-[15px]'>Experience</th>
                    <th className='text-left uppercase text-base font-medium py-[12px] px-[15px]'>Period</th>
                    <th className='text-left uppercase text-base font-medium py-[12px] px-[15px]'>Status</th>
                    <th className='text-left uppercase text-base font-medium py-[12px] px-[15px]'>Action</th>
                  </tr>
                </thead>
                <tbody>
                  { 
                    trainees.map((trainee, index) => (
                      <tr className='bg-[#fff]' key={index}>
                        <td className='text-left text-sm py-[12px] px-[15px] text-[#637381] capitalize'>{ trainee.lastname } { trainee.firstname }</td>
                        <td className='text-left text-sm py-[12px] px-[15px] text-[#637381]'>
                          <a href={"mailto:" + trainee.email}>{ trainee.email }</a>
                        </td>
                        <td className='text-left text-sm py-[12px] px-[15px] text-[#637381]'>{ trainee.phone }</td>
                        <td className='text-left text-sm py-[12px] px-[15px] text-[#637381] capitalize'>{ trainee.gender }</td>
                        <td className='text-left text-sm py-[12px] px-[15px] text-[#637381] capitalize'>{ trainee.interest }</td>
                        <td className='text-left text-sm py-[12px] px-[15px] text-[#637381] capitalize'>{ trainee.experience }</td>
                        <td className='text-left text-sm py-[12px] px-[15px] text-[#637381] capitalize'>{ trainee.experienceLength }</td>
                        <td className='text-left text-sm py-[12px] px-[15px] text-[#637381] capitalize'>
                          {
                            trainee.status === "pending" ? (
                              <span className='bg-[#FFF7CD] rounded-[8px] text-[#B78103]  text-sm py-[4px] px-[15px]'>Pending</span>
                            ): trainee.status === "rejected" ? (
                              <span className='bg-[#FFE7D9] rounded-[8px] text-[#FF4842] text-sm py-[4px] px-[15px]'>Rejected</span>
                            ): (
                              <span className='bg-[#E9FCD4] rounded-[8px] text-[#54D62C] text-sm py-[4px] px-[15px]'>Accepted</span>
                            )
                          }
                        </td>
                        <td className='py-[12px] px-[15px] flex justify-center'>
                          <div className='bg-[#F5F7F9] px-[20px] py-[10px] rounded-md relative'>
                            <Image
                              src='./../3-bars.svg'
                              alt='3 Bars'
                              width={5}
                              height={5}
                              />
                              {/* <div className='absolute top-0 left-0 rounded-md shadow-custom bg-[#fff] py-[16px] px-[10px] z-10'>
                                <div className='my-2 flex w-max'>
                                  <span className='px-[10px]'>
                                    <Image
                                      src='./../accept.svg'
                                      alt='Accept'
                                      width={20}
                                      height={20}
                                      />
                                  </span>
                                  <h4>Accept</h4>
                                </div>
                                <div className='my-2 flex w-max'>
                                  <span className='px-[10px]'>
                                    <Image
                                      src='./../reject.svg'
                                      alt='Reject'
                                      width={20}
                                      height={20}
                                      />
                                  </span>
                                  <h4>Reject</h4>
                                </div>
                              </div> */}
                          </div>
                        </td>
                      </tr>
                    )) 
                  }
                </tbody>
              </table>
            </div>

          </div>

          { 
            traineeCount > 0 && (
              <div className='flex justify-between items-center mt-10'>
                <h4 className='font-light font-nunito text-sm'>Rows per page:</h4>
                <h4 className='font-light font-nunito text-sm'>{ ((pageSize * pageNo) - pageSize) + 1} - { (pageSize * pageNo) > traineeCount ? traineeCount : (pageSize * pageNo) } of { traineeCount }</h4>
                <div className='flex items-center'>
                  <button disabled={pageNo == 1}
                    onClick={() => prevPage()}>
                    <Image
                      src='./../left.svg'
                      alt='Pagination Arrow'
                      width={20}
                      height={20}
                      className={'mr-[10px]' + (pageNo == 1 ? ' opacity-30' : '')}
                      />
                  </button>
                  <button disabled={pageNo == Math.ceil(traineeCount / pageSize)}
                    onClick={() => nextPage()}>
                    <Image
                      src='./../right.svg'
                      alt='Pagination Arrow'
                      width={20}
                      height={20}
                      className={'ml-[10px]' + (pageNo == Math.ceil(traineeCount / pageSize) ? ' opacity-30' : '')}
                      />
                  </button>
                </div>
              </div>
            ) 
          }
      </div>
    </main>
  )
}

export default IsAuth(Home);