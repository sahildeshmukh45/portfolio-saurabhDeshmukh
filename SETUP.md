# Quick Setup Guide

## Prerequisites
Make sure you have Node.js installed on your system. You can download it from [nodejs.org](https://nodejs.org/)

## Installation Steps

1. **Open Command Prompt or PowerShell** in the project directory

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Start Development Server:**
   ```bash
   npm start
   ```

4. **Alternative - Use the batch file:**
   - Double-click `start.bat` to automatically install and start

## What to Expect

- The portfolio will open at `http://localhost:3000`
- Hot reload is enabled - changes will reflect automatically
- All certificates and images are already in place

## Build for Production

To create a production build:
```bash
npm run build
```

## Troubleshooting

If you encounter any issues:

1. **Clear npm cache:**
   ```bash
   npm cache clean --force
   ```

2. **Delete node_modules and reinstall:**
   ```bash
   rmdir /s node_modules
   npm install
   ```

3. **Check Node.js version:**
   ```bash
   node --version
   npm --version
   ```
   
   Recommended: Node.js 16+ and npm 8+

## Features Included

✅ Dark professional theme with video background  
✅ Responsive design for all devices  
✅ Interactive certificate modals  
✅ Contact form with validation  
✅ Social media integration  
✅ Google Maps integration  
✅ Trading performance metrics  
✅ Professional animations and effects  

The portfolio is ready to use with all of Saurabh's information and certificates!