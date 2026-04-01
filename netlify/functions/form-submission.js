// Netlify Function for Form Submission Handling
// Add SENDGRID_API_KEY or MAILGUN_API_KEY as environment variables in Netlify

exports.handler = async function(event, context) {
  // Only handle POST requests
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    // Parse form data
    const body = event.body || "";
    const params = new URLSearchParams(body);

    const formData = {
      fullName: params.get("fullName") || "",
      email: params.get("email") || "",
      contactNumber: params.get("contactNumber") || "",
      postcode: params.get("postcode") || "",
      mortgageAmount: params.get("mortgageAmount") || "",
      propertyValue: params.get("propertyValue") || "",
      currentLender: params.get("currentLender") || "",
      mortgagePurpose: params.get("mortgagePurpose") || "",
      formName: params.get("form-name") || "unknown",
    };

    // Log submission (visible in Netlify function logs)
    console.log("Form submission received:", {
      formName: formData.formName,
      name: formData.fullName,
      email: formData.email,
      timestamp: new Date().toISOString(),
    });

    // Send confirmation email if SendGrid is configured
    const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;

    if (SENDGRID_API_KEY && formData.email) {
      await sendConfirmationEmail(formData, SENDGRID_API_KEY);
    }

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: "Form submission processed successfully"
      }),
    };
  } catch (error) {
    console.error("Error processing form submission:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal server error" }),
    };
  }
};

async function sendConfirmationEmail(data, apiKey) {
  const emailHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: #1c4953; color: white; padding: 20px; text-align: center;">
        <h1>Thank You, ${data.fullName}!</h1>
      </div>
      <div style="padding: 20px; background: #f9f9f9;">
        <p>We have received your remortgage enquiry and a qualified advisor will be in touch shortly.</p>

        <h3>Your Enquiry Details:</h3>
        <ul>
          ${data.mortgageAmount ? `<li>Mortgage Amount: ${data.mortgageAmount}</li>` : ""}
          ${data.propertyValue ? `<li>Property Value: ${data.propertyValue}</li>` : ""}
          ${data.currentLender ? `<li>Current Lender: ${data.currentLender}</li>` : ""}
          ${data.mortgagePurpose ? `<li>Purpose: ${data.mortgagePurpose}</li>` : ""}
        </ul>

        <p>If you have any questions, call us at <strong>01992 535 555</strong></p>

        <p><strong>What happens next?</strong></p>
        <ol>
          <li>A qualified advisor will review your details</li>
          <li>They will search the market for the best rates</li>
          <li>You will receive a no-obligation quote</li>
        </ol>
      </div>
      <div style="padding: 20px; text-align: center; font-size: 12px; color: #666;">
        <p>Remortgage Advisor | Apply Wise Financial Limited</p>
        <p>Your home may be repossessed if you do not keep up repayments on your mortgage.</p>
      </div>
    </div>
  `;

  const response = await fetch("https://api.sendgrid.com/v3/mail/send", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      personalizations: [
        {
          to: [{ email: data.email }],
          subject: "Thank you for your remortgage enquiry - Remortgage Advisor",
        },
      ],
      from: {
        email: "hello@remortgageadvisor.co.uk",
        name: "Remortgage Advisor"
      },
      content: [
        {
          type: "text/html",
          value: emailHtml,
        },
      ],
    }),
  });

  if (!response.ok) {
    console.error("SendGrid error:", response.status, await response.text());
    throw new Error(`SendGrid error: ${response.status}`);
  }

  console.log("Confirmation email sent to:", data.email);
}
