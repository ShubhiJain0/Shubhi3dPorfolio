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
          <h2 className="text-2xl font-bold mb-4  text-left">Front-End :-</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 ">
            <div className="flex flex-col items-center">
              <img src="htmlicon.png" alt="Tech1" className="w-16 h-16" />
              <span className="mt-2 text-sm font-medium">Html</span>
            </div>

            <div className="flex flex-col items-center ">
              <img src="cssicon.png" alt="Tech2" className="w-16 h-16  " />
              <span className="mt-2 text-sm font-medium">CSS</span>
            </div>

            <div className="flex flex-col items-center">
              <img src="javascripticon.png" alt="Tech2" className="w-16 h-16 " />
              <span className="mt-2 text-sm font-medium">Javascript</span>
            </div>

            <div className="flex flex-col items-center">
              <img src="reacticon.png" alt="Tech2" className="w-16 h-16" />
              <span className="mt-2 text-sm font-medium">React js</span>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4  text-left">Back-End :-</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex flex-col items-center">
              <img src="nodejsicon.png" alt="Tech1" className="w-16 h-16" />
              <span className="mt-2 text-sm font-medium">Node js</span>
            </div>

            <div className="flex flex-col items-center">
              <img src="expressjsicon.png" alt="Tech2" className="w-16 h-16" />
              <span className="mt-2 text-sm font-medium">Express js</span>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4  text-left">Databases :-</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex flex-col items-center">
              <img src="mongodbicon.png" alt="Tech1" className="w-16 h-16" />
              <span className="mt-2 text-sm font-medium">Mongo db</span>
            </div>

            <div className="flex flex-col items-center">
              <img src="postgresqlicon.png" alt="Tech2" className="w-16 h-16" />
              <span className="mt-2 text-sm font-medium">Postgresql</span>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4  text-left">Additional :-</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex flex-col items-center">
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
  );
}
