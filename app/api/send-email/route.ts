import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    // Create transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "brix.sequoiamarketingsolutions@gmail.com", // Replace with your Gmail address
        pass: "rqrc tvkl arel ktjm", // Your app password
      },
    })

    // Email to site owner
    const ownerMailOptions = {
      from: email,
      to: "brix.sequoiamarketingsolutions@gmail.com",
      subject: `Portfolio Contact: Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #06b6d4;">New Contact Form Submission</h2>
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <div style="background-color: white; padding: 15px; border-radius: 4px; margin-top: 10px;">
              ${message.replace(/\n/g, "<br>")}
            </div>
          </div>
          <p style="color: #6b7280; font-size: 14px;">
            This message was sent from your portfolio contact form.
          </p>
        </div>
      `,
    }

    // Email to sender (confirmation)
    const senderMailOptions = {
      from: `"Brix Lampago"`,
      to: email,
      subject: "Thank you for contacting Brix Lampago!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #06b6d4;">Thank You for Reaching Out!</h2>
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p>Hi ${name},</p>
            <p>Thank you for contacting me through my portfolio. I have received your message and will get back to you as soon as possible.</p>
            <p><strong>Your Message:</strong></p>
            <div style="background-color: white; padding: 15px; border-radius: 4px; margin-top: 10px;">
              ${message.replace(/\n/g, "<br>")}
            </div>
          </div>
          <p style="color: #6b7280; font-size: 14px;">
            Best regards,<br>Brix Lampago
          </p>
        </div>
      `,
    }

    // Send both emails in parallel
    await Promise.all([
      transporter.sendMail(ownerMailOptions),
      transporter.sendMail(senderMailOptions)
    ])

    return NextResponse.json({ message: "Emails sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("Error sending emails:", error)
    return NextResponse.json({ error: "Failed to send emails" }, { status: 500 })
  }
}
