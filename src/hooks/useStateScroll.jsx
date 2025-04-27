import React from 'react'
import { useState } from 'react';

const useStateScroll = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
      setShowMenu(!showMenu);
    };
  
    return { showMenu, toggleMenu };

}

export default useStateScroll


