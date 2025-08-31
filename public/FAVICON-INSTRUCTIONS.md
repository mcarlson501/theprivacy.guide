# Creating Favicon Files from Your Logo

I've set up the favicon structure for you! Here's what's been added:

## Files Created:
- `/public/favicon.svg` - Modern SVG favicon (16x16)
- `/public/favicon-32x32.svg` - Larger SVG favicon (32x32) 
- `/public/apple-touch-icon.svg` - Apple touch icon (180x180)

## To Use Your Own Logo:

### Option 1: Replace the SVG files (Recommended)
1. Convert your `logo.png` to SVG format (or use the PNG directly)
2. Replace the files above with your logo in those specific sizes

### Option 2: Use PNG files
1. Create these PNG versions of your logo:
   - `favicon.ico` (16x16) - Traditional favicon
   - `favicon-32x32.png` (32x32)
   - `apple-touch-icon.png` (180x180)

2. Then update the metadata in `app/layout.js`:

```javascript
icons: {
  icon: [
    {
      url: '/favicon.ico',
      sizes: '16x16',
    },
    {
      url: '/favicon-32x32.png',
      sizes: '32x32',
    },
  ],
  apple: [
    {
      url: '/apple-touch-icon.png',
      sizes: '180x180',
    },
  ],
}
```

## Online Tools to Help:
- favicon.io - Generate favicons from images
- realfavicongenerator.net - Comprehensive favicon generator
- convertio.co - Convert PNG to ICO

## Current Setup:
The favicon is now configured to use your logo design with the privacy lock icon in your brand colors.
