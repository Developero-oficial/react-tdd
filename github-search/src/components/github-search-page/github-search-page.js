import React, {useState} from 'react'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'

import {Content} from '../content'

export const GithubSearchPage = () => {
  const [isSearching, setIsSearching] = useState(false)
  const [isSearchApplied, setIsSearchApplied] = useState(false)

  const handleClick = async () => {
    setIsSearching(true)
    await Promise.resolve()
    setIsSearchApplied(true)
    setIsSearching(false)
  }

  return (
    <Container>
      <Box my={4}>
        <Typography variant="h3" component="h1">
          Github repositories list page
        </Typography>
      </Box>

      <Grid container spacing={2} justify="space-between">
        <Grid item md={6} xs={12}>
          <TextField fullWidth label="Filter by" id="filterBy" />
        </Grid>

        <Grid item md={3} xs={12}>
          <Button
            disabled={isSearching}
            fullWidth
            color="primary"
            variant="contained"
            onClick={handleClick}
          >
            Search
          </Button>
        </Grid>
      </Grid>

      <Box my={4}>
        <Content isSearchApplied={isSearchApplied} />
      </Box>
    </Container>
  )
}

export default GithubSearchPage
