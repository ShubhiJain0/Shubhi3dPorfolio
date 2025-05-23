import React, { useState } from "react";

export default function Timeline() {
  const timeline = [
    {
      label: "Open to opportunities!",
      current: true,
      index: 0,
      description: "MERN stack, frontend, backend developer roles",
    },
    {
      label: "Internship",
      completed: true,
      index: 1,
      description: "Extended leafs pvt ltd",
    },
    {
      label: "Graduation",
      completed: true,
      index: 2,
      description: "Bachelor of Technology 8.5 CGPA",
    },
    { label: "Schooling", completed: true, index: 3, description:"Class 12th : 75% Class 10th : 9.6 Cgpa" },
  ];

  const [des, setDes]=useState(-1);

  setInterval(()=>{
    console.log(des);
    
  },5000)

  return (
    <div className="flex flex-col items-center mt-8">
      {timeline.map((item, index) => (
        <div
          key={index}
          onMouseEnter={() => {
            setDes(item.index);
          }}
          onMouseLeave={() => {
            setTimeout(() => {
              setDes(-1);
            }, 5000);
          }}
          className="flex flex-col items-center relative"
        >
          {/* Ripple effect for current item */}
          <div className=" relative flex flex-col items-center">
            {item.current && (
              <span className="absolute -bottom-2 h-10 w-10 rounded-full bg-pink-600 animate-ping opacity-75"></span>
            )}
            <div
              className={`z-10 h-4 w-4 rounded-full  ${
                item.current
                  ? "bg-pink-500"
                  : item.completed
                  ? "bg-gray-400"
                  : "bg-gray-400"
              }`}
            ></div>
          </div>
          <p className="mb-1 text-sm text-gray-700 font-semibold text-center ">
            {item.label}
          </p>
          {des == index && (
            <div className="my-2 px-3 py-2 text-xs text-gray-700 bg-white rounded-md shadow-md">
              {item.description}
            </div>
          )}
          {/* Line except for last dot */}
          {index !== timeline.length - 1 && (
            <div className="h-12 w-px bg-gray-400"></div>
          )}
        </div>
      ))}
    </div>
  );
}
