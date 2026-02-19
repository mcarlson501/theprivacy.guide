---
title: 'Set Up Privacy-First DNS on Your Router'
description: 'Switch your home router to use privacy-friendly DNS servers that protect your entire network from tracking and malicious websites.'
category: 'Advanced'
time: '15 minutes'
points: 100
badgeId: 'network-guardian'
badgeName: 'Network Guardian'
---

#### Why This Matters
Every time you visit a website, your router asks your internet provider "Where is Facebook.com?" By default, your ISP can see every website anyone in your house visits, even in private browsing mode. You can change one setting on your router to stop this tracking and protect every device in your home automatically.

#### What You'll Accomplish
After completing this task, you will have:
* Stopped your internet provider from seeing which websites anyone in your house visits
* Protected every device in your home (phones, tablets, smart TVs) from malicious websites automatically
* Potentially improved your internet browsing speed with faster DNS servers

---

### Step 1: Access Your Router Settings
Connect to your router's control panel to change the DNS settings.

**Get Connected:**
1. Make sure you're connected to your home WiFi
2. Open a web browser and type one of these addresses:
   - `192.168.1.1` (most common - Netgear, D-Link, some ISP routers)
   - `192.168.0.1` (Linksys, Belkin, some TP-Link)
   - `10.0.0.1` (Xfinity, some cable company routers)

**Find Login Info:**
1. Look for a sticker on your router (usually on the bottom)
2. Note the username and password listed
3. If no sticker, try: username `admin` password `admin`

**Log In:**
1. Enter the username and password
2. Click "Login" or "Sign In"
3. You should see your router's settings page

---

### Step 2: Find the DNS Settings
Look for these menu options (varies by router brand):

**Common Menu Names:**
- "Internet Settings"
- "WAN Settings"
- "Network Settings"
- "DNS Settings"

**Popular Router Shortcuts:**
- **Netgear:** Advanced → Setup → Internet Setup
- **Linksys:** Smart Wi-Fi Tools → Advanced → Internet  
- **TP-Link:** Advanced → Network → Internet

**Can't find it?** Look for anything mentioning "DNS" or "Internet" in the main menu.

---

### Step 3: Choose and Enter Privacy DNS Servers
Replace your ISP's DNS with privacy-focused alternatives.

**Privacy-Focused Options:**

**Cloudflare (Fastest):**
- Primary DNS: `1.1.1.1`
- Secondary DNS: `1.0.0.1` (family-friendly version)
- Very fast, privacy-focused, no logging

**Quad9 (Security-First):**
- Primary DNS: `9.9.9.9`
- Secondary DNS: `149.112.112.112`
- Blocks malware/phishing, privacy-focused

**OpenDNS (Content Filtering):**
- Primary DNS: `208.67.222.222`
- Secondary DNS: `208.67.220.220`
- Customizable blocking, parental controls available

**Enter the Settings:**
1. Find "Primary DNS" field and clear it
2. Type your chosen primary DNS (like `9.9.9.9`)
3. Find "Secondary DNS" field and clear it
4. Type your secondary DNS (like `149.112.112.112`)
5. Click "Save," "Apply," or "Update"
6. Wait 1-2 minutes for router to restart

---

### Step 4: Test That It Worked
Verify your new DNS settings are active.

**Quick Test:**
1. Disconnect from WiFi and reconnect on any device
2. Visit: `https://1.1.1.1/help`
3. Look for "Connected to" - should show your new DNS provider (not your ISP)
4. Try browsing a few websites to confirm everything works

**Success Signs:**
- Router settings page shows your new DNS addresses
- Test website confirms the DNS change
- All devices can browse normally
- Some malicious sites may now be blocked (this is good!)

---

### The Bottom Line

**What You Just Accomplished**
You've switched your entire home network to privacy-focused DNS servers. Your internet provider can no longer see which websites anyone in your house visits, and malicious websites are now blocked automatically for every device.

**What to Expect**
This single change protects every device connected to your WiFi - phones, tablets, smart TVs, game consoles, and even visitors' devices. Everyone gets privacy protection and malware blocking without installing anything.

**Pro Tips**
- Double-check you typed the DNS addresses correctly (no extra spaces)
- Make sure you clicked "Save" before leaving the settings page
- If internet stops working, you can always reset to default DNS or call your ISP

**Remember:** This is one of the most powerful privacy moves you can make because it protects your entire household automatically. Every device that connects to your WiFi now gets privacy protection and malware blocking.