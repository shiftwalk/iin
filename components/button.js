import Link from "next/link";

export default function Button({ href, label, bgColor }) {
  return(
    <Link scroll={false} href={href} className="a11y-focus rounded-full border border-[#B4C0C6] py-4 lg:py-6 2xl:py-8 px-6 lg:px-8 2xl:px-10 inline-block leading-none 2xl:text-2xl 2xl:leading-none mx-auto relative group overflow-hidden">
      <div className="relative z-[1] overflow-hidden">
        <span className="block transition-transform ease-out duration-[450ms] translate-y-none group-hover:translate-y-[-105%]">{label}</span>
        <span className="block absolute inset-0 transition-transform ease-out duration-[450ms] translate-y-[105%] group-hover:translate-y-0">{label}</span>
      </div>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[0] opacity-0 group-hover:opacity-100 group-hover:delay-[0ms] delay-[450ms] transition-opacity ease-out duration-[100ms]">
        <div className={`w-[5px] h-[5px] rounded-full transition-all ease-out duration-[450ms] group-hover:duration-[600ms] group-hover:scale-[75] origin-center ${bgColor ? bgColor : 'bg-[#EBEA33]' }`}></div>
      </div>
    </Link>
  )
}