Crypto Checkout Frontend Assessment

A responsive crypto-to-cash checkout flow I built using Next.js, TypeScript, and Tailwind CSS.

🚀 Live Demo

View Live Demo
 <!-- Add your Vercel/Netlify link here -->

📸 Screenshots
Desktop View

Mobile View
<!-- Add screenshots -->
🎯 Pages I Implemented

Checkout Page (/)

Currency conversion interface

Wallet selection

Tab switching (Crypto to Cash / Cash to Crypto)

Real-time exchange rate calculation

Form validation

Recipient Details Page (/recipient)

Email input with validation

Phone number input with country code selector

Back navigation

Loading states

Error handling

✨ Features I Added

✅ Fully responsive on desktop, tablet, and mobile

✅ TypeScript for full type safety

✅ Client-side form validation with error messages

✅ Accessibility features (ARIA labels, semantic HTML, keyboard navigation)

✅ Modular, reusable components for buttons, inputs, selects, and tabs

✅ Loading states for better user feedback

✅ Clean folder structure and code organization

🛠️ Tech Stack

Framework: Next.js 14 (App Router)

Language: TypeScript

Styling: Tailwind CSS

Icons: Inline SVG

Package Manager: npm/yarn/pnpm

📁 Project Structure
├── app/
│   ├── page.tsx                 # Checkout page
│   ├── recipient/
│   │   └── page.tsx            # Recipient details page
│   └── layout.tsx
├── components/
│   ├── button.tsx              # Reusable button component
│   ├── input.tsx               # Reusable input component
│   ├── select.tsx              # Reusable select component
│   └── tabs.tsx                # Tab switcher component
└── README.md

🚀 How to Run
Prerequisites

Node.js 18+

npm / yarn / pnpm

Installation
git clone <your-repo-url>
cd crypto-checkout
npm install
# or yarn install / pnpm install
npm run dev
# or yarn dev / pnpm dev


Then open http://localhost:3000
 to see it in action.

Build for Production
npm run build
npm start

🎨 Design Decisions
Components

Built reusable components (Button, Input, Select, Tabs)

Components are prop-driven for flexibility

Full TypeScript typing for all props and state

State Management

Used local state (useState) for forms

Client-side validation with real-time error feedback

Navigation handled with Next.js App Router

Styling

Tailwind CSS for rapid development

Used colors from Figma design: #013941, #E6FBF2, #CCF6E5

Mobile-first responsive design

Accessibility

ARIA labels and semantic HTML

Keyboard accessible interactive elements

Error messages displayed clearly

🔍 Key Features Implemented
Form Validation

Email must end with @gmail.com

Phone number validated for 10–12 digits

Required fields checked

Real-time error feedback

Loading & Feedback

Disabled button states while loading

Visual feedback when interacting with forms

Responsive Design

Mobile: full-width, padded layout

Tablet: constrained width

Desktop: centered with max-width

🎯 Assessment Requirements

✅ I completed all major requirements:

2 pages converted from Figma

React + Next.js with TypeScript

Fully responsive

Clean component structure

Form state handling and validation

Accessibility and keyboard support

Reusable components

Loading states

Thoughtful folder structure

🔄 Assumptions & Trade-offs

Assumptions

Using mock data (no backend integration)

Wallet selection is just UI (no Web3 integration)

Navigation handled with simple router.push()

Validation is client-side only

Trade-offs

Local state instead of Redux/Context for simplicity

Tailwind classes inline instead of separate CSS

Basic error messages (no toast notifications)

Simple phone input (could use react-phone-number-input)

🚀 Future Improvements

Toast notifications for success/error messages

Smooth page transition animations

More robust phone validation library

Unit tests (Jest + React Testing Library)

E2E tests (Playwright/Cypress)

Dark mode support

Internationalization (i18n)

Analytics tracking

👤 About Me

[Your Name]

GitHub: [@yourusername]

LinkedIn: [Your LinkedIn]

📝 Time Spent

~5 hours total:

Component setup: 1.5h

Page implementation: 2h

Validation & error handling: 1h

Testing & refinements: 0.5h