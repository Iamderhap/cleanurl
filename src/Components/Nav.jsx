import React from 'react'

const nav = () => {
  return (
    <div>
        <nav className='flex items-center justify-between px-[70px] h-[60px]'>
            <h1 className='text-purple-700 text-3xl font-bold'>SHORT-LINKS</h1>
            <div>
                <ul className='flex items-center gap-7 text-2xl'>
                    <li>Home</li>
                    <li>Api</li>
                    <li>Privacy</li>
                    <li>Terms</li>
                    <li>Report</li>
                    <li>Contacts</li>
                </ul>
            </div>
        </nav>
      
    </div>
  )
}

export default nav
