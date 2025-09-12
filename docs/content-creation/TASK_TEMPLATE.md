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
title: 'Task Title - Clear and Action-Oriented'
description: 'One sentence describing what the user will accomplish and why it matters.'
category: 'Quick Win | Essential | Social Media | Advanced'
time: '10-15 minutes'
points: X
badgeId: 'badge-identifier'
badgeName: 'Badge Display Name'
---

#### Why This Matters
One or two paragraphs explaining the importance in plain language. Connect to real-world impact and what could go wrong without this protection. Use everyday analogies when helpful. Define any technical terms clearly.

#### What You'll Accomplish
After completing this task, you will have:
* Specific protection or improvement gained
* Measurable security enhancement
* Peace of mind about this aspect of your privacy

---

### Step 1: [Clear Action Title]
Brief explanation of what this step accomplishes.

1. [Specific instruction with clear navigation]
2. [Next action with expected result]
3. [Verification step]

**Note:** [Any important clarification or platform difference]

---

### Step 2: [Next Action Title]
Brief explanation of this step.

1. [Clear instruction]
2. [Follow-up action]
3. [Confirmation step]

---

### Step 3: [Final Step if needed]
Brief explanation.

1. [Instruction]
2. [Final verification]

---

### The Bottom Line

**What You Just Accomplished**
Summary of the security improvements you made and why they matter.

**What to Expect**
Brief description of any changes in user experience or what happens next.

**Pro Tips**
* Key best practice or habit to maintain
* Optional enhancement for more security
* Red flag to watch out for

**Remember:** [One key takeaway to reinforce the value of this task]

---

## Task Formatting Notes

### Step Numbering Format
Each step MUST use this exact markdown format to render as blue circles with numbers:

```markdown
### Step 1: Clear Action Title
Brief explanation of what this step accomplishes.

1. Specific instruction with clear navigation
2. Next action with expected result
3. Verification step

**Note:** Any important clarification or platform difference

---

### Step 2: Next Action Title
Brief explanation of this step.

1. Clear instruction
2. Follow-up action
3. Confirmation step
```

**CRITICAL:** Each step section MUST be separated by `---` horizontal rules. Without these separators, all steps will appear nested under Step 1.

The component will:
- Split content by `---` horizontal rules to create separate step sections
- Extract the title after "Step X:" from each section
- Render a blue circle with the step number
- Display the title next to the circle
- Process the content below with proper formatting

### The Bottom Line Section
Use this exact format for the final wrap-up section:

```markdown
### The Bottom Line

**What You Just Accomplished**
**What to Expect** 
**Pro Tips**
**Remember:**
```

This section will render with an appropriate icon (checkmark, shield, etc.) in the circle.
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
- **category**: Quick Win | Essential | Social Media | Advanced
- **difficulty**: Beginner | Intermediate | Advanced  
- **timeEstimate**: "X minutes" (realistic estimate)
- **points**: Standardized point system:
  - Quick Win: 25 points
  - Essential: 75 points
  - Social Media: 50 points
  - Advanced: 100 points
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
points: [25 for Quick Win, 75 for Essential, 50 for Social Media, 100 for Advanced]
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
