import { getAllTasks, getTaskBySlug } from '../lib/tasks'

// Mock fs and path for Node.js testing
jest.mock('fs', () => ({
  readdirSync: jest.fn(),
  readFileSync: jest.fn(),
}))

jest.mock('path', () => ({
  join: jest.fn((...args) => args.join('/')),
  extname: jest.fn((filename) => filename.slice(filename.lastIndexOf('.'))),
}))

const mockTaskFiles = [
  'task1.md',
  'task2.md',
  'invalid.txt' // Should be filtered out
]

const mockTaskContent = `---
title: 'Test Task'
description: 'A test task'
category: 'Quick Win'
time: '5 minutes'
points: 25
badgeId: 'test-badge'
badgeName: 'Test Badge'
---

#### Why This Matters
This is test content.

#### What You'll Accomplish
- Test accomplishment 1
- Test accomplishment 2

---

### Step 1: Test Step
Do something for testing.`

describe('Tasks Library Functions', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('getAllTasks', () => {
    test('returns array of tasks with correct structure', async () => {
      const fs = require('fs')
      fs.readdirSync.mockReturnValue(mockTaskFiles)
      fs.readFileSync.mockReturnValue(mockTaskContent)

      const tasks = await getAllTasks()
      
      expect(Array.isArray(tasks)).toBe(true)
      expect(tasks).toHaveLength(2) // Should exclude .txt file
    })

    test('filters out non-markdown files', async () => {
      const fs = require('fs')
      fs.readdirSync.mockReturnValue(['task.md', 'readme.txt', 'another.js'])
      fs.readFileSync.mockReturnValue(mockTaskContent)

      const tasks = await getAllTasks()
      
      expect(tasks).toHaveLength(1) // Only .md file
    })

    test('handles empty directory gracefully', async () => {
      const fs = require('fs')
      fs.readdirSync.mockReturnValue([])

      const tasks = await getAllTasks()
      
      expect(tasks).toHaveLength(0)
    })
  })

  describe('getTaskBySlug', () => {
    test('returns specific task by slug', async () => {
      const fs = require('fs')
      fs.readFileSync.mockReturnValue(mockTaskContent)

      const task = await getTaskBySlug('test-task')
      
      expect(task).toHaveProperty('title', 'Test Task')
      expect(task).toHaveProperty('slug', 'test-task')
      expect(task).toHaveProperty('category', 'Quick Win')
      expect(task).toHaveProperty('points', 25)
    })

    test('includes content HTML', async () => {
      const fs = require('fs')
      fs.readFileSync.mockReturnValue(mockTaskContent)

      const task = await getTaskBySlug('test-task')
      
      expect(task).toHaveProperty('contentHtml')
      expect(typeof task.contentHtml).toBe('string')
    })
  })
})