// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCL-dz7BtvLoQGlcQgy6Vc5LqORWmuUqFo",
  authDomain: "portfolio-abbd0.firebaseapp.com",
  projectId: "portfolio-abbd0",
  storageBucket: "portfolio-abbd0.appspot.com",
  messagingSenderId: "13416503174",
  appId: "1:13416503174:web:7804cde98e32242ca8be07",
  measurementId: "G-93L2X0ERXH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);










const functions = require('firebase-functions');
const nodemailer = require('nodemailer');

exports.sendEmail = functions.https.onRequest(async (req, res) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'avelimb@gmail.com',
      pass: '@Gohard94!',
    },
  });

  const mailOptions = {
    from: 'avelimb@gmail.com',
    to: 'avelimg@gmail.com',
    subject: 'New Message from Portfolio Website',
    text: `Name: ${req.body.name}\nEmail: ${req.body.email}\nMessage: ${req.body.message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error('Error sending email', error);
    res.status(500).send('Error sending email');
  }
});
