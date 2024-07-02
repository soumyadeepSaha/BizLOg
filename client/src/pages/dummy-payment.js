// pages/dummy-payment.js

import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function DummyPayment() {
  const router = useRouter();

  useEffect(() => {
    // Simulate a payment delay
    setTimeout(() => {
      // Redirect back to investors page with a payment success flag
      router.push('/investors?payment=success');
    }, 2000);
  }, [router]);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-4">
        <h1 className="text-xl font-semibold">Processing Payment...</h1>
        <p className="text-gray-500">Please wait while we process your payment.</p>
      </div>
    </div>
  );
}
