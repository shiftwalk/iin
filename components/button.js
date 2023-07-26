import Link from "next/link";

export default function Button({ href, label }) {
  return(
    <Link scroll={false} href={href} className="a11y-focus rounded-full border border-[#B4C0C6] py-4 lg:py-6 2xl:py-8 px-6 lg:px-8 2xl:px-10 inline-block leading-none 2xl:text-2xl 2xl:leading-none mx-auto relative group overflow-hidden">
      <div className="relative z-[1] overflow-hidden">
        <span className="block transition-transform ease-[cubic-bezier(0.71,0,0.17,1)] duration-[550ms] translate-y-none group-hover:translate-y-[-100%]">{label}</span>
        <span className="block absolute inset-0 transition-transform ease-[cubic-bezier(0.71,0,0.17,1)] duration-[550ms] translate-y-full group-hover:translate-y-0 text-white">{label}</span>
      </div>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[0]">
        <div className="w-[1px] h-[1px] bg-blue rounded-full transition-all ease-[cubic-bezier(0.71,0,0.17,1)] duration-[550ms] group-hover:scale-[300] origin-center"></div>
      </div>
    </Link>
  )
}