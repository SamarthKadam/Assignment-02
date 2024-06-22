import Header from "@/components/Header"
import GradientCircle from "@/components/GradientCircle"
import Link from "next/link"


//HomePage with default value
export default function Home() {
  return (
  <div className="flex flex-col min-h-screen px-32 py-8 max-[410px]:px-6 max-[760px]:px-12">
    <Header></Header>
    <div className="flex relative flex-col flex-grow gap-10  items-center justify-center">
      <GradientCircle key={1} type={1} top="80%" left="10%" translateY="-80%" translateX="-10%"></GradientCircle>
      <GradientCircle key={2} type={2} top="4%" left="40%" translateY="-4%" translateX="-40%"></GradientCircle>
      <GradientCircle key={3} type={3} top="80%" left="80%" translateY="-80%" translateX="-80%"></GradientCircle>

      <div className="text-7xl font-medium tracking-tighter max-[930px]:text-5xl">Start The Countdown</div>
      <div><Link href='/25' className="bg-white hover:bg-slate-200 transition text-black text-xs px-12 font-semibold rounded-2xl py-3">START NOW</Link></div>
    </div>
  </div>
  )
}
