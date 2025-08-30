import React from 'react'

function Contact() {
  return (
 <section className="py-16 bg-teal-950 text-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl  font-bold text-emerald-50 mt-5">Contact Me</h2>
        <p className="text-emerald-50 font-bold mb-10 mt-10">
          I’d love to hear from you! Whether you have a question, a project idea, 
          or just want to say hi — feel free to reach out.
        </p>

        <div className="max-w-2xl mx-auto">
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 rounded-xl bg-white/20 font-bold     text-white "
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 rounded-xl bg-white/20 font-bold     text-white"
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full p-4 rounded-xl bg-white/20 font-bold     text-white "
            ></textarea>
            <button
              type="submit"
              className="w-full bg-teal-500 hover:bg-green-950 text-white font-semibold py-3 rounded-xl transition duration-300"
            >
              Send Message
            </button>
          </form>

          {/* Extra contact info */}
          <div className="mt-10 space-y-2 font-bold">
            <p>Email :   <a href="#" className="text-emerald-400 font-bold"> gamsagamsi@email.com</a></p>
            <p>LinkedIn : <a href="#" className="text-emerald-400 ">Gamsayini</a></p>
            <p>GitHub : <a href="#" className="text-emerald-400 ">github</a></p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact