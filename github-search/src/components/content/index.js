import React from 'react'
import PropTypes from 'prop-types'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

export const Content = ({isSearchApplied, reposList, children}) => {
  const renderWithBox = cb => (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height={400}
    >
      {cb}
    </Box>
  )

  if (isSearchApplied && !!reposList.length) {
    return children
  }

  if (isSearchApplied && !reposList.length) {
    return renderWithBox(() => (
      <Typography>You search has no results</Typography>
    ))
  }

  return renderWithBox(() => (
    <Typography>
      Please provide a search option and click in the search button
    </Typography>
  ))
}

export default Content

Content.propTypes = {
  isSearchApplied: PropTypes.bool.isRequired,
  reposList: PropTypes.arrayOf(PropTypes.object),
  children: PropTypes.node.isRequired,
}
