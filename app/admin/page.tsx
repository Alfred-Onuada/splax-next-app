import Image from 'next/image'
import Link from 'next/link'

// function to handle registration

export default function Home() {
  return (
    <main className="bg-[#F3F4F6] min-w-[100vw] min-h-[100vh] flex md:justify-center items-center flex-col p-[20px] md:p-[70px]">
      <div className='md:max-w-[50vw] md:min-w-[50vw] items-start mb-14 max-w-[90vw] min-w-[90vw]'>
        <Image
          src="./softworld-logo.svg"
          alt="Softworld Logo"
          width={100}
          height={100}
          className='float-left'
        />
      </div>
      {/* Login Form */}
      <div className="rounded-[18px] bg-[#fff] shadow-custom md:py-[48px] md:px-[40px] py-[32px] px-[20px] flex text-center flex-col md:max-w-[50vw] md:min-w-[50vw]
        max-w-[90vw] min-w-[90vw]">
        <h1 className="font-normal text-2xl mb-2">Login to your account</h1>
        <h4 className='text-[#5B5B5B] text-sm mb-10'>Kindly input your details to login in to your dashboard</h4>

        <form>
          <div className='flex items-start flex-col w-full mb-5'>
            <h4 className='mb-2 text-base'>Email Address</h4>
            <input type="email" placeholder='Enter your email address' 
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
                className='rounded-[8px] border border-[#BFBFBF] items-center p-[16px] w-full'
                required/>
              {/* add eye */}

            </div>
          </div>

          <button className='bg-[#346ED6] py-[16px] px-[96px] text-[#fff] w-[fit-content] self-center rounded-[24px] hover:bg-[#0f429e] my-4' type='submit'>Login</button>
        
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
