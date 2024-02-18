import React from 'react'
import Logo from '../components/Logo'


function AuthLayout({children}:{children : React.ReactNode}) {
  return (
    <main className='flex justify-center items-center flex-col gap-y-5 min-h-[100vh] bg-gray-50'>
      <Logo/>
      {children}
    </main>
  )
}

export default AuthLayout