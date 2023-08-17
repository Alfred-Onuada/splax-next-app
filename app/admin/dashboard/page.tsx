import Image from 'next/image'

export default function Home() {
  return (
    <main className="bg-[#F3F4F6] min-w-[100vw] min-h-[100vh] py-[20px] md:px-[40px] px-[15px]">
      <div className='flex justify-between items-center'>
        <Image
            src="./../softworld-logo.svg"
            alt="Softworld Logo"
            width={100}
            height={100}
            className='float-left'
          />

        <div className='flex items-center'>
          <div className='border-2 border-[#CECECE] p-[10px] rounded-md'>
            <Image
              src='./../Google.svg'
              alt='Google Logo'
              width={25}
              height={25}
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

        <div className="rounded-[18px] bg-[#FBFBFB] shadow-sm md:py-[48px] md:px-[40px] py-[32px] px-[20px] flex text-center flex-col
          max-w-[100%] min-w-[100%] self-center mt-10">
            <div className='flex justify-between items-center'>
              <h4 className='text-base'>Registered Applicants</h4>
              {/* Filters */}
            </div>

            <div className="overflow-x-auto">
              <table className='mt-5 w-[100vw] max-w-[100vw] bg-[#FBFBFB]'>
                <thead className='bg-[#F4F6F8]'>
                  <tr>
                    <th className='text-left uppercase text-base font-medium py-[12px] px-[5px]'>Full Name</th>
                    <th className='text-left uppercase text-base font-medium py-[12px] px-[5px]'>Email Address</th>
                    <th className='text-left uppercase text-base font-medium py-[12px] px-[5px]'>Phone Number</th>
                    <th className='text-left uppercase text-base font-medium py-[12px] px-[5px]'>Gender Category</th>
                    <th className='text-left uppercase text-base font-medium py-[12px] px-[5px]'>Training Interest</th>
                    <th className='text-left uppercase text-base font-medium py-[12px] px-[5px]'>Experience</th>
                    <th className='text-left uppercase text-base font-medium py-[12px] px-[5px]'>Period</th>
                    <th className='text-left uppercase text-base font-medium py-[12px] px-[5px]'>Status</th>
                    <th className='text-left uppercase text-base font-medium py-[12px] px-[5px]'>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='bg-[#fff]'>
                    <td className='text-left text-sm py-[12px] px-[5px] text-[#637381]'>John Doe</td>
                    <td className='text-left text-sm py-[12px] px-[5px] text-[#637381]'>
                      <a href="mailto:ldlald@gmail.com">adl@gmail.com</a>
                    </td>
                    <td className='text-left text-sm py-[12px] px-[5px] text-[#637381]'>+234 123 456 7890</td>
                    <td className='text-left text-sm py-[12px] px-[5px] text-[#637381]'>Male</td>
                    <td className='text-left text-sm py-[12px] px-[5px] text-[#637381]'>UI/UX Design</td>
                    <td className='text-left text-sm py-[12px] px-[5px] text-[#637381]'>No</td>
                    <td className='text-left text-sm py-[12px] px-[5px] text-[#637381]'>&gt; 2 Years</td>
                    <td className='text-left text-sm py-[12px] px-[5px] text-[#637381]'>
                      <span className='bg-[#E9FCD4] rounded-[8px] text-[#54D62C] text-sm py-[4px] px-[5px]'>Accepted</span>
                    </td>
                  </tr>
                  <tr className='bg-[#fff]'>
                    <td className='text-left text-sm py-[12px] px-[5px] text-[#637381]'>John Doe</td>
                    <td className='text-left text-sm py-[12px] px-[5px] text-[#637381]'>
                      <a href="mailto:ldlald@gmail.com">adl@gmail.com</a>
                    </td>
                    <td className='text-left text-sm py-[12px] px-[5px] text-[#637381]'>+234 123 456 7890</td>
                    <td className='text-left text-sm py-[12px] px-[5px] text-[#637381]'>Male</td>
                    <td className='text-left text-sm py-[12px] px-[5px] text-[#637381]'>UI/UX Design</td>
                    <td className='text-left text-sm py-[12px] px-[5px] text-[#637381]'>No</td>
                    <td className='text-left text-sm py-[12px] px-[5px] text-[#637381]'>&gt; 2 Years</td>
                    <td className='text-left text-sm py-[12px] px-[5px] text-[#637381]'>
                      <span className='bg-[#E9FCD4] rounded-[8px] text-[#54D62C] text-sm py-[4px] px-[5px]'>Accepted</span>
                    </td>
                  </tr>
                  <tr className='bg-[#fff]'>
                    <td className='text-left text-sm py-[12px] px-[5px] text-[#637381]'>John Doe</td>
                    <td className='text-left text-sm py-[12px] px-[5px] text-[#637381]'>
                      <a href="mailto:ldlald@gmail.com">adl@gmail.com</a>
                    </td>
                    <td className='text-left text-sm py-[12px] px-[5px] text-[#637381]'>+234 123 456 7890</td>
                    <td className='text-left text-sm py-[12px] px-[5px] text-[#637381]'>Male</td>
                    <td className='text-left text-sm py-[12px] px-[5px] text-[#637381]'>UI/UX Design</td>
                    <td className='text-left text-sm py-[12px] px-[5px] text-[#637381]'>No</td>
                    <td className='text-left text-sm py-[12px] px-[5px] text-[#637381]'>&gt; 2 Years</td>
                    <td className='text-left text-sm py-[12px] px-[5px] text-[#637381]'>
                      <span className='bg-[#E9FCD4] rounded-[8px] text-[#54D62C] text-sm py-[4px] px-[5px]'>Accepted</span>
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
