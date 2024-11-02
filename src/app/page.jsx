"use client";
import Image from "next/image";
import imageLogin from "../../public/images/illustration-dashboard.webp";
import { RxEyeClosed } from "react-icons/rx";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function Home() {
  const [showInput, setShowInput] = useState(false);
  const router = useRouter();

  return (
    <div className="flex justify-between gap-5 items-center">
      {/* // image */}
      <div className="lg:flex flex-col gap-3 items-center justify-center h-screen hidden  bg-gray-100 w-[500px] p-5">
        <h1 className="font-bold text-[2.2rem]">Vision Integration</h1>
        <h4 className="text-gray-400 text-[1.2rem] text-center font-semibold">
          تقدم الحل الأمثل لسير العمل بأعلى مستويات التقانة والتحليل
        </h4>
        <Image src={imageLogin} alt="login" className="w-[100%]" />
      </div>
      {/* // text - form  */}
      <div className="flex  justify-center w-full lg:w-[calc(100vw-520px)] h-screen items-center">
        <div className=" flex flex-col gap-2 md:w-[50%] w-[85%]">
          <h1 className="font-bold text-[1.5rem]">تسجيل الدخول إلى الحساب</h1>
          <h6 className="text-gray-500 font-semibold text-[1.1rem]">
            {" "}
            هل لديك حساب ؟{" "}
            <span
              className="text-green-500 cursor-pointer font-bold"
              onClick={() => router.push("/dashboard")}
            >
              ابدأ
            </span>
          </h6>
          {/* // input */}
          <div className="relative mt-7 w-full">
            <label className="absolute -top-4 right-1 font-bold text-gray-500 bg-white px-2 text-[0.9rem]">
              البريد الالكتروني
            </label>
            <input
              type="text"
              className="border border-gray-300 rounded-md p-3 w-full dir hover:border-black "
              value="admin@gmail.com"
              readOnly
            />
          </div>
          <div className="relative mt-7 w-full">
            <label className="absolute -top-4 right-1 font-bold text-gray-500 bg-white px-2 text-[0.9rem] z-10">
              كلمة المرور
            </label>
            <div className="relative">
              <input
                type={!showInput ? "password" : "text"}
                className="border border-gray-300 rounded-md p-3 w-full dir hover:border-black "
                value="123456789"
                readOnly
              />
              <div
                onClick={() => setShowInput((e) => !e)}
                className="absolute top-[20%] left-2 hover:bg-gray-200 p-[6px] rounded-full cursor-pointer transition-all duration-150 "
              >
                <RxEyeClosed />
              </div>
            </div>
          </div>
          {/* // input */}
          <button
            className=" mt-4 font-bold p-3 w-full bg-gray-900 hover:bg-gray-700 transition-all duration-150  rounded-md text-white"
            onClick={() => router.push("/dashboard")}
          >
            تسجيل الدخول
          </button>
        </div>
      </div>
    </div>
  );
}
