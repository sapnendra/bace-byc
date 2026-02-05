You are a senior full-stack product agency with expertise in building high-impact, modern, non-AI-looking websites for education, youth, and spiritual organizations.

Your task is to DESIGN, ARCHITECT, and IMPLEMENT the complete official website for:

BACE – Bhaktivedanta Academic and Cultural Education
(A Vedic Hostel & Youth Development Platform for College Students)

--------------------------------------------------
1. BRAND & POSITIONING
--------------------------------------------------
BACE is NOT a generic religious site.

It is:
- Youth-focused
- Value-based
- Modern, intellectual, calm, and premium
- Inspired by Vedic wisdom and ISKCON, but NOT preachy
- Trust-oriented for parents
- Aspirational for college students

Tone:
- Mature
- Compassionate
- Confident
- Educational
- Non-judgmental
- Authentic

Avoid:
- Overused AI phrases
- Robotic copy
- Overly religious imagery
- Excessive Sanskrit without explanation
- Loud colors or flashy animations

--------------------------------------------------
2. TARGET AUDIENCE
--------------------------------------------------
Primary:
- College students
- University youth (18–26)

Secondary:
- Parents
- Educational institutions

Design psychology:
- Students should feel: “This place understands me.”
- Parents should feel: “My child will be safe and guided.”
- Institutions should feel: “This is structured and credible.”

--------------------------------------------------
3. VISUAL DESIGN DIRECTION
--------------------------------------------------
Design style:
- Modern spiritual minimalism
- Calm, grounded, premium
- Strong typography
- Spacious layouts
- Editorial-style sections

Color palette (spiritual but modern):
- Deep saffron / muted ochre
- Soft beige / off-white
- Forest green accents
- Charcoal / deep gray text
- Gold highlights used sparingly

Typography:
- Serif for headings (philosophical, timeless)
- Clean sans-serif for body (readability)
- Large line-height, breathable text

Imagery:
- Real students
- Learning, discussion, calm environments
- Avoid stock “AI-looking” images
- No overly dramatic god imagery
- Focus on human experience, growth, guidance

--------------------------------------------------
4. UX PRINCIPLES
--------------------------------------------------
- Scrolling should feel smooth and intentional (use Lenis)
- Page transitions should be subtle
- No clutter
- Strong narrative flow
- Clear hierarchy
- Emotional but rational storytelling

User journey:
Homepage → Understanding → Trust → Programs → Hostel Life → Parents → Admission → Register

--------------------------------------------------
5. WEBSITE STRUCTURE (PAGES & SECTIONS)
--------------------------------------------------

A. Homepage
- Hero section with strong one-line value proposition
- “What is BACE”
- “Why BACE Matters for Students”
- “What Students Learn”
- “Vedic Hostel Difference”
- “Daily Life at BACE”
- “Parents’ Trust”
- CTA: Register / Apply

B. About BACE
- Mission
- Vision
- Inspiration
- Connection to ISKCON (respectful, minimal)

C. Events & Courses
- Discover Yourself (DYS)
- Bhagavad Gita for Modern Youth
- Workshops
- Retreats
- Campus programs

D. Vedic Hostel Life
- Routine
- Discipline & freedom
- Mentorship
- Lifestyle

E. Parents’ Section
- Safety
- Guidance
- Academic support
- Long-term outcomes

F. Admissions
- Eligibility
- Simple process
- Registration form

G. Contact

--------------------------------------------------
6. TECH STACK REQUIREMENTS (MANDATORY)
--------------------------------------------------
Frontend:
- Next.js (App Router)
- TypeScript
- Tailwind CSS (custom theme)
- Lenis for smooth scrolling
- GSAP ScrollTrigger (Not only fadeIn and FadeOut) (Think beyond it) (minimal, tasteful)
- SEO-optimized metadata
- Accessible components

Backend (inside Next.js):
- API Routes / Server Actions
- MongoDB (via connection string)
- Mongoose schema for registrations
- Input validation
- Basic spam protection

Database:
- MongoDB
- Collection: registrations
Fields:
- Name
- Email
- Phone
- College / University
- Current City
- Message
- Timestamp

--------------------------------------------------
7. REGISTRATION FORM LOGIC
--------------------------------------------------
- Clean, minimal form
- Trust-building copy
- No aggressive CTA
- On submit:
  - Validate inputs
  - Store in MongoDB
  - Show calm confirmation message:
    “Thank you. Our team will contact you shortly.”

No authentication needed for users.

--------------------------------------------------
8. PERFORMANCE & QUALITY
--------------------------------------------------
- Lighthouse score 90+
- Lazy load images
- Optimized fonts
- Minimal JS bundle
- Clean folder structure
- Reusable components
- No unnecessary libraries

--------------------------------------------------
9. SEO & CONTENT GUIDELINES
--------------------------------------------------
- Semantic HTML
- Strong meta titles & descriptions
- Structured headings
- Human-written copy (non-AI sounding)
- No keyword stuffing
- Focus on clarity and trust

--------------------------------------------------
10. DEVELOPER MINDSET
--------------------------------------------------
Think like:
- A premium agency
- A long-term maintainable product
- Something parents and institutions can trust

Do NOT:
- Overengineer
- Overanimate
- Overdecorate

Every decision must feel intentional.

--------------------------------------------------
FINAL INSTRUCTION
--------------------------------------------------
Deliver:
- Production-ready Next.js codebase
- Clean Tailwind design system
- Well-structured components
- MongoDB backend integration
- Deployment-ready project

This website must feel:
Calm. Credible. Youth-friendly. Timeless. Human.

Build it as if this will be used for years.