import React from 'react';
import './PaymentModal.css'; // CSS file for styling

export default function PaymentModal({ handlePayment, closeModal }) {
  return (
    <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50'>
      <div className='bg-white p-8 rounded-lg max-w-md payment-modal'>
        <h2 className='text-xl text-gray-700 font-semibold mb-4'>Confirm Your Payment</h2>
        <form onSubmit={handlePayment}>
          <div className='mb-4'>
            <label htmlFor='owner' className='block text-sm font-medium text-gray-700'>
              Owner
            </label>
            <input
              type='text'
              id='owner'
              className='mt-1 block w-full px-3 py-2 border text-gray-700 rounded-md shadow-sm'
              required
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='cvv' className='block text-sm font-medium text-gray-700'>
              CVV
            </label>
            <input
              type='text'
              id='cvv'
              className='mt-1 block w-full px-3 py-2 border text-gray-700 rounded-md shadow-sm'
              required
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='cardNumber' className='block text-sm font-medium text-gray-700'>
              Card Number
            </label>
            <input
              type='text'
              id='cardNumber'
              className='mt-1 block w-full px-3 py-2 border text-gray-700 rounded-md shadow-sm'
              required
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='expirationDate' className='block text-sm font-medium text-gray-700'>
              Expiration Date
            </label>
            <div className='flex'>
              <select id='expirationMonth' className='mr-2 px-3 py-2 border text-gray-700 rounded-md shadow-sm'>
                <option>Jan</option>
                <option>Feb</option>
                <option>Mar</option>
                <option>Apr</option>
                <option>May</option>
                <option>Jun</option>
                <option>Jul</option>
                <option>Aug</option>
                <option>Sep</option>
                <option>Oct</option>
                <option>Nov</option>
                <option>Dec</option>
              </select>
              <select id='expirationYear' className='px-3 py-2 border text-gray-700 rounded-md shadow-sm'>
                <option>2020</option>
                <option>2021</option>
                <option>2022</option>
                <option>2023</option>
                <option>2024</option>
              </select>
            </div>
          </div>
          <div className='flex items-center justify-between'>
            <div className='flex space-x-4'>
              <img src='https://cdn-icons-png.flaticon.com/128/174/174861.png' alt='MasterCard' className='w-8' />
              <img src='https://img.freepik.com/free-vector/realistic-credit-card-design_23-2149126088.jpg?w=740&t=st=1719852910~exp=1719853510~hmac=07ffeb1b44a72e7fb1c3d61043f211b6824c2f78231704fbaf8367c792b9302a' alt='Visa' className='w-8' />
              <img src='https://www.freepnglogos.com/uploads/mastercard-png/mastercard-logo-mastercard-logo-png-vector-download-19.png' alt='PayPal' className='w-8' />
            </div>
            <button
              type='submit'
              className='bg-purple-600 text-white py-2 px-4 rounded-full hover:bg-purple-700'
            >
              Confirm
            </button>
          </div>
        </form>
        <button
          onClick={closeModal}
          className='mt-4 bg-gray-500 text-white py-2 px-4 rounded-full hover:bg-gray-600'
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
