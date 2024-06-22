import Header from "@/components/Header"
import GradientCircle from "@/components/GradientCircle"
import Link from "next/link"

export default function Home() {
  return (<div className="flex flex-col min-h-screen px-32 py-8">
    <Header></Header>
    <div className="flex relative flex-col flex-grow gap-10  items-center justify-center">
      <GradientCircle type={1} top="80%" left="10%" translateY="-80%" translateX="-10%"></GradientCircle>
      <GradientCircle type={2} top="0%" left="40%" translateY="0%" translateX="-40%"></GradientCircle>
      <GradientCircle type={3} top="80%" left="80%" translateY="-80%" translateX="-80%"></GradientCircle>
      <div className="text-7xl font-medium tracking-tighter">Start The Countdown</div>
      <div><Link href='/timer' className="bg-white hover:bg-slate-200 transition text-black text-xs px-12 font-semibold rounded-2xl py-3">START NOW</Link></div>
    </div>
  </div>)
}
