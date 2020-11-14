import React from 'react'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'

export const GithubSearchPage = () => (
  <Container>
    <Typography variant="h3" component="h1">
      Github repositories list page
    </Typography>

    <Grid container spacing={2} justify="space-between">
      <Grid item md={6} xs={12}>
        <TextField fullWidth label="Filter by" id="filterBy" />
      </Grid>

      <Grid item md={3} xs={12}>
        <Button fullWidth color="primary" variant="contained">
          Search
        </Button>
      </Grid>
    </Grid>

    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height={400}
    >
      <Typography>
        Please provide a search option and click in the search button
      </Typography>
    </Box>
  </Container>
)

export default GithubSearchPage
