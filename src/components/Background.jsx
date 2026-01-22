import React from 'react'

const Background = () => {
  return (
      <>
      <div className='fixed z-[2] w-full h-screen'>
        <div id="header" className='absolute w-full py-5 flex justify-center text-xl font-semibold text-[#334155]'>Document</div>
      <h1 id="name" className='absolute text-8xl -translate-x-[50%] -translate-y-[50%] text-[#334155] top-1/2 left-1/2 leading-none tracking-tight font-semibold'>DocShade.</h1>
      </div>
      </> 
  )
}

export default Background
