import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      phone,
      company,
      service,
      message,
      website, // honeypot
    } = body;

    console.log("📨 CONTACT FORM API HIT");

    // ------------------------------
    // HONEYPOT (SILENT SPAM BLOCK)
    // ------------------------------
    if (website) {
      console.warn("🛑 Spam blocked via honeypot");
      return NextResponse.json(
        { message: "Form submitted successfully" },
        { status: 200 }
      );
    }

    // ------------------------------
    // REQUIRED FIELD VALIDATION
    // ------------------------------
    if (!name || !email || !phone || !service) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // ------------------------------
    // EMAIL TEMPLATE
    // ------------------------------
   const html = `
  <div style="font-family: Arial, Helvetica, sans-serif; background-color: #f4f6f8; padding: 24px;">
    <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 8px 24px rgba(0,0,0,0.08);">

      <div style="background-color: #059669; padding: 20px 24px;">
        <h2 style="margin: 0; color: #ffffff; font-size: 20px;">
          New Contact Request
        </h2>
      </div>

      <div style="padding: 24px; color: #111827;">
        <p style="margin-top: 0;">
          You’ve received a new quote request from your website.
        </p>

        <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Name:</td>
            <td style="padding: 8px 0;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Email:</td>
            <td style="padding: 8px 0;">${email}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Phone:</td>
            <td style="padding: 8px 0;">${phone}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Company:</td>
            <td style="padding: 8px 0;">${company || "N/A"}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Service Requested:</td>
            <td style="padding: 8px 0;">${service}</td>
          </tr>
        </table>

        <div style="margin-top: 24px;">
          <p style="font-weight: bold; margin-bottom: 8px;">Additional Details:</p>
          <p style="margin-top: 0; white-space: pre-line;">
            ${message || "No additional details provided."}
          </p>
        </div>

        <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 24px 0;" />

        <p style="font-size: 12px; color: #6b7280;">
          Submitted on ${new Date().toLocaleString()}
        </p>
      </div>

    </div>
  </div>
`;

    // ------------------------------
    // SEND EMAIL VIA RESEND
    // ------------------------------
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL!,
      to: process.env.RESEND_TO_EMAIL!,
      subject: `New Contact Request from ${name}`,
      replyTo: email,
      html,
    });

    return NextResponse.json(
      { message: "Form submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
