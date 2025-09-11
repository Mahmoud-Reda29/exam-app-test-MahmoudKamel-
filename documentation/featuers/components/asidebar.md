## Sidebar Component Documentation

### Overview
The `Asidebar` component is responsible for rendering the main sidebar in the application layout. It provides navigational links and user-friendly interactivity designed to enhance the user experience.
---

### Current Features
#### 1. **Auto-closing Dropdowns on Outside Click**
* When the user clicks anywhere **outside an open dropdown menu**, the dropdown will automatically close.
* This behavior ensures better UX by preventing dropdowns from staying open unintentionally.

#### 2. **Active Route Highlighting**
* The sidebar navigation **highlights the active link** that matches the current route.
* Useful for letting users know which section of the app they're currently in.

---

### 🚧 Planned / Upcoming Features

* [ ] Keyboard navigation support for accessibility.
* [ ] Collapsible sidebar with expand/collapse button.
* [ ] Animation effects on open/close.
* [ ] Tooltips for icons when the sidebar is collapsed.
* [ ] Dark mode styling support.
* [ ] Role-based link visibility.

---

### 📁 File Location
src/components/asidebar/Asidebar.tsx

---

### ℹ️ Notes
* The component is built with accessibility in mind and uses semantic HTML with proper ARIA labels.
* Tailwind CSS is used for styling and transition effects.

---

