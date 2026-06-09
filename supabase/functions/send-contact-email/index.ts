import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    const { name, email, phone, business, service, message } = await req.json();

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) throw new Error("RESEND_API_KEY environment variable is not set");

    const serviceLabel: Record<string, string> = {
      bookkeeping: "Monthly Bookkeeping",
      payroll: "Payroll Management",
      quickbooks: "QuickBooks Setup",
      "full-service": "Full Service Package",
    };

    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
        <h2 style="color: #1d4ed8; margin-bottom: 24px;">New Consultation Request</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; width: 160px; color: #374151;">Full Name</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #111827;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">Email Address</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #111827;">${email}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">Phone Number</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #111827;">${phone || "Not provided"}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">Business Name</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #111827;">${business || "Not provided"}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">Service Needed</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #111827;">${serviceLabel[service] || service || "Not specified"}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; font-weight: bold; vertical-align: top; color: #374151;">Message</td>
            <td style="padding: 10px 0; color: #111827; white-space: pre-wrap;">${message || "No message provided"}</td>
          </tr>
        </table>
        <p style="margin-top: 24px; font-size: 12px; color: #6b7280;">Reply directly to this email to respond to ${name}.</p>
      </div>
    `;

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "GPC Bookkeeping <noreply@contact.gpcbookkeeping.com>",
        to: ["info@gpcbookkeeping.com"],
        reply_to: email,
        subject: `New Consultation Request from ${name}`,
        html,
      }),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      throw new Error(`Resend API error: ${response.status} ${errorBody}`);
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("send-contact-email error:", error);
    return new Response(JSON.stringify({ success: false, error: String(error) }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
