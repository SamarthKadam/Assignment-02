import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const timers = [
  { href: '/15', text: '15 Minutes' },
  { href: '/35', text: '35 Minutes' },
  { href: '/45', text: '45 Minutes' }
];

//default values of timers

export default function Header() {
  return (
    <div className='flex flex-row  items-center justify-between'>
      <div className='flex flex-row gap-2 items-center max-[602px]:hidden'>
        <Image src='/images/timer.png' width={25} height={25} alt='Logo'></Image>
        <div className="text-sm font-light tracking-widest">COUNTDOWN TIMER</div>
      </div>
      <div className='flex gap-2'>
        {timers.map((val, ind) => <Link key={ind} href={val.href} className='bg-white hover:bg-slate-200 transition max-[880px]:px-4 text-black text-xs px-8 font-semibold rounded-2xl py-2'>{val.text}</Link>)}
      </div>
    </div>
  )
}
