import React from "react";

export default function TechStackModal({ techOpen, setTechOpen }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/10 backdrop-blur-lg">
      <div className="bg-pink-100 rounded-xl shadow-lg p-6 w-11/12 max-w-4xl relative">
        <button
          onClick={() => {
            setTechOpen(false);
          }}
          className="absolute top-3 right-3 text-black text-2xl font-bold hover:scale-125
 hover:-rotate-[30deg] transition duration-300 ease-in-out bg-white rounded-xl px-2"
        >
          &times;
        </button>
        <h1 className="text-2xl font-bold mb-4 text-center">My Tech Stack</h1>
        <div>
          <div>
            <h2 className="text-2xl font-bold mb-4  text-left">Front-End :-</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 ">
              <div className="flex flex-col items-center backdrop-blur-md bg-white/30 border border-white/40 rounded-xl shadow-md  hover:scale-105 transition-all duration-300 py-2">
                <img src="htmlicon.png" alt="Tech1" className="w-16 h-18" />
                <span className="mt-2 text-sm font-medium">Html</span>
              </div>

              <div className="flex flex-col items-center backdrop-blur-md bg-white/30 border border-white/40 rounded-xl shadow-md  hover:scale-105 transition-all duration-300 py-2">
                <img src="cssicon.png" alt="Tech2" className="w-16 h-18  " />
                <span className="mt-2 text-sm font-medium">CSS</span>
              </div>

              <div className="flex flex-col items-center backdrop-blur-md bg-white/30 border border-white/40 rounded-xl shadow-md  hover:scale-105 transition-all duration-300">
                <img
                  src="javascripticon.png"
                  alt="Tech2"
                  className="w-18 h-20 "
                />
                <span className="mt-2 text-sm font-medium">Javascript</span>
              </div>

              <div className="flex flex-col items-center backdrop-blur-md bg-white/30 border border-white/40 rounded-xl shadow-md  hover:scale-105 transition-all duration-300 py-2">
                <img src="reacticon.png" alt="Tech2" className="w-16 h-16" />
                <span className="mt-2 text-sm font-medium">React js</span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4  text-left">Back-End :-</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex flex-col items-center backdrop-blur-md bg-white/30 border border-white/40 rounded-xl shadow-md  hover:scale-105 transition-all duration-300 py-1">
                <img src="nodejsicon.png" alt="Tech1" className="w-16 h-16" />
                <span className="mt-2 text-sm font-medium">Node js</span>
              </div>

              <div className="flex flex-col items-center backdrop-blur-md bg-white/30 border border-white/40 rounded-xl shadow-md  hover:scale-105 transition-all duration-300 py-1">
                <img
                  src="expressjsicon.png"
                  alt="Tech2"
                  className="w-16 h-16"
                />
                <span className="mt-2 text-sm font-medium">Express js</span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4  text-left">Databases :-</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex flex-col items-center backdrop-blur-md bg-white/30 border border-white/40 rounded-xl shadow-md  hover:scale-105 transition-all duration-300 py-1">
                <img src="mongodbicon.png" alt="Tech1" className="w-16 h-16" />
                <span className="mt-2 text-sm font-medium">Mongo db</span>
              </div>

              <div className="flex flex-col items-center backdrop-blur-md bg-white/30 border border-white/40 rounded-xl shadow-md  hover:scale-105 transition-all duration-300 py-1">
                <img
                  src="postgresqlicon.png"
                  alt="Tech2"
                  className="w-16 h-16"
                />
                <span className="mt-2 text-sm font-medium">Postgresql</span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4  text-left">
              Additional :-
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex flex-col items-center backdrop-blur-md bg-white/30 border border-white/40 rounded-xl shadow-md  hover:scale-105 transition-all duration-300 py-1">
                <img
                  src="framermotionicon.png"
                  alt="Tech1"
                  className="w-16 h-16"
                />
                <span className="mt-2 text-sm font-medium">Framer motion</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
