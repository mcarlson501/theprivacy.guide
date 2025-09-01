# Task Creation Template & Guidelines

## 📋 TASK TEMPLATE FILE

### File Naming Convention
```
content/tasks/[category]-[task-name].md
```

**Examples:**
- `email-spot-phishing-emails.md`
- `passwords-three-second-strength-check.md`
- `browsing-private-browsing-basics.md`

### Task Template Structure
```markdown
---
id: "unique-task-id"
title: "Task Title - Clear and Action-Oriented"
description: "One sentence describing what the user will accomplish and why it matters."
category: "Quick Win | Essential | Advanced | Expert"
difficulty: "Beginner | Intermediate | Advanced"
timeEstimate: "X minutes"
points: X
order: X
time: "X min"
badgeId: "badge-identifier"
badgeName: "Badge Display Name"
published: true
featured: false
---

# Task Title

Brief introduction paragraph that connects with the user's everyday experience. Explain why this matters in terms they can relate to - what could go wrong if they don't do this, or what peace of mind they'll gain.

## Why It Matters

### The Big Picture
Explain the broader context and real-world impact. Use concrete examples:
- "When you click that suspicious link..."
- "If someone gets access to your account..."
- "This is how scammers trick people..."

**What tech people know that you don't:** [Insight that tech-savvy people take for granted but non-tech users need to learn]

### What This Accomplishes
- ✅ **Immediate benefit 1** - Specific protection or improvement
- ✅ **Immediate benefit 2** - Measurable outcome
- ✅ **Long-term benefit** - Skill or awareness that transfers to other situations

**Real Impact:** [Specific example of how this protects the user]

## How To Do It

### Step 1: [Clear Action Title]
**What you're doing:** Brief explanation of this step's purpose

**Instructions:**
1. [Specific action with visual cues - "Click the blue button labeled..."]
2. [Next action with expected result - "You should see..."]
3. [Final verification - "Confirm by checking..."]

**If you see [specific thing], do this:** [Troubleshooting guidance]

**Platform-specific notes:**
- **iPhone/iPad:** [iOS-specific instructions if different]
- **Android:** [Android-specific instructions if different]
- **Computer:** [Desktop-specific guidance]

### Step 2: [Next Clear Action Title]
[Follow same format as Step 1]

### Step 3: [Final Step if needed]
[Follow same format]

## ✅ You're Done When...
- [ ] **Checkpoint 1** - Specific thing user can verify
- [ ] **Checkpoint 2** - Another verification point
- [ ] **Checkpoint 3** - Final confirmation

**Success indicator:** [What the user should see/experience that confirms completion]

## 🎯 Pro Tips
- **Quick tip:** [One-liner that makes this easier or more effective]
- **Remember:** [Important point to reinforce the habit]
- **Next level:** [Optional enhancement they can do later]

## ⚠️ Common Pitfalls
- **"But I thought..."** - [Common misconception and correction]
- **"What if I..."** - [Address likely concern or confusion]
- **Red flag:** [Warning about what not to do]

## 🔗 What's Next?
This skill helps you with these other privacy tasks:
- [Link to related task 1]
- [Link to related task 2]

You're building: **[Skill category]** - [Brief description of the transferable skill they've gained]
```

---

## 📝 TASK CREATION INSTRUCTIONS

### Before You Start
1. **Pick your task** from the TASK_CREATION_BACKLOG.md
2. **Research the current process** - Check latest platform interfaces
3. **Test with a non-tech person** - Validate your assumptions
4. **Take screenshots** if needed for complex interfaces

### Content Writing Guidelines

#### **Tone & Voice**
- **Friendly and reassuring** - "You've got this!"
- **Conversational** - Write like you're helping a friend
- **No jargon** - Explain tech terms when necessary
- **Empowering** - Focus on capability, not fear
- **Specific** - Use concrete examples over abstract concepts

#### **Core Value Words to Include:**
- "Simple," "easy," "straightforward"
- "You can," "you're in control," "you decide"
- "Everyone should be able to," "anyone can"
- "Peace of mind," "protect yourself," "stay safe"
- "Takes just [X] minutes," "quick win," "immediate benefit"

#### **Structure Requirements**
- **Maximum 15 minutes** to complete the task
- **3-5 clear steps** maximum
- **Visual confirmation** for each major step
- **Platform-specific guidance** when needed
- **Immediate verification** of success

#### **Content Quality Checklist**
- [ ] **Title is action-oriented** (starts with verb or clear outcome)
- [ ] **Description is one clear sentence** about the benefit
- [ ] **"Why It Matters" connects to real life** (not abstract privacy concepts)
- [ ] **Steps include visual cues** ("blue button," "settings icon")
- [ ] **Success criteria are specific** and verifiable
- [ ] **Common pitfalls addressed** proactively
- [ ] **Links to related tasks** for learning progression
- [ ] **Time estimate is realistic** (test with non-tech user)

### Technical Requirements

#### **Frontmatter Fields**
- **id**: lowercase-with-hyphens, unique identifier
- **title**: User-facing title (action-oriented)
- **description**: One sentence benefit statement
- **category**: Quick Win | Essential | Advanced | Expert
- **difficulty**: Beginner | Intermediate | Advanced  
- **timeEstimate**: "X minutes" (realistic estimate)
- **points**: 10 (Quick Win), 15-25 (Essential), 30+ (Advanced)
- **order**: Sequential number for category ordering
- **badgeId/badgeName**: If task earns a badge

#### **Content Formatting**
- Use **h2 (##)** for main sections
- Use **h3 (###)** for subsections  
- Use **h4 (####)** for platform-specific guidance
- Include **checkboxes** for verification steps
- Use **emoji** for visual scanning (✅ ⚠️ 🎯 🔗)
- **Bold key actions** and important terms

---

## 🤖 AI PROMPT TEMPLATE FOR TASK CREATION

### Copy-Paste Prompt Template

```
I need you to create a privacy/security task for "The Privacy Guide" - a gamified web app that helps non-tech-savvy users improve their digital privacy through simple, actionable tasks.

CORE VALUES & TONE:
- "Everyone should be able to do it" - accessibility is key
- Friendly, reassuring, conversational tone
- Focus on empowerment, not fear
- Use simple language, avoid jargon
- Emphasize immediate, tangible benefits
- Tasks should be completable in 15 minutes or less

TARGET AUDIENCE:
- Non-tech-savvy users who want to protect themselves
- People who might find technology intimidating
- Users who need explicit guidance for things tech people do instinctively

TASK DETAILS TO CREATE:
**Task Focus:** [INSERT: Specific task from backlog - e.g., "Spot Phishing Emails Like a Pro"]
**Category:** [INSERT: Quick Win/Essential/Advanced]
**Platform Focus:** [INSERT: Mobile/Desktop/Both or specific platforms]
**Key Learning Goal:** [INSERT: Main skill or awareness user should gain]
**Real-World Scenario:** [INSERT: Specific situation where this protects the user]

REQUIRED OUTPUT FORMAT:
Create a complete markdown file following this exact structure:

```markdown
---
id: "[generate-appropriate-id]"
title: "[action-oriented title]"
description: "[one sentence describing benefit]"
category: "[category from above]"
difficulty: "Beginner"
timeEstimate: "[X] minutes"
points: [10 for Quick Win, 15-25 for Essential, 30+ for Advanced]
order: 1
time: "[X] min"
badgeId: "[if applicable]"
badgeName: "[if applicable]"
published: true
featured: false
---

# [Task Title]

[Brief intro paragraph connecting to user's everyday experience]

## Why It Matters

### The Big Picture
[Explain broader context with concrete examples]

**What tech people know that you don't:** [Key insight tech people take for granted]

### What This Accomplishes
- ✅ **[Immediate benefit 1]** - [Specific protection]
- ✅ **[Immediate benefit 2]** - [Measurable outcome] 
- ✅ **[Long-term benefit]** - [Transferable skill]

**Real Impact:** [Specific protection example]

## How To Do It

### Step 1: [Clear Action Title]
**What you're doing:** [Purpose explanation]

**Instructions:**
1. [Specific action with visual cues]
2. [Next action with expected result]  
3. [Verification step]

**Platform-specific notes:**
- **iPhone/iPad:** [iOS guidance if different]
- **Android:** [Android guidance if different]
- **Computer:** [Desktop guidance]

### Step 2: [Next Action Title]
[Follow same format]

### Step 3: [Final Step if needed]
[Follow same format - max 3-5 steps total]

## ✅ You're Done When...
- [ ] **[Checkpoint 1]** - [Specific verification]
- [ ] **[Checkpoint 2]** - [Another verification]
- [ ] **[Checkpoint 3]** - [Final confirmation]

**Success indicator:** [What user should see/experience]

## 🎯 Pro Tips
- **Quick tip:** [Make it easier or more effective]
- **Remember:** [Reinforce the habit]
- **Next level:** [Optional enhancement]

## ⚠️ Common Pitfalls
- **"But I thought..."** - [Address misconception]
- **"What if I..."** - [Address concern]
- **Red flag:** [What not to do]

## 🔗 What's Next?
This skill helps you with these other privacy tasks:
- [Related task 1]
- [Related task 2]

You're building: **[Skill category]** - [Transferable skill description]
```

WRITING REQUIREMENTS:
- Use conversational, friendly tone throughout
- Include specific visual cues ("blue button," "gear icon")
- Provide platform-specific guidance when needed
- Address common user concerns proactively
- Focus on immediate, tangible benefits
- Ensure task is completable in stated time limit
- Include verification steps for user confidence
- Connect to broader privacy/security learning journey

Create the complete task content now.
```

---

## 📁 FILE ORGANIZATION

### Directory Structure
```
content/tasks/
├── email/
│   ├── spot-phishing-emails.md
│   ├── link-safety-check.md
│   └── email-hygiene-basics.md
├── passwords/
│   ├── password-strength-check.md
│   ├── two-factor-authentication.md
│   └── logout-everywhere.md
├── browsing/
│   ├── private-browsing-basics.md
│   ├── download-safety.md
│   └── browser-extension-audit.md
└── mobile/
    ├── app-permission-audit.md
    ├── location-services-control.md
    └── lock-screen-privacy.md
```

### Naming Conventions
- **Folder names**: Category-based, lowercase, no spaces
- **File names**: descriptive-action-based-naming.md
- **Task IDs**: match file names without .md extension
- **Keep consistent** with existing tasks

---

## ✅ QUALITY ASSURANCE CHECKLIST

Before publishing any task:

### Content Review
- [ ] **Tested with non-tech user** - Actual completion time recorded
- [ ] **Screenshots current** - Interface matches current platforms
- [ ] **All links work** - External and internal links verified
- [ ] **Tone is friendly** - No intimidating or condescending language
- [ ] **Benefits are clear** - User knows why this matters
- [ ] **Success criteria specific** - User can verify completion

### Technical Review  
- [ ] **Frontmatter complete** - All required fields filled
- [ ] **Markdown valid** - Proper formatting throughout
- [ ] **Images optimized** - Screenshots compressed and accessible
- [ ] **File named correctly** - Follows naming conventions
- [ ] **Points assigned appropriately** - Matches category and difficulty

### Accessibility Review
- [ ] **Alt text for images** - Descriptive alternative text provided
- [ ] **Clear heading hierarchy** - Proper H2, H3, H4 structure
- [ ] **Simple language** - Readability appropriate for audience
- [ ] **Visual scanning friendly** - Good use of lists, bold, emojis

This template ensures every task maintains our core values of accessibility, friendliness, and practical effectiveness! 🎯
