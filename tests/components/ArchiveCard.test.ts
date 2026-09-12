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
    expect(links.length).toBe(4)
    const imageLink = links[0]
    const githubLink = links[2]

    expect(imageLink).toBeDefined()
    expect(githubLink).toBeDefined()
    expect(imageLink?.attributes('href')).toBe('https://example.com')
    expect(imageLink?.attributes('target')).toBe('_blank')
    expect(githubLink?.attributes('href')).toBe('https://github.com/test')
  })

  it('opens internal project pages in the current window', async () => {
    const component = await mountSuspended(ArchiveCard, {
      props: {
        ...mockProps,
        link: '/works/movie-db'
      }
    })

    const links = component.findAll('a')
    expect(links[0]?.attributes('target')).toBeUndefined()
    expect(links[1]?.attributes('target')).toBeUndefined()
    expect(links[3]?.attributes('target')).toBeUndefined()
  })
})
