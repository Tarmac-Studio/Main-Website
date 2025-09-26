import React from "react";

const ContactForm: React.FC = () => {
  return (
    <section className="bg-black text-white">
      {/* Outer container for full width background */}
      <div className="max-w-[980px] mx-auto px-[30px] py-[100px] flex flex-col md:flex-row gap-[60px]">
        {/* Left Section */}
        <div className="flex flex-col gap-2 w-full md:w-[288px]">
          {/* Contact Us with exact properties */}
          <p 
            className="text-[#00FFFF]"
            style={{
              width: '288px',
              height: '32px',
              fontFamily: 'Satoshi, sans-serif',
              fontWeight: 500,
              fontStyle: 'medium',
              fontSize: '24px',
              lineHeight: '100%',
              letterSpacing: '0%'
            }}
          >
            Contact Us
          </p>

          {/* Lower text: 64px, bold, gradient */}
          <h2 className="font-bold text-[40px] md:text-[64px] leading-[100%] bg-gradient-to-l from-[#F6F4F4] to-[#585858] bg-clip-text text-transparent">
            Get in Touch
          </h2>
        </div>

        {/* Right Section - Form */}
        <div className="flex-1">
          <div className="bg-gray-900 rounded-lg p-8">
            <h3 className="text-[24px] font-medium text-gray-500 mb-8">Write Us a Message</h3>
            
            <form className="space-y-6">
              {/* Name Row - More compact spacing */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* First Name */}
                <div>
                  <label className="block text-[14px] font-medium mb-2 text-gray-300">
                    First Name *
                  </label>
                  <input
                    type="text"
                    className="w-full max-w-[275.5px] h-[46px] bg-gray-800 border border-[#00FFFF80] rounded-[100px] px-[15px] text-white placeholder-gray-500 focus:outline-none focus:border-[#00FFFF] text-[16px]"
                    placeholder="Joshua"
                  />
                </div>

                {/* Last Name */}
                <div>
                  <label className="block text-[14px] font-medium mb-2 text-gray-300">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    className="w-full max-w-[275.5px] h-[46px] bg-gray-800 border border-[#00FFFF80] rounded-[100px] px-[15px] text-white placeholder-gray-500 focus:outline-none focus:border-[#00FFFF] text-[16px]"
                    placeholder="Tarmac"
                  />

                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-[14px] font-medium mb-2 text-gray-300">
                  Email Address *
                </label>
                <input
                  type="email"
                  className="w-full max-w-[566px] h-[46px] bg-gray-800 border border-[#00FFFF80] rounded-[100px] px-[15px] text-white placeholder-gray-500 focus:outline-none focus:border-[#00FFFF] text-[16px]"
                  placeholder="tarmac@gmail.com"
                />
              </div>


              {/* Message */}
              <div>
                <label className="block text-[14px] font-medium mb-2 text-gray-300">
                  Message *
                </label>
                <textarea
                  className="w-full max-w-[566px] h-[150px] bg-gray-800 border border-[#00FFFF80] rounded-[25px] px-[15px] py-[15px] text-white placeholder-gray-500 focus:outline-none focus:border-[#00FFFF] resize-none text-[16px]"
                  placeholder="Leave us a message"
                ></textarea>
              </div>

              {/* Privacy Policy Checkbox */}
              <div className="flex items-center space-x-[10px] pt-2">
                <label className="relative flex items-center cursor-pointer">
                  {/* Hidden native radio */}
                  <input 
                    type="radio" 
                    id="privacy-policy"
                    className="appearance-none w-5 h-5 rounded-full border border-[#00FFFF] checked:bg-[#00FFFF] 
                              backdrop-blur-[50px] shadow-[inset_2px_5px_10px_0px_#A4A4A426]"
                  />
                  {/* Outer circle */}
                  <span className="absolute w-5 h-5 rounded-full border border-[#00FFFF] 
                                  flex items-center justify-center pointer-events-none"></span>
                  <span className="ml-7 text-[15px] font-medium leading-[100%] text-gray-300">
                    I agree to the Privacy Policy
                  </span>
                </label>
              </div>




              {/* Submit Button - Correct styling */}
              <button
                type="submit"
                className="
                  w-[566px] h-[50px] 
                  rounded-[1000px] 
                  border-2 border-[#00FFFF] 
                  px-[20px] py-[15px] 
                  flex items-center justify-center gap-[5px] 
                  bg-[#00FFFF] text-black font-medium 
                  hover:bg-[#00e5e5] 
                  text-[16px] 
                  mt-[15px] 
                  transition duration-200
                "
              >
                Send Message
              </button>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;