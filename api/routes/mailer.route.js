import express from 'express';
import { sendAcceptanceEmail, sendRejectionEmail } from '../utils/mailer.js';

const sendmailerr = express.Router();

sendmailerr.post('/accept-pitch', async (req, res) => {
  const { email, companyName } = req.body;

  try {
    console.log(`Sending acceptance email to ${email} for company ${companyName}`);
    await sendAcceptanceEmail(email, companyName);
    res.status(200).json({ success: true, message: 'Acceptance email sent successfully' });
  } catch (error) {
    console.error('Error sending acceptance email:', error);
    res.status(500).json({ success: false, message: 'Failed to send acceptance email' });
  }
});


sendmailerr.post('/reject-pitch', async (req, res) => {
    const { email, companyName } = req.body;
  
    try {
      await sendRejectionEmail(email, companyName);
      res.status(200).json({ success: true, message: 'Rejection email sent successfully' });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Failed to send rejection email' });
    }
  });



export default sendmailerr;
