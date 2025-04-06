"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError(null); 
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError("All fields are required.");
      return;
    }

    if (!isValidEmail(formData.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setIsSubmitted(true);
        setError(null);
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: "", email: "", message: "" });
        }, 3000);
      } else {
        setError(result.error || "Oops! Something went wrong. Please try again later.");
      }
    } catch (err) {
      console.error("Error sending email:", err);
      setError("Oops! Something went wrong. Please try again later.");
    }
  };

  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <main className="min-h-screen text-white overflow-x-hidden mt-10 px-4 sm:px-20 py-10 flex flex-col items-center gap-12">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
    
        <div className="flex flex-col justify-center space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-700 via-pink-500 to-red-600 bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 font-medium">
            Have questions, feedback, or just want to say hello? Fill out the form, and we’ll get back to you as soon as possible.
          </p>
          <div className="flex flex-col gap-4">
            <ContactInfo icon="mail" text="contact@arcadeparadise.com" />
            <ContactInfo icon="location" text="123 Arcade Street, Gaming City" />
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 p-6 border-4 border-white shadow-[8px_8px_0_rgba(255,255,255,1)] bg-gray-900 rounded-lg"
        >
          <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-wider bg-gradient-to-r from-purple-700 via-pink-500 to-red-600 bg-clip-text text-transparent">
            Send Us a Message
          </h2>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <InputField
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <InputField
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            required
            className="px-4 py-3 border-2 border-black bg-black text-white placeholder-gray-500 rounded-lg focus:border-red-500 transition-colors duration-200 resize-none"
          ></textarea>

          <button
            type="submit"
            disabled={isSubmitted}
            className={`px-6 py-3 text-lg font-bold uppercase bg-white text-black border-4 border-black shadow-[8px_8px_0_rgba(0,0,0,1)] hover:shadow-[12px_12px_0_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-transform duration-200 ${
              isSubmitted ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitted ? "Message Sent!" : "Send Message"}
          </button>
        </form>
      </div>
    </main>
  );
}

const InputField = ({
  type,
  name,
  placeholder,
  value,
  onChange,
  required,
}: {
  type: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required: boolean;
}) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      className="px-4 py-3 border-2 border-black bg-black text-white placeholder-gray-500 rounded-lg focus:border-purple-500 transition-colors duration-200"
    />
  );
};

const ContactInfo = ({ icon, text }: { icon: "mail" | "location"; text: string }) => {
  const iconMap = {
    mail: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 text-purple-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    location: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 text-pink-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  };

  return (
    <div className="flex items-center gap-4">
      {iconMap[icon]}
      <span className="text-gray-400">{text}</span>
    </div>
  );
};