#!/bin/bash

# Google X Moonshots Deployment Script

echo "🚀 Starting deployment process..."

# Check if git is initialized
if [ ! -d .git ]; then
    echo "📁 Initializing git repository..."
    git init
fi

# Add all files
echo "📋 Adding files to git..."
git add .

# Commit changes
echo "💾 Committing changes..."
git commit -m "Fix: Remove deprecated appDir flag and implement proper Next.js routing"

# Check if remote exists
if ! git remote get-url origin > /dev/null 2>&1; then
    echo "🔗 Adding GitHub remote..."
    git remote add origin https://github.com/rajbhakta2023/googlexmoonshots.git
fi

# Push to GitHub
echo "⬆️ Pushing to GitHub..."
git push -u origin main

echo "✅ Code pushed to GitHub successfully!"
echo ""
echo "🌐 Next steps:"
echo "1. Go to https://vercel.com"
echo "2. Import project from GitHub: rajbhakta2023/googlexmoonshots"
echo "3. Framework: Next.js"
echo "4. Click Deploy"
echo ""
echo "🎯 Your routes will be:"
echo "- Main page: https://your-domain.vercel.app/"
echo "- Polymath: https://your-domain.vercel.app/polymath"
echo "- Nimbus: https://your-domain.vercel.app/nimbus"
echo "- Axon: https://your-domain.vercel.app/axon"
echo "- Hatch: https://your-domain.vercel.app/hatch"
echo "- Reveel: https://your-domain.vercel.app/reveel"
echo "- W-Health: https://your-domain.vercel.app/w-health"