import React from 'react'
import Image from 'next/image'
export default function Header() {
  return (
    <div className='flex flex-row gap-2 items-center'>
        <Image src='/images/timer.png' width={25} height={25} alt='Logo'></Image>
        <div className="text-sm font-light tracking-widest">COUNTDOWN TIMER</div>
    </div>
  )
}
