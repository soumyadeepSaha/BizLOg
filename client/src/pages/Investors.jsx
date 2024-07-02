import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PaymentModal from './PaymentModal'; // Import the PaymentModal component

export default function Investors() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedInvestorId, setSelectedInvestorId] = useState(null);
  const [formData, setFormData] = useState({
    companyName: '',
    email: '',
    pitch: ''
  });

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch('/api/user/getusers');
        if (!res.ok) {
          throw new Error(`Error fetching users: ${res.statusText}`);
        }
        const data = await res.json();
        console.log(data);
        setUsers(data.users);
      } catch (error) {
        console.error('Error fetching users:', error.message);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const openModal = (investorId) => {
    setSelectedInvestorId(investorId);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setShowPaymentModal(false);
    setSelectedInvestorId(null);
    setFormData({
      companyName: '',
      email: '',
      pitch: ''
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setShowModal(false);
    setShowPaymentModal(true);
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/uploadpitch/upload-noti', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, investorId: selectedInvestorId }),
      });

      if (!res.ok) {
        throw new Error(`Error: ${res.status} - ${res.statusText}`);
      }

      toast.success('Pitch successfully uploaded!');
      closeModal();
    } catch (error) {
      toast.error('Error uploading pitch: ' + error.message);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='p-6'>
      
      <div className='max-w-7xl mx-auto p-3'>
        <h1 className='text-3xl font-bold lg:text-6xl text-center'>Connect With Our Investors</h1>
        <p className='text-gray-500 text-xs sm:text-sm text-center'>
          Here you'll find a variety of investors who are passionate about startups and business growth.
        </p>
        <div className='flex flex-wrap gap-6 justify-center py-6'>
          {users.length > 0 ? (
            users.map((user) => (
              <div key={user._id} className='bg-white rounded-lg shadow-md p-4 flex flex-col items-center hover:-translate-y-1 hover:scale-110 hover:bg-gray-300 duration-300'>
                <img
                  src={user.profilePicture}
                  alt={user.username}
                  className='w-24 h-24 rounded-full object-cover mb-4'
                />
                <h2 className='text-lg text-gray-500 font-semibold'>{user.username}</h2>
                <p className='text-gray-500 text-sm'>{user.email}</p>
                <button
                  onClick={() => openModal(user._id)}
                  className='mt-4 bg-red-500 text-white py-2 px-4 rounded-full hover:-translate-y-1 hover:scale-110 hover:bg-green-400 duration-300'
                >
                  Upload Pitch
                </button>
              </div>
            ))
          ) : (
            <p className='text-center text-gray-500'>No investors found.</p>
          )}
        </div>
      </div>

      {showModal && (
        <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center  bg-opacity-50'>
          <div className='bg-gray-700 p-8 rounded-lg max-w-md'>
            <h2 className='text-xl font-semibold mb-4'>Upload Pitch</h2>
            <form onSubmit={handleFormSubmit}>
              <div className='mb-4'>
                <label htmlFor='companyName' className='text-red-600 block text-sm font-medium white'>
                  Company Name/Startup Name :
                </label>
                <input
                  type='text'
                  id='companyName'
                  className='mt-1 block w-full px-3 py-2 border font-medium text-slate-900 border-gray-300 rounded-md shadow-sm'
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className='mb-4'>
                <label htmlFor='email' className='block text-red-600 text-sm font-medium white'>
                  Email :
                </label>
                <input
                  type='email'
                  id='email'
                  className='mt-1 block w-full px-3 py-2 border text-slate-900 border-gray-300 rounded-md shadow-sm'
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className='mb-4'>
                <label htmlFor='pitch' className='text-red-600 block text-sm font-medium white'>
                  Description/Pitch :
                </label>
                <textarea
                  id='pitch'
                  rows='4'
                  className='mt-1 block w-full px-3 py-2 border text-slate-900 border-gray-300 rounded-md shadow-sm'
                  value={formData.pitch}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div className='flex justify-end'>
                <button
                  type='button'
                  className='inline-flex justify-center py-2 px-4 mr-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-800 hover:bg-gray-500'
                  onClick={closeModal}
                >
                  Cancel
                </button>
                <button
                  type='submit'
                  className='inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600'
                >
                 Pay to Continue
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {showPaymentModal && (
        <PaymentModal handlePayment={handlePayment} closeModal={closeModal} />
      )}
    </div>
  );
}
