import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import ArchiveCard from '../../components/ArchiveCard.vue'

describe('ArchiveCard', () => {
  const mockProps = {
    id: 1,
    title: 'Test Project',
    description: 'Test Description',
    tech: ['Vue', 'Vitest'],
    image: '/test.png',
    link: 'https://example.com',
    github: 'https://github.com/test'
  }

  it('renders project title and description', async () => {
    const component = await mountSuspended(ArchiveCard, {
      props: mockProps
    })

    expect(component.text()).toContain('Test Project')
    expect(component.text()).toContain('Test Description')
  })

  it('renders tech tags', async () => {
    const component = await mountSuspended(ArchiveCard, {
      props: mockProps
    })

    expect(component.text()).toContain('Vue')
    expect(component.text()).toContain('Vitest')
  })

  it('renders links correctly', async () => {
    const component = await mountSuspended(ArchiveCard, {
      props: mockProps
    })

    const links = component.findAll('a')
    // One for image, one for title, one for github, one for external link
    // Wait, let's check ArchiveCard.vue again
    // Image link, Title link, GitHub link, Live Demo link
    expect(links.length).toBe(4)
    expect(links[0].attributes('href')).toBe('https://example.com')
    expect(links[2].attributes('href')).toBe('https://github.com/test')
  })
})
