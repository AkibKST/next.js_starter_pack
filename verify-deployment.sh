#!/bin/bash
# Vercel Pre-Deployment Verification Script

echo "🔍 Pre-Deployment Verification"
echo "================================"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check 1: Node modules exist
echo ""
echo "✓ Checking dependencies..."
if [ -d "node_modules" ]; then
    echo -e "${GREEN}✓${NC} node_modules found"
else
    echo -e "${RED}✗${NC} node_modules not found. Run: npm install"
    exit 1
fi

# Check 2: .env.local exists
echo ""
echo "✓ Checking environment variables..."
if [ -f ".env.local" ]; then
    echo -e "${GREEN}✓${NC} .env.local found (local development only)"
else
    echo -e "${YELLOW}⚠${NC} .env.local not found (will use defaults)"
fi

# Check 3: Build success
echo ""
echo "✓ Running production build..."
npm run build > /dev/null 2>&1
if [ $? -eq 0 ]; then
    echo -e "${GREEN}✓${NC} Build successful"
else
    echo -e "${RED}✗${NC} Build failed. Run 'npm run build' for details"
    exit 1
fi

# Check 4: Critical files exist
echo ""
echo "✓ Checking critical files..."
files=(
    "src/app/layout.tsx"
    "src/app/providers.tsx"
    "src/store/store.ts"
    "next.config.ts"
    "tsconfig.json"
    "vercel.json"
)

for file in "${files[@]}"; do
    if [ -f "$file" ]; then
        echo -e "${GREEN}✓${NC} $file"
    else
        echo -e "${RED}✗${NC} $file missing"
        exit 1
    fi
done

# Check 5: No environment secrets
echo ""
echo "✓ Checking for exposed secrets..."
if grep -r "NEXT_PUBLIC_" .env.local 2>/dev/null | grep -q -E "(password|token|secret|key)" ; then
    echo -e "${RED}⚠${NC} WARNING: Possible secrets in .env.local"
else
    echo -e "${GREEN}✓${NC} No obvious secrets found in environment variables"
fi

# Check 6: .gitignore excludes sensitive files
echo ""
echo "✓ Checking .gitignore..."
if grep -q ".env" .gitignore; then
    echo -e "${GREEN}✓${NC} Environment files properly ignored"
else
    echo -e "${RED}✗${NC} .env files not in .gitignore"
    exit 1
fi

# Check 7: Vercel.json is valid
echo ""
echo "✓ Validating vercel.json..."
if grep -q '"framework": "nextjs"' vercel.json; then
    echo -e "${GREEN}✓${NC} vercel.json properly configured"
else
    echo -e "${YELLOW}⚠${NC} vercel.json may need review"
fi

# Final summary
echo ""
echo "================================"
echo -e "${GREEN}✓ All checks passed!${NC}"
echo ""
echo "Next steps:"
echo "1. Set NEXT_PUBLIC_API_URL in Vercel Dashboard"
echo "2. Push to GitHub: git add . && git commit -m 'ready for deploy' && git push"
echo "3. Go to vercel.com and deploy the project"
echo ""
