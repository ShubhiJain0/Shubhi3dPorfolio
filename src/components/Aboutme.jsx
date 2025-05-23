import React, { useState } from "react";
import Timeline from "./Timeline";
export default function AboutMeModal({ about , setAbout}) {
  

  const [viewMore,setViewMore]=useState(false);
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
        <div className="bg-pink-100 rounded-xl shadow-lg p-6 w-11/12 max-w-md relative">
          {/* Close Button */}
          <button
            onClick={() => {
              setAbout(false);
            }}
            className="absolute top-3 right-3 text-black text-2xl font-bold hover:scale-125
 hover:-rotate-[30deg] transition duration-300 ease-in-out bg-white rounded-xl px-2"
          >
            &times;
          </button>
          <div className="flex flex-col justify-center items-center">
            <div className="w-24 h-24 overflow-hidden mx-auto rounded-full shadow-xl ">
              <img
                src="/profile.png" // replace with your actual image path
                alt="Shubhi"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover shadow object-center transform scale-150"
              />
            </div>

            {/* Headings */}
            <h2 className="text-2xl font-bold text-center">Hi, I'm Shubhi!</h2>
            <h3 className="text-md text-gray-600 text-center mb-4">
              Full-Stack Developer
            </h3>
            
            {/* Paragraph */}
            <p className="text-gray-700 text-sm leading-relaxed text-center">
              I love creating immersive and responsive web applications. I enjoy
              working with both frontend and backend technologies, and I
              constantly seek to improve and learn new things in the
              ever-evolving world of development.
            </p>
            {!viewMore && (
              <button
                className="bg-white py-1 px-4 my-4 rounded-xl hover:bg-slate-100 border-[1px]  border-slate-300 text-pretty text-sm leading-relaxed"
                onClick={() => {
                  setViewMore(true);
                }}
              >
                View more
              </button>
            )}

            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden ${
                viewMore ? "max-h-[800px] opacity-100 mt-4" : "max-h-0 opacity-0"
              }`}
            >
              <Timeline />
            </div>
            {viewMore && (
              <button
                className="bg-white py-1 px-4 rounded-xl hover:bg-slate-100 border-[1px]  border-slate-300 text-pretty text-sm leading-relaxed"
                onClick={() => {
                  setViewMore(false);
                }}
              >
                View less
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
