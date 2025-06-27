import React from 'react'
import Header from '../../Otherrs/Header'

const Admindashboard = () => {
  return (
   <div className='h-screen w-full p-10'>
    <Header/>

    <div className='p-5 mt-7 rounded '>
        <form  className='mt-10 flex w-full flex-wrap items-start   justify-between gap-4 '>

            <div className='w-1/2'>
                  <div><h3 className='text-sm text-black font-semibold  mb-0.5'>
                Task Title
            </h3>
            <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent' type="text" placeholder='Make a UI Design of Emp management system' /></div>
                <div className=''> <h3 className='text-sm text-black font-semibold mb-0.5'>Date</h3>
            <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent' type="date" /></div>
           <div> <h3 className='text-sm text-black font-semibold  mb-0.5'>Asign to</h3>
            <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent' type="text" placeholder='Emp Name' /></div>
           <div> <h3 className='text-sm text-black font-semibold  mb-0.5'>Category</h3>
            <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent' type="text" placeholder='design Dev Etc' /></div></div>
          
           <div className='w-2/5 flex flex-col items-start'> <h3 className='text-sm text-black font-semibold  mb-0.5'>Description</h3>
            <textarea className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400' name="" id=""></textarea></div>
           
            <button className='w-1/2 bg-emerald-500 py-3 hover:bg-emerald-600 px-5 text-sm rounded mt-4 '>Create task</button>
        </form>
    </div>
   </div>
  )
}

export default Admindashboard
