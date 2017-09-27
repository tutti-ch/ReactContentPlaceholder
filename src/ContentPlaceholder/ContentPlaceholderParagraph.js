import React, { Component } from 'react'
import PropTypes from 'prop-types'

import classes from './ContentPlaceholder.scss'

/**
 * Paragraph component for the ContentPlaceholder.
 *
 * Simply use ContentPlaceholder.Paragraph to access this component.
 */
export default class ContentPlaceholderParagraph extends Component {
  static propTypes = {
    numberOfLines: PropTypes.number
  }

  static defaultProps = {
    numberOfLines: 3
  }

  /**
   * Render the component with specified number of lines. This component
   * expects a non-zero positive integer. By default it will render 3 lines.
   *
   * @return {XML}
   */
  render () {
    const { numberOfLines } = this.props

    return (
      <div className={classes.paragraph}>
        {
          [...new Array(numberOfLines).keys()].map((_, index) => (
            <div key={index} className={`${classes.animatedBg}`}></div>
          ))
        }
      </div>
    )
  }
}
