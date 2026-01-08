# Suarez Cleaning Services - Setup Guide

## 🚨 Quick Fix Steps

### Step 1: Update Dependencies
Replace your `package.json` with the updated one I just provided, then run:

```bash
rm -rf node_modules package-lock.json
npm install
```

### Step 2: Create Components Folder
```bash
mkdir components
```

### Step 3: Create Component Files
Create these 6 files inside the `components/` folder:

**Create: `components/Header.tsx`**
**Create: `components/Hero.tsx`**
**Create: `components/Services.tsx`**
**Create: `components/WhyUs.tsx`**
**Create: `components/Areas.tsx`**
**Create: `components/Footer.tsx`**

Copy the content I provided for each component into these files.

### Step 4: Update Config Files
Replace these files with my updated versions:
- `postcss.config.mjs` ✅
- `tailwind.config.ts` ✅
- `package.json` ✅

### Step 5: Move Images
```bash
mkdir -p public/images
```

Copy all your images into `public/images/`:
- SuarezCS_logo.png
- SuarezCS_office.png
- SuarezCS_night_Janitor.png
- SuarezCS_Floor_care.png
- SuarezCS_post construction.png (note the space in filename)
- SuarezCS_movein_out.png
- SuarezCS_Janitor.png

### Step 6: Run the Project
```bash
npm run dev
```

## 📁 Your Folder Structure Should Look Like This:

```
suarez-cleaning/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts
│   ├── contact/
│   │   └── page.tsx
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/              ← CREATE THIS FOLDER!
│   ├── Areas.tsx           ← CREATE THESE FILES!
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Services.tsx
│   └── WhyUs.tsx
├── public/
│   └── images/             ← CREATE THIS FOLDER!
│       ├── SuarezCS_logo.png
│       ├── SuarezCS_office.png
│       ├── SuarezCS_night_Janitor.png
│       ├── SuarezCS_Floor_care.png
│       ├── SuarezCS_post construction.png
│       ├── SuarezCS_movein_out.png
│       └── SuarezCS_Janitor.png
├── .gitignore
├── eslint.config.mjs
├── next.config.js
├── package.json            ← UPDATE THIS!
├── postcss.config.mjs      ← UPDATE THIS!
├── tailwind.config.ts      ← UPDATE THIS!
└── tsconfig.json
```

## ✅ Checklist

- [ ] Updated `package.json`
- [ ] Updated `postcss.config.mjs`
- [ ] Updated `tailwind.config.ts`
- [ ] Created `components/` folder
- [ ] Created all 6 component files inside `components/`
- [ ] Created `public/images/` folder
- [ ] Copied all images to `public/images/`
- [ ] Ran `rm -rf node_modules package-lock.json`
- [ ] Ran `npm install`
- [ ] Ran `npm run dev`

## 🎯 What Changed

**Tailwind CSS v4**: Next.js 15 uses Tailwind v4 which requires:
- `@tailwindcss/postcss` plugin instead of `tailwindcss` plugin
- Updated `postcss.config.mjs`

**Components**: You need to physically create the `components/` folder and copy each component file into it.

## 🐛 Still Having Issues?

1. **Make sure components folder exists**:
   ```bash
   ls components/
   ```
   Should show: Areas.tsx, Footer.tsx, Header.tsx, Hero.tsx, Services.tsx, WhyUs.tsx

2. **Clear cache**:
   ```bash
   rm -rf .next
   npm run dev
   ```

3. **Check file names match exactly** (case-sensitive!)

You're almost there! Just need to create the components folder and files. 🚀