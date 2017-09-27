[![CircleCI](https://circleci.com/gh/tutti-ch/ReactContentPlaceholder.svg?style=svg)](https://circleci.com/gh/tutti-ch/ReactContentPlaceholder)
[![Test Coverage](https://codeclimate.com/github/tutti-ch/ReactContentPlaceholder/badges/coverage.svg)](https://codeclimate.com/github/tutti-ch/ReactContentPlaceholder/coverage)
[![Code Climate](https://codeclimate.com/github/tutti-ch/ReactContentPlaceholder/badges/gpa.svg)](https://codeclimate.com/github/tutti-ch/ReactContentPlaceholder)
[![Issue Count](https://codeclimate.com/github/tutti-ch/ReactContentPlaceholder/badges/issue_count.svg)](https://codeclimate.com/github/tutti-ch/ReactContentPlaceholder)

# ReactContentPlaceholder
A handy placeholder component to show the user when content is loading

# Installation
If you use npm:
```
npm i --save react-content-placeholder
```

If you use yarn:
```
yarn add react-content-placeholder
```

# Compatibility
This package has been tested with React 15 and 16. It should work 
on every browser that react works.
 
# Usage
We display the content placeholder to indicate the user that the content
is being loaded/generated.

You can use the built-in components to design your placeholder however you
wish. For now we have 3 components, but this list might extend by time.

Here is an example usage:

```jsx harmony
import ContentPlaceholder from 'react-content-placeholder'
 
<ContentPlaceholder>
  <ContentPlaceholder.Card align="vertical" />
  <ContentPlaceholder.ImageText align="horizontal" />
  <ContentPlaceholder.paragraph numberOfLines={2} />
  <ContentPlaceholder.paragraph numberOfLines={5} />
</ContentPlaceholder>
```

# API

#### \<ContentPlaceholder />

Wrapper component. All subcomponents should be placed within this component.

#### \<ContentPlaceholder.Card />

Displays a card style placeholder with an image and text.

Property | Description | Values | Default
--- | --- | --- | ---
align | Aligns the card either horizontally or vertically. | {String}: horizontal|vertical. | horizontal
numberOfLines | Specifies the number of lines the embedded paragraph should have. | {Number} | 6 if horizontal, 2 otherwise.

#### \<ContentPlaceholder.ImageText />

Displays an image with a text.

Property | Description | Values | Default
--- | --- | --- | ---
align | Aligns the card either horizontally or vertically. | {String}: horizontal|vertical. | horizontal
numberOfLines | Specifies the number of lines the embedded paragraph should have. | {Number} | 2

#### \<ContentPlaceholder.Paragraph />

Displays a paragraph.

Property | Description | Values | Default
--- | --- | --- | ---
numberOfLines | Specifies the number of lines in the paragraph. | {Number} | 3

# Authors
[Savas Vedova](https://github.com/svedova)

# LEGAL
All assets and code are under the GPL-3.0 and in the public domain unless specified otherwise.