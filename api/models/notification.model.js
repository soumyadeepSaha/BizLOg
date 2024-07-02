

import mongoose from 'mongoose';

const notificationSchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  pitch: {
    type: String,
    required: true
  },
  investorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Investor', // Assuming you have an Investor model
    required: true
  }
}, {
  timestamps: true
});

const Notification = mongoose.model('Notification', notificationSchema);




export default Notification;
