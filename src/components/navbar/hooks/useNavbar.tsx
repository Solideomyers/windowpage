'use client'
import { useState, useEffect, useRef } from 'react';
import { PressEvent } from '@react-types/shared';
import { useEscapeKey } from '@/components/navbar/hooks/useScapeKey';
import { useClickOutside } from '@/components/navbar/hooks/useClickOutside';

export const useNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const languageDropdownRef = useRef<HTMLDivElement>(null);


 useEffect(() => {
   const checkMobileView = () => {
     setIsMobile(window.innerWidth < 640);
   };

   checkMobileView();
   window.addEventListener('resize', checkMobileView);
   return () => {
     window.removeEventListener('resize', checkMobileView);
   };
 }, []);

 useEscapeKey(() => {
   setIsMobileMenuOpen(false);
   setIsLanguageDropdownOpen(false);
 });

 useClickOutside(mobileMenuRef, () => setIsMobileMenuOpen(false));
 useClickOutside(languageDropdownRef, () => setIsLanguageDropdownOpen(false));

 const toggleMobileMenu = (e?: PressEvent) => {
   if (e) {
     e.continuePropagation();
   }
   setIsMobileMenuOpen((prev) => !prev);
 };

 const toggleLanguageDropdown = (e?: PressEvent) => {
   if (e) {
     e.continuePropagation();
   }
   setIsLanguageDropdownOpen((prev) => !prev);
 };


  return {
    isMobileMenuOpen,
    isLanguageDropdownOpen,
    isMobile,
    mobileMenuRef,
    languageDropdownRef,
    toggleMobileMenu,
    toggleLanguageDropdown,
    setIsMobileMenuOpen,
    setIsLanguageDropdownOpen,
  };
};
