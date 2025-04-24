import React from 'react'

export function useStateScroll (id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });

}
