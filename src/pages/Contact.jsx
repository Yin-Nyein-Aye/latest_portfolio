import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {

  const [status, setStatus] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const response = await fetch("https://formspree.io/f/mdalpdev", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json"

      },
    });
    if (response.ok) {
      setStatus("Message sent successfully!");
      e.target.reset();
    } else {
      setStatus("Oops! Something went wrong.");
    }
    setTimeout(() => setStatus(""), 3000);
  };
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-10">
      <h2 className="text-4xl font-bold">Get in Touch</h2>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1 }}
        className="w-24 h-1 bg-gray-100 mx-auto rounded"
      ></motion.div>
      <p className="text-olive-700 font-bold mt-2 italic">
        Your vision, my code —
        <span className="block sm:inline"> let’s make it real.</span>
      </p>
      <form className="shadow-lg rounded-lg p-8 w-full max-w-md space-y-4 text-black" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="emily" className="w-full border rounded px-4 py-2 outline-0" required />
        <input type="email" name="email" placeholder="emily@gmail.com" className="w-full border rounded px-4 py-2 outline-0" required />
        <input type="text" name="subject" placeholder="Subject (Virtual Interview,Offer)" className="w-full border rounded px-4 py-2 outline-0" required />
        <textarea placeholder="Your Message" name="message" className="w-full border rounded px-4 py-2 h-32 outline-0" required />
        <button className="w-full bg-olive-800 text-white py-2 rounded hover:bg-olive-700 transition" type="submit" >
          Send Message
        </button>
        {status && <p className="italic text-center text-olive-700 font-bold">{status}</p>}
      </form>
    </section >
  );
}
