#!/bin/bash

# Font Download Script for The Privacy Guide
# This script downloads the Inter font files for self-hosting
# Run this script to replace system fonts with the actual Inter font files

set -e

FONT_DIR="public/fonts"
INTER_VERSION="4.0"

echo "🔒 The Privacy Guide - Font Download Script"
echo "==========================================="
echo ""
echo "This script will download Inter font files for self-hosting."
echo "This is optional - the site works perfectly with system fonts."
echo ""
echo "Benefits of downloading fonts:"
echo "✅ Consistent typography across all devices"
echo "✅ Improved visual design"
echo "✅ Still 100% privacy-friendly (no external requests)"
echo ""

# Create fonts directory if it doesn't exist
if [ ! -d "$FONT_DIR" ]; then
    mkdir -p "$FONT_DIR"
fi

echo "📁 Created/verified fonts directory: $FONT_DIR"

# Download Inter font files
echo "⬇️  Downloading Inter font files..."

# Inter Variable Font (recommended)
curl -L -o "$FONT_DIR/Inter-VariableFont_slnt,wght.woff2" \
  "https://github.com/rsms/inter/raw/v$INTER_VERSION/docs/font-files/Inter-VariableFont_slnt%2Cwght.woff2"

# Inter static weights for broader compatibility
curl -L -o "$FONT_DIR/Inter-Regular.woff2" \
  "https://github.com/rsms/inter/raw/v$INTER_VERSION/docs/font-files/Inter-Regular.woff2"

curl -L -o "$FONT_DIR/Inter-Medium.woff2" \
  "https://github.com/rsms/inter/raw/v$INTER_VERSION/docs/font-files/Inter-Medium.woff2"

curl -L -o "$FONT_DIR/Inter-SemiBold.woff2" \
  "https://github.com/rsms/inter/raw/v$INTER_VERSION/docs/font-files/Inter-SemiBold.woff2"

curl -L -o "$FONT_DIR/Inter-Bold.woff2" \
  "https://github.com/rsms/inter/raw/v$INTER_VERSION/docs/font-files/Inter-Bold.woff2"

echo "✅ Font files downloaded successfully!"

# Update CSS file to enable Inter fonts
echo "🎨 Updating CSS to enable Inter fonts..."

# Uncomment the @font-face declarations in fonts.css
sed -i 's|/\*||g; s|\*/||g' styles/fonts.css

echo "✅ Font CSS updated!"
echo ""
echo "🎉 Inter fonts installed successfully!"
echo ""
echo "The Privacy Guide now uses self-hosted Inter fonts while"
echo "maintaining complete privacy - no external requests made!"
echo ""
echo "To verify: Check Network tab in browser dev tools."
echo "You should see NO requests to fonts.googleapis.com"
echo ""
