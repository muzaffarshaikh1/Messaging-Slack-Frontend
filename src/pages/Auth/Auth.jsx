import SignupCard from '@/components/organisms/Auth/SignupCard'
import React from 'react'

const Auth = () => {
  return (
    <div className='h-[100vh] flex justify-center items-center bg-[#5c3B58]'>
        <div className="md:h-auto md:w-[420px]">
            <SignupCard/>
        </div>
    </div>
  )
}

export default Auth