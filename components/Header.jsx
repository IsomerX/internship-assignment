import React from 'react'

const Header = () => {
  return (
    <div className='grid grid-cols-4 bg-[#efefef] py-4 w-full lg:w-3/5 text-center'>
        <div>Title</div>
        <div>Status</div>
        <div>Amt. Raised</div>
        <div>Due Date</div>
    </div>
  )
}

export default Header