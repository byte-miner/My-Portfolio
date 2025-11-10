# SEO Setup Guide for Haruki Nakamura Portfolio

## Comprehensive SEO improvements have been implemented to help rank #1 for "Haruki Nakamura" on Google.

---

## ✅ What Has Been Implemented

### 1. **Enhanced Metadata (config/index.ts)**
- ✅ Comprehensive title tags with your name and specialties
- ✅ Rich description including both English and Japanese name (中村 晴輝)
- ✅ 40+ targeted keywords including:
  - Your name variations
  - Technical skills (React, Next.js, TypeScript, Blockchain, Web3, Solidity, Ethereum, Solana)
  - Location-based keywords (Tokyo Developer, Japan Developer)
- ✅ Open Graph tags for social media sharing
- ✅ Twitter Card metadata
- ✅ Robot directives for search engines
- ✅ Multi-language support (English, Japanese, Spanish, Portuguese, Chinese)

### 2. **Structured Data (JSON-LD) in app/layout.tsx**
- ✅ Person Schema with:
  - Your name and alternate name (Japanese)
  - Job title and location (Tokyo, Japan)
  - Skills and expertise
  - Social media profiles
- ✅ Website Schema with language support

### 3. **SEO Files Created**
- ✅ `public/robots.txt` - Tells search engines how to crawl your site
- ✅ `app/sitemap.ts` - Helps search engines discover all your pages
- ✅ `app/projects/layout.tsx` - Metadata for projects page
- ✅ `app/services/layout.tsx` - Metadata for services page

---

## 🔧 Required Actions (Complete These Steps)

### **STEP 1: Update Your Domain**
Replace all instances of `https://harukinakamura.dev` with your actual domain in:
- `config/index.ts` (line 4)
- `app/layout.tsx` (line 29, 69)
- `public/robots.txt` (line 8)
- `app/sitemap.ts` (line 4)

### **STEP 2: Update Social Media Links** ✅ COMPLETED
Your social media links have been updated:
```typescript
sameAs: [
  "https://github.com/byte-miner", // ✅ Already set
  "https://stackoverflow.com/users/31847039/haruki-nakamura", // ✅ Updated
  "https://dev.to/harukin399", // ✅ Updated
  "https://www.linkedin.com/in/haruki-nakamura-384669398/", // ✅ Added
  "https://t.me/YOUR-USERNAME", // ⚠️ Update this if you have Telegram
],
```

### **STEP 3: Add Twitter Handle**
In `config/index.ts` (line 74), replace with your actual Twitter/X handle:
```typescript
creator: "@YOUR-TWITTER-HANDLE",
```

### **STEP 4: Get Google Search Console Verification**
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add your property (your website domain)
3. Get the verification code
4. Add it to `config/index.ts` (line 89):
```typescript
verification: {
  google: "YOUR-VERIFICATION-CODE-HERE",
},
```

### **STEP 5: Create an Optimized Social Media Image**
Create an Open Graph image at `public/images/og-image.png`:
- Recommended size: **1200x630 pixels**
- Include: Your name, photo, and key skills
- Tools: Canva, Figma, or Photoshop

Then update `config/index.ts`:
```typescript
images: [
  {
    url: "/images/og-image.png", // Change from photo.png
    width: 1200,
    height: 630,
    alt: "Haruki Nakamura - Full Stack Developer",
  },
],
```

---

## 🚀 Additional SEO Recommendations

### **6. Submit Your Sitemap to Google**
After deploying:
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add your sitemap URL: `https://yourdomain.com/sitemap.xml`
3. Google will start indexing your pages

### **7. Create Quality Backlinks**
- Add your portfolio to:
  - Your GitHub profile
  - Stack Overflow profile
  - Dev.to profile
  - LinkedIn profile
  - Twitter/X bio
- Contribute to open-source projects and link back to your portfolio

### **8. Content Optimization**
- ✅ Already implemented: Your name appears in multiple prominent places
- ✅ H1 tags contain your name
- ✅ Alt text for images
- Consider writing blog posts about your projects (adds more content with your name)

### **9. Page Speed Optimization**
Your Next.js site is already optimized, but consider:
- Compressing images further
- Using `next/image` for all images (already done ✅)
- Enabling caching on your hosting platform

### **10. Schema Markup Validation**
After deployment, validate your structured data:
1. Go to [Google Rich Results Test](https://search.google.com/test/rich-results)
2. Enter your website URL
3. Fix any errors found

### **11. Local SEO (Tokyo, Japan)**
- Create a Google Business Profile (if applicable)
- Add your location consistently across all platforms
- Use "Tokyo" and "Japan" in your content naturally

### **12. Social Media Presence**
- Share your projects on social media with your name
- Engage with the developer community
- Use your name consistently across all platforms

---

## 📊 Monitoring Your Progress

### **Track Your Rankings**
Use these free tools:
1. **Google Search Console** - See how Google views your site
2. **Google Analytics** - Track visitor behavior
3. **[Ahrefs Webmaster Tools](https://ahrefs.com/webmaster-tools)** - Free SEO analysis
4. **Manual Search** - Search "Haruki Nakamura" in incognito mode regularly

### **Expected Timeline**
- **Week 1-2**: Google will crawl and index your site
- **Month 1**: You'll start appearing in search results
- **Month 2-3**: Rankings will improve as Google assesses your content
- **Month 3+**: With consistent content and backlinks, you should rank #1 for your name

---

## ✅ Checklist

Before deploying, ensure:
- [ ] Updated all domain URLs
- [x] Added real social media links (Stack Overflow, Dev.to, LinkedIn)
- [ ] Added Google Search Console verification code
- [ ] Created optimized OG image (1200x630px)
- [ ] Updated Twitter handle
- [ ] Updated Telegram username (if applicable)
- [ ] Deployed to production
- [ ] Submitted sitemap to Google Search Console
- [ ] Validated structured data with Google Rich Results Test
- [ ] Added portfolio link to all your social media profiles

---

## 🎯 Key SEO Features Implemented

1. **Name Prominence**: "Haruki Nakamura" and "中村 晴輝" appear in:
   - Page titles
   - Meta descriptions
   - H1 headings
   - Structured data
   - Alt text
   - Multiple keywords

2. **Technical SEO**:
   - Proper HTML structure
   - Fast loading (Next.js optimization)
   - Mobile responsive
   - Clean URLs
   - Semantic HTML

3. **Content Quality**:
   - Unique, valuable content
   - Clear expertise demonstration
   - Professional presentation
   - Multi-language support

4. **Link Building Foundation**:
   - Social media integration
   - GitHub profile linked
   - Professional community presence

---

## 📞 Need Help?

If you encounter issues:
1. Check the [Next.js SEO Documentation](https://nextjs.org/learn/seo/introduction-to-seo)
2. Use [Google's SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
3. Validate your implementation with [Google's Testing Tools](https://search.google.com/test/rich-results)

---

**Good luck with your SEO journey! With these optimizations and consistent online presence, you'll rank #1 for "Haruki Nakamura" soon! 🚀**

