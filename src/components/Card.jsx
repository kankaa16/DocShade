import React from 'react'
import { FaFileAlt } from "react-icons/fa";
import { IoMdCloudDownload } from "react-icons/io";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { motion } from 'framer-motion'


const Card = ({data,reference}) => {
  return (
     <motion.div drag dragConstraints={reference}className='relative h-72 w-60 rounded-t-3xl flex gap-2 flex-col bg-black/50 text-white p-7 text-xl pl-3 m-10 flex-shrink-0'>
        <FaFileAlt className='ml-3' />
        <p className='text-sm mt-5 font-semibold ml-3'>{data.desc}</p>
        <div className="absolute bottom-0 w-full h-13 left-0 rounded-b-3xl flex flex-col gap-3 ">
            <div className='flex items-center  text-2xl justify-between px-5 font-bold '>
                <h5 className='mt-1.5  text-white font-bold'>{data.size}</h5>
               <span className='w-7 h-7 mt-1.5 bg-gray-900 rounded-full flex items-center justify-center'>
                {data.close?<IoMdCloseCircleOutline/>:<IoMdCloudDownload/>}
                
               </span>   
            </div>

            {
                data.tagdetails.isopen?
                ( <div className={`w-full h-[45px] ${data.tagdetails.tagcolor==="blue"? "bg-blue-600":"bg-lime-400"} rounded-b-3xl p-2`}>
               <h3 className='text-center text-black font-extrabold text-xl'>{data.tagdetails.tagtitle}</h3>
            </div>):null
            }

           
            
        </div>
        </motion.div>
  )
}

export default Card
