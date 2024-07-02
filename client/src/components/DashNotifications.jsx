import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { HiOutlineExclamationCircle } from 'react-icons/hi';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Modal, Card, Button } from 'flowbite-react';

export default function DashNotifications() {
  const { currentUser } = useSelector((state) => state.user);
  const [notifications, setNotifications] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedNotification, setSelectedNotification] = useState(null);

  useEffect(() => {
    const fetchNotifications = async () => {
      if (!currentUser || currentUser.isAdmin) return;

      try {
        const res = await fetch(`/api/uploadpitch/getnoti?investorId=${currentUser._id}`);
        const data = await res.json();
        if (res.ok) {
          setNotifications(data.notifications);
        } else {
          throw new Error(data.message || 'Failed to fetch notifications');
        }
      } catch (error) {
        console.error('Error fetching notifications:', error.message);
        toast.error('Error fetching notifications: ' + error.message);
      }
    };

    fetchNotifications();
  }, [currentUser]);

  const handleDeleteNotification = async () => {
    setShowModal(false);
    if (!selectedNotification) return;

    try {
      const res = await fetch(`/api/uploadpitch/deletenoti/${selectedNotification._id}`, {
        method: 'DELETE',
      });
      const data = await res.json();

      if (res.ok) {
        setNotifications((prev) => prev.filter((notification) => notification._id !== selectedNotification._id));
        toast.success('Notification successfully deleted!');
      } else {
        throw new Error(data.message || 'Failed to delete notification');
      }
    } catch (error) {
      console.error('Error deleting notification:', error.message);
      toast.error('Error deleting notification: ' + error.message);
    }
  };

  const handleAcceptNotification = async () => {
    if (!selectedNotification) return;

    try {
      const res = await fetch('/api/sendmail/accept-pitch', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: selectedNotification.email,
          companyName: selectedNotification.companyName,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        setShowModal(false);
        toast.success('Acceptance email sent!');
      } else {
        throw new Error(data.message || 'Failed to send acceptance email');
      }
    } catch (error) {
      console.error('Error accepting notification:', error.message);
      toast.error('Error accepting notification: ' + error.message);
    }
  };

  const handleRejectNotification = async () => {
    if (!selectedNotification) return;

    try {
      const res = await fetch('/api/sendmail/reject-pitch', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: selectedNotification.email,
          companyName: selectedNotification.companyName,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        handleDeleteNotification();
        toast.error('Rejection email sent!');
      } else {
        throw new Error(data.message || 'Failed to send rejection email');
      }
    } catch (error) {
      console.error('Error rejecting notification:', error.message);
      toast.error('Error rejecting notification: ' + error.message);
    }
  };

  return (
    <div className='p-3'>
      <ToastContainer />
      {notifications.length > 0 ? (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {notifications.map((notification) => (
            <Card key={notification._id} className='cursor-pointer' onClick={() => {
              setSelectedNotification(notification);
              setShowModal(true);
            }}>
              <h5 className='text-xl font-bold'>{notification.companyName}</h5>
            </Card>
          ))}
        </div>
      ) : (
        <p>You have no notifications yet!</p>
      )}
      <Modal show={showModal} onClose={() => setShowModal(false)} popup size='md'>
        <Modal.Header />
        <Modal.Body>
          {selectedNotification && (
            <div className='text-center'>
              <h3 className='text-xl font-bold'>{selectedNotification.companyName}</h3>
              <p className='text-gray-500'>{selectedNotification.email}</p>
              <p className='text-gray-500'>{selectedNotification.pitch}</p>
              <div className='flex justify-center gap-4 mt-4'>
                <Button color='success' onClick={handleAcceptNotification}>Accept</Button>
                <Button color='failure' onClick={handleRejectNotification}>Reject</Button>
              </div>
            </div>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
}
