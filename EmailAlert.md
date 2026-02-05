You are a senior full-stack engineer working on a production Next.js (App Router) application using TypeScript, MongoDB, and TailwindCSS.

Your task is to IMPLEMENT a reliable admin alert email system that triggers whenever a new registration is successfully stored in the database.

--------------------------------------------------
CONTEXT
--------------------------------------------------
This application has a registration form for BACE (Bhaktivedanta Academic and Cultural Education).
Whenever a user submits the form:
1) Data is validated
2) Saved into MongoDB
3) Admin must be immediately notified via email so no registration is missed

This is an internal alert email, not a user-facing confirmation email.

--------------------------------------------------
REQUIREMENTS
--------------------------------------------------

TECH STACK
- Next.js (App Router)
- TypeScript
- MongoDB (Mongoose or native driver)
- Node email solution (Nodemailer or email API like Resend)
- Environment variables for secrets

--------------------------------------------------
EMAIL TRIGGER LOGIC
--------------------------------------------------
- Trigger email ONLY after successful DB insert
- Do NOT send email if DB save fails
- Handle async safely (no duplicate sends)
- Gracefully handle email failures (log errors, do not crash request)

--------------------------------------------------
EMAIL CONTENT
--------------------------------------------------
Recipient:
- Admin email address (from ENV)

Subject:
- "New BACE Registration Received"

Email Body (HTML + plain text):
Include:
- Student Name
- Email
- Phone
- College / University
- City
- Optional message
- Date & time of registration

Tone:
- Clear
- Professional
- Alert-style
- Easy to scan

No marketing language.

--------------------------------------------------
SECURITY & RELIABILITY
--------------------------------------------------
- Never expose admin email or API keys to client
- Use server-side logic only
- Validate and sanitize inputs
- Prevent spam loops
- Use environment variables:
  - EMAIL_HOST / API_KEY
  - EMAIL_FROM
  - ADMIN_EMAIL

--------------------------------------------------
IMPLEMENTATION TASKS
--------------------------------------------------
1) Create reusable email utility function
2) Integrate it inside the registration API / server action
3) Ensure email fires only once per successful registration
4) Add basic logging for failures
5) Keep implementation clean and maintainable

--------------------------------------------------
OUTPUT EXPECTATION
--------------------------------------------------
Provide:
- Production-ready TypeScript code
- Email utility
- Registration handler integration
- Example HTML email template
- Clear comments explaining logic

Build it like this will be used in a real production environment.
No shortcuts.
