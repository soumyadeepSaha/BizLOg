import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'Gmail', // You can use any email service
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendAcceptanceEmail = async (recipientEmail, companyName) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: recipientEmail,
    subject: 'Acceptance of Your Pitch',
    text: `Dear ${companyName},\n\nWe are pleased to inform you that your pitch has been accepted. Congratulations!\n\nBest regards,\nYour Company Name`,
  };

  return transporter.sendMail(mailOptions);
};

export const sendRejectionEmail = async (recipientEmail, companyName) => {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: recipientEmail,
      subject: 'Rejection of Your Pitch',
      text: `Dear ${companyName},\n\nThank you for your pitch. Unfortunately, we have decided to pass at this time. However, we might catch up with you someday.\n\nBest regards,\nYour Company Name `,
    };
  
    return transporter.sendMail(mailOptions);
  };