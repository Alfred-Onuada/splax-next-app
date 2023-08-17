import Image from 'next/image'
import successGif from '../public/success.gif'

export default function Home() {
  return (
    <main className="bg-[#F3F4F6] min-w-[100vw] min-h-[100vh] flex justify-center items-center flex-col p-[70px]">
      <div className='max-w-[50vw] w-[50vw] items-start mb-14'>
        <Image
          src="./softworld-logo.svg"
          alt="Softworld Logo"
          width={100}
          height={100}
          className='float-left'
        />
      </div>
      {/* Registration Form */}
      <div className="rounded-[18px] bg-[#fff] shadow-custom py-[48px] px-[40px] flex text-center flex-col max-w-[50vw]">
        <h1 className="font-normal text-2xl mb-2">Unleash Your Brilliance, Enroll Today!</h1>
        <h4 className='text-[#5B5B5B] text-sm mb-10'>Discover a world of fun learning, dive into exciting courses, and let your brilliance shine. Register now and let the adventure begin!</h4>

        <form>
          <div className="flex justify-between mb-5">
            <div className='flex items-start flex-col w-full pr-4'>
              <h4 className='mb-2 text-base'>First Name</h4>
              <input type="text" placeholder='Enter your first name' 
                className='rounded-[8px] border border-[#BFBFBF] items-center p-[16px] w-full'
                required/>
            </div>
            <div className='flex items-start flex-col w-full pl-4'>
              <h4 className='mb-2 text-base'>Last Name</h4>
              <input type="text" placeholder='Enter your last name' 
                className='rounded-[8px] border border-[#BFBFBF] items-center p-[16px] w-full'
                required/>
            </div>
          </div>

          <div className='flex items-start flex-col w-full mb-5'>
            <h4 className='mb-2 text-base'>Enter your Address</h4>
            <input type="email" placeholder='Enter your email address' 
              className='rounded-[8px] border border-[#BFBFBF] items-center p-[16px] w-full'
              required/>
          </div>

          <div className='flex items-start flex-col w-full mb-5'>
            <h4 className='mb-2 text-base'>Phone Number</h4>
            <input type="text" placeholder='+234 **********' 
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
            <select name="gender" 
              className='rounded-[8px] border border-[#9ca3af] items-center p-[16px] w-full text-[#5B5B5B]'
              required>
              <option value="">Select your category</option>
              <option value="Career Switching">Career Switching</option>
              <option value="Student">Student</option>
              <option value="Graduate">Graduate</option>
              <option value="Corporate">Corporate</option>
            </select>
          </div>

          <div className='flex items-start flex-col w-full mb-5'>
            <h4 className='mb-2 text-base'>Training Interest</h4>
            <select name="gender" 
              className='rounded-[8px] border border-[#9ca3af] items-center p-[16px] w-full text-[#5B5B5B]'
              required>
              <option value="">Select your training interest</option>
              <option value="data-analysis">Data Analysis</option>
              <option value="uiux-design">UI/UX Design</option>
              <option value="product-marketing">Product Marketing</option>
              <option value="business-analyst">Business Analyst</option>
              <option value="project-management">Project Management</option>
              <option value="product-management">Product Management</option>
              <option value="software-quality-testing">Software Quality Testing</option>
              <option value="frontend-development">Frontend Development</option>
              <option value="backend-development">Backend Development</option>
              <option value="mobile-app-development">Mobile App Development</option>
              <option value="devops-engineering">DevOps Engineering</option>
            </select>
          </div>

          <div className='flex items-start flex-col w-full mb-5'>
            <h4 className='mb-2 text-base'>Programming/Software Experience?</h4>
            <select name="gender" 
              className='rounded-[8px] border border-[#9ca3af] items-center p-[16px] w-full text-[#5B5B5B]'
              required>
              <option value="">Any programming experience?</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          <div className='flex items-start flex-col w-full mb-5'>
            <h4 className='mb-2 text-base'>Length of Experience?</h4>
            <select name="gender" 
              className='rounded-[8px] border border-[#9ca3af] items-center p-[16px] w-full text-[#5B5B5B]'
              required>
              <option value="">What is the length of your experience</option>
              <option value="6months">&lt; 6 Months</option>
              <option value="1year">&gt; 1 Year</option>
              <option value="2years">&gt; 2 Years</option>
            </select>
          </div>

          <button className='bg-[#346ED6] py-[16px] px-[96px] text-[#fff] w-[fit-content] self-center rounded-[24px] hover:bg-[#0f429e] my-4' type='submit'>Apply Now</button>
        </form>

        {/* Success Indicator */}
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
      </div>
    </main>
  )
}
