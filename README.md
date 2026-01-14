# 🧸 ToyStore

A modern, responsive toy store website built with React and Tailwind CSS. This project showcases a beautiful e-commerce frontend for a toy store, featuring an interactive slider, product cards, and contact information.

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=flat-square&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.18-38B2AC?style=flat-square&logo=tailwind-css)
![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?style=flat-square&logo=vite)

## ✨ Features

- **Responsive Design** - Fully responsive layout that works on mobile, tablet, and desktop
- **Image Slider** - Auto-playing carousel showcasing featured toys using Swiper.js
- **Product Cards** - Beautiful cards displaying toy categories with images and descriptions
- **Contact Section** - Contact information with location details
- **Modern UI** - Clean and modern user interface with Tailwind CSS styling

## 🛠️ Tech Stack

- **Frontend Framework:** React 19
- **Styling:** Tailwind CSS 4
- **Build Tool:** Vite 7
- **Slider:** Swiper.js 12
- **Package Manager:** npm

## 📁 Project Structure

```
ToyStore/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Card/
│   │   │   ├── CardContext.jsx
│   │   │   ├── CardList.jsx
│   │   │   └── data.js
│   │   ├── Contact/
│   │   │   └── ContactList.jsx
│   │   └── Slider/
│   │       └── SliderList.jsx
│   ├── layouts/
│   │   └── LayoutRoot.jsx
│   ├── pages/
│   │   └── HomePage.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── eslint.config.js
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/toystore.git
   cd toystore
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

## 📜 Available Scripts

| Command           | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Start development server |
| `npm run build`   | Build for production     |
| `npm run preview` | Preview production build |
| `npm run lint`    | Run ESLint               |

## 🎨 Components

### Header

Navigation component with links to Home, Toys, and Contact sections.

### SliderList

An auto-playing image carousel featuring highlighted toys and promotions.

### CardList

A responsive grid of product cards showcasing different toy categories:

- **Educational** - Wooden train sets and learning toys
- **Electronic** - RC cars and electronic gadgets
- **Plush** - Soft toys and teddy bears

### ContactList

Contact information section with location, email, and phone details.

## 📸 Screenshots

The website features:

- A hero slider with rotating toy images
- Product category cards with toy images
- A clean contact section

## 🤝 Contributing

Contributions are welcome! Feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Made with ❤️ for MBO Utrecht - Frontend Development Course
