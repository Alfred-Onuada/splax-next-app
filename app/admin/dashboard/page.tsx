import Image from 'next/image'
import userImage from './../../../public/user.png';

export default function Home() {
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
          <h4 className='text-lg font-semibold'>Welcome, John</h4>
          <h4 className='text-base text-[#637381]'>324 Applicants</h4>
        </div>

        <div className="rounded-[18px] bg-[#FBFBFB] shadow-sm md:py-[48px] md:px-[20px] py-[32px] px-[10px] flex text-center flex-col
          max-w-[100%] min-w-[100%] self-center mt-10">
            <div className='flex justify-between items-center'>
              <h4 className='text-base'>Registered Applicants</h4>
              {/* Filters */}
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
                  <tr className='bg-[#fff]'>
                    <td className='text-left text-sm py-[12px] px-[15px] text-[#637381]'>John Doe</td>
                    <td className='text-left text-sm py-[12px] px-[15px] text-[#637381]'>
                      <a href="mailto:ldlald@gmail.com">adl@gmail.com</a>
                    </td>
                    <td className='text-left text-sm py-[12px] px-[15px] text-[#637381]'>+234 123 456 7890</td>
                    <td className='text-left text-sm py-[12px] px-[15px] text-[#637381]'>Male</td>
                    <td className='text-left text-sm py-[12px] px-[15px] text-[#637381]'>UI/UX Design</td>
                    <td className='text-left text-sm py-[12px] px-[15px] text-[#637381]'>No</td>
                    <td className='text-left text-sm py-[12px] px-[15px] text-[#637381]'>&gt; 2 Years</td>
                    <td className='text-left text-sm py-[12px] px-[15px] text-[#637381]'>
                      <span className='bg-[#E9FCD4] rounded-[8px] text-[#54D62C] text-sm py-[4px] px-[15px]'>Accepted</span>
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
                </tbody>
              </table>
            </div>
        </div>
      </div>
    </main>
  )
}
