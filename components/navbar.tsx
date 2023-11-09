import { useState } from 'react'
import styles from '../styles/header.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  const [toggle, setToggle] = useState(false)
  const [toggle1, setToggle1] = useState(false)

  
  return (
    <main className={styles.maoo}>
      <div>

        <nav className="bg-[#020017] dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

            <Link href="/">
            <Image
      src="/ethereum.png"
      width={40}
      height={35}
      className=" h-9 absolute mr-px	" 
      alt="Picture of the author"
    />
             
               
               <span className="self-center text-2xl font-mono	 whitespace-nowrap  text-white relative	 m-10">Demo <span className='text-cyan-300	 font-serif		'>NFT</span></span> </Link>


            <div className="flex md:order-2">
              <Link href="/login" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Log In
              </Link>
              <div className="relative ml-3">
          <div>
            <button  onClick={()=>setToggle(!toggle)} type="button" className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
              <span className="absolute -inset-1.5"></span>
              <span className="sr-only">Open user menu</span>
              <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
            </button>
          </div>
          {
              toggle &&

          <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" >
           
            <Link href="/profile" className="block px-4 py-2 text-sm text-gray-700" role="menuitem"  id="user-menu-item-0">Your Profile</Link>
            <Link href="/signup" className="block px-4 py-2 text-sm text-gray-700" role="menuitem"  id="user-menu-item-2">Sign out</Link>
          </div>
          }
    
        </div>
        
              <button onClick={()=>setToggle1(!toggle1)} data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                </svg>
              </button>
            </div>

            {
            
              toggle1 &&

          <div className="absolute right-0 z-10  mr-6 mt-48 w-24 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" >
           
            <Link href="/" className="block px-4 py-2 text-sm text-gray-700" role="menuitem"  id="user-menu-item-0">Home</Link>
            <Link href="/about" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" id="user-menu-item-1">About</Link>
            <Link href="/nft" className="block px-4 py-2 text-sm text-gray-700" role="menuitem"  id="user-menu-item-2">NFT</Link>
          </div>
          }
           
            <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">

              <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium text-white   md:flex-row md:space-x-8 md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <Link href="/" className="block py-2 pl-3 pr-4   rounded md:bg-transparent  md:hover:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page" >Home</Link>
                </li>
                <li>
                  <Link href="/about" className="block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</Link>
                </li>

                <li >
                  <Link href="/nft" className="block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">NFT</Link>
                </li>
                
              </ul>
            </div>
            
          </div>
        </nav>


      </div>
    </main>
  )
}
