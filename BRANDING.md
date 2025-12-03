# Quizzera Branding Guidelines

## Brand Identity

Quizzera represents trust, intelligence, and accessibility in Pakistan's digital education space. Our brand conveys professionalism while remaining approachable to students of all levels.

---

## Logo

### Primary Logo

The Quizzera logo consists of:
- **Icon:** A stylized "Q" merged with a checkmark or tick box
- **Wordmark:** "Quizzera" in bold, modern typography
- **Tagline:** "Pakistan's #1 MCQ Engine" (optional, for marketing materials)

### Logo Variations

1. **Full Logo** - Icon + Wordmark (primary usage)
2. **Icon Only** - For small spaces (app icons, favicons)
3. **Wordmark Only** - For headers and minimal designs
4. **Reversed Logo** - White on dark backgrounds

### Logo Clear Space

Maintain a clear space around the logo equal to the height of the "Q" on all sides.

### Logo Don'ts

❌ Don't stretch or distort the logo
❌ Don't change the colors
❌ Don't rotate the logo
❌ Don't add effects (shadows, gradients)
❌ Don't use on busy backgrounds without proper contrast

---

## Color Palette

### Primary Colors

```css
/* Navy - Primary Brand Color */
--primary: #0F172A;
--primary-hover: #1E293B;
--primary-light: #334155;

/* Emerald - Success & Growth */
--success: #22C55E;
--success-hover: #16A34A;
--success-light: #86EFAC;

/* Sky Blue - Information & Trust */
--info: #0EA5E9;
--info-hover: #0284C7;
--info-light: #7DD3FC;
```

### Secondary Colors

```css
/* Slate - Neutral Text */
--secondary: #475569;
--secondary-hover: #64748B;
--secondary-light: #94A3B8;

/* Light - Backgrounds */
--background: #F8FAFC;
--background-alt: #F1F5F9;
--white: #FFFFFF;
```

### Semantic Colors

```css
/* Error States */
--error: #EF4444;
--error-hover: #DC2626;
--error-light: #FCA5A5;

/* Warning States */
--warning: #F59E0B;
--warning-hover: #D97706;
--warning-light: #FCD34D;

/* Neutral/Disabled */
--neutral: #94A3B8;
--disabled: #CBD5E1;
```

### Color Usage Guidelines

| Color | Primary Use | Examples |
|-------|-------------|----------|
| Navy (#0F172A) | Primary actions, headers, brand | Buttons, navigation, logos |
| Emerald (#22C55E) | Success states, positive feedback | Correct answers, achievements |
| Sky Blue (#0EA5E9) | Information, links, highlights | Info messages, active states |
| Slate (#475569) | Body text, secondary elements | Paragraphs, labels, icons |
| Red (#EF4444) | Errors, wrong answers | Error messages, incorrect answers |
| Amber (#F59E0B) | Warnings, pending states | Time warnings, review needed |

---

## Typography

### Font Families

#### Primary Font: **Inter**

Inter is used for all UI elements, body text, and most content.

```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

**Weights Available:**
- Regular (400) - Body text
- Medium (500) - Subheadings
- Semibold (600) - UI elements
- Bold (700) - Headings

#### Secondary Font: **Poppins**

Poppins is used for display headings and marketing materials.

```css
font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

**Weights Available:**
- Medium (500)
- Semibold (600)
- Bold (700)

#### Monospace Font: **Fira Code**

For code snippets and technical content.

```css
font-family: 'Fira Code', 'Consolas', monospace;
```

### Typography Scale

```css
/* Headings - Poppins */
--text-5xl: 3rem;      /* 48px - Hero titles */
--text-4xl: 2.25rem;   /* 36px - Page titles */
--text-3xl: 1.875rem;  /* 30px - Section titles */
--text-2xl: 1.5rem;    /* 24px - Card titles */
--text-xl: 1.25rem;    /* 20px - Subheadings */

/* Body - Inter */
--text-lg: 1.125rem;   /* 18px - Large body */
--text-base: 1rem;     /* 16px - Default body */
--text-sm: 0.875rem;   /* 14px - Small text */
--text-xs: 0.75rem;    /* 12px - Captions */
```

### Line Heights

```css
--leading-tight: 1.25;   /* Headings */
--leading-normal: 1.5;   /* Body text */
--leading-relaxed: 1.75; /* Large paragraphs */
```

### Letter Spacing

```css
--tracking-tight: -0.025em;  /* Large headings */
--tracking-normal: 0;        /* Body text */
--tracking-wide: 0.025em;    /* All caps text */
```

---

## Spacing System

Based on 4px base unit:

```css
--space-1: 0.25rem;  /* 4px */
--space-2: 0.5rem;   /* 8px */
--space-3: 0.75rem;  /* 12px */
--space-4: 1rem;     /* 16px */
--space-5: 1.25rem;  /* 20px */
--space-6: 1.5rem;   /* 24px */
--space-8: 2rem;     /* 32px */
--space-10: 2.5rem;  /* 40px */
--space-12: 3rem;    /* 48px */
--space-16: 4rem;    /* 64px */
--space-20: 5rem;    /* 80px */
```

---

## Border Radius

```css
--radius-sm: 0.25rem;   /* 4px - Small elements */
--radius-md: 0.5rem;    /* 8px - Cards, buttons */
--radius-lg: 0.75rem;   /* 12px - Large cards */
--radius-xl: 1rem;      /* 16px - Modals */
--radius-full: 9999px;  /* Pills, circular */
```

---

## Shadows

```css
/* Elevation levels */
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
--shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
```

---

## Iconography

### Icon Library

Primary: **Lucide Icons** (React)
- Consistent 24px base size
- 2px stroke width
- Rounded stroke caps

### Icon Usage

```tsx
// Small icons (16px)
<Icon size={16} />

// Default icons (24px)
<Icon size={24} />

// Large icons (32px)
<Icon size={32} />
```

### Icon Colors

Icons should match their context:
- **Primary actions:** Navy (#0F172A)
- **Success states:** Emerald (#22C55E)
- **Info states:** Sky Blue (#0EA5E9)
- **Errors:** Red (#EF4444)
- **Neutral:** Slate (#475569)

---

## UI Components

### Buttons

#### Primary Button
```css
background: #0F172A;
color: #FFFFFF;
padding: 0.75rem 1.5rem;
border-radius: 0.5rem;
font-weight: 600;
```

#### Secondary Button
```css
background: transparent;
color: #0F172A;
border: 2px solid #0F172A;
padding: 0.75rem 1.5rem;
border-radius: 0.5rem;
font-weight: 600;
```

#### Success Button
```css
background: #22C55E;
color: #FFFFFF;
padding: 0.75rem 1.5rem;
border-radius: 0.5rem;
font-weight: 600;
```

### Cards

```css
background: #FFFFFF;
border: 1px solid #E2E8F0;
border-radius: 0.75rem;
padding: 1.5rem;
box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
```

### Forms

#### Input Fields
```css
border: 1px solid #CBD5E1;
border-radius: 0.5rem;
padding: 0.75rem 1rem;
font-size: 1rem;
transition: border-color 0.2s;

/* Focus state */
border-color: #0EA5E9;
outline: 2px solid rgba(14, 165, 233, 0.2);
```

---

## Imagery

### Photography Style

- **Authentic:** Real students, real environments
- **Diverse:** Representing Pakistan's diversity
- **Aspirational:** Success and achievement themes
- **Professional:** High-quality, well-lit images
- **Educational:** Learning and growth contexts

### Illustration Style

- **Modern:** Clean, minimalist illustrations
- **Color Palette:** Brand colors only
- **Line Style:** Rounded, friendly
- **Context:** Educational and achievement themes

### Image Formats

- **Photos:** WebP (with JPEG fallback)
- **Icons:** SVG
- **Logos:** SVG (with PNG fallback)
- **Illustrations:** SVG

---

## Animation & Motion

### Timing Functions

```css
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
```

### Duration

```css
--duration-fast: 150ms;    /* Hover states */
--duration-base: 200ms;    /* Default transitions */
--duration-slow: 300ms;    /* Complex animations */
--duration-slower: 500ms;  /* Page transitions */
```

### Motion Principles

1. **Purposeful** - Motion should have meaning
2. **Subtle** - Don't distract from content
3. **Consistent** - Same patterns throughout
4. **Performance** - 60fps minimum

---

## Voice & Tone

### Brand Voice

- **Professional:** Credible and trustworthy
- **Encouraging:** Supportive and motivating
- **Clear:** Simple and understandable
- **Friendly:** Approachable and warm
- **Educational:** Informative and helpful

### Writing Guidelines

#### Do's
✅ Use active voice
✅ Write in second person ("You can...")
✅ Be concise and clear
✅ Use inclusive language
✅ Provide context and examples

#### Don'ts
❌ Use jargon without explanation
❌ Be overly formal or stiff
❌ Use technical terms unnecessarily
❌ Make assumptions about knowledge
❌ Use negative language

### Content Types

#### Marketing Copy
- Inspiring and aspirational
- Focus on benefits, not features
- Call-to-action oriented
- Student success stories

#### UI Copy
- Brief and actionable
- Clear instructions
- Friendly error messages
- Helpful tooltips

#### Educational Content
- Clear and structured
- Step-by-step explanations
- Examples and analogies
- Encouraging feedback

---

## Accessibility

### Color Contrast

All text must meet WCAG 2.1 Level AA standards:
- **Normal text:** 4.5:1 minimum
- **Large text (18pt+):** 3:1 minimum
- **UI components:** 3:1 minimum

### Focus States

All interactive elements must have visible focus indicators:
```css
outline: 2px solid #0EA5E9;
outline-offset: 2px;
```

### Alt Text

All images must have descriptive alt text:
- Describe the content and context
- Keep it concise (125 characters max)
- Omit "image of" or "picture of"

---

## Dark Mode (Future)

### Dark Palette

```css
--dark-bg: #0F172A;
--dark-surface: #1E293B;
--dark-text: #F8FAFC;
--dark-text-secondary: #CBD5E1;
```

---

## Brand Applications

### Digital

- **Website:** Quizzera.pk
- **Web App:** app.quizzera.pk
- **Admin Portal:** admin.quizzera.pk
- **Mobile Apps:** iOS & Android

### Marketing

- **Social Media:** Facebook, Instagram, LinkedIn, Twitter
- **Email Templates:** Newsletters, notifications
- **Digital Ads:** Google Ads, Facebook Ads
- **Landing Pages:** Campaign-specific pages

### Print (Future)

- **Business Cards**
- **Letterheads**
- **Brochures**
- **Certificates**

---

## File Naming Conventions

### Images
```
quizzera-logo-primary.svg
quizzera-icon-navy.png
hero-image-student-success.jpg
```

### Components
```
Button.tsx
QuizCard.tsx
StudentDashboard.tsx
```

### Styles
```
globals.css
components.css
utilities.css
```

---

## Resources

### Design Assets
- Logo files (SVG, PNG)
- Brand icons
- Color palettes
- Typography specimens

### Development
- Tailwind config
- Component library
- Icon set
- Design tokens

---

**Brand Guidelines Version:** 1.0  
**Last Updated:** December 2025  
**Maintained By:** Mentisera Design Team

For brand inquiries: brand@mentisera.com
