import React, { Component } from 'react'
import PropTypes from 'prop-types'

import ContentPlaceholderParagraph from './ContentPlaceholderParagraph'
import ContentPlaceholderImageText from './ContentPlaceholderImageText'
import ContentPlaceholderCard from './ContentPlaceholderCard'

export default class ContentPlaceholder extends Component {
  static propTypes = {
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.array]),
    children: PropTypes.node
  }

  static ImageText = ContentPlaceholderImageText
  static Paragraph = ContentPlaceholderParagraph
  static Card = ContentPlaceholderCard

  /**
   * This will render the component.
   *
   * @example
   * <ContentPlaceholder className='my-class'>
   *   <div>
   *     <ContentPlaceholder.Header withImage />
   *     <ContentPlaceholder.Paragraph numberOfLines={3} />
   *     <ContentPlaceholder.Paragraph numberOfLines={1} />
   *   </div>
   * </ContentPlaceholder>
   *
   * @return {ReactElement}
   */
  render () {
    const { className, children } = this.props

    return (
      <div className={className}>
        {children}
      </div>
    )
  }
}
