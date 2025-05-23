import React from "react";

export default function ContactMeModal({ Contact, setContact }) {
  const email = "shubhijain272@gmail.com"; // replace with your actual email

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    alert("Email copied to clipboard!");
  };

  const sendMail = () => {
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;
    window.open(gmailUrl, "_blank"); // Opens Gmail in a new tab
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
      <div className="bg-pink-100 rounded-xl shadow-lg p-6 w-11/12 max-w-sm relative text-center">
        {/* Close Button */}
        <button
          onClick={() => {
            setContact(false);
          }}
          className="absolute top-3 right-3 text-black text-2xl font-bold hover:scale-125
 hover:-rotate-[30deg] transition duration-300 ease-in-out bg-white rounded-xl px-2"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
        <p className="text-lg mb-2 font-mono">{email}</p>

        <div className="flex justify-center gap-4">
          <button
            onClick={copyToClipboard}
            className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300 transition"
          >
            Copy
          </button>
          <button
            onClick={sendMail}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            Send Email
          </button>
        </div>
        <h1 className="text-lg my-4 flex justify-center items-center gap-4">
          <div className="w-[6rem] border-b-2 border-black"></div>
          <span>OR</span>
          <div className="w-[6rem] border-b-2 border-black"></div>
        </h1>

        <div className="flex justify-center items-center">
          <a
            href="https://www.linkedin.com/in/shubhi-j-ab2090202/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="linkedinicon.png" // Replace with your actual image path
              alt="LinkedIn"
              className="w-10 h-10 hover:scale-110 transition"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
