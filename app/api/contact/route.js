import nodemailer from "nodemailer";

function escapeHtml(unsafe = "") {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// ✅ This is the POST route version of your code
export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone , message } = body || {};

    if (!name || !email || !phone ||  !message ) {
      return new Response(
        JSON.stringify({ success: false, message: "Missing required fields" }),
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.GMAIL,
        pass: process.env.PASSWORD,
      },
    });

const html = `
  <div style="
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    max-width: 600px;
    margin: auto;
    background: #ffffff;
    border-radius: 12px;
    overflow: hidden;
    border: 1px solid #e5e5e5;
    box-shadow: 0 4px 15px rgba(0,0,0,0.08);
  ">
    <!-- Header -->
    <div style="
      background-color: #FE5723;
      color: #ffffff;
      padding: 24px 30px;
      text-align: center;
    ">
      <h1 style="margin: 0; font-size: 26px;"> New Contact Form Submission</h1>
      <p style="margin: 8px 0 0; font-size: 16px; opacity: 0.95;">
        Someone just reached out from your website 
      </p>
    </div>

    <!-- Content -->
    <div style="padding: 30px;">
      <table style="width: 100%; border-collapse: collapse; font-size: 16px;">
        <tr>
          <td style="padding: 12px; font-weight: bold; width: 120px; background: #fef3e6;"> Name:</td>
          <td style="padding: 12px; background: #fef3e6;">${escapeHtml(name)}</td>
        </tr>
        <tr>
          <td style="padding: 12px; font-weight: bold; background: #ffffff;"> Email:</td>
          <td style="padding: 12px; background: #ffffff;">${escapeHtml(email)}</td>
        </tr>
        <tr>
          <td style="padding: 12px; font-weight: bold; background: #fef3e6;"> Phone:</td>
          <td style="padding: 12px; background: #fef3e6;">${escapeHtml(phone)}</td>
        </tr>
      </table>

      <div style="margin-top: 25px;">
        <h2 style="font-size: 20px; margin-bottom: 10px; color: #ED8104;"> Message:</h2>
        <div style="
          padding: 12px;
          background: #fff7ed;
          border-left: 4px solid #ED8104;
          border-radius: 8px;
          white-space: pre-wrap;
          line-height: 1.5;
          color: #333333;
        ">
          ${escapeHtml(message)}
        </div>
      </div>

      <div style="margin-top: 35px; text-align: center;">
        <a href="mailto:${escapeHtml(email)}" style="
          display: inline-block;
          background: #FE5723;
          color: #ffffff;
          padding: 12px 28px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          font-size: 16px;
        ">
           Reply to ${escapeHtml(name)}
        </a>
      </div>

      <div style="margin-top: 30px; text-align: center; font-size: 14px; color: #6b7280;">
        <p style="margin: 0;"> This message was automatically sent from your website contact form.</p>
        <p style="margin: 4px 0 0;">&copy; ${new Date().getFullYear()} Integriti. All rights reserved.</p>
      </div>
    </div>
  </div>
`;



    const info = await transporter.sendMail({
      from: `"${name}" <${process.env.GMAIL}>`,
      to: "mhamidabid301@gmail.com",
      replyTo: email,
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nNumber: ${phone}\n\n${message}`,
      html,
    });

    return new Response(
      JSON.stringify({ success: true, id: info.messageId }),
      { status: 200 }
    );
  } catch (err) {
    console.error("send-email error:", err);
    return new Response(
      JSON.stringify({ success: false, message: "Email failed", error: err?.message }),
      { status: 500 }
    );
  }
}

// ✅ Allow OPTIONS (CORS preflight)
export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": process.env.CORS_ORIGIN || "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
