'use client';
import React from 'react'
import Image from "next/image";
import Link from "next/link";
import Timer from "@/components/Timer"

export default function page() {
  return (
    <div className="flex flex-col px-32 py-8  h-[100vh]">
    <Link href='/' className="text-4xl cursor-pointer font-bold mb-8">Go Back</Link>
    <Timer />
  </div>
  )
}
