export interface ThemeColorItem {
  id: string;
  label: string;
  elementName: string;
  category:
    | "Layout & Canvas"
    | "Typography & Texts"
    | "Cards & Containers"
    | "Buttons & Actions"
    | "Badges & Pills"
    | "Inputs & Forms"
    | "Glows & Accents"
    | "Code Editor";
  defaultValue: string;
  description: string;
}

// Complete A-Z list of every possible colorable element across the portfolio
export const THEME_COLOR_ELEMENTS: ThemeColorItem[] = [
  // --- A ---
  {
    id: "aboutCardBg",
    label: "About Card Background",
    elementName: "About Section Info Cards",
    category: "Cards & Containers",
    defaultValue: "rgba(255, 255, 255, 0.045)",
    description: "Backdrop surface for the 4 About section bio highlight cards",
  },
  {
    id: "aboutCardBorder",
    label: "About Card Border",
    elementName: "About Section Info Cards",
    category: "Cards & Containers",
    defaultValue: "rgba(255, 255, 255, 0.1)",
    description: "Outline border for About section info cards",
  },
  {
    id: "aboutCardHoverGlow",
    label: "About Card Hover Glow",
    elementName: "About Section Info Cards",
    category: "Glows & Accents",
    defaultValue: "rgba(109, 232, 255, 0.2)",
    description: "Radial glow effect when hovering over an About card",
  },
  {
    id: "aboutCardText",
    label: "About Card Description Text",
    elementName: "About Section Info Cards",
    category: "Typography & Texts",
    defaultValue: "rgba(255, 255, 255, 0.7)",
    description: "Paragraph body text inside About section cards",
  },
  {
    id: "aboutCardTitle",
    label: "About Card Title Text",
    elementName: "About Section Info Cards",
    category: "Typography & Texts",
    defaultValue: "#ffffff",
    description: "Bold title heading inside About section cards",
  },
  {
    id: "availabilityBadgeBg",
    label: "Availability Badge Background",
    elementName: "Hero Availability Pill",
    category: "Badges & Pills",
    defaultValue: "rgba(109, 232, 255, 0.1)",
    description: "Background of the 'Available for roles' pill in the hero section",
  },
  {
    id: "availabilityBadgeBorder",
    label: "Availability Badge Border",
    elementName: "Hero Availability Pill",
    category: "Badges & Pills",
    defaultValue: "rgba(109, 232, 255, 0.25)",
    description: "Border of the 'Available for roles' pill in the hero section",
  },
  {
    id: "availabilityBadgeDot",
    label: "Availability Badge Pulse Dot",
    elementName: "Hero Availability Pill",
    category: "Glows & Accents",
    defaultValue: "#6de8ff",
    description: "Pulsing live beacon dot inside the availability badge",
  },
  {
    id: "availabilityBadgeText",
    label: "Availability Badge Text",
    elementName: "Hero Availability Pill",
    category: "Typography & Texts",
    defaultValue: "#cffafe",
    description: "Text color inside the hero availability badge",
  },

  // --- B ---
  {
    id: "bodyBg",
    label: "Body & Website Background Canvas",
    elementName: "Website Main Canvas",
    category: "Layout & Canvas",
    defaultValue: "#121212",
    description: "Solid base background color of the entire website, HTML canvas, and body",
  },
  {
    id: "buttonPrimaryBg",
    label: "Primary Button Background",
    elementName: "Primary Action Buttons",
    category: "Buttons & Actions",
    defaultValue: "rgba(109, 232, 255, 0.15)",
    description: "Background for primary call-to-action buttons (Download CV, Hire Me)",
  },
  {
    id: "buttonPrimaryBorder",
    label: "Primary Button Border",
    elementName: "Primary Action Buttons",
    category: "Buttons & Actions",
    defaultValue: "rgba(109, 232, 255, 0.3)",
    description: "Border outline for primary call-to-action buttons",
  },
  {
    id: "buttonPrimaryGlow",
    label: "Primary Button Glow",
    elementName: "Primary Action Buttons",
    category: "Glows & Accents",
    defaultValue: "rgba(109, 232, 255, 0.25)",
    description: "Ambient box shadow glow around primary buttons",
  },
  {
    id: "buttonPrimaryHoverBg",
    label: "Primary Button Hover Background",
    elementName: "Primary Action Buttons",
    category: "Buttons & Actions",
    defaultValue: "rgba(109, 232, 255, 0.25)",
    description: "Background color when hovering over primary buttons",
  },
  {
    id: "buttonPrimaryText",
    label: "Primary Button Text",
    elementName: "Primary Action Buttons",
    category: "Typography & Texts",
    defaultValue: "#cffafe",
    description: "Label text color for primary buttons",
  },
  {
    id: "buttonSecondaryBg",
    label: "Secondary Button Background",
    elementName: "Secondary Action Buttons",
    category: "Buttons & Actions",
    defaultValue: "rgba(255, 255, 255, 0.05)",
    description: "Background for ghost / secondary magnetic buttons (Contact me, GitHub)",
  },
  {
    id: "buttonSecondaryBorder",
    label: "Secondary Button Border",
    elementName: "Secondary Action Buttons",
    category: "Buttons & Actions",
    defaultValue: "rgba(255, 255, 255, 0.12)",
    description: "Border for secondary ghost buttons",
  },
  {
    id: "buttonSecondaryHoverBg",
    label: "Secondary Button Hover Background",
    elementName: "Secondary Action Buttons",
    category: "Buttons & Actions",
    defaultValue: "rgba(255, 255, 255, 0.1)",
    description: "Hover background for secondary ghost buttons",
  },
  {
    id: "buttonSecondaryText",
    label: "Secondary Button Text",
    elementName: "Secondary Action Buttons",
    category: "Typography & Texts",
    defaultValue: "#ffffff",
    description: "Text color for secondary ghost buttons",
  },

  // --- C ---
  {
    id: "cardGrayBg",
    label: "Card Div Color (Gray/Black Background Surface)",
    elementName: "All Glass Card Divs",
    category: "Cards & Containers",
    defaultValue: "rgba(255, 255, 255, 0.045)",
    description: "The base black surface color of all glass card divs on the website (matching stats cards)",
  },
  {
    id: "cardGradientStart",
    label: "Card Div Gradient Style (Top-Left Linear Start)",
    elementName: "All Glass Card Divs",
    category: "Cards & Containers",
    defaultValue: "rgba(255, 255, 255, 0.045)",
    description: "Starting frosted glass gradient color at top-left of card divs",
  },
  {
    id: "cardGradientEnd",
    label: "Card Div Gradient Style (Bottom-Right Linear End)",
    elementName: "All Glass Card Divs",
    category: "Cards & Containers",
    defaultValue: "rgba(255, 255, 255, 0.045)",
    description: "Ending frosted glass gradient color at bottom-right of card divs for glassmorphic depth",
  },
  {
    id: "cardGlowTopLeft",
    label: "Card Div Corner Gradient Glow (Top-Left Radial)",
    elementName: "All Glass Card Divs",
    category: "Glows & Accents",
    defaultValue: "transparent",
    description: "Subtle cybernetic cyan radial corner glow inside card divs",
  },
  {
    id: "cardGlowBottomRight",
    label: "Card Div Corner Gradient Glow (Bottom-Right Radial)",
    elementName: "All Glass Card Divs",
    category: "Glows & Accents",
    defaultValue: "transparent",
    description: "Subtle violet radial corner glow inside card divs",
  },
  {
    id: "cardBoxBg",
    label: "Cardbox & Glass Cards Background",
    elementName: "Global Glass Cards",
    category: "Cards & Containers",
    defaultValue: "rgba(255, 255, 255, 0.045)",
    description: "Backdrop surface for all standard glassmorphic card containers",
  },
  {
    id: "cardBoxBorder",
    label: "Card Div Outline Border",
    elementName: "All Glass Card Divs",
    category: "Cards & Containers",
    defaultValue: "rgba(255, 255, 255, 0.10)",
    description: "Border outline for all glass card containers across sections",
  },
  {
    id: "cardBoxShadow",
    label: "Card Div Drop Shadow & Elevation",
    elementName: "All Glass Card Divs",
    category: "Glows & Accents",
    defaultValue: "rgba(0, 0, 0, 0.35)",
    description: "Elevation drop shadow beneath glass card divs",
  },
  {
    id: "codeSnippetBg",
    label: "Code Snippet Box Background",
    elementName: "Hero Code Snippet Card",
    category: "Code Editor",
    defaultValue: "#0a0d14",
    description: "Background color of the interactive code window in the Hero section",
  },
  {
    id: "codeSnippetBorder",
    label: "Code Snippet Box Border",
    elementName: "Hero Code Snippet Card",
    category: "Code Editor",
    defaultValue: "rgba(255, 255, 255, 0.12)",
    description: "Border outline of the interactive code window",
  },
  {
    id: "codeSnippetComment",
    label: "Code Snippet Comments Color",
    elementName: "Hero Code Snippet Card",
    category: "Code Editor",
    defaultValue: "#64748b",
    description: "Color of comment tokens inside code snippets",
  },
  {
    id: "codeSnippetHeaderBg",
    label: "Code Snippet Header Window Bar",
    elementName: "Hero Code Snippet Card",
    category: "Code Editor",
    defaultValue: "rgba(255, 255, 255, 0.045)",
    description: "Top title bar background of the code window (with window dots)",
  },
  {
    id: "codeSnippetKeyword",
    label: "Code Snippet Keywords Color",
    elementName: "Hero Code Snippet Card",
    category: "Code Editor",
    defaultValue: "#ff6ad5",
    description: "Syntax highlighting color for keywords (const, let, function)",
  },
  {
    id: "codeSnippetString",
    label: "Code Snippet Strings Color",
    elementName: "Hero Code Snippet Card",
    category: "Code Editor",
    defaultValue: "#6de8ff",
    description: "Syntax highlighting color for strings and values",
  },
  {
    id: "codeSnippetText",
    label: "Code Snippet Plain Text Color",
    elementName: "Hero Code Snippet Card",
    category: "Code Editor",
    defaultValue: "#e2e8f0",
    description: "Color for regular code identifiers and syntax characters",
  },
  {
    id: "contactCardBg",
    label: "Contact Information Card Background",
    elementName: "Contact Section Cards",
    category: "Cards & Containers",
    defaultValue: "rgba(255, 255, 255, 0.04)",
    description: "Surface background for contact details card and form wrapper",
  },
  {
    id: "contactCardBorder",
    label: "Contact Information Card Border",
    elementName: "Contact Section Cards",
    category: "Cards & Containers",
    defaultValue: "rgba(255, 255, 255, 0.1)",
    description: "Outline border for contact section cards",
  },
  {
    id: "contactInputBg",
    label: "Contact Form Input Background",
    elementName: "Contact Form Inputs",
    category: "Inputs & Forms",
    defaultValue: "rgba(255, 255, 255, 0.04)",
    description: "Input fields background in the contact message form",
  },
  {
    id: "contactInputBorder",
    label: "Contact Form Input Border",
    elementName: "Contact Form Inputs",
    category: "Inputs & Forms",
    defaultValue: "rgba(255, 255, 255, 0.1)",
    description: "Border outline of form inputs when not focused",
  },
  {
    id: "contactInputFocus",
    label: "Contact Form Input Focus Glow",
    elementName: "Contact Form Inputs",
    category: "Glows & Accents",
    defaultValue: "#6de8ff",
    description: "Accent color when focusing or typing inside contact inputs",
  },
  {
    id: "contactInputText",
    label: "Contact Form Input Text",
    elementName: "Contact Form Inputs",
    category: "Typography & Texts",
    defaultValue: "#ffffff",
    description: "Text color inside input fields and textareas",
  },
  {
    id: "contactSubmitBg",
    label: "Contact Submit Button Background",
    elementName: "Contact Form Submit Button",
    category: "Buttons & Actions",
    defaultValue: "rgba(109, 232, 255, 0.15)",
    description: "Background for 'Send Message' button in contact form",
  },
  {
    id: "contactSubmitBorder",
    label: "Contact Submit Button Border",
    elementName: "Contact Form Submit Button",
    category: "Buttons & Actions",
    defaultValue: "rgba(109, 232, 255, 0.3)",
    description: "Border outline for 'Send Message' button in contact form",
  },
  {
    id: "contactSubmitText",
    label: "Contact Submit Button Text",
    elementName: "Contact Form Submit Button",
    category: "Typography & Texts",
    defaultValue: "#cffafe",
    description: "Text color for 'Send Message' button in contact form",
  },
  {
    id: "cyanGlow",
    label: "Cyan Glow Primary Accent",
    elementName: "Cyan Glow Ambient",
    category: "Glows & Accents",
    defaultValue: "#6de8ff",
    description: "Primary cybernetic cyan accent color used for glow, rings, and tags",
  },

  // --- D ---
  {
    id: "dividerLines",
    label: "Divider Lines & Separators",
    elementName: "Section Dividers",
    category: "Layout & Canvas",
    defaultValue: "rgba(255, 255, 255, 0.1)",
    description: "Horizontal and vertical divider lines across the portfolio",
  },

  // --- E ---
  {
    id: "experienceCardBg",
    label: "Experience Card Background",
    elementName: "Journey / Experience Cards",
    category: "Cards & Containers",
    defaultValue: "rgba(255, 255, 255, 0.04)",
    description: "Card background for timeline items in the Journey section",
  },
  {
    id: "experienceCardBorder",
    label: "Experience Card Border",
    elementName: "Journey / Experience Cards",
    category: "Cards & Containers",
    defaultValue: "rgba(255, 255, 255, 0.1)",
    description: "Card border outline for timeline items in the Journey section",
  },
  {
    id: "experienceDateBadge",
    label: "Experience Date Badge Accent",
    elementName: "Journey / Experience Cards",
    category: "Badges & Pills",
    defaultValue: "#a986ff",
    description: "Color of the date period badge in timeline cards",
  },
  {
    id: "experienceLine",
    label: "Experience Timeline Vertical Line",
    elementName: "Journey Timeline",
    category: "Glows & Accents",
    defaultValue: "#6de8ff",
    description: "Color of the glowing vertical timeline line connecting journey cards",
  },
  {
    id: "experienceNode",
    label: "Experience Timeline Node Dot",
    elementName: "Journey Timeline",
    category: "Glows & Accents",
    defaultValue: "#6de8ff",
    description: "Center glowing dot along the vertical journey timeline",
  },

  // --- F ---
  {
    id: "footerBg",
    label: "Footer Background",
    elementName: "Website Footer",
    category: "Layout & Canvas",
    defaultValue: "#0e1118",
    description: "Background color of the bottom footer area",
  },
  {
    id: "footerBorder",
    label: "Footer Border",
    elementName: "Website Footer",
    category: "Layout & Canvas",
    defaultValue: "rgba(255, 255, 255, 0.08)",
    description: "Top boundary border of the website footer",
  },
  {
    id: "footerText",
    label: "Footer Copyright & Subtext",
    elementName: "Website Footer",
    category: "Typography & Texts",
    defaultValue: "rgba(255, 255, 255, 0.4)",
    description: "Copyright and secondary links text in the footer",
  },

  // --- H ---
  {
    id: "headingGradientEnd",
    label: "Heading Shimmer Gradient End",
    elementName: "Headings Shimmer Text",
    category: "Typography & Texts",
    defaultValue: "#ff9de3",
    description: "Ending color stop of the animated shimmer headline gradient",
  },
  {
    id: "headingGradientMid",
    label: "Heading Shimmer Gradient Middle",
    elementName: "Headings Shimmer Text",
    category: "Typography & Texts",
    defaultValue: "#bea8ff",
    description: "Middle color stop of the animated shimmer headline gradient",
  },
  {
    id: "headingGradientStart",
    label: "Heading Shimmer Gradient Start",
    elementName: "Headings Shimmer Text",
    category: "Typography & Texts",
    defaultValue: "#ffffff",
    description: "Starting color stop of the animated shimmer headline gradient",
  },
  {
    id: "heroChipBg",
    label: "Hero Tech Chips Background",
    elementName: "Hero Section Chips",
    category: "Badges & Pills",
    defaultValue: "rgba(255, 255, 255, 0.05)",
    description: "Background of the floating technology chips in the hero visual",
  },
  {
    id: "heroChipBorder",
    label: "Hero Tech Chips Border",
    elementName: "Hero Section Chips",
    category: "Badges & Pills",
    defaultValue: "rgba(255, 255, 255, 0.12)",
    description: "Border outline of floating tech chips in the hero visual",
  },
  {
    id: "heroChipText",
    label: "Hero Tech Chips Text",
    elementName: "Hero Section Chips",
    category: "Typography & Texts",
    defaultValue: "rgba(255, 255, 255, 0.8)",
    description: "Label text color inside hero technology chips",
  },

  // --- M ---
  {
    id: "metricsCardBg",
    label: "Metrics Counter Card Background",
    elementName: "Stats & Metrics Grid",
    category: "Cards & Containers",
    defaultValue: "rgba(255, 255, 255, 0.045)",
    description: "Background of the quick metrics and statistics cards",
  },
  {
    id: "metricsCardBorder",
    label: "Metrics Counter Card Border",
    elementName: "Stats & Metrics Grid",
    category: "Cards & Containers",
    defaultValue: "rgba(255, 255, 255, 0.1)",
    description: "Border outline of the metrics counter cards",
  },
  {
    id: "metricsValueText",
    label: "Metrics Number Value Text",
    elementName: "Stats & Metrics Grid",
    category: "Typography & Texts",
    defaultValue: "#ffffff",
    description: "Highlighted big number or title text in the metrics cards",
  },

  // --- N ---
  {
    id: "navBarBg",
    label: "Navigation Bar Glass Background",
    elementName: "Top Navigation Bar",
    category: "Layout & Canvas",
    defaultValue: "rgba(18, 18, 18, 0.7)",
    description: "Frosted glass background of the floating top navigation pill",
  },
  {
    id: "navBarBorder",
    label: "Navigation Bar Border",
    elementName: "Top Navigation Bar",
    category: "Layout & Canvas",
    defaultValue: "rgba(255, 255, 255, 0.1)",
    description: "Outer border outline of the floating top navigation bar",
  },
  {
    id: "navLinkHover",
    label: "Navigation Link Hover Pill",
    elementName: "Top Navigation Bar",
    category: "Buttons & Actions",
    defaultValue: "rgba(255, 255, 255, 0.1)",
    description: "Background pill color when hovering over navigation links",
  },
  {
    id: "navLinkText",
    label: "Navigation Link Text",
    elementName: "Top Navigation Bar",
    category: "Typography & Texts",
    defaultValue: "rgba(255, 255, 255, 0.6)",
    description: "Default color of link items in the top navigation bar",
  },

  // --- P ---
  {
    id: "pinkGlow",
    label: "Pink Glow Radial Accent",
    elementName: "Pink Glow Ambient",
    category: "Glows & Accents",
    defaultValue: "#ff6ad5",
    description: "Tertiary pink accent color for ambient glows and highlights",
  },
  {
    id: "profileCardAura",
    label: "Profile Card Behind Radial Aura",
    elementName: "3D Profile Card",
    category: "Glows & Accents",
    defaultValue: "rgba(125, 190, 255, 0.67)",
    description: "Color of the mouse-following glowing aura behind the 3D Profile Card",
  },
  {
    id: "profileCardBg",
    label: "Profile 3D Card Background",
    elementName: "3D Profile Card",
    category: "Cards & Containers",
    defaultValue: "rgba(15, 18, 25, 0.95)",
    description: "Card face surface background of the holographic 3D Profile Card",
  },
  {
    id: "profileCardBorder",
    label: "Profile 3D Card Border",
    elementName: "3D Profile Card",
    category: "Cards & Containers",
    defaultValue: "rgba(255, 255, 255, 0.15)",
    description: "Border outline around the 3D Profile Card",
  },
  {
    id: "projectCardBg",
    label: "Project Card Background",
    elementName: "Projects Showcase Grid",
    category: "Cards & Containers",
    defaultValue: "rgba(255, 255, 255, 0.04)",
    description: "Surface background for project showcase cards",
  },
  {
    id: "projectCardBorder",
    label: "Project Card Border",
    elementName: "Projects Showcase Grid",
    category: "Cards & Containers",
    defaultValue: "rgba(255, 255, 255, 0.1)",
    description: "Border outline for project showcase cards",
  },
  {
    id: "projectCardGlow",
    label: "Project Card Hover Glow",
    elementName: "Projects Showcase Grid",
    category: "Glows & Accents",
    defaultValue: "rgba(109, 232, 255, 0.2)",
    description: "Radial glow that follows the cursor on project cards",
  },
  {
    id: "projectCardTitle",
    label: "Project Card Title Text",
    elementName: "Projects Showcase Grid",
    category: "Typography & Texts",
    defaultValue: "#ffffff",
    description: "Project title heading in project showcase cards",
  },
  {
    id: "projectTagBg",
    label: "Project Tech Badge Background",
    elementName: "Projects Showcase Grid",
    category: "Badges & Pills",
    defaultValue: "rgba(255, 255, 255, 0.06)",
    description: "Background of tech stack badges in project cards",
  },
  {
    id: "projectTagBorder",
    label: "Project Tech Badge Border",
    elementName: "Projects Showcase Grid",
    category: "Badges & Pills",
    defaultValue: "rgba(255, 255, 255, 0.1)",
    description: "Border of tech stack badges in project cards",
  },
  {
    id: "projectTagText",
    label: "Project Tech Badge Text",
    elementName: "Projects Showcase Grid",
    category: "Typography & Texts",
    defaultValue: "rgba(255, 255, 255, 0.75)",
    description: "Text color inside tech stack badges in project cards",
  },

  // --- R ---
  {
    id: "researchCardBg",
    label: "Research Card Background",
    elementName: "Research Papers Grid",
    category: "Cards & Containers",
    defaultValue: "rgba(255, 255, 255, 0.04)",
    description: "Card background for academic research publications",
  },
  {
    id: "researchCardBorder",
    label: "Research Card Border",
    elementName: "Research Papers Grid",
    category: "Cards & Containers",
    defaultValue: "rgba(255, 255, 255, 0.1)",
    description: "Border outline for academic research cards",
  },
  {
    id: "researchTagColor",
    label: "Research Tag & Venue Accent",
    elementName: "Research Papers Grid",
    category: "Badges & Pills",
    defaultValue: "#a986ff",
    description: "Accent color for research conference venue and status tags",
  },

  // --- S ---
  {
    id: "scrollSelectionBg",
    label: "Text Highlight Selection Background",
    elementName: "Global Text Selection",
    category: "Glows & Accents",
    defaultValue: "rgba(109, 232, 255, 0.35)",
    description: "Background color when selecting / highlighting text with cursor",
  },
  {
    id: "scrollSelectionText",
    label: "Text Highlight Selection Text",
    elementName: "Global Text Selection",
    category: "Typography & Texts",
    defaultValue: "#ffffff",
    description: "Text color when text is selected on the website",
  },
  {
    id: "serviceCardBg",
    label: "Service Offering Card Background",
    elementName: "Services Section Grid",
    category: "Cards & Containers",
    defaultValue: "rgba(255, 255, 255, 0.04)",
    description: "Surface card background for engineering service offerings",
  },
  {
    id: "serviceCardBorder",
    label: "Service Offering Card Border",
    elementName: "Services Section Grid",
    category: "Cards & Containers",
    defaultValue: "rgba(255, 255, 255, 0.1)",
    description: "Border outline for service offering cards",
  },
  {
    id: "serviceIconGlow",
    label: "Service Icon Box Glow",
    elementName: "Services Section Grid",
    category: "Glows & Accents",
    defaultValue: "rgba(109, 232, 255, 0.3)",
    description: "Glow accent around the service icon container",
  },
  {
    id: "skillPillBg",
    label: "Skill Pills Background",
    elementName: "Skills Cloud & Marquee",
    category: "Badges & Pills",
    defaultValue: "rgba(255, 255, 255, 0.06)",
    description: "Background of skill pills in the skills cloud and marquee",
  },
  {
    id: "skillPillBorder",
    label: "Skill Pills Border",
    elementName: "Skills Cloud & Marquee",
    category: "Badges & Pills",
    defaultValue: "rgba(255, 255, 255, 0.1)",
    description: "Border outline of skill pills in skills section",
  },
  {
    id: "skillPillHoverBg",
    label: "Skill Pills Hover Background",
    elementName: "Skills Cloud & Marquee",
    category: "Badges & Pills",
    defaultValue: "rgba(109, 232, 255, 0.1)",
    description: "Background color when hovering over a skill pill",
  },
  {
    id: "skillPillHoverBorder",
    label: "Skill Pills Hover Border Glow",
    elementName: "Skills Cloud & Marquee",
    category: "Badges & Pills",
    defaultValue: "rgba(109, 232, 255, 0.4)",
    description: "Border color when hovering over a skill pill",
  },
  {
    id: "skillPillText",
    label: "Skill Pills Text",
    elementName: "Skills Cloud & Marquee",
    category: "Typography & Texts",
    defaultValue: "rgba(255, 255, 255, 0.75)",
    description: "Text label color inside skill pills",
  },

  // --- T ---
  {
    id: "textAccent",
    label: "Highlight / Accent Text",
    elementName: "Accent Typography",
    category: "Typography & Texts",
    defaultValue: "#6de8ff",
    description: "High-emphasis cyan accent text for links, icons, and callouts",
  },
  {
    id: "textMuted",
    label: "Muted Microcopy & Subtitles",
    elementName: "Muted Typography",
    category: "Typography & Texts",
    defaultValue: "rgba(255, 255, 255, 0.4)",
    description: "Low-emphasis muted text for timestamps, labels, and footer notes",
  },
  {
    id: "textPrimary",
    label: "Primary Body & Heading Text",
    elementName: "Primary Typography",
    category: "Typography & Texts",
    defaultValue: "#ffffff",
    description: "Primary high-contrast text color for headings and main body text",
  },
  {
    id: "textSecondary",
    label: "Secondary Paragraph & Subtitle Text",
    elementName: "Secondary Typography",
    category: "Typography & Texts",
    defaultValue: "rgba(255, 255, 255, 0.7)",
    description: "Secondary text color for descriptive paragraphs and subtitles",
  },

  // --- V ---
  {
    id: "violetGlow",
    label: "Violet Glow Secondary Accent",
    elementName: "Violet Glow Ambient",
    category: "Glows & Accents",
    defaultValue: "#a986ff",
    description: "Secondary purple/violet cyber glow accent",
  },

  // --- W (Website Background additions for direct discovery) ---
  {
    id: "websiteBgColor",
    label: "Website Background Color (Main Page Canvas)",
    elementName: "Website Main Canvas",
    category: "Layout & Canvas",
    defaultValue: "#121212",
    description: "Main solid background color of the entire website and HTML body",
  },
  {
    id: "websiteBgGradientTop",
    label: "Website Background Gradient (Top Lighting Highlight)",
    elementName: "Website Ambient Lighting",
    category: "Layout & Canvas",
    defaultValue: "rgba(255, 255, 255, 0.035)",
    description: "Radial highlight gradient illuminating the upper hero of the website",
  },
  {
    id: "websiteBgGradientBottom",
    label: "Website Background Gradient (Bottom Shadow Vignette)",
    elementName: "Website Ambient Lighting",
    category: "Layout & Canvas",
    defaultValue: "rgba(18, 18, 18, 0.85)",
    description: "Deep bottom gradient overlay shading the lower page sections",
  },
  {
    id: "websiteBgOrbLeft",
    label: "Website Background Ambient Glow Orb (Left)",
    elementName: "Website Ambient Orbs",
    category: "Glows & Accents",
    defaultValue: "rgba(71, 85, 105, 0.15)",
    description: "Floating ambient colored glow cloud in the left background",
  },
  {
    id: "websiteBgOrbRight",
    label: "Website Background Ambient Glow Orb (Right)",
    elementName: "Website Ambient Orbs",
    category: "Glows & Accents",
    defaultValue: "rgba(30, 58, 138, 0.20)",
    description: "Floating ambient colored glow cloud in the right background",
  },
];

// Build default theme colors map
export const DEFAULT_THEME_COLORS: Record<string, string> = THEME_COLOR_ELEMENTS.reduce(
  (acc, item) => {
    acc[item.id] = item.defaultValue;
    return acc;
  },
  {} as Record<string, string>
);

// Helper to convert hex or rgba strings into "r g b" format for Tailwind opacity modifiers
export function hexOrRgbToRgbNumbers(colorStr: string): string {
  if (!colorStr) return "18 18 18";
  const str = colorStr.trim();
  if (str.startsWith("#")) {
    let hex = str.slice(1);
    if (hex.length === 3) {
      hex = hex.split("").map((c) => c + c).join("");
    }
    const num = parseInt(hex.slice(0, 6), 16);
    if (!isNaN(num)) {
      const r = (num >> 16) & 255;
      const g = (num >> 8) & 255;
      const b = num & 255;
      return `${r} ${g} ${b}`;
    }
  }
  const rgbMatch = str.match(/rgba?\((\d+)[,\s]+(\d+)[,\s]+(\d+)/i);
  if (rgbMatch) {
    return `${rgbMatch[1]} ${rgbMatch[2]} ${rgbMatch[3]}`;
  }
  return "18 18 18";
}

// Sample JSON Template with placeholder demonstration
export const SAMPLE_JSON_TEMPLATE = JSON.stringify(
  {
    websiteBgColor: "#0d1117",
    websiteBgGradientTop: "rgba(255, 255, 255, 0.04)",
    websiteBgGradientBottom: "rgba(13, 17, 23, 0.9)",
    cardGrayBg: "rgba(22, 27, 34, 0.75)",
    cardGradientStart: "rgba(255, 255, 255, 0.12)",
    cardGradientEnd: "rgba(255, 255, 255, 0.03)",
    cardGlowTopLeft: "rgba(0, 240, 255, 0.18)",
    cardGlowBottomRight: "rgba(139, 92, 246, 0.16)",
    cardBoxBorder: "rgba(48, 54, 61, 0.7)",
    cyanGlow: "#00f0ff",
    violetGlow: "#8b5cf6",
    pinkGlow: "#ec4899",
    textPrimary: "#f0f6fc",
    textSecondary: "#8b949e",
    buttonPrimaryBg: "#00f0ff",
    buttonPrimaryText: "#0d1117",
  },
  null,
  2
);

// Dynamic CSS generator that maps every element to CSS variables and element rules
export function generateThemeCSS(colors: Record<string, string>): string {
  const c = { ...DEFAULT_THEME_COLORS, ...colors };

  // Sync aliases
  const websiteBg = c.websiteBgColor || c.bodyBg || "#121212";
  const cardGray = c.cardGrayBg || c.cardBoxBg || "rgba(255, 255, 255, 0.045)";

  const inkRgb = hexOrRgbToRgbNumbers(websiteBg);
  const cyanRgb = hexOrRgbToRgbNumbers(c.cyanGlow);
  const violetRgb = hexOrRgbToRgbNumbers(c.violetGlow);
  const pinkRgb = hexOrRgbToRgbNumbers(c.pinkGlow);

  return `
:root {
  --color-ink: ${websiteBg};
  --color-ink-rgb: ${inkRgb};
  --color-panel: ${cardGray};
  --color-line: ${c.cardBoxBorder || "rgba(255, 255, 255, 0.10)"};
  --color-cyan-glow: ${c.cyanGlow};
  --color-cyan-glow-rgb: ${cyanRgb};
  --color-violet-glow: ${c.violetGlow};
  --color-violet-glow-rgb: ${violetRgb};
  --color-pink-glow: ${c.pinkGlow};
  --color-pink-glow-rgb: ${pinkRgb};

  /* Website Background & Ambient Lighting */
  --theme-website-bg: ${websiteBg};
  --theme-bg-gradient-top: ${c.websiteBgGradientTop || "rgba(255, 255, 255, 0.035)"};
  --theme-bg-gradient-bottom: ${c.websiteBgGradientBottom || "rgba(18, 18, 18, 0.85)"};
  --theme-bg-orb-1: ${c.websiteBgOrbLeft || "rgba(71, 85, 105, 0.15)"};
  --theme-bg-orb-2: ${c.websiteBgOrbRight || "rgba(30, 58, 138, 0.20)"};

  /* Card Div (Gray Surface & Gradient Style) */
  --theme-card-gray-bg: ${cardGray};
  --theme-card-gradient-start: ${c.cardGradientStart || "rgba(255, 255, 255, 0.115)"};
  --theme-card-gradient-end: ${c.cardGradientEnd || "rgba(255, 255, 255, 0.035)"};
  --theme-card-glow-tl: ${c.cardGlowTopLeft || "rgba(109, 232, 255, 0.16)"};
  --theme-card-glow-br: ${c.cardGlowBottomRight || "rgba(169, 134, 255, 0.15)"};
  --theme-card-border: ${c.cardBoxBorder || "rgba(255, 255, 255, 0.12)"};
  --theme-card-shadow: ${c.cardBoxShadow || "rgba(0, 0, 0, 0.35)"};

  --theme-about-card-bg: ${c.aboutCardBg};
  --theme-about-card-border: ${c.aboutCardBorder};
  --theme-about-card-glow: ${c.aboutCardHoverGlow};
  --theme-about-card-text: ${c.aboutCardText};
  --theme-about-card-title: ${c.aboutCardTitle};

  --theme-badge-bg: ${c.availabilityBadgeBg};
  --theme-badge-border: ${c.availabilityBadgeBorder};
  --theme-badge-dot: ${c.availabilityBadgeDot};
  --theme-badge-text: ${c.availabilityBadgeText};

  --theme-btn-pri-bg: ${c.buttonPrimaryBg};
  --theme-btn-pri-border: ${c.buttonPrimaryBorder};
  --theme-btn-pri-glow: ${c.buttonPrimaryGlow};
  --theme-btn-pri-hover-bg: ${c.buttonPrimaryHoverBg};
  --theme-btn-pri-text: ${c.buttonPrimaryText};

  --theme-btn-sec-bg: ${c.buttonSecondaryBg};
  --theme-btn-sec-border: ${c.buttonSecondaryBorder};
  --theme-btn-sec-hover-bg: ${c.buttonSecondaryHoverBg};
  --theme-btn-sec-text: ${c.buttonSecondaryText};

  --theme-code-bg: ${c.codeSnippetBg};
  --theme-code-border: ${c.codeSnippetBorder};
  --theme-code-comment: ${c.codeSnippetComment};
  --theme-code-header-bg: ${c.codeSnippetHeaderBg};
  --theme-code-keyword: ${c.codeSnippetKeyword};
  --theme-code-string: ${c.codeSnippetString};
  --theme-code-text: ${c.codeSnippetText};

  --theme-contact-card-bg: ${c.contactCardBg};
  --theme-contact-card-border: ${c.contactCardBorder};
  --theme-contact-input-bg: ${c.contactInputBg};
  --theme-contact-input-border: ${c.contactInputBorder};
  --theme-contact-input-focus: ${c.contactInputFocus};
  --theme-contact-input-text: ${c.contactInputText};
  --theme-contact-submit-bg: ${c.contactSubmitBg};
  --theme-contact-submit-border: ${c.contactSubmitBorder};
  --theme-contact-submit-text: ${c.contactSubmitText};

  --theme-divider: ${c.dividerLines};

  --theme-exp-card-bg: ${c.experienceCardBg};
  --theme-exp-card-border: ${c.experienceCardBorder};
  --theme-exp-date: ${c.experienceDateBadge};
  --theme-exp-line: ${c.experienceLine};
  --theme-exp-node: ${c.experienceNode};

  --theme-footer-bg: ${c.footerBg};
  --theme-footer-border: ${c.footerBorder};
  --theme-footer-text: ${c.footerText};

  --theme-heading-start: ${c.headingGradientStart};
  --theme-heading-mid: ${c.headingGradientMid};
  --theme-heading-end: ${c.headingGradientEnd};

  --theme-hero-chip-bg: ${c.heroChipBg};
  --theme-hero-chip-border: ${c.heroChipBorder};
  --theme-hero-chip-text: ${c.heroChipText};

  --theme-metrics-bg: ${c.metricsCardBg};
  --theme-metrics-border: ${c.metricsCardBorder};
  --theme-metrics-val: ${c.metricsValueText};

  --theme-navbar-bg: ${c.navBarBg};
  --theme-navbar-border: ${c.navBarBorder};
  --theme-nav-link-hover: ${c.navLinkHover};
  --theme-nav-link-text: ${c.navLinkText};

  --theme-profile-aura: ${c.profileCardAura};
  --theme-profile-bg: ${c.profileCardBg};
  --theme-profile-border: ${c.profileCardBorder};

  --theme-proj-bg: ${c.projectCardBg};
  --theme-proj-border: ${c.projectCardBorder};
  --theme-proj-glow: ${c.projectCardGlow};
  --theme-proj-title: ${c.projectCardTitle};
  --theme-proj-tag-bg: ${c.projectTagBg};
  --theme-proj-tag-border: ${c.projectTagBorder};
  --theme-proj-tag-text: ${c.projectTagText};

  --theme-research-bg: ${c.researchCardBg};
  --theme-research-border: ${c.researchCardBorder};
  --theme-research-tag: ${c.researchTagColor};

  --theme-selection-bg: ${c.scrollSelectionBg};
  --theme-selection-text: ${c.scrollSelectionText};

  --theme-svc-bg: ${c.serviceCardBg};
  --theme-svc-border: ${c.serviceCardBorder};
  --theme-svc-icon-glow: ${c.serviceIconGlow};

  --theme-skill-bg: ${c.skillPillBg};
  --theme-skill-border: ${c.skillPillBorder};
  --theme-skill-hover-bg: ${c.skillPillHoverBg};
  --theme-skill-hover-border: ${c.skillPillHoverBorder};
  --theme-skill-text: ${c.skillPillText};

  --theme-text-accent: ${c.textAccent};
  --theme-text-muted: ${c.textMuted};
  --theme-text-pri: ${c.textPrimary};
  --theme-text-sec: ${c.textSecondary};

  /* 3D profile card ambient glow */
  --behind-glow-color: ${c.profileCardAura};
}

/* Global Canvas & Website Background */
html, body, main {
  background-color: var(--theme-website-bg, var(--color-ink, #121212)) !important;
  color: var(--theme-text-pri) !important;
}

::selection {
  background: var(--theme-selection-bg) !important;
  color: var(--theme-selection-text) !important;
}

/* Text Shimmer Gradient */
.text-gradient {
  background: linear-gradient(90deg, var(--theme-heading-start) 0%, var(--theme-heading-mid) 50%, var(--theme-heading-end) 100%) !important;
  background-size: 200% auto !important;
  -webkit-background-clip: text !important;
  background-clip: text !important;
  color: transparent !important;
}

/* Glass Card Divs (Black Surface Matching Stats Cards) */
.glass-card {
  position: relative !important;
  overflow: hidden !important;
  border: 1px solid var(--theme-card-border, rgba(255, 255, 255, 0.10)) !important;
  background: var(--theme-card-gray-bg, rgba(255, 255, 255, 0.045)) !important;
  box-shadow: 0 24px 80px var(--theme-card-shadow, rgba(0, 0, 0, 0.35)) !important;
  backdrop-filter: blur(24px) !important;
  -webkit-backdrop-filter: blur(24px) !important;
}

/* Navigation Bar */
header nav {
  background-color: var(--theme-navbar-bg) !important;
  border-color: var(--theme-navbar-border) !important;
}
header nav a:not([class*="bg-cyanGlow"]):not([class*="bg-amber"]) {
  color: var(--theme-nav-link-text) !important;
}
header nav a:hover:not([class*="bg-cyanGlow"]) {
  background-color: var(--theme-nav-link-hover) !important;
}

/* Hero Availability Badge */
.hero-availability-badge {
  background-color: var(--theme-badge-bg) !important;
  border-color: var(--theme-badge-border) !important;
  color: var(--theme-badge-text) !important;
}
.hero-availability-badge .badge-dot {
  background-color: var(--theme-badge-dot) !important;
}

/* Skill Pills */
.skill-pill {
  background-color: var(--theme-skill-bg) !important;
  border-color: var(--theme-skill-border) !important;
  color: var(--theme-skill-text) !important;
}
.skill-pill:hover {
  background-color: var(--theme-skill-hover-bg) !important;
  border-color: var(--theme-skill-hover-border) !important;
}

/* Code Snippet Card */
.hero-code-card {
  background-color: var(--theme-code-bg) !important;
  border-color: var(--theme-code-border) !important;
}
.hero-code-topbar {
  background-color: var(--theme-code-header-bg) !important;
}
.hero-code-card .code-keyword {
  color: var(--theme-code-keyword) !important;
}
.hero-code-card .code-string {
  color: var(--theme-code-string) !important;
}
.hero-code-card .code-comment {
  color: var(--theme-code-comment) !important;
}
.hero-code-card .code-text {
  color: var(--theme-code-text) !important;
}

/* Timeline in Journey */
.timeline-line {
  background: linear-gradient(to bottom, transparent, var(--theme-exp-line), transparent) !important;
}

/* Contact Form Inputs */
#contact-form input,
#contact-form select,
#contact-form textarea {
  background-color: var(--theme-contact-input-bg) !important;
  border-color: var(--theme-contact-input-border) !important;
  color: var(--theme-contact-input-text) !important;
}
#contact-form input:focus,
#contact-form select:focus,
#contact-form textarea:focus {
  border-color: var(--theme-contact-input-focus) !important;
  box-shadow: 0 0 16px var(--theme-contact-input-focus) !important;
}
#contact-form button[type="submit"] {
  background-color: var(--theme-contact-submit-bg) !important;
  border-color: var(--theme-contact-submit-border) !important;
  color: var(--theme-contact-submit-text) !important;
}

/* Buttons */
.btn-variant-primary {
  background-color: var(--theme-btn-pri-bg) !important;
  border-color: var(--theme-btn-pri-border) !important;
  color: var(--theme-btn-pri-text) !important;
  box-shadow: 0 0 35px var(--theme-btn-pri-glow) !important;
}
.btn-variant-primary:hover {
  background-color: var(--theme-btn-pri-hover-bg) !important;
}

.btn-variant-secondary {
  background-color: var(--theme-btn-sec-bg) !important;
  border-color: var(--theme-btn-sec-border) !important;
  color: var(--theme-btn-sec-text) !important;
}
.btn-variant-secondary:hover {
  background-color: var(--theme-btn-sec-hover-bg) !important;
}

.btn-variant-ghost {
  background-color: var(--theme-btn-sec-bg) !important;
  border-color: var(--theme-btn-sec-border) !important;
  color: var(--theme-btn-sec-text) !important;
}
.btn-variant-ghost:hover {
  background-color: var(--theme-btn-sec-hover-bg) !important;
}

/* Project Cards & Tags */
.project-card {
  border-color: var(--theme-proj-border, var(--theme-card-border)) !important;
}
.project-card h3 {
  color: var(--theme-proj-title) !important;
}
.project-card .project-tag {
  background-color: var(--theme-proj-tag-bg) !important;
  border-color: var(--theme-proj-tag-border) !important;
  color: var(--theme-proj-tag-text) !important;
}

/* About Cards */
#about .about-highlight-card h3 {
  color: var(--theme-about-card-title) !important;
}
#about .about-highlight-card p {
  color: var(--theme-about-card-text) !important;
}

/* 3D Profile Card Face */
.pc-card {
  background-color: var(--theme-profile-bg) !important;
  border-color: var(--theme-profile-border) !important;
}

/* Website Footer */
footer {
  background-color: var(--theme-footer-bg) !important;
  border-color: var(--theme-footer-border) !important;
}
footer p, footer span, footer a {
  color: var(--theme-footer-text);
}
`;
}
