# FixItPro - UI/UX Design System

## Design Philosophy

**Modern. Clean. Professional. Engaging.**

Our design system emphasizes clarity, accessibility, and visual hierarchy while maintaining a premium aesthetic that builds trust with users.

---

## Color Palette

### Primary Colors

| Color      | Hex       | Usage                         |
| ---------- | --------- | ----------------------------- |
| **Indigo** | `#4F46E5` | Primary actions, focus states |
| **Purple** | `#A855F7` | Gradients, secondary actions  |
| **Cyan**   | `#06B6D4` | Accents, highlights           |

### Neutral Colors

| Color         | Class       | Usage                 |
| ------------- | ----------- | --------------------- |
| **Slate 950** | `slate-950` | Background            |
| **Slate 900** | `slate-900` | Secondary backgrounds |
| **Slate 800** | `slate-800` | Borders, dividers     |
| **Slate 400** | `slate-400` | Secondary text        |
| **Slate 300** | `slate-300` | Body text             |
| **White**     | `white`     | Primary text          |

### Usage Rules

- ✅ Primary actions → Indigo 600
- ✅ Hover states → Indigo/Purple gradients
- ✅ Disabled → Slate 600/400
- ✅ Backgrounds → Slate 950/900
- ✅ Borders → Indigo 600/20 (transparency)

---

## Typography

### Type Scale

```
Display Large:  text-8xl (72px) font-black   - Hero headings
Display:        text-6xl (60px) font-black   - Page headings
Heading 1:      text-5xl (48px) font-bold    - Section headings
Heading 2:      text-4xl (36px) font-bold    - Subsections
Heading 3:      text-2xl (24px) font-bold    - Card titles
Body:           text-base (16px)             - Body text
Small:          text-sm (14px)               - Labels, descriptions
Tiny:           text-xs (12px)               - Captions, helper text
```

### Font Weights

| Weight       | Tailwind Class  | Usage              |
| ------------ | --------------- | ------------------ |
| **Black**    | `font-black`    | Headings, emphasis |
| **Bold**     | `font-bold`     | Headings, CTAs     |
| **Semibold** | `font-semibold` | Subheadings        |
| **Normal**   | `font-normal`   | Body text          |

### Line Heights

- **Headings**: `leading-tight` (1.25)
- **Body**: `leading-relaxed` (1.625)
- **Dense**: `leading-none` (1)

---

## Spacing System

Used consistently throughout for visual harmony.

```
Space 0  → 0px
Space 1  → 4px
Space 2  → 8px
Space 3  → 12px
Space 4  → 16px
Space 6  → 24px
Space 8  → 32px
Space 12 → 48px
Space 16 → 64px
Space 20 → 80px
Space 24 → 96px
```

### Container Sizes

```
max-w-6xl  → 1152px  - Main content
max-w-4xl  → 896px   - Narrow content
max-w-2xl  → 672px   - Form layouts
max-w-xs   → 320px   - Mobile optimal
```

---

## Components

### 1. Buttons

#### Primary Button

```tsx
<Link
  href="/services"
  className="px-8 py-4 bg-linear-to-r from-indigo-600 to-purple-600 
             text-white font-bold rounded-xl 
             hover:shadow-2xl hover:shadow-indigo-600/60 
             transition-all duration-300 hover:-translate-y-1"
>
  Browse Services
</Link>
```

**Features:**

- Gradient background (Indigo → Purple)
- Elevated on hover (translate-y)
- Shadow on hover (3D effect)
- Rounded corners (xl)

#### Secondary Button

```tsx
<button
  className="px-8 py-4 border-2 border-indigo-600/60 
             text-indigo-300 font-bold rounded-xl 
             hover:bg-indigo-600/20 hover:border-indigo-400 
             transition-all duration-300 hover:-translate-y-1 
             backdrop-blur-sm"
>
  Find Technicians
</button>
```

**Features:**

- Border-based design
- Glassmorphism effect (backdrop-blur)
- Color inversion on hover
- Same elevation on hover

---

### 2. Cards

#### Service Card

```tsx
<div
  className="group relative bg-gradient-to-br from-slate-800/80 
                to-slate-900/50 border border-indigo-600/30 
                rounded-2xl p-8 hover:border-indigo-400/60 
                transition-all duration-500 hover:-translate-y-3 
                hover:shadow-2xl hover:shadow-indigo-600/30 
                backdrop-blur-sm overflow-hidden"
>
  {/* Icon */}
  <div
    className="relative z-10 w-16 h-16 bg-linear-to-br 
                  from-indigo-600/40 to-purple-600/30 rounded-xl 
                  flex items-center justify-center mb-6 
                  group-hover:from-indigo-600/60 
                  group-hover:to-purple-600/50 
                  transition-all duration-300 group-hover:scale-110"
  >
    <div className="text-indigo-300">{icon}</div>
  </div>

  {/* Content */}
  <h3 className="text-2xl font-bold mb-3">Title</h3>
  <p className="text-slate-400">Description</p>
</div>
```

**Features:**

- Glassmorphism (backdrop blur + transparency)
- Gradient background
- Icon scales on hover
- Smooth transitions (500ms)
- Card elevates on hover

---

### 3. Hero Section

```tsx
<section
  className="relative min-h-screen bg-linear-to-br 
                    from-slate-950 via-indigo-950/30 to-slate-950 
                    overflow-hidden flex items-center"
>
  {/* Animated backgrounds */}
  <div className="absolute inset-0">
    <div
      className="absolute top-0 left-1/4 w-96 h-96 
                    bg-indigo-600/30 rounded-full blur-3xl 
                    animate-pulse"
    ></div>
  </div>

  {/* Grid overlay */}
  <div
    className="absolute inset-0 
                  bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px)]"
  ></div>

  {/* Content */}
  <div className="relative z-10 text-center">
    {/* Badge */}
    <div
      className="inline-block mb-8 px-4 py-2 rounded-full 
                    border border-indigo-600/40 bg-indigo-600/10 
                    backdrop-blur-sm"
    >
      <span className="text-sm font-semibold text-indigo-300">
        ✨ Professional Home Services Platform
      </span>
    </div>

    {/* Heading */}
    <h1 className="text-8xl font-black mb-8 leading-tight">
      Your Home,
      <span
        className="bg-linear-to-r from-indigo-400 
                       via-purple-400 to-cyan-400 
                       bg-clip-text text-transparent"
      >
        Our Expertise
      </span>
    </h1>
  </div>
</section>
```

**Features:**

- Full viewport height
- Animated gradient backgrounds
- Grid pattern overlay
- Multi-color gradient text
- Premium badge at top

---

### 4. Feature Section

```tsx
<div
  className="group relative bg-slate-900/60 border border-slate-700/50 
                rounded-2xl p-10 hover:border-indigo-600/50 
                transition-all duration-500 hover:bg-slate-900/80 
                hover:shadow-xl hover:shadow-indigo-600/20"
>
  {/* Hover effect background */}
  <div
    className="absolute inset-0 bg-linear-to-br 
                  from-indigo-600/5 to-purple-600/5 
                  opacity-0 group-hover:opacity-100 
                  rounded-2xl transition-opacity"
  ></div>

  {/* Icon */}
  <div
    className="relative z-10 w-14 h-14 bg-linear-to-br 
                  from-indigo-600/30 to-purple-600/20 
                  rounded-full flex items-center justify-center 
                  mx-auto mb-6"
  >
    <div className="text-indigo-400">{icon}</div>
  </div>

  {/* Title & Description */}
  <h3 className="text-2xl font-bold text-center mb-4">Title</h3>
  <p className="text-slate-400 text-center">Description</p>
</div>
```

**Features:**

- Subtle hover background
- Center-aligned content
- Clear visual hierarchy
- Smooth color transitions

---

## Animation Guidelines

### Timing

| Type         | Duration | Use Case                    |
| ------------ | -------- | --------------------------- |
| **Micro**    | 150ms    | Hover, focus states         |
| **Standard** | 300ms    | Button clicks, transitions  |
| **Slow**     | 500ms    | Card reveals, major changes |
| **Epic**     | 1000ms+  | Page transitions            |

### Easing Functions

```css
transition-all duration-300 ease-in-out
```

### Common Patterns

#### Elevation (Z-axis)

```tsx
hover: -translate - y - 1; /* Lift on hover */
hover: -translate - y - 2; /* More pronounced */
hover: -translate - y - 3; /* Maximum lift */
```

#### Opacity Fade

```tsx
opacity-0 group-hover:opacity-100  /* Fade in on hover */
```

#### Scale

```tsx
group-hover:scale-110  /* Grow on hover */
```

#### Shadow

```tsx
hover:shadow-xl hover:shadow-indigo-600/20
```

---

## Dark Mode Strategy

**Current Status:** Dark mode only (dark aesthetic)

**Colors in Dark Mode:**

- Primary text: `white`, `slate-300`
- Secondary text: `slate-400`
- Borders: `indigo-600/20`, `slate-700/50`
- Backgrounds: `slate-950`, `slate-900`

---

## Accessibility (a11y)

### Color Contrast

- ✅ Text on background: 7:1 ratio (AAA)
- ✅ Interactive elements: Clear focus states
- ✅ Icons: Always paired with text labels

### Keyboard Navigation

- ✅ Tab-accessible buttons
- ✅ Focus rings visible
- ✅ Proper ARIA labels

### Screen Readers

```tsx
<button aria-label="Open navigation menu">
  <MenuIcon />
</button>
```

---

## Responsive Design

### Breakpoints

```
Mobile:   < 640px (sm)
Tablet:   640px - 1024px (md, lg)
Desktop:  > 1024px (xl, 2xl)
```

### Mobile-First Approach

```tsx
{
  /* Mobile first, then enhance */
}
<div className="px-4 py-8 md:px-6 lg:px-8">
  <h1 className="text-2xl md:text-4xl lg:text-6xl">Title</h1>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
    {/* Content */}
  </div>
</div>;
```

---

## Component Examples

### Full Example: Hero + CTA

```tsx
export default function Hero() {
  return (
    <section
      className="relative min-h-screen bg-linear-to-br 
                        from-slate-950 via-indigo-950/30 to-slate-950"
    >
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-0 left-1/4 w-96 h-96 
                        bg-indigo-600/30 rounded-full blur-3xl 
                        animate-pulse"
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-24 text-center">
        <h1 className="text-8xl font-black mb-8">
          <span
            className="bg-linear-to-r from-indigo-400 to-purple-400 
                           bg-clip-text text-transparent"
          >
            Your Heading
          </span>
        </h1>

        <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
          Your description here
        </p>

        <Link
          href="/action"
          className="inline-block px-8 py-4 bg-linear-to-r 
                     from-indigo-600 to-purple-600 text-white font-bold 
                     rounded-xl hover:shadow-2xl hover:shadow-indigo-600/60 
                     transition-all duration-300 hover:-translate-y-1"
        >
          Call to Action
        </Link>
      </div>
    </section>
  );
}
```

---

## Dos & Don'ts

### ✅ DO

- Use consistent spacing (4px grid)
- Keep animations under 500ms
- Maintain 7:1 color contrast ratio
- Use rounded corners (rounded-xl, rounded-2xl)
- Add hover states to interactive elements
- Use gradients for depth

### ❌ DON'T

- Mix multiple shadow styles
- Use more than 2 gradient colors per element
- Animate without purpose
- Break the spacing grid
- Use harsh colors (saturation 100%)
- Add transparency to text (use colors instead)

---

## Performance Notes

- All CSS via Tailwind (optimized)
- SVG icons (no image files)
- Gradients use CSS (not PNG)
- Animations via transforms (GPU accelerated)
- No unnecessary animations
- Minimal blur effects (performance impact)

---

**Design System Version:** 1.0  
**Last Updated:** February 2026  
**Status:** Active
