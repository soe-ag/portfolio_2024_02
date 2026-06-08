import { describe, it, expect } from 'vitest'
import { professionalWorks, agenticCoding, personalProjects, projectItems } from '../../utils/worksData'

describe('worksData', () => {
  it('should have professional works', () => {
    expect(professionalWorks.length).toBeGreaterThan(0)
    expect(professionalWorks[0]).toHaveProperty('title')
    expect(professionalWorks[0]).toHaveProperty('tech')
  })

  it('should have agentic coding projects', () => {
    expect(agenticCoding.length).toBeGreaterThan(0)
    expect(agenticCoding[0]).toHaveProperty('title')
    expect(agenticCoding[0]).toHaveProperty('tech')
  })

  it('should have personal projects', () => {
    expect(personalProjects.length).toBeGreaterThan(0)
    expect(personalProjects[0]).toHaveProperty('title')
    expect(personalProjects[0]).toHaveProperty('tech')
  })

  it('projectItems should contain all projects', () => {
    const totalCount = professionalWorks.length + agenticCoding.length + personalProjects.length
    expect(projectItems.length).toBe(totalCount)
  })

  it('all projects should have required fields', () => {
    projectItems.forEach(item => {
      expect(item.id).toBeDefined()
      expect(item.title).toBeDefined()
      expect(item.description).toBeDefined()
      expect(Array.isArray(item.tech)).toBe(true)
    })
  })
})
