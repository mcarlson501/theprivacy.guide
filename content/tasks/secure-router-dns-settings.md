---
title: 'Set Up Privacy-First DNS on Your Router'
description: 'Switch your home router to use privacy-friendly DNS servers that protect your entire network from tracking and malicious websites.'
category: 'Advanced'
time: '⏰ 15 minutes'
points: 100
badgeId: 'network-guardian'
badgeName: 'Network Guardian'
---

#### The Big Picture (Why It's Important)
Your internet provider controls what websites you can reach and can see every site you visit. But here's something most people don't know: you can change this setting on your router and instantly make your entire home network more private and secure. Every time you visit a website, your router asks your internet provider "Where is Facebook.com?" This is called DNS (Domain Name System). By default, your ISP handles these requests - meaning they can see every website anyone in your house visits, even if you're using private browsing.

#### What This Accomplishes (How It Helps)
* **Stop ISP tracking:** Your internet provider can no longer see which websites you visit
* **Block malicious sites:** Privacy-focused DNS servers block known scam and malware websites automatically  
* **Protect your whole network:** Every device in your home (phones, tablets, smart TVs) gets protection automatically
* **Faster browsing:** Many privacy DNS servers are actually faster than your ISP's default servers

**Real Impact:** This single change protects every device in your home from tracking and malicious websites, including smart TVs, game consoles, and visitors' phones.

---

### Step 1: Connect to Your WiFi
1. Make sure your computer or phone is connected to your home WiFi network
2. You need to be on the same network as your router to access its settings

### Step 2: Open Your Router's Control Panel
1. Open a web browser (Chrome, Safari, Firefox, etc.)
2. In the address bar, type: `192.168.1.1` and press Enter
3. If that doesn't work, try: `192.168.0.1`
4. Still not working? Try: `10.0.0.1`

**Can't find it?** Check the sticker on your router for the correct address.

### Step 3: Find Your Router Login
1. Look for a sticker on your router with username and password
2. It's usually on the bottom or back of the router
3. Write down the username and password

**No sticker?** Try these common defaults:
* Username: `admin` Password: `admin`
* Username: `admin` Password: `password`
* Username: `admin` Password: (leave blank)

### Step 4: Log Into Your Router
1. Enter the username and password you found
2. Click "Login" or "Sign In"
3. You should now see your router's settings page

**Login not working?** Someone may have changed the password. Look for a small "Reset" button on your router.

### Step 5: Find the DNS Settings
Look for one of these menu options:
* "Internet Settings"
* "WAN Settings"  
* "Network Settings"
* "DNS Settings"

**Router-specific shortcuts:**
* **Netgear:** Advanced → Setup → Internet Setup
* **Linksys:** Smart Wi-Fi Tools → Advanced → Internet
* **TP-Link:** Advanced → Network → Internet

### Step 6: Pick Your Privacy DNS Service
Choose one of these options and write down both addresses:

**Quad9 (Recommended):** `9.9.9.9` and `149.112.112.112`
* Blocks malware automatically
* No tracking of your browsing

**Cloudflare (Fastest):** `1.1.1.1` and `1.0.0.1`
* Very fast
* No tracking claimed

**Family Safe:** `185.228.168.168` and `185.228.169.168`
* Blocks adult content too

### Step 7: Enter Your New DNS Addresses
1. Find the "Primary DNS" field and clear it
2. Type your first DNS address (like `9.9.9.9`)
3. Find the "Secondary DNS" field and clear it  
4. Type your second DNS address (like `149.112.112.112`)
5. Leave all other settings alone

### Step 8: Save Your Changes
1. Look for a "Save," "Apply," or "Update" button
2. Click it to save your changes
3. Your router might restart automatically (this is normal)
4. Wait 1-2 minutes for it to finish

### Step 9: Test That It Worked
1. On your phone or computer, disconnect from WiFi and reconnect
2. Visit this website: `https://1.1.1.1/help`
3. Look for "Connected to" - it should show your new DNS provider
4. Try visiting a few websites to make sure everything works

---

### ✅ You're Done When...
* **Router shows new DNS servers** - Settings page displays your chosen DNS addresses
* **Test website confirms change** - Browser test shows your new DNS provider  
* **All devices work normally** - Phones, tablets, and computers can browse the internet
* **Router settings are saved** - Changes persist after router restart

**Success indicator:** When you visit `1.1.1.1/help`, you should see your chosen DNS provider (like "Quad9" or "Cloudflare") instead of your ISP's name.

### Pro Tips for Success
* **Write it down:** Note which DNS servers you chose - you might need this info later
* **Try different options:** If one DNS service seems slow, switch to another  
* **Router app:** Many routers have mobile apps that make changing settings easier

### Common Pitfalls to Avoid
* **"My internet stopped working"** - Double-check you typed the DNS addresses correctly (no extra spaces or periods)
* **"Some websites are blocked now"** - This is normal if you chose a filtering DNS service - it's protecting you from malicious sites
* **"The router keeps resetting my changes"** - Make sure to click "Save" or "Apply" before navigating away from the settings page

### What's Next?
This skill helps you with these other privacy tasks:
- Use a password manager to secure your router login
- Review app permissions on devices that connect to your network
- Enable two-factor authentication on accounts you access from home

You're building: **Network Administration** - You now understand how to control the fundamental settings that protect your entire home network, not just individual devices.