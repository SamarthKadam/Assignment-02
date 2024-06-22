'use client';
import React from 'react'
import Image from "next/image";
import Link from "next/link";
import Timer from "@/components/Timer"
import { useParams } from 'next/navigation'

export default function Page() {

  const params = useParams();
  ///params hook to access the parameters

  return (
    <div className="flex flex-col px-32 py-8 max-[410px]:px-12  h-[100vh]">
      <Link href='/' className="text-4xl cursor-pointer font-bold mb-8">Go Back</Link>
      <Timer minutes={Number(params.slug)} />
    </div>
  )
}
