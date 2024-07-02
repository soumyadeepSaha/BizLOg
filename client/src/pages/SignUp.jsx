import React, { useState } from 'react';
import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';
import { Link, useNavigate } from 'react-router-dom';
import OAuth from '../components/OAuth';
import PaymentModal from './Modal'; // Import the PaymentModal component

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false); // State to control modal visibility
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password) {
      return setErrorMessage('Please fill out all fields.');
    }
    try {
      // Simulate payment here (just setting loading for demo)
      setLoading(true); 
      setErrorMessage(null);
       // Simulated API call
       setTimeout(() => {
        setLoading(false);
        setShowPaymentModal(true);
      }, 1500); // Simulating a delay for payment process

      const res = await fetch('/api/auth/signup', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(formData), });
      const data = await res.json(); if (data.success === false) { return setErrorMessage(data.message); }  
     
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    // Handle actual payment logic here
    // After successful payment, navigate to sign-in page
    setLoading(true); // Simulating loading for demo
    setTimeout(() => {
      setLoading(false);
      navigate('/sign-in');
      setShowPaymentModal(false);
    }, 2000); // Simulating a delay for payment confirmation
  };

  const closeModal = () => {
    setShowPaymentModal(false);
  };

  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
        {/* left */}
        <div className='flex-1'>
          <Link to='/' className='font-bold dark:text-white text-4xl'>
            <span className='px-2 py-1 bg-gradient-to-r from-red-500 via-red-500 to-black rounded-lg text-white'>
             BizLOg
            </span>
         
          </Link>
          <p className='text-sm mt-5'>
          "Investors can create their account by purchasing a lifetime subscription, ensuring continuous access to exclusive investment opportunities and resources."
          </p>
        </div>
        {/* right */}

        <div className='flex-1'>
          <form className='flex flex-col gap-4' onSubmit={handleSignUp}>
            <div>
              <Label value='Your username' />
              <TextInput
                type='text'
                placeholder='Username'
                id='username'
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value='Your email' />
              <TextInput
                type='email'
                placeholder='name@company.com'
                id='email'
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value='Your password' />
              <TextInput
                type='password'
                placeholder='Password'
                id='password'
                onChange={handleChange}
              />
            </div>
            <Button
          className='bg-red-500 hover:scale-105 transform transition-transform duration-300 ease-in-out'

              // gradientDuoTone='redToPink'
              type='submit'
              disabled={loading}
            >
              {loading ? (
                <>
                  <Spinner size='sm' />
                  <span className='pl-3'>Loading...</span>
                </>
              ) : (
                'Pay & signUp'
              )}
            </Button>
            <OAuth />
          </form>
          <div className='flex gap-2 text-sm mt-5'>
            <span>Have an account?</span>
            <Link to='/sign-in' className='text-blue-500'>
              Sign In
            </Link>
          </div>
          {errorMessage && (
            <Alert className='mt-5' color='failure'>
              {errorMessage}
            </Alert>
          )}
        </div>
      </div>

      {/* Payment Modal */}
      {showPaymentModal && (
        <PaymentModal
          handlePayment={handlePayment}
          closeModal={closeModal}
        />
      )}
    </div>
  );
}
