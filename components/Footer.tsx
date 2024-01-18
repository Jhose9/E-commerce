export default function Footer() {
  return (
    <footer className="bottom-0 relative w-full h-1/3 bg-black">
      <div className="flex">
        <div className="grid grid-cols-3 gap-28 px-[350px] py-[60px]">
          <div className="flex flex-col gap-3">
            <strong className="text-white text-[14px]">FIND A STORE</strong>
            <strong className="text-white text-[14px]">BECOME A PARTNER</strong>
            <strong className="text-white text-[14px]">
              SIGN UP FOR EMAIL
            </strong>
            <strong className="text-white text-[14px]">SEND US FEEDBACK</strong>
            <strong className="text-white text-[14px]">STUDENT DISCOUNT</strong>
          </div>

          <div className="flex flex-col gap-3">
            <strong className="text-white text-[14px] ">GET HELP</strong>
            <p className="text-white text-[14px] opacity-50 hover:opacity-100">
              Order Status
            </p>
            <p className="text-white text-[14px] opacity-50 hover:opacity-100">
              Delivery
            </p>
            <p className="text-white text-[14px] opacity-50 hover:opacity-100">
              Returns
            </p>
            <p className="text-white text-[14px] opacity-50 hover:opacity-100">
              Payment Options
            </p>
            <p className="text-white text-[14px] opacity-50 hover:opacity-100">
              Contact Us
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <strong className="text-white text-[14px]">ABOUT US</strong>
            <p className="text-white text-[14px] opacity-50 hover:opacity-100">
              News
            </p>
            <p className="text-white text-[14px] opacity-50 hover:opacity-100">
              Careers
            </p>
            <p className="text-white text-[14px] opacity-50 hover:opacity-100">
              Investors
            </p>
            <p className="text-white text-[14px] opacity-50 hover:opacity-100">
              Sustainability
            </p>
          </div>
        </div>

        <div className="flex gap-5 py-20">
          <div className="bg-white opacity-25 rounded-full h-[40px] w-[40px] flex justify-center items-center hover:opacity-50 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-facebook"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </div>

          <div className="bg-white opacity-25 rounded-full h-[40px] w-[40px] flex justify-center items-center hover:opacity-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-twitter"
            >
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
            </svg>
          </div>

          <div className="bg-white opacity-25 rounded-full h-[40px] w-[40px] flex justify-center items-center hover:opacity-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-youtube"
            >
              <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
              <path d="m10 15 5-3-5-3z" />
            </svg>
          </div>

          <div className="bg-white opacity-25 rounded-full h-[40px] w-[40px] flex justify-center items-center hover:opacity-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-instagram"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </div>
        </div>
      </div>
      <p className="text-white opacity-50 text-[12px] bottom-0  p-2">
        ©{new Date().getFullYear()} Nike,Inc. All Rights Reserved
      </p>
      <div className="flex gap-5 mx-[1540px] w-[340px]">
        <p className="opacity-50 text-white text-[12px] hover:opacity-100">
          Guides
        </p>
        <p className="opacity-50 text-white text-[12px] hover:opacity-100">
          Terms of Sale
        </p>
        <p className="opacity-50 text-white text-[12px] hover:opacity-100">
          Terms of Use
        </p>
        <p className="opacity-50 text-white text-[12px] hover:opacity-100">
          Privacy Policy
        </p>
      </div>
    </footer>
  );
}
