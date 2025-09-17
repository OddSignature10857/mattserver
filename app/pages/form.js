// app/auth/page.js
'use client'; // Ensure the page is rendered client-side

import { useState } from 'react';

export default function AuthPage() {
  const [activeForm, setActiveForm] = useState('login');
  const [accountType, setAccountType] = useState('salonOwner');

  // Toggle between login and registration forms
  const showForm = (form) => {
    setActiveForm(form);
  };

  // Toggle additional fields based on account type
  const toggleFields = () => {
    const accountTypeValue = accountType;
    if (accountTypeValue === 'licensedStylist') {
      document.getElementById('cosmetologyLicenseNumberField').classList.remove('hidden');
      document.getElementById('businessNumberField').classList.add('hidden');
      document.getElementById('referral').classList.add('hidden');
    } else if (accountTypeValue === 'salonOwner') {
      document.getElementById('cosmetologyLicenseNumberField').classList.add('hidden');
      document.getElementById('businessNumberField').classList.remove('hidden');
      document.getElementById('referral').classList.add('hidden');
    } else {
      document.getElementById('cosmetologyLicenseNumberField').classList.add('hidden');
      document.getElementById('businessNumberField').classList.add('hidden');
      document.getElementById('referral').classList.remove('hidden');
    }

    if (accountTypeValue === 'regularCustomer') {
      document.getElementById('licensedStateZipFields').classList.add('hidden');
    } else {
      document.getElementById('licensedStateZipFields').classList.remove('hidden');
    }
  };

  const resetAccountTypeDropdown = () => {
    setAccountType('salonOwner');
    toggleFields();
  };

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
                    onChange={(e) => {
                      setAccountType(e.target.value);
                      toggleFields();
                    }}
                    className="w-full rounded-md border-[1.5px] border-[#823836] bg-white text-[#823836] px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#823836]"
                  >
                    <option value="licensedStylist">Licensed Stylist</option>
                    <option value="salonOwner">Salon Owner</option>
                    <option value="regularCustomer">Regular Customer</option>
                  </select>
                </div>
                {/* Add other form fields here, following the original code structure */}
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
