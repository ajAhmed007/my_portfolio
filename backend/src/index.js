"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const nodemailer_1 = __importDefault(require("nodemailer"));
const dotenv_1 = __importDefault(require("dotenv"));
const googleapis_1 = require("googleapis");
// Initialize dotenv to use environment variables
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
// OAuth2 setup for Gmail
const oAuth2Client = new googleapis_1.google.auth.OAuth2(process.env.CLIENT_ID, process.env.CLIENT_SECRET, "https://developers.google.com/oauthplayground" // This is the redirect URI
);
oAuth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });
// Middleware
app.use((0, cors_1.default)()); // Allow cross-origin requests
app.use(express_1.default.json()); // Parse incoming JSON payloads
// Helper function to handle async/await in Express
function asyncHandler(fn) {
    return (req, res, next) => {
        fn(req, res, next).catch(next);
    };
}
// Route to handle form submission
app.post("/send", asyncHandler((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, message } = req.body;
    // Validate request data
    if (!name || !email || !message) {
        return res.status(400).json({ error: "Please fill all fields" });
    }
    try {
        // Get the access token from OAuth2 client
        const accessToken = yield oAuth2Client.getAccessToken();
        if (!accessToken.token) {
            throw new Error("Failed to retrieve access token");
        }
        // Nodemailer configuration with OAuth2
        const transporter = nodemailer_1.default.createTransport({
            service: "gmail",
            auth: {
                type: "OAuth2",
                user: process.env.EMAIL_USER, // Your Gmail account
                clientId: process.env.CLIENT_ID, // Google Client ID
                clientSecret: process.env.CLIENT_SECRET, // Google Client Secret
                refreshToken: process.env.REFRESH_TOKEN, // OAuth2 Refresh Token
                accessToken: accessToken.token, // The access token generated
            },
        });
        // Email content
        const mailOptions = {
            from: email, // Sender email (from the form)
            to: process.env.EMAIL_USER, // Your Gmail account (to receive the contact form submission)
            subject: `Contact Form Submission from ${name}`,
            text: `You have a new message from:
      Name: ${name}
      Email: ${email}
      Message: ${message}`,
        };
        // Send the email
        yield transporter.sendMail(mailOptions);
        return res.status(200).json({ message: "Message sent successfully!" });
    }
    catch (error) {
        console.error("Error sending email:", error);
        return res.status(500).json({ error: "Failed to send message" });
    }
})));
// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.message);
    res.status(500).json({ error: err.message });
});
// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
