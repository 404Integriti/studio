// utils/validateEmail.js
export async function validateEmailAndSubmit(email) {
  if (!email || email.trim() === "") {
    throw new Error("Email is empty");
  }

  try {
    const res = await fetch(
      "https://emailvalidator-production-cc84.up.railway.app/validate-email",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      }
    );

    const data = await res.json();

    if (data.state === "deliverable") {
      return true; // ✅ Valid email
    } else {
      throw new Error("Invalid email address");
    }
  } catch (err) {
    throw new Error("Email validation failed: " + err.message);
  }
}
