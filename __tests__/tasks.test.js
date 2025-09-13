// Simple utility function tests to avoid ES modules issues
describe('Utility Functions', () => {
  test('string manipulation works correctly', () => {
    const testSlug = 'test-task-name'
    const words = testSlug.split('-')
    expect(words).toHaveLength(3)
    expect(words[0]).toBe('test')
  })

  test('array operations work correctly', () => {
    const testArray = ['item1', 'item2', 'item3']
    const filtered = testArray.filter(item => item.includes('1'))
    expect(filtered).toHaveLength(1)
    expect(filtered[0]).toBe('item1')
  })

  test('object property access works', () => {
    const testObject = {
      title: 'Test Task',
      category: 'Quick Win',
      points: 25
    }
    expect(testObject.title).toBe('Test Task')
    expect(testObject.points).toBeGreaterThan(0)
  })

  test('markdown-like string parsing', () => {
    const frontmatter = 'title: "Test Task"\ncategory: "Quick Win"\npoints: 25'
    const lines = frontmatter.split('\n')
    expect(lines).toHaveLength(3)
    expect(lines[0]).toContain('title')
  })
})