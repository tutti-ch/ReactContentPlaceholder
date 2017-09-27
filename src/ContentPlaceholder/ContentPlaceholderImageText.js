import React, { Component } from 'react'
import PropTypes from 'prop-types'

import ContentPlaceholderParagraph from './ContentPlaceholderParagraph'
import classes from './ContentPlaceholder.scss'

/**
 * This component will create an image with text on.
 *
 * Simply use ContentPlaceholder.ImageText to access this component.
 */
export default class ContentPlaceholderImageText extends Component {
  static propTypes = {
    align: PropTypes.oneOf(['horizontal', 'vertical']),
    numberOfLines: PropTypes.number
  }

  static defaultProps = {
    align: 'horizontal',
    numberOfLines: 2
  }

  /**
   * Depending on the withImage property, renders the component with or without image.
   *
   * @return {ReactElement}
   */
  render () {
    const { align } = this.props

    return (
      <div className={`${classes.imageText} ${classes[align]}`}>
        <div className={classes.contentLeft}>
          <div className={`${classes.animatedBg} ${classes.image}`}></div>
        </div>
        <div className={classes.contentRight}>
          <ContentPlaceholderParagraph numberOfLines={2} />
        </div>
      </div>
    )
  }
}
