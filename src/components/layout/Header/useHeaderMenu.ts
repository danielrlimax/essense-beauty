import { useState } from 'react';

export function useHeaderMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function openMenu() {
    setIsMenuOpen(true);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  function toggleMenu() {
    setIsMenuOpen((currentState) => !currentState);
  }

  return {
    isMenuOpen,
    openMenu,
    closeMenu,
    toggleMenu,
  };
}