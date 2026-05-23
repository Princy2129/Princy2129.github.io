# 💻 Princy's Tech-Visual Developer Portfolio

A production-ready, ultra-lightweight developer portfolio website featuring a premium **"Tech Visual" (Cyberpunk/Engineer)** aesthetic. Built using pure **HTML5**, **CSS3**, and **vanilla JavaScript**, it is perfectly suited for instant deployment on GitHub Pages without complex compile/build pipelines.

---

## ✨ Features

- 📟 **Auto-Typing Terminal Hero:** A realistic terminal window that emulates a shell interface, typing out bios, diagnostics, and stack details.
- 📐 **Split Layout & Animated Circuit Graphic:** Clean modern typography alongside an interactive, animated circuit board SVG drawing.
- 🏷️ **Categorized Skills Arsenal:** Clean tech badges that organize skills with interactive hover highlights in cyan, purple, and green.
- 🃏 **Glassmorphic Project Cards:** Glass cards featuring neon accent borders that glow and lift on hover.
- 📡 **Ping Server Contact Form:** Clean, glassmorphic contact inputs with dynamic icon indicators, floating highlights, and simulated mock status logs.
- 📱 **Fully Responsive:** Beautifully optimized across mobile devices, tablets, and high-DPI desktop viewports.

---

## 🛠️ Customization Guide

All elements can be customized by editing the core files:

### 1. Personal Bio & Details (`index.html`)
- Open [index.html](file:///d:/Git_profile/Princy2129.github.io/index.html) and search for:
  - `Hi, I'm Princy 👋` (Line 92) - change this to your name.
  - `SYSTEM_DIAGNOSTICS.EXE` parameters (Lines 105-122) - update your current role, experience, focus area, and location.
  - Social Links in the footer (Lines 293-298) - update the `href` tags to point to your GitHub, LinkedIn, Twitter/X, and Email.

### 2. Custom Terminal Text (`script.js`)
- Open [script.js](file:///d:/Git_profile/Princy2129.github.io/script.js) and scroll to `const commands` (Lines 87-93).
- Edit the outputs for the typewriter commands:
  - `cmd1Text` and `output1Text` (your short professional introduction).
  - `cmd2Text` and `output2Text` (your primary technical languages/frameworks).

### 3. Modifying Color Accents (`style.css`)
- Open [style.css](file:///d:/Git_profile/Princy2129.github.io/style.css) and customize variables inside `:root` (Lines 4-33).
- You can change accent gradients and glows by adjusting `--accent-cyan`, `--accent-purple`, and `--accent-green`.

---

## 🚀 Local Development & Testing

Since this project has no build steps, you can test it locally by running a simple server.

Using **Python** (built-in):
```bash
python -m http.server 8000
```
Then open your browser and navigate to `http://localhost:8000`.

Using **Node.js** (via npx):
```bash
npx serve
```
Then open your browser and navigate to `http://localhost:3000`.

---

## 🌎 Deploying to GitHub Pages

Follow these steps to push your portfolio live on GitHub Pages:

### Step 1: Initialize Git and Commit
If this repository isn't already set up with git:
```bash
git init
git add .
git commit -m "feat: initial commit of tech-visual developer portfolio"
```

### Step 2: Push to GitHub
Create a repository on GitHub named `<username>.github.io` (replace `<username>` with your actual GitHub username, e.g. `Princy2129`).
Link the remote repository and push your main branch:
```bash
# Rename branch to main
git branch -M main

# Link remote (replace Princy2129 with your GitHub username)
git remote add origin https://github.com/Princy2129/Princy2129.github.io.git

# Push code to main
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repository settings page on GitHub.
2. In the left sidebar, click on **Pages** (under the "Code and automation" section).
3. Under **Build and deployment**, ensure the **Source** is set to `Deploy from a branch`.
4. Under **Branch**, select `main` (or `master`) and specify the folder as `/ (root)`.
5. Click **Save**.

Your portfolio site will be live at:
**`https://Princy2129.github.io/`** (usually takes 1-2 minutes to deploy).
