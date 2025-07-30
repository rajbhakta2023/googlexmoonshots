# Deployment Instructions

## GitHub Push

If the automatic Git push is not working, please manually push the code to GitHub:

```bash
# Add all files
git add .

# Commit changes
git commit -m "Initial commit: Google X Moonshots landing page"

# Add remote origin (if not already added)
git remote add origin https://github.com/rajbhakta2023/googlexmoonshots.git

# Push to GitHub
git push -u origin main
```

## Vercel Deployment

1. Go to [Vercel](https://vercel.com)
2. Sign in with your GitHub account
3. Click "New Project"
4. Import the repository: `rajbhakta2023/googlexmoonshots`
5. Vercel will automatically detect it's a Next.js project
6. Click "Deploy"

The project will be automatically deployed to: `https://google-x-moonshots.vercel.app`

## Local Development

To run the project locally:

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main landing page with all projects
│   └── globals.css         # Global styles and Tailwind
├── components/
│   └── ProjectPolymath.tsx # Individual project component
├── package.json            # Dependencies and scripts
├── tailwind.config.js      # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
├── next.config.js         # Next.js configuration
└── postcss.config.js      # PostCSS configuration
```

## Features

- ✅ Interactive calculators for each project
- ✅ Responsive design with Tailwind CSS
- ✅ Video backgrounds for atmospheric effect
- ✅ Smooth navigation between projects
- ✅ Real-time financial impact modeling
- ✅ Dark theme throughout

## Projects Included

1. **Project Polymath** - AI-Powered Polymer Design
2. **Project Nimbus** - AI Geoengineering for Climate Defense
3. **Project Axon** - Brain-Silicon Hybrids (to be added)
4. **Project Hatch** - AI-Driven Genomics (to be added)
5. **Project Reveel** - Sustainable Apparel Revolution (to be added)
6. **Project W-Health** - Holistic Health Optimization (to be added)

## Next Steps

1. Complete the remaining project pages (Axon, Hatch, Reveel, W-Health)
2. Add more interactive features
3. Optimize for performance
4. Add analytics tracking 