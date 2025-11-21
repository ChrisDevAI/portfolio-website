import Head from 'next/head';
import Layout from '@/components/Layout';
import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState({
    sending: false,
    success: null,
    error: null
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus({ sending: true, success: null, error: null });

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });

      const data = await res.json();

      if (data.success) {
        setStatus({ sending: false, success: true, error: null });
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus({ sending: false, success: false, error: data.message });
      }
    } catch (err) {
      setStatus({ sending: false, success: false, error: 'Network/server error' });
    }
  }

  return (
    <>
      <Head>
        <title>Contact | Chris R</title>
        <meta name="description" content="Contact me" />
      </Head>

      <main className="mt-2">
        <h1 className="text-4xl font-semibold text-center mb-8 text-white">
          Contact Me
        </h1>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* LEFT COLUMN */}
          <div className="text-gray-300 space-y-4">
            <p>
              Feel free to reach out regarding AI engineering roles, collaborations,
              or technical projects.

              
            </p>

            {/* Horizontal divider */}
                <span className="block border-t-4 border-gray-600 my-2 w-48 mt-4"></span>

            <div>
              <p className="font-semibold text-white">Email</p>
              <a
                href="mailto:ChrisMenaDevAI@gmail.com"
                className="text-blue-400 hover:text-blue-300 transition"
              >
                ChrisMenaDevAI@gmail.com

                
              </a>
            </div>

            {/* Horizontal divider */}
                <span className="block border-t-4 border-gray-600 my-2 w-48 mt-4"></span>

            <div>
              <p className="font-semibold text-white">LinkedIn</p>
              <a
                href="https://www.linkedin.com/in/chrisdevai/"
                className="text-blue-400 hover:text-blue-300 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/ChrisDevAI

                
              </a>
            </div>

            {/* Horizontal divider */}
                <span className="block border-t-4 border-gray-600 my-2 w-48 mt-4"></span>
            
            <div>
              <p className="font-semibold text-white">GitHub</p>
              <a
                href="https://github.com/ChrisDevAI"
                className="text-blue-400 hover:text-blue-300 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/ChrisDevAI

                
              </a>

              {/* Horizontal divider */}
                <span className="block border-t-4 border-gray-600 my-2 w-48 mt-4"></span>
            </div>
          </div>

          {/* RIGHT COLUMN — FORM */}
          <form
            onSubmit={handleSubmit}
            className="space-y-4 bg-gray-800 p-8 rounded-xl shadow-xl"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none"
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none"
              required
            ></textarea>

            <button
              type="submit"
              disabled={status.sending}
              className="w-full p-3 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 disabled:bg-blue-900"
            >
              {status.sending ? 'Sending…' : 'Send Message'}
            </button>

            {status.success && (
              <p className="text-green-400 text-center mt-4">Message sent successfully.</p>
            )}

            {status.error && (
              <p className="text-red-400 text-center mt-4">Error: {status.error}</p>
            )}
          </form>

        </div>
      </main>

      </>
    
  );
}
