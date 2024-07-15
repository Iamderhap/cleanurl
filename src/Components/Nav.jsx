import React, { useState } from 'react'
import { IoMdMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
const Nav = () => {
    const[menu, setMenu] = useState(false)
    function handleMenu(){
      setMenu(!menu)
    }
    return (
        <div>
            <nav className='flex items-center justify-between md:justify-around w-[100%] px-[20px] md:px-[70px] py-[30px] bg-black'>
                <h1 className='text-white text-3xl font-bold '>Cleanurl.site</h1>
                <div>
                    <ul className='md:flex items-center gap-5 text-xl text-gray-400 hidden list-none'>
                      <li><a href="/">Home</a></li>
                      <li><a href="/api">API</a></li>
                      <li><a href="/privacy">Privacy</a></li>
                      <li><a href="/terms">Terms</a></li>
                      <li><a href="/report">Report</a></li>
                      <li><a href="/contact">Contacts</a></li>
                    </ul>
                </div>
                <div>
                <button onClick={handleMenu} className='flex md:hidden text-white font-bold text-25px'>{menu ? <IoCloseSharp/> : <IoMdMenu/>}</button>
    
                </div>
            </nav>
            {menu && 
              <div className='transition-all duration-1000 ease-out list-none'>
                  <li><a href="/">Home</a></li>
                  <li><a href="/api">API</a></li>
                  <li><a href="/privacy">Privacy</a></li>
                  <li><a href="/terms">Terms</a></li>
                  <li><a href="/report">Report</a></li>
                  <li><a href="/contact">Contacts</a></li>
                    
              </div>
            }
            
            <div>
            
    
            </div>
          
        </div>
      )
    }

export default Nav
