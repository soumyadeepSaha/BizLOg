import express from 'express';
import Notification from '../models/notification.model.js';

const router = express.Router();

router.post('/upload-noti', async (req, res) => {
  const { companyName, email, pitch, investorId } = req.body;

  try {
    const newNotification = new Notification({ companyName, email, pitch, investorId });
    await newNotification.save();
    res.status(201).json({ message: 'Pitch successfully uploaded' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/getnoti', async (req, res) => {
  const { investorId } = req.query;

  try {
    const notifications = await Notification.find({ investorId});
    res.status(200).json({ success: true, notifications });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
  })


  
  
  router.delete('/deletenoti/:notificationId', async (req, res) => {
    const { notificationId } = req.params;
    
  
    try {
      const notification = await Notification.findOneAndDelete({ _id: notificationId });
  
      if (!notification) {
        return res.status(404).json({ success: false, message: 'Notification not found' });
      }
  
      res.status(200).json({ success: true, message: 'Notification successfully deleted' });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  });
  
  export default router;
  

