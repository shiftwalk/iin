import IconSmile from '@/icons/smile.svg'
import FancyLink from './fancyLink'

export default function Footer() {
  return (
    <footer className="bg-[#0D0D12]">
      <div className="relative flex overflow-x-hidden text-[10vw] text-white uppercase">
        <div className="animate-marquee will-change-transform whitespace-nowrap py-[5vw]">
          <span className="mx-2 font-display italic">Be In The Know <IconSmile className="w-[10vw] translate-y-[-10%] inline-block" /></span>
          <span className="mx-2">Be In The Know <IconSmile className="w-[10vw] translate-y-[-10%] inline-block" /></span>
          <span className="mx-2 font-display italic">Be In The Know <IconSmile className="w-[10vw] translate-y-[-10%] inline-block" /></span>
          <span className="mx-2">Be In The Know <IconSmile className="w-[10vw] translate-y-[-10%] inline-block" /></span>
          <span className="mx-2 font-display italic">Be In The Know <IconSmile className="w-[10vw] translate-y-[-10%] inline-block" /></span>
          <span className="mx-2">Be In The Know <IconSmile className="w-[10vw] translate-y-[-10%] inline-block" /></span>
        </div>

        <div className="absolute top-0 animate-marquee2 will-change-transform whitespace-nowrap py-[5vw]">
          <span className="mx-2 font-display italic">Be In The Know <IconSmile className="w-[10vw] translate-y-[-10%] inline-block" /></span>
          <span className="mx-2">Be In The Know <IconSmile className="w-[10vw] translate-y-[-10%] inline-block" /></span>
          <span className="mx-2 font-display italic">Be In The Know <IconSmile className="w-[10vw] translate-y-[-10%] inline-block" /></span>
          <span className="mx-2">Be In The Know <IconSmile className="w-[10vw] translate-y-[-10%] inline-block" /></span>
          <span className="mx-2 font-display italic">Be In The Know <IconSmile className="w-[10vw] translate-y-[-10%] inline-block" /></span>
          <span className="mx-2">Be In The Know <IconSmile className="w-[10vw] translate-y-[-10%] inline-block" /></span>
        </div>
      </div>

      <div className="p-5 pb-[10vw]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="col-span-1 aspect-square bg-[#5F0EFF]">

          </div>
          
          <div className="col-span-1 aspect-square bg-[#EFF366]">
            
          </div>
        </div>
      </div>

      <nav className="p-5">
        <ul className="flex text-white text-xs lg:text-sm w-full">
          <li className="pr-3"><FancyLink destination="/" label="Privacy Policy" /></li>
          <li className="pr-3">|</li>
          <li className="pr-3"><FancyLink destination="/" label="Cookie Policy" /></li>
          <li className="pr-3">|</li>
          <li className="font-medium"><FancyLink destination="/" label="Branding By Cubic" /></li>

          <li className="ml-auto text-right"><button className="a11y-focus"><span className="hidden lg:inline">Back&nbsp;</span>To Top</button></li>
        </ul>
      </nav>
    </footer>
  )
}