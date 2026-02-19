import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Create the transporter using nodemailer
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465, // Port for secure connection
  secure: true, // Use SSL
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD, // Use App Password if possible
  },
});

// Define the POST method as a named export
export async function POST(req: Request) {
  try {
    // Get the form data from the request body
    const { name, email, phone } = await req.json();

    // Define email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "bruno@otimizare.com.br", // Fixed destination email
      subject: "Nova contato recebido",
      text: `Essa pessoa preencheu o formulário: \n\nNome: ${name}\nEmail: ${email}\nCelular: ${phone}`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Return a success response
    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    // Return a failure response
    return NextResponse.json(
      { message: "Failed to send email." },
      { status: 500 }
    );
  }
}
