# Icon Components (SVG Based)
This project uses **functional React components** for icons.  
All icons are implemented with **inline SVG** to ensure full control over size, color, and styling.

---

## 🎯 Guidelines
1. Each icon must be a **standalone React functional component**.  
2. The component accepts two props:
   - `size` → defines the width/height of the SVG.  
   - `className` → allows custom styling via Tailwind or CSS classes.  
3. All raw **SVG files** should be stored inside: `/public/icons/`
This keeps the source files organized and accessible for both developers and designers.

---

> Note: The implementation idea is inspired by the popular **`react-icons`** library, but customized for better control, scalability, and direct SVG usage within our project.