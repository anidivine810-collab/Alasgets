"use client";
import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { BsCart } from "react-icons/bs";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { FaChevronDown } from "react-icons/fa";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useSession } from "next-auth/react"
import { signOut } from "next-auth/react";



const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

     const { data: session } = useSession()
   console.log(session);

     const [profileAnchorEl, setProfileAnchorEl] = useState(null);
  const profileOpen = Boolean(profileAnchorEl);
  const handleProfileClick = (event) => {
  setProfileAnchorEl(event.currentTarget);
};
  const handleProfileClose = () => {
  setProfileAnchorEl(null);
};

  const pathname = usePathname();
  
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navItems = [
        {label: "Super Deals",  url: "/"},
        {label: "AlasDget Businesses", url: ""},
        {label: "Iphones", url: "/Iphones"},
    ]

  return (
    <>
      <nav className="bg-white px-4 md:px-20 lg:px-40 py-4 sticky top-0 z-50">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="#" className="flex items-center gap-2 z-40">
            <Image
              src="/brand.png"
              alt="logo"
              width={800}
              height={800}
              className="w-12 h-12 object-contain"
            />
            <div className="text-gray-800 text-2xl md:text-4xl font-bold">AlasDgets</div>
          </Link>

          {/* Desktop Search Bar */}
          <div className="hidden md:flex items-center flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg" />
              <input
                type="text"
                placeholder="Iphone 17 Air"
                className="w-full pl-12 pr-4 py-3 text-base border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>
            <button className="ml-2 bg-blue-300 text-white p-3 rounded-full hover:bg-blue-400 transition">
              <FaSearch className="text-xl" />
            </button>
          </div>

          {/* Right Icons (Profile & Cart) + Mobile Menu Toggle */}
          <div className="flex items-center gap-6 lg:gap-20 text-3xl">
            <BsCart className="text-gray-700 lg:text-5xl cursor-pointer" />

            {session ? (
  <div className="ml-auto lg:ml-0">
    <button
      aria-controls={profileOpen ? "profile-menu" : undefined}
      aria-haspopup="true"
      aria-expanded={profileOpen ? "true" : undefined}
      onClick={handleProfileClick}
    >
      <img
        src={session?.user?.image}
        alt={session?.user?.name ? String(session.user.name).slice(0, 2).toUpperCase() : "User"}
        className="w-10 h-10 rounded-full object-cover"
      />
    </button>

    <Menu
      id="profile-menu"
      anchorEl={profileAnchorEl}
      open={profileOpen}
      onClose={handleProfileClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
    >
      <MenuItem onClick={handleProfileClose}>
        <Link href="/profile">My Profile</Link>
      </MenuItem>
      <MenuItem onClick={handleProfileClose}>
        {/* You need to import signOut from next-auth/react */}
        <button onClick={() => signOut()}>Sign Out</button>
      </MenuItem>
    </Menu>
  </div>
) : (
  <Link href={"/auth/signin"}>
    <div className="flex items-center justify-center gap-2">
      <CgProfile className="text-gray-700 lg:text-5xl cursor-pointer" />
      <p className="text-sm lg:text-xl">Sign In</p>
    </div>
  </Link>
)}


            {/* Hamburger Menu (Mobile Only) */}
            <button onClick={toggleMobileMenu} className="md:hidden text-3xl text-gray-700">
              {mobileMenuOpen ? <RiCloseLine /> : <RiMenu3Line />}
            </button>
          </div>
        </div>

        {/* Desktop Bottom Menu */}
        <div className="hidden md:flex items-center justify-between mt-6">
          <div className="flex items-center gap-6">
            <button className="flex items-center gap-2 bg-gray-200 hover:bg-gray-300 rounded-full px-15 py-3 text-xl font-medium transition">
              <RiMenu3Line className="text-2xl" />
              All Categories
            </button>

            <div className='lg:flex items-center gap-6 hidden'>
       {
          navItems.map((item, index) => {
            //use to check if item url matches current path
            const isActive = pathname === item.url;
            return (
              <Link
                key={index}
                href={item.url}
                className={`flex items-center gap-2 hover:bg-gray-100 rounded-full px-10 py-3 text-xl cursor-pointer transition
                 ${isActive ? "bg-gray-200 rounded-full px-2 text-gray-800" : "text-gray-600 rounded-full px-2  hover:bg-gray-100"}`}>
                  {item.label}
                </Link>
            );
          })
        }
      </div>

            <button
              onClick={handleClick}
              className="flex items-center gap-2 hover:bg-gray-100 text-gray-800 rounded-full px-10 py-3 text-xl  cursor-pointer transition"
            >
              More <FaChevronDown className="text-sm" />
            </button>

            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            >
              <Link href={"/androids"}>
                <MenuItem onClick={handleClose}>Androids</MenuItem>
              </Link>
              <Link href={"/tablets"}>
                <MenuItem onClick={handleClose}>Tablets</MenuItem> 
              </Link>
              <Link href={"/watches"}>
                <MenuItem onClick={handleClose}>Smart Watches</MenuItem>   
              </Link>
            </Menu>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <Drawer
        anchor="left"
        open={mobileMenuOpen}
        onClose={toggleMobileMenu}
        PaperProps={{
          sx: { width: '80%', maxWidth: '300px' }
        }}
      >
        <div className="p-6">
          {/* Mobile Search in Drawer */}
          <div className="mb-8">
            <div className="relative">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                placeholder="Search Iphone 17 Air..."
                className="w-full pl-12 pr-4 py-4 text-base border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>
          </div>

          <div className="space-y-4">
            <button className="w-full text-left flex items-center gap-3 py-3 px-4 bg-gray-100 rounded-lg font-medium">
              <RiMenu3Line /> All Categories
            </button>

            <p className="py-3 px-4 text-red-500 font-medium">Super Deals</p>
            <p className="py-3 px-4 hover:bg-gray-100 rounded-lg">AlasDget Businesses</p>
            <p className="py-3 px-4 hover:bg-gray-100 rounded-lg">Iphones</p>
            <Link href={"/androids"}>
              <p className="py-3 px-4 hover:bg-gray-100 rounded-lg">Androids</p>
            </Link>
            <p className="py-3 px-4 hover:bg-gray-100 rounded-lg">Tablets</p>
            <p className="py-3 px-4 hover:bg-gray-100 rounded-lg">Smart Watches</p>

          </div>
        </div>
      </Drawer>
    </>
  );
};

export default Navbar;