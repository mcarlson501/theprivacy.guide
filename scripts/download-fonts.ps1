# Font Download Script for The Privacy Guide (PowerShell)
# This script downloads the Inter font files for self-hosting
# Run this script to replace system fonts with the actual Inter font files

Write-Host "🔒 The Privacy Guide - Font Download Script" -ForegroundColor Cyan
Write-Host "===========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "This script will download Inter font files for self-hosting."
Write-Host "This is optional - the site works perfectly with system fonts."
Write-Host ""
Write-Host "Benefits of downloading fonts:" -ForegroundColor Green
Write-Host "✅ Consistent typography across all devices" -ForegroundColor Green
Write-Host "✅ Improved visual design" -ForegroundColor Green
Write-Host "✅ Still 100% privacy-friendly (no external requests)" -ForegroundColor Green
Write-Host ""

$FontDir = "public\fonts"
$InterVersion = "4.0"

# Create fonts directory if it doesn't exist
if (!(Test-Path $FontDir)) {
    New-Item -ItemType Directory -Path $FontDir -Force | Out-Null
}

Write-Host "📁 Created/verified fonts directory: $FontDir" -ForegroundColor Yellow

# Download Inter font files
Write-Host "⬇️  Downloading Inter font files..." -ForegroundColor Yellow

$baseUrl = "https://github.com/rsms/inter/raw/v$InterVersion/docs/font-files"

$fontFiles = @{
    "Inter-VariableFont_slnt,wght.woff2" = "Inter-VariableFont_slnt%2Cwght.woff2"
    "Inter-Regular.woff2" = "Inter-Regular.woff2"
    "Inter-Medium.woff2" = "Inter-Medium.woff2"
    "Inter-SemiBold.woff2" = "Inter-SemiBold.woff2"
    "Inter-Bold.woff2" = "Inter-Bold.woff2"
}

foreach ($localFile in $fontFiles.Keys) {
    $remoteFile = $fontFiles[$localFile]
    $url = "$baseUrl/$remoteFile"
    $outputPath = Join-Path $FontDir $localFile
    
    try {
        Write-Host "  Downloading $localFile..." -ForegroundColor Gray
        Invoke-WebRequest -Uri $url -OutFile $outputPath -UseBasicParsing
    }
    catch {
        Write-Host "  ❌ Failed to download $localFile" -ForegroundColor Red
        Write-Host "     Error: $_" -ForegroundColor Red
        continue
    }
}

Write-Host "✅ Font files downloaded successfully!" -ForegroundColor Green

# Update CSS file to enable Inter fonts
Write-Host "🎨 Updating CSS to enable Inter fonts..." -ForegroundColor Yellow

$cssFile = "styles\fonts.css"
if (Test-Path $cssFile) {
    try {
        $content = Get-Content $cssFile -Raw
        # Remove comment markers to uncomment the @font-face declarations
        $content = $content -replace '/\*', '' -replace '\*/', ''
        Set-Content $cssFile $content
        Write-Host "✅ Font CSS updated!" -ForegroundColor Green
    }
    catch {
        Write-Host "❌ Failed to update CSS file" -ForegroundColor Red
        Write-Host "   Please manually uncomment the @font-face declarations in $cssFile" -ForegroundColor Yellow
    }
}

Write-Host ""
Write-Host "🎉 Inter fonts installed successfully!" -ForegroundColor Green
Write-Host ""
Write-Host "The Privacy Guide now uses self-hosted Inter fonts while" -ForegroundColor Cyan
Write-Host "maintaining complete privacy - no external requests made!" -ForegroundColor Cyan
Write-Host ""
Write-Host "To verify: Check Network tab in browser dev tools." -ForegroundColor Yellow
Write-Host "You should see NO requests to fonts.googleapis.com" -ForegroundColor Yellow
Write-Host ""
