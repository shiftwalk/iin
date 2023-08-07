export default function Form() {
  return(    
    <form
      action="https://formspree.io/f/xjvqybkq"
      method="POST"
      className="w-full grid grid-cols-2 gap-x-10 gap-y-5 lg:gap-y-8"
    >
      <div className="col-span-2">
        {/* <label for="firstName" className="text-base lg:text-xl 2xl:text-xl mb-2 block">First Name</label> */}
        <input type="text" id="name" name="name" placeholder="Name" className="a11y-focus focus-within:ring-[#4000B5] w-full bg-white appearance-none p-3 lg:p-6 text-black text-base lg:text-xl 2xl:text-xl" required />
      </div>
      <div className="col-span-2">
        {/* <label for="lastName" className="text-base lg:text-xl 2xl:text-xl mb-2 block">Last Name</label> */}
        <input type="text" id="businessName" name="businessName" placeholder="Business Name" className="a11y-focus focus-within:ring-[#4000B5] w-full bg-white appearance-none p-3 lg:p-6 text-black text-base lg:text-xl 2xl:text-xl" />
      </div>
      <div className="col-span-2">
        {/* <label for="email" className="text-base lg:text-xl 2xl:text-xl mb-2 block">Your Email</label> */}
        <input type="email" id="email" name="email" placeholder="Email" className="a11y-focus focus-within:ring-[#4000B5] w-full bg-white appearance-none p-3 lg:p-6 text-black text-base lg:text-xl 2xl:text-xl" required />
      </div>
      <div className="col-span-2">
        {/* <label for="number" className="text-base lg:text-xl 2xl:text-xl mb-2 block">Phone Number</label> */}
        <input type="number" id="number" name="number" placeholder="Mobile Number" className="a11y-focus focus-within:ring-[#4000B5] w-full bg-white appearance-none p-3 lg:p-6 text-black text-base lg:text-xl 2xl:text-xl" />
      </div>
      <div className="col-span-2 lg:col-span-2">
        {/* <label for="message" className="text-base lg:text-xl 2xl:text-xl mb-2 block">Your message</label> */}
        <textarea rows={10} id="message" name="message" placeholder="Your message" className="a11y-focus focus-within:ring-[#4000B5] w-full bg-white appearance-none p-3 lg:p-6 text-black text-base lg:text-xl 2xl:text-xl" />
      </div>

      <div className="col-span-2">
        <button type="submit" className="a11y-focus border border-[#4000B5] bg-[#4000B5] text-off-white py-4 lg:py-6 2xl:py-8 px-6 lg:px-8 rounded-full 2xl:px-10 inline-block leading-[1.25] 2xl:text-2xl 2xl:leading-[1.05] relative group overflow-hidden w-full lg:w-auto">
          <div className="relative z-[1] overflow-hidden">
            <span className="block transition-transform ease-out duration-[450ms] translate-y-none group-hover:translate-y-[-105%]">Send message!</span>
            <span className="block absolute inset-0 transition-transform ease-out duration-[450ms] translate-y-[105%] group-hover:translate-y-0">Send message!</span>
          </div>

          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[0] opacity-0 group-hover:opacity-100 group-hover:delay-[0ms] delay-[450ms] transition-opacity ease-out duration-[100ms]">
            <div className={`w-[5px] h-[5px] rounded-full transition-all ease-out duration-[450ms] group-hover:duration-[600ms] group-hover:scale-[75] origin-center bg-black/20`}></div>
          </div>
        </button>
      </div>
    </form>
  )
}