import React from 'react';

const Contact = () => {
  return (
    <section className="py-16 bg-white" id="contact">
      <div className="max-w-xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>
        <form className="space-y-4">
          <input type="text" placeholder="Your Name" className="w-full border p-2 rounded" />
          <input type="email" placeholder="Your Email" className="w-full border p-2 rounded" />
          <textarea rows="5" placeholder="Your Message" className="w-full border p-2 rounded"></textarea>
          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
