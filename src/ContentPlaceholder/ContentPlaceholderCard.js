import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import classes from './ContentPlaceholder.scss'
import ContentPlaceholderParagraph from './ContentPlaceholderParagraph'

export default class ContentPlaceholderCard extends Component {
  static propTypes = {
    align: PropTypes.oneOf(['horizontal', 'vertical']),
    numberOfLines: PropTypes.number
  }

  static defaultProps = {
    align: 'horizontal',
    numberOfLines: null
  }

  render () {
    const { align } = this.props
    let { numberOfLines } = this.props

    if (numberOfLines === null) {
      numberOfLines = align === 'horizontal' ? 6 : 2
    }

    return (
      <div className={classNames(classes.card, classes[align])}>
        <div className={`${classes.animatedBg} ${classes.cardImage}`}></div>
        <ContentPlaceholderParagraph numberOfLines={numberOfLines} />
      </div>
    )
  }
}
