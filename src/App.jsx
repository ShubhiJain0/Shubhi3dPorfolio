import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import { useRef ,useState, useEffect } from "react";
import { useGLTF, Environment, OrbitControls, Html } from "@react-three/drei";
import AudioPlayer from "./components/AudioPlayer";
import TechStackModal from "./components/TechStackModal";
import AboutMeModal from "./components/Aboutme";
import ContactMeModal from "./components/ContactMeModal";
import MusicNavbar from "./components/MusicNavbar";
function Modal3D({ entered, onTagClick, Projects, techOpen,Contact, about }) {
  const { scene } = useGLTF("/ModalModel.glb");
  const isMobile = window.innerWidth < 768;

  const [tagObjects, setTagObjects] = useState({});

  useEffect(() => {
    if (!scene) return;

    // Map object names to actual objects
    const objs = {
      Object_16: scene.getObjectByName("Object_16"),
      Object_22: scene.getObjectByName("Object_22"),
      Object_96: scene.getObjectByName("Object_96"),
      Object_76: scene.getObjectByName("Object_76"),
      Object_60: scene.getObjectByName("Object_60"),
      Object_88: scene.getObjectByName("Object_88"),
    };

    setTagObjects(objs);
  }, [scene]);

  const tags = [
    { name: "Object_16", label: "My Porjects", offset: [0, 3, 0] },
    { name: "Object_22", label: "My Resume", offset: [0, 3, 0] },
    { name: "Object_96", label: "Contact me", offset: [0, 3, 0] },

    { name: "Object_60", label: "About me", offset: [0, 2, 0] },

    { name: "Object_88", label: "Tech stack", offset: [0, 6, 0] },
  ];

  return (
    <>
      <primitive object={scene} scale={isMobile ? 3 : 5} position={[0, 0, 0]} />

      {/* Render tags only if entered and object exists */}
      {entered &&
        !Projects && !Contact &&!techOpen&& !about&&
        tags.map(({ name, label, offset }) => {
          const obj = tagObjects[name];
          if (!obj) return null;

          // Calculate position for Html tag by adding offset to object's world position
          const worldPos = new THREE.Vector3();
          obj.getWorldPosition(worldPos);
          const tagPos = [
            worldPos.x + offset[0],
            worldPos.y + offset[1],
            worldPos.z + offset[2],
          ];

          return (
            <Html key={name} position={tagPos} center>
              <div
                onClick={() => onTagClick(obj, name)}
                className="bg-gray-200 rounded-md px-1 py-1 text-lg bg-opacity-60 hover:scale-125 ease-in duration-75 "
              >
                {label}
              </div>
            </Html>
          );
        })}
    </>
  );
}

function GlassBlurModal({ onEnter, onExit }) {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 10,
        color: "#fff",
        fontSize: "2rem",
        flexDirection: "column",
        gap: "1rem",
        userSelect: "none",
      }}
    >

        <div className="welcome">Welcome to Shubhi's abode
      </div>
      <button
        className="Enter-Button"
        onClick={onEnter}
        style={{
          padding: "0.7rem 1.5rem",
          fontSize: "1.2rem",
          cursor: "pointer",
          borderRadius: "6px",

          color: "#000",
          backdropFilter: "blur(5px)",
          WebkitBackdropFilter: "blur(5px)",
          boxShadow: "0 0 10px rgba(255,255,255,0.3)",
          border: "2px solid white",
        }}
      >
        Enter
      </button>
    </div>
  );
}



export default function App() {
  const [entered, setEntered] = useState(false);
  const controlsRef = useRef();

  const audioRef = useRef(null);

  const [Projects, setProjects] = useState(false);

  const [techOpen, setTechOpen] = useState(false);

  const [Contact, setContact] = useState(false);

  const [about, setAbout] = useState(false);


  const handleResumeClick = () => {
    window.open("resume.pdf", "_blank");
  };

  const handleEnter = () => {
    if (audioRef.current) {
      console.log(audioRef.current);
      
      audioRef.current.play();
      
      
      // Auto stop after 60 seconds
      setTimeout(() => {
        audioRef.current.mute();
        
        
        audioRef.current.currentTime = 0; // (optional) reset to beginning
      }, 60000); // 60000ms = 60 seconds
    }

    setEntered(true);
  };

  const handleTagClick = (obj, name) => {
    
    
    if (!obj) return;
    const controls = controlsRef.current;
    if (!controls) return;


    // You can do other things like open resume modal, etc.
    if (name === "Object_22") {
      
      // Or set some state to open your resume component
      handleResumeClick();
    } else if (name === "Object_16") {
      
      setProjects(true);
    } else if (name == "Object_88") {
      setTechOpen(true);
    } else if ((name == "Object_96")) {
      setContact(true);
    } else if ((name == "Object_60")) {
      setAbout(true);
    }
  };
  const isMobile = window.innerWidth < 768;
  
  
  return (
    <>
      <MusicNavbar ref={audioRef} musicSrc="/music.mp3" />
      <Canvas
        style={{ width: "100vw", height: "100vh", display: "block" }}
        camera={{ position: isMobile ? [23, 10, 20] : [20, 10, 20], fov: 50 }}
      >
        <ambientLight intensity={0.8} />
        <Environment preset="sunset" />
        <OrbitControls enableZoom={false} />
        <OrbitControls ref={controlsRef} enableZoom={false} />
        <Modal3D
          entered={entered}
          Projects={Projects}
          onTagClick={handleTagClick}
          techOpen={techOpen}
          Contact={Contact}
          about={about}
        />
      </Canvas>
      {!entered && <GlassBlurModal onEnter={handleEnter} />}
      <AudioPlayer ref={audioRef} src="/music.mp3" />
      {Projects && (
        <ProjectsModal
          onClose={() => {
            setProjects(false);
          }}
        />
      )}
      {techOpen && (
        <TechStackModal techOpen={techOpen} setTechOpen={setTechOpen} />
      )}
      {Contact && <ContactMeModal Contact={Contact} setContact={setContact} />}
      {about && <AboutMeModal about={about} setAbout={setAbout} />}
      {/* stops after 60s */}
    </>
  );
}
function ProjectsModal({ onClose }) {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(255,255,255,0.1)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
        padding: "2rem",
      }}
    >
      <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-auto h-screen">
        <div className="bg-pink-200 p-12 rounded-xl shadow-2xl w-full max-w-6xl relative">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-black text-2xl font-bold hover:scale-125
 hover:-rotate-[30deg] transition duration-300 ease-in-out bg-white rounded-xl px-2"
          >
            &times;
          </button>

          {/* Blocks */}
          <div className="flex justify-between gap-6 mt-8 flex-wrap">
            {/* Block 1 */}
            <div className="bg-white p-4 rounded-lg shadow-md w-full sm:w-[40%] lg:w-[30%] transform transition-transform duration-300 ease-in-out hover:scale-105 ">
              <div className="bg-gray-300 rounded mb-4 overflow-hidden">
                <img
                  src="bloggingapp.gif"
                  alt=""
                  className="hidden sm:block w-full h-auto object-cover"
                />
              </div>
              <div className="bg-white rounded-xl shadow-md p-4 border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Medium Clone
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  <span className="font-medium">Tech Stack:</span> Firebase,
                  React, Editor.js, Cloudinary, Framer Motion
                </p>
                <a
                  href="https://medium-clone-frontend.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline text-sm"
                >
                  View Live Demo →
                </a>
              </div>
            </div>

            {/* Block 2 */}
            <div className="bg-white p-4 rounded-lg shadow-md w-full sm:w-[40%] lg:w-[30%] transform transition-transform duration-300 ease-in-out hover:scale-105">
              <div className="bg-gray-300 rounded mb-4 overflow-hidden ">
                <img
                  className="hidden sm:block w-full h-auto object-cover"
                  src="uber.gif"
                  alt=""
                />
              </div>
              <div className="bg-white rounded-xl shadow-md p-4 border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Uber Clone
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  <span className="font-medium">Tech Stack:</span>
                  MERN stack, Framer Motion,Socket.IO
                </p>
                <a
                  href="https://uber-clone-frontend-69ue.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline text-sm"
                >
                  View Live Demo →
                </a>
              </div>
            </div>

            {/* Block 3 */}
            <div className="bg-white p-4 rounded-lg shadow-md w-full sm:w-[40%] lg:w-[30%] transform transition-transform duration-300 ease-in-out hover:scale-105">
              <div className="bg-gray-300 rounded mb-4 overflow-hidde">
                <img
                  src="giticon.jpg"
                  alt=""
                  className="hidden sm:block w-full h-auto object-cover"
                />
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 max-w-md mx-auto border border-gray-200 mt-[60px]">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Github Link for other projects
                </h3>

                <a
                  href="https://github.com/ShubhiJain0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline text-sm"
                >
                  Link →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}