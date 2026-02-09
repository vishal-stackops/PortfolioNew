# Personal Portfolio

A modern, responsive personal portfolio website built with React and Tailwind CSS. This application showcases my projects, technical skills, and certifications in an interactive and visually appealing format.

**🔗 Live Demo:** [https://vishal-rajput-portfolio.vercel.app/](https://vishal-rajput-portfolio.vercel.app/)

## 🚀 Features

- **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices.
- **Interactive UI**: Smooth animations and transitions using Framer Motion.
- **Performance Optimized**: Implements **Lazy Loading** for heavy components to ensure fast initial page loads.
- **Modern Tech Stack**: Built with Vite, React, and Tailwind CSS.

## 🛠️ Development Setup

To run this project locally, follow these steps:

### Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd personal-portfolio
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:5173`.

## 📦 Building for Production

To create a production-ready build:

```bash
npm run build
```

This command generates a `dist` folder containing the optimized and minified assets, ready for deployment.

## 🚀 Deployment

### Deploying to Vercel
1.  Push your code to a Git repository (GitHub, GitLab, or Bitbucket).
2.  Sign up or log in to [Vercel](https://vercel.com/).
3.  Click **"Add New..."** and select **"Project"**.
4.  Import your Git repository.
5.  Vercel will detect the framework (Vite/React) and configure the build settings automatically:
    - **Build Command:** `npm run build`
    - **Output Directory:** `dist`
    - **Install Command:** `npm install`
6.  Click **"Deploy"**.
7.  Once deployed, your application will be live!

The `dist` folder can also be deployed to other static site hosting services like GitHub Pages or Netlify.

## 💡 Challenges & Solutions

### Challenge: Initial Load Performance
As the portfolio grew with more projects and high-resolution images, the initial JavaScript bundle size increased, leading to slower First Contentful Paint (FCP) times specially on slower networks.

### Solution: Lazy Loading Implementation
To address this, we implemented **Code Splitting** using `React.lazy` and `Suspense`.

- **Strategy**: 
  - Kept distinct "above-the-fold" components like `Navbar` and `Hero` as standard imports for immediate rendering.
  - Converted heavy "below-the-fold" components (`Skills`, `Projects`, `Certifications`) to lazy-loaded imports.
- **UX Improvement**:
  - Created a custom `Loader` component (a spinning animation) to provide visual feedback while additional chunks are being fetched.
- **Result**:
  - significantly reduced the initial bundle size. 
  - Users now download code for sections only when they are needed, resulting in a faster and smoother browsing experience.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).
