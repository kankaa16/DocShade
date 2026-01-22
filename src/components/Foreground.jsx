import React, { useRef, useState } from 'react'
import Card from './Card'
import { ImInsertTemplate } from 'react-icons/im'


const Foreground = () => {
    const ref=useRef(null)
    const data=[
        {
            desc:"This is my 1st project!",
            size:"1.45mb",
            close:true,
            tagdetails:{
                isopen:true, tagtitle:"Download Now", tagcolor:"blue"
            },
        },
        {
            desc:"kanka oza",
            size:"0.23mb",
            close:true,
            tagdetails:{
                isopen:true, tagtitle:"Upload", tagcolor:"green"
            },
        },
        {
            desc:"Welcome to DocShade!",
            size:"0.76mb",
            close:true,
            tagdetails:{
                isopen:true, tagtitle:"Download Now", tagcolor:"blue"
            },
        }
    ]
  return (
     <div ref={ref} className='w-full h-full 800/50 fixed z-[3] flex gap-7 flex-wrap '>
        {
            data.map((item,idx)=>(
                <Card data={item} reference={ref}/>
            ))
        }
     </div>
     
  )
}

export default Foreground
