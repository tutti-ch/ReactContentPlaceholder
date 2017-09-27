/* global describe, expect, test */
import React from 'react'
import ContentPlaceholder from './index'
import renderer from 'react-test-renderer'

describe('(Component) ContentPlaceholder', () => {
  test('should render', () => {
    const withCard = renderer.create(
      <ContentPlaceholder>
        <ContentPlaceholder.Card align="horizontal" numberOfLines={3} />
      </ContentPlaceholder>
    )

    const withImageText = renderer.create(
      <ContentPlaceholder>
        <ContentPlaceholder.ImageText align="vertical" numberOfLines={2} />
      </ContentPlaceholder>
    )

    const moreComplicated = renderer.create(
      <ContentPlaceholder>
        <ContentPlaceholder.ImageText align="horizontal" />
        <ContentPlaceholder.Card align="vertical" />
        <ContentPlaceholder.Paragraph numberOfLines={4} />
        <ContentPlaceholder.Paragraph numberOfLines={2} />
      </ContentPlaceholder>
    )

    expect(withCard).toMatchSnapshot()
    expect(withImageText).toMatchSnapshot()
    expect(moreComplicated).toMatchSnapshot()
  })
})
