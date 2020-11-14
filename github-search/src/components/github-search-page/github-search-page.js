import React, {useState} from 'react'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'

import {Content} from '../content'
import {getRepos} from '../../services'

export const GithubSearchPage = () => {
  const [isSearching, setIsSearching] = useState(false)
  const [isSearchApplied, setIsSearchApplied] = useState(false)
  const [reposList, setReposList] = useState([])
  const [searchBy, setSearchBy] = useState('')

  const handleClick = async () => {
    setIsSearching(true)
    const response = await getRepos({q: searchBy})

    const data = await response.json()

    setReposList(data.items)
    setIsSearchApplied(true)
    setIsSearching(false)
  }

  const handleChange = ({target: {value}}) => setSearchBy(value)

  return (
    <Container>
      <Box my={4}>
        <Typography variant="h3" component="h1">
          Github repositories list page
        </Typography>
      </Box>

      <Grid container spacing={2} justify="space-between">
        <Grid item md={6} xs={12}>
          <TextField
            value={searchBy}
            onChange={handleChange}
            fullWidth
            label="Filter by"
            id="filterBy"
          />
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
        <Content isSearchApplied={isSearchApplied} reposList={reposList} />
      </Box>
    </Container>
  )
}

export default GithubSearchPage
