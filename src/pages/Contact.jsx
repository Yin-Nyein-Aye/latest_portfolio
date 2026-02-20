export default function Contact() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-10">
      <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
      <form className="shadow-lg rounded-lg p-8 w-full max-w-md space-y-4">
        <input type="text" placeholder="Your Name" className="w-full border rounded px-4 py-2 outline-0"/>
        <input type="email" placeholder="Your Email" className="w-full border rounded px-4 py-2 outline-0"/>
        <textarea placeholder="Your Message" className="w-full border rounded px-4 py-2 h-32 outline-0"/>
        <button className="w-full bg-orange-600 text-white py-2 rounded hover:bg-orange-700 transition">
          Send Message
        </button>
      </form>
    </section>
  );
}
