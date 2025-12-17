# Crypto Checkout Frontend Assessment

A responsive crypto-to-cash checkout flow built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Live Demo

[View Live Demo](#https://crypto-ui-nu.vercel.app/) <!-- Add your Vercel/Netlify link here -->

## 📸 Screenshots

### Desktop View
<img width="1468" height="837" alt="Screenshot 2025-12-17 at 1 19 58 PM" src="https://github.com/user-attachments/assets/3e314615-3aaa-41a7-af7b-02c14c7b6216" />
<img width="1092" height="723" alt="Screenshot 2025-12-17 at 2 24 38 PM" src="https://github.com/user-attachments/assets/fb27d1fe-3dc2-4c2f-a0b7-83c0aeccb2ee" />




### Mobile View
<img width="379" height="756" alt="Screenshot 2025-12-17 at 1 24 15 PM" src="https://github.com/user-attachments/assets/0a1cf45b-c1ca-42c2-b0a7-a1682aa12a83" /> <br>
<img width="373" height="541" alt="Screenshot 2025-12-17 at 2 10 23 PM" src="https://github.com/user-attachments/assets/cccfc5d0-cece-4e21-9e53-c2181a4f4d7b" />


## 🎯 Pages Implemented

1. **Checkout Page** (`/`)
   - Currency conversion interface
   - Wallet selection
   - Tab switching (Crypto to Cash / Cash to Crypto)
   - Real-time exchange rate calculation
   - Form validation

2. **Recipient Details Page** (`/recipient`)
   - Email input with validation
   - Phone number input with country code selector
   - Back navigation
   - Loading states
   - Form error handling

## ✨ Features

- ✅ **Responsive Design**: Fully responsive on desktop, tablet, and mobile
- ✅ **TypeScript**: Full type safety across all components
- ✅ **Form Validation**: Client-side validation with error messages
- ✅ **Accessibility**: ARIA labels, keyboard navigation, semantic HTML
- ✅ **Reusable Components**: Modular, reusable UI components
- ✅ **Loading States**: Visual feedback during form submission
- ✅ **Clean Architecture**: Well-organized folder structure

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: SVG (inline)
- **Package Manager**: npm/yarn/pnpm

## 📁 Project Structure


<img width="308" height="423" alt="Screenshot 2025-12-17 at 2 25 50 PM" src="https://github.com/user-attachments/assets/21c14200-b348-4730-8b0d-d3bbd65a6d46" />



## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm/yarn/pnpm

### Installation

1. Clone the repository
```bash
git clone <https://github.com/imranrkhan13/crypto-ui.git>
cd crypto-checkout
```

2. Install dependencies
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Design Decisions

### Component Architecture
- **Atomic Design**: Built reusable components (Button, Input, Select) that can be used across the application
- **Prop-driven**: All components accept props for flexibility and reusability
- **Type Safety**: Full TypeScript types for all props and state

### State Management
- **Local State**: Used React's `useState` for form state management
- **Validation**: Client-side validation with error state management
- **Navigation**: Next.js App Router for page navigation

### Styling Approach
- **Tailwind CSS**: Utility-first CSS for rapid development
- **Custom Colors**: Used brand colors from Figma design (#013941, #E6FBF2, #CCF6E5)
- **Responsive**: Mobile-first approach with breakpoint modifiers

### Accessibility
- **ARIA Labels**: Added appropriate ARIA attributes
- **Semantic HTML**: Used semantic elements (label, button, input)
- **Keyboard Navigation**: All interactive elements are keyboard accessible
- **Error States**: Clear error messages with proper ARIA attributes

## 🔍 Key Features Implemented

### Form Validation
```typescript
- Email validation (regex pattern)
- Phone number validation (minimum length)
- Required field validation
- Real-time error feedback
```

### Loading States
```typescript
- Button loading spinner
- Disabled state during submission
- Visual feedback for user actions
```

### Responsive Design
```typescript
- Mobile: Full-width with padding
- Tablet: Constrained width
- Desktop: Centered with max-width
```

## 🎯 Assessment Requirements

### ✅ Completed
- [x] 2 pages converted from Figma design
- [x] React/Next.js with TypeScript
- [x] Responsive design (mobile + desktop)
- [x] Clean component structure
- [x] Form state handling
- [x] Accessibility practices
- [x] Reusable components
- [x] Form validation
- [x] Loading states
- [x] Thoughtful folder structure

## 🔄 Assumptions & Trade-offs

### Assumptions
1. **Mock Data**: No backend integration required, using mock exchange rates
2. **Wallet Integration**: Wallet selection is UI-only, no actual Web3 integration
3. **Navigation**: Simple router.push() for page transitions
4. **Validation**: Client-side only, assuming server validation would exist in production

### Trade-offs
1. **State Management**: Used local state instead of Context/Redux for simplicity
2. **Styling**: Inline Tailwind classes vs. separate CSS files (Tailwind approach for rapid development)
3. **Error Handling**: Basic error messages (could be enhanced with toast notifications)
4. **Phone Input**: Simple input field (could use library like react-phone-number-input for better UX)

## 🚀 Future Enhancements

If given more time, I would add:
- [ ] Toast notifications for success/error messages
- [ ] Animation transitions between pages
- [ ] More robust phone number validation library
- [ ] Unit tests (Jest + React Testing Library)
- [ ] E2E tests (Playwright/Cypress)
- [ ] Dark mode support
- [ ] Internationalization (i18n)
- [ ] Analytics tracking


## 📝 Time Spent

**Total Time**: ~5 hours
- Component setup: 1.5 hours
- Page implementation: 2 hours
- Validation & error handling: 1 hour
- Testing & refinement: 0.5 hours

---

