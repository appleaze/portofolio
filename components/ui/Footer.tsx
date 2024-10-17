"use client"; // Required if you're using hooks

import React from "react";

const Footer: React.FC = () => {
  return (
    <footer id="contact"className="py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Contact Section */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4">Contact</h3>
            <p>Email: <a href="mailto:yourname@example.com" className="hover:underline hover:text-cyan-500">theo.harjanto@binus.ac.id</a></p>
            <p>Location: Jakarta, Indonesia</p>
          </div>
          
          {/* Social Media Section */}
          <div className="text-center">
            <div className="flex justify-center space-x-6">
              <a href="www.linkedin.com/in/theo-deannata-harjanto" target="_blank" rel="noopener noreferrer">
                <svg className="w-6 h-6 fill-current hover:text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.268c-.966 0-1.5-.724-1.5-1.63 0-.919.543-1.631 1.529-1.631.986 0 1.5.712 1.5 1.631 0 .906-.514 1.63-1.5 1.63zm13.5 10.268h-3v-4.701c0-1.118-.397-1.88-1.389-1.88-.758 0-1.209.515-1.409 1.011-.073.178-.092.429-.092.68v4.89h-3v-9h3v1.223c.4-.617 1.122-1.498 2.732-1.498 1.992 0 3.558 1.324 3.558 4.169v5.106z" />
                </svg>
              </a>
              <a href="https://github.com/appleaze" target="_blank" rel="noopener noreferrer">
                <svg className="w-6 h-6 fill-current hover:text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.724-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.09-.744.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.775.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.467-2.381 1.236-3.221-.124-.302-.535-1.521.116-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.398 3.004-.404 1.021.006 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.654.242 2.874.118 3.176.77.84 1.234 1.911 1.234 3.221 0 4.61-2.804 5.625-5.475 5.921.43.371.815 1.102.815 2.222v3.293c0 .322.218.694.824.576 4.765-1.59 8.2-6.086 8.2-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>
          
        </div>

        <div className="text-center pt-10 border-t border-gray-700 mt-8">
          <p>&copy; {new Date().getFullYear()} Theo Deannata Harjanto.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
