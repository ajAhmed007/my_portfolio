import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import { google } from "googleapis";

// Initialize dotenv to use environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// OAuth2 setup for Gmail
const oAuth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  "https://developers.google.com/oauthplayground" // This is the redirect URI
);
oAuth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });

// Middleware
app.use(cors());
app.use(express.json());

// Function to get a fresh access token
async function getAccessToken() {
  try {
    const { token } = await oAuth2Client.getAccessToken();
    if (!token) {
      throw new Error("Failed to retrieve access token");
    }
    return token;
  } catch (error) {
    console.error("Error retrieving access token:", error);
    throw new Error("Unable to get access token");
  }
}

// Define types for the form data
interface ContactForm {
  name: string;
  email: string;
  message: string;
}

// Helper function to handle async/await in Express
function asyncHandler(
  fn: (req: Request, res: Response, next: NextFunction) => Promise<any>
) {
  return (req: Request, res: Response, next: NextFunction) => {
    fn(req, res, next).catch(next);
  };
}

// Route to handle form submission
app.post(
  "/contact",
  asyncHandler(async (req: Request, res: Response): Promise<Response> => {
    const { name, email, message }: ContactForm = req.body;

    // Validate request data
    if (!name || !email || !message) {
      return res.status(400).json({ error: "Please fill all fields" });
    }

    try {
      // Get a fresh access token before sending the email
      const accessToken = await getAccessToken();

      // Nodemailer configuration with OAuth2 and HTML content
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          type: "OAuth2",
          user: process.env.EMAIL_USER,
          clientId: process.env.CLIENT_ID,
          clientSecret: process.env.CLIENT_SECRET,
          refreshToken: process.env.REFRESH_TOKEN,
          accessToken: accessToken, // The fresh access token
        },
      });

      // Email content with HTML and inline CSS
      const mailOptions = {
        from: `"${name}" <${email}>`,
        to: process.env.EMAIL_USER,
        subject: `Contact Form Submission from ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; background-color: #f9f9f9; border-radius: 10px;">
            <h2 style="background-color: #6200ea; color: white; padding: 10px 15px; text-align: center; border-radius: 5px;">New Contact Form Submission</h2>
            <p style="font-size: 16px; color: #333;">
              <strong>Name:</strong> ${name}
            </p>
            <p style="font-size: 16px; color: #333;">
              <strong>Email:</strong> ${email}
            </p>
            <p style="font-size: 16px; color: #333;">
              <strong>Message:</strong>
            </p>
            <p style="font-size: 16px; color: #555; background-color: #f0f0f0; padding: 10px; border-radius: 5px;">
              ${message}
            </p>
            <p style="text-align: center; margin-top: 20px; color: #777;">
              <em>This message was sent from your portfolio contact form.</em>
            </p>
          </div>
        `,
      };

      // Send the email
      await transporter.sendMail(mailOptions);

      console.log(`Email sent successfully to ${process.env.EMAIL_USER}`);
      return res.status(200).json({ message: "Message sent successfully!" });
    } catch (error) {
      console.error("Error sending email:", error);
      return res.status(500).json({ error: "Failed to send message" });
    }
  })
);

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.message);
  res.status(500).json({ error: err.message });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
