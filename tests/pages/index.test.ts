import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import IndexPage from '../../pages/index.vue'

describe('IndexPage', () => {
  it('renders correctly', async () => {
    const page = await mountSuspended(IndexPage)
    
    expect(page.text()).toContain('SOE AUNG')
    expect(page.text()).toContain('Frontend Developer')
  })

  it('contains links to social profiles', async () => {
    const page = await mountSuspended(IndexPage)
    const links = page.findAll('a')
    
    const hrefs = links.map(link => link.attributes('href'))
    expect(hrefs).toContain('https://github.com/soe-ag')
    expect(hrefs).toContain('https://www.linkedin.com/in/soe-aung-072a30129/')
  })
})
