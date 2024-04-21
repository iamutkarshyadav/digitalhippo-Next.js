"use client"

import React from 'react'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { ShoppingCart } from 'lucide-react'

const Cart = () => {
  return (
    <Sheet>
      <SheetTrigger className="group -m-2 items-center p-2">
        <ShoppingCart
          aria-hidden='true'
          className='h-6 flex-shrink-0 text-gray-400  group-hover:text-gray-500'
        />
        <span className='ml-2 text-sm flex-shrink font-medium  text-gray-700 group-hover:text-gray-800 '>
          0
        </span>
      </SheetTrigger>
      <SheetContent className= "" ></SheetContent>
    </Sheet>
  )
}

export default Cart