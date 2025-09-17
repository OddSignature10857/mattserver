// "use client";
// import axios from "axios";
// import { useState } from "react";

// export default function Home() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [error, setError] = useState(""); 
//   const [loading, setLoading] = useState(false); 

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true); 

//     try {
//       const res = await axios.post('/api/users', { name, email });
//       console.log(res.data); 
//       setError("Something went wrong. Please try again."); 
//       console.log(error);
//     } finally {
//       setLoading(false); 
//     }
//   };

//   return (
//     <div className="max-w-lg mx-auto p-4">
//       <h2 className="text-2xl font-bold mb-4">Create user</h2>
//       <form className="space-y-4" onSubmit={handleSubmit}>
        
//         <div>
//           <label className="block text-sm font-bold">Name</label>
//           <input
//             type="text"
//             onChange={(e) => setName(e.target.value)}
//             className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none"
//             placeholder="Enter your Name"
//             required
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-bold">Email</label>
//           <input
//             type="email"
//             onChange={(e) => setEmail(e.target.value)}
//             className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none"
//             placeholder="Enter your email"
//             required
//           />
//         </div>

//         <button
//           type="submit"
//           disabled={loading} 
//           className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 disabled:bg-gray-400"
//         >
//           {loading ? "Submitting..." : "Submit"}
//         </button>
//       </form>
//     </div>
//   );
// }

'use client'; // Ensure the page is rendered client-side
import { useState, useEffect, useRef } from 'react';

export default function FormPage() {
  const [activeForm, setActiveForm] = useState('login');
  const [accountType, setAccountType] = useState('salonOwner');

  // Refs for the elements that need to be manipulated
  const cosmetologyLicenseNumberField = useRef(null);
  const businessNumberField = useRef(null);
  const referralField = useRef(null);
  const licensedStateZipFields = useRef(null);

  // Show the selected form (login/register/forgot password)
  const showForm = (form) => {
    setActiveForm(form);
  };

  // Toggle additional fields based on account type
  const toggleFields = () => {
    if (accountType === 'licensedStylist') {
      if (cosmetologyLicenseNumberField.current) {
        cosmetologyLicenseNumberField.current.classList.remove('hidden');
      }
      if (businessNumberField.current) {
        businessNumberField.current.classList.add('hidden');
      }
      if (referralField.current) {
        referralField.current.classList.add('hidden');
      }
    } else if (accountType === 'salonOwner') {
      if (cosmetologyLicenseNumberField.current) {
        cosmetologyLicenseNumberField.current.classList.add('hidden');
      }
      if (businessNumberField.current) {
        businessNumberField.current.classList.remove('hidden');
      }
      if (referralField.current) {
        referralField.current.classList.add('hidden');
      }
    } else {
      if (cosmetologyLicenseNumberField.current) {
        cosmetologyLicenseNumberField.current.classList.add('hidden');
      }
      if (businessNumberField.current) {
        businessNumberField.current.classList.add('hidden');
      }
      if (referralField.current) {
        referralField.current.classList.remove('hidden');
      }
    }

    if (accountType === 'regularCustomer') {
      if (licensedStateZipFields.current) {
        licensedStateZipFields.current.classList.add('hidden');
      }
    } else {
      if (licensedStateZipFields.current) {
        licensedStateZipFields.current.classList.remove('hidden');
      }
    }
  };

  // Reset account type dropdown on form switch
  const resetAccountTypeDropdown = () => {
    setAccountType('salonOwner');
    toggleFields();
  };

  // Use useEffect to handle side effects
  useEffect(() => {
    toggleFields();
  }, [accountType]);

  return (
    <div className="bg-[#ddc9bb] min-h-screen flex pt-10 items-start justify-center p-4">
      <div className="max-w-4xl w-full bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Tabs */}
        <div className="flex border-b border-[#823836]">
          <button
            id="loginTab"
            className="flex-1 py-4 text-center font-medium text-white bg-[#823836]"
            onClick={() => showForm('login')}
          >
            Login
          </button>
          <button
            id="registerTab"
            className="flex-1 py-4 text-center font-medium text-[#823836] bg-white"
            onClick={() => showForm('register')}
          >
            Register
          </button>
        </div>

        <div className="p-8">
          {/* Login Form */}
          {activeForm === 'login' && (
            <div id="loginForm" className="form-container active-form">
              <h2 className="text-2xl font-bold mb-6 text-[#823836]">Welcome Back</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="loginEmail" className="block mb-1">
                    Email <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="email"
                    id="loginEmail"
                    name="loginEmail"
                    placeholder="Your email"
                    className="w-full rounded-md border-[1.5px] border-[#823836] bg-white text-[#823836] px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#823836]"
                  />
                </div>
                <div>
                  <label htmlFor="loginPassword" className="block mb-1">
                    Password <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="password"
                    id="loginPassword"
                    name="loginPassword"
                    placeholder="Your password"
                    className="w-full rounded-md border-[1.5px] border-[#823836] bg-white text-[#823836] px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#823836]"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="rememberMe"
                      name="rememberMe"
                      className="w-4 h-4 border-[#823836] rounded-sm"
                    />
                    <label htmlFor="rememberMe" className="text-sm text-[#823836]">
                      Remember me
                    </label>
                  </div>
                  <a href="#" className="text-sm text-[#823836] hover:underline">
                    Forgot Password?
                  </a>
                </div>
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-[#823836] text-white py-3 rounded-md hover:bg-[#823836] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#823836]"
                  >
                    Login
                  </button>
                </div>
                <div className="text-center text-sm text-[#9c7c8c] pt-4">
                  Don't have an account?{' '}
                  <a
                    href="#"
                    onClick={() => showForm('register')}
                    className="text-[#823836] font-medium hover:underline"
                  >
                    Register now
                  </a>
                </div>
              </form>
            </div>
          )}

          {/* Register Form */}
          {activeForm === 'register' && (
            <div id="registerForm" className="form-container active-form">
              <h2 className="text-2xl font-bold mb-6 text-[#823836]">Create Account</h2>
              <form className="space-y-4 text-[#823836] font-sans text-sm">
                <div>
                  <label htmlFor="accountType" className="block mb-1">
                    Account Type <span className="text-red-600">*</span>
                  </label>
                  <select
                    id="accountType"
                    name="accountType"
                    value={accountType}
                    onChange={(e) => setAccountType(e.target.value)}
                    className="w-full rounded-md border-[1.5px] border-[#823836] bg-white text-[#823836] px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#823836]"
                  >
                    <option value="licensedStylist">Licensed Stylist</option>
                    <option value="salonOwner">Salon Owner</option>
                    <option value="regularCustomer">Regular Customer</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-3">
                  <div>
                    <label htmlFor="firstName" className="block mb-1">
                      First Name <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      placeholder="First Name"
                      className="w-full rounded-md border-[1.5px] border-[#823836] bg-white text-[#823836] px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#823836]"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block mb-1">
                      Last Name <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      placeholder="Last Name"
                      className="w-full rounded-md border-[1.5px] border-[#823836] bg-white text-[#823836] px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#823836]"
                    />
                  </div>
                </div>

                <div>
                  <input
                    type="text"
                    id="preferredName"
                    name="preferredName"
                    placeholder="Preferred Name/Nickname"
                    className="w-full rounded-md border-[1.5px] border-[#823836] bg-white text-[#823836] px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#823836]"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-3">
                  <div>
                    <label htmlFor="username" className="block mb-1">
                      Username <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      placeholder="Username"
                      className="w-full rounded-md border-[1.5px] border-[#823836] bg-white text-[#823836] px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#823836]"
                    />
                  </div>
                  <div>
                    <label htmlFor="password" className="block mb-1">
                      Password <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Password"
                      className="w-full rounded-md border-[1.5px] border-[#823836] bg-white text-[#823836] px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#823836]"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block mb-1">
                    Email <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    className="w-full rounded-md border-[1.5px] border-[#823836] bg-white text-[#823836] px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#823836]"
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-[#823836] text-white py-3 rounded-md hover:bg-[#823836] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#823836]"
                  >
                    Register
                  </button>
                </div>
                <div className="text-center text-sm text-[#9c7c8c] pt-4">
                  Already have an account?{' '}
                  <a
                    href="#"
                    onClick={() => showForm('login')}
                    className="text-[#823836] font-medium hover:underline"
                  >
                    Login here
                  </a>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}




