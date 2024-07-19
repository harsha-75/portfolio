import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    const telegramBotToken = '7137816586:AAEUE5E2nKPqxgzGcm9yhENFyw6kGmYTDf4';
    const chatId = '1438593274'; // Your verified chat ID
    const text = `New contact form submission:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`;

    const url = `https://api.telegram.org/bot${telegramBotToken}/sendMessage`;

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: chatId, text })
      });

      const data = await response.json();
      if (data.ok) {
        // alert('Message sent successfully!');
        toast.success("Message sent successfully!")
        setFormData({
          name: '',
          email: '',
          message: ''
        })
      } else {
        console.error('Error sending message:', data);
        alert('Failed to send message. Please try again later.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again later.');
    }
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
    <h1 className="text-3xl font-bold text-center mb-6">Contact Me</h1>
    <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            rows="5"
            placeholder="Your message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Send
          </button>
        </div>
      </form>
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
        <div className="flex items-center mb-5">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="text-black-500 text-2xl mr-4" />
          <span>Opp skyline towers Indira Nagar Street, Khammam City, India</span>
        </div>
        <div className="flex items-center mb-5">
          <FontAwesomeIcon icon={faPhone} className="text-black-500 text-2xl mr-4" />
          <span>+91 9347803939</span>
        </div>
        <div className="flex items-center mb-2">
          <FontAwesomeIcon icon={faEnvelope} className="text-black-500 text-2xl mr-5" />
          <span>harshavardhanmanne410@gmail.com</span>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Contact
