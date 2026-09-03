---
name: Rustic Artisanal
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#e0bfbf'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#a78a8a'
  outline-variant: '#584141'
  surface-tint: '#ffb3b5'
  primary: '#ffb3b5'
  on-primary: '#680018'
  primary-container: '#800020'
  on-primary-container: '#ff828a'
  inverse-primary: '#af2b3e'
  secondary: '#e9c349'
  on-secondary: '#3c2f00'
  secondary-container: '#af8d11'
  on-secondary-container: '#342800'
  tertiary: '#c8c8b0'
  on-tertiary: '#303221'
  tertiary-container: '#3d3f2d'
  on-tertiary-container: '#a9aa94'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdada'
  primary-fixed-dim: '#ffb3b5'
  on-primary-fixed: '#40000b'
  on-primary-fixed-variant: '#8e0f28'
  secondary-fixed: '#ffe088'
  secondary-fixed-dim: '#e9c349'
  on-secondary-fixed: '#241a00'
  on-secondary-fixed-variant: '#574500'
  tertiary-fixed: '#e4e4cc'
  tertiary-fixed-dim: '#c8c8b0'
  on-tertiary-fixed: '#1b1d0e'
  on-tertiary-fixed-variant: '#474836'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-md:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  title-lg:
    fontFamily: Montserrat
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: 0.01em
  body-lg:
    fontFamily: Montserrat
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Montserrat
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Montserrat
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.08em
  label-sm:
    fontFamily: Montserrat
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max-width: 1200px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
---

## Brand & Style

This design system is built on the narrative of traditional craftsmanship and the warmth of a wood-fired kitchen. It targets food enthusiasts who value authenticity, quality, and a premium dining experience.

The style is a blend of **Tactile Minimalism** and **Corporate Modern**. It leverages a high-contrast dark aesthetic to make food photography the centerpiece. The interface should feel "grounded" and "weighted," avoiding ephemeral or overly digital effects in favor of textures and solid, purposeful blocks of color. The emotional response is one of intimacy, appetite, and trust in the culinary process.

## Colors

The palette is rooted in the "Charcoal Black" of a hearth, providing a dramatic backdrop for the "Deep Wine Red" primary color, which symbolizes passion and full-bodied flavors. 

- **Primary (#800020):** Used for primary actions, critical brand elements, and key highlights.
- **Secondary/Accent (#D4AF37):** A muted gold reserved for quality stamps, ratings, and subtle "premium" details.
- **Background (#121212):** The foundation of the UI. Use variations of this (lighter shades) to create depth on cards or headers.
- **Text (#F5F5DC):** Cream White is the default for readability, providing a softer, more organic contrast than pure white.
- **Success/Warning/Error:** Use de-saturated versions of green, amber, and red to maintain the rustic, low-chroma aesthetic.

## Typography

The typographic hierarchy establishes a rhythm between "The Maker" (Serif) and "The Service" (Sans-serif).

- **Headlines:** Playfair Display is used to evoke the elegance of a printed menu and the tradition of artisanal cooking. Use it for page titles, section headers, and names of dishes.
- **Body & UI:** Montserrat provides a clean, modern counterpoint, ensuring that descriptions and utilitarian UI elements remain highly legible on dark backgrounds. 
- **Labels:** Labels and buttons should use Montserrat with increased letter spacing and uppercase styling to create a distinct "stamp-like" appearance.

## Layout & Spacing

The layout follows a **Fixed Grid** approach for desktop to simulate the focused, curated feel of a physical menu. 

- **Grid:** 12-column grid on desktop, 4-column on mobile.
- **Rhythm:** Use an 8px base unit. Generous white space (or "black space" in this context) is essential to separate menu categories and highlight photography.
- **Photography:** Food imagery should often break the grid or bleed to the edges to create a sense of abundance and immersion.

## Elevation & Depth

In a dark, rustic theme, elevation is achieved through **Tonal Layers** rather than heavy shadows.

- **Surface Levels:** The base background is the darkest layer. Floating elements like cards or modals should use a slightly lighter "Charcoal" (approx. 5-8% lighter) to imply height.
- **Textures:** Use a very subtle wood grain or linen texture overlay (opacity < 3%) on container surfaces to reinforce the "Artisanal" brand pillar.
- **Borders:** Use thin, low-contrast "Gold" or "Wine Red" borders (0.5px to 1px) to define containers without the need for heavy drop shadows.
- **Shadows:** If shadows are necessary, use a "Hard" shadow style with 0 blur, offset by 4px, in a darker black to mimic the lighting of a candle-lit restaurant.

## Shapes

The design system uses **Soft** geometry. While rounded corners are present, they are subtle (4px to 8px), maintaining a structured, professional, and slightly traditional feel. 

Large-scale rounding or pill shapes should be avoided as they conflict with the "Rustic" aesthetic. Rectilinear shapes with very small radii suggest the precision of a chef's knife and the structure of architectural brickwork.

## Components

### Buttons
- **Primary:** Solid Wine Red (#800020) with Cream White (#F5F5DC) text. Bold, uppercase Montserrat.
- **Secondary:** Transparent with a 1px Gold (#D4AF37) border.
- **Hover State:** Slight brightness increase (10%) and a subtle scale-up effect (1.02x).

### Input Fields
- **Style:** Dark background (darker than the surface it sits on), with a bottom-only border in Gold or Wine Red to mimic elegant stationery.
- **Focus:** The bottom border increases to 2px.

### Cards (Menu Items)
- **Design:** A vertical stack starting with a high-resolution image, followed by a headline in Playfair Display, and a price in Gold Montserrat. 
- **Interaction:** On hover, the image should slightly zoom or the background tone should shift to a warmer dark grey.

### Chips & Tags
- **Style:** Small, outlined in Gold or filled with a deep grey. Used for "Chef's Special," "Vegan," or "Spicy."

### Lists
- **Style:** Use Gold "flourish" icons or simple dots for bullet points. Horizontal dividers between list items should be thin and de-saturated Wine Red.

### Dividers
- Use a "Triple Dot" or a thin horizontal line with a Gold accent in the center to separate major sections, echoing classic editorial design.