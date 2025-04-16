import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ImageGallery from '../ImageGallery.vue'
import VuePictureSwipe from 'vue3-picture-swipe'

describe('ImageGallery.vue', () => {
  const mockImages = [
    {
      src: 'https://www.schadensmeldung.digital/images/fuhrparkmanagerin.webp',
      thumbnail: 'https://www.schadensmeldung.digital/images/fuhrparkmanagerin.webp',
      w: 0,
      h: 0,
      title: 'Will be used for caption',
    },
    {
      src: 'https://www.schadensmeldung.digital/images/fuhrparkmanagerin.webp',
      thumbnail: 'https://www.schadensmeldung.digital/images/fuhrparkmanagerin.webp',
      w: 0,
      h: 0,
    },
  ]

  it('renders images passed via props', () => {
    const wrapper = mount(ImageGallery, {
      props: { items: mockImages },
      global: {
        components: {
          VuePictureSwipe,
        },
      },
    })

    const imgs = wrapper.findAll('img')
    expect(imgs.length).toBe(mockImages.length)
    expect(imgs[0].attributes('src')).toBe(mockImages[0].src)
  })
})
