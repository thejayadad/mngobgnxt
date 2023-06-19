import React from 'react'
import {
  AiFillYoutube,
  AiFillInstagram,
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillAmazonCircle,
} from "react-icons/ai";
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='bg-white pt-4 pb-8 xl:pt-8'>
      <div className='max-w-screen-lg px-4 mx-auto text-gray-400 xl:max-w-screen-xl sm:px-6 md:px-8'>
      <ul className='flex flex-wrap justify-center pb-8 text-lg font-light'>
             <li className="w-1/2 md:w-1/3 lg:w-1/3">
                <div className="text-center">
                    <h2 className="text-gray-500 dark:text-gray-200 text-md uppercase mb-4">
                        CATEGORY
                    </h2>
                    <ul>
                        <li className="mb-4 transition-colors duration-200 hover:text-gray-800">
                            <Link href="#">
                                Sports
                            </Link>
                        </li>
                        <li className="mb-4 transition-colors duration-200 hover:text-gray-800">
                            <Link href="#">
                                Money
                            </Link>
                        </li>
                        <li className="mb-4 transition-colors duration-200 hover:text-gray-800">
                            <Link href="#">
                                News
                            </Link>
                        </li>
                        <li className="mb-4 transition-colors duration-200 hover:text-gray-800">
                            <Link href="#">
                                Tech
                            </Link>
                        </li>
                        
                    </ul>
                </div>
            </li>
            <li className="w-1/2 md:w-1/3 lg:w-1/3">
                <div className="text-center">
                    <h2 className="text-gray-500 dark:text-gray-200 text-md uppercase mb-4">
                        CONTACTS
                    </h2>
                    <ul>
                        <li className="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                            <Link href="#">
                                Youtube
                            </Link>
                        </li>
                        <li className="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                            <Link href="#">
                                Instagram
                            </Link>
                        </li>
                        <li className="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                            <Link href="#">
                                TicTok
                            </Link>
                        </li>
                        <li className="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                            <Link href="#">
                                LinkedIn
                            </Link>
                        </li>
                    </ul>
                </div>
            </li>
            <li className="w-1/2 md:w-1/3 lg:w-1/3">
                <div className="text-center">
                    <h2 className="text-gray-500 dark:text-gray-200 text-md uppercase mb-4">
                        Join Us
                    </h2>
                    <ul>
                        <li className="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                            <Link href="#">
                                Locations
                            </Link>
                        </li>
                        <li className="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                            <Link href="#">
                                Career Opprotunities
                            </Link>
                        </li>
                        <li className="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                            <Link href="#">
                                Sponsor
                            </Link>
                        </li>
                        <li className="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                            <Link href="#">
                                Partner
                            </Link>
                        </li>
                    </ul>
                </div>
            </li>
      </ul>
      <div className="pt-8 flex border-t border-gray-200 max-w-xs mx-auto items-center justify-between">
            <Link href="#">
            <AiFillAmazonCircle className="w-6 h-auto text-xl transition-colors duration-200 hover:text-gray-800" />

            </Link>
            <Link href="#">
            <AiFillTwitterCircle className="w-6 h-auto text-xl transition-colors duration-200 hover:text-gray-800" />

            </Link>
            <Link href="#">
            <AiFillFacebook className="w-6 h-auto text-xl transition-colors duration-200 hover:text-gray-800" />
            </Link>
            <Link href="#">
            <AiFillInstagram className="w-6 h-auto text-xl transition-colors duration-200 hover:text-gray-800" />

            </Link>
            <Link href="#">
            <AiFillYoutube className="w-6 h-auto text-xl transition-colors duration-200 hover:text-gray-800" />
            </Link>
        </div>
        <div className="text-center pt-10">
            thejayadad
        </div>
      </div>
    </footer>
  )
}

export default Footer