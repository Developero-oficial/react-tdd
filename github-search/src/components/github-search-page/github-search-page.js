import React, {useState, useEffect, useCallback, useRef} from 'react'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import TablePagination from '@material-ui/core/TablePagination'

import {Content} from '../content'
import {GithubTable} from '../github-table'
import {getRepos} from '../../services'

const ROWS_PER_PAGE_DEFAULT = 30

export const GithubSearchPage = () => {
  const [isSearching, setIsSearching] = useState(false)
  const [isSearchApplied, setIsSearchApplied] = useState(false)
  const [reposList, setReposList] = useState([])
  const [rowsPerPage, setRowsPerPage] = useState(ROWS_PER_PAGE_DEFAULT)

  const didMount = useRef(false)
  const searchByInput = useRef(null)

  const handleSearch = useCallback(async () => {
    setIsSearching(true)
    const response = await getRepos({
      q: searchByInput.current.value,
      rowsPerPage,
    })

    const data = await response.json()

    setReposList(data.items)
    setIsSearchApplied(true)
    setIsSearching(false)
  }, [rowsPerPage])

  const handleChangeRowsPerPage = ({target: {value}}) => setRowsPerPage(value)

  useEffect(() => {
    if (!didMount.current) {
      didMount.current = true
      return
    }

    handleSearch()
  }, [handleSearch])

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
            inputRef={searchByInput}
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
            onClick={handleSearch}
          >
            Search
          </Button>
        </Grid>
      </Grid>

      <Box my={4}>
        <Content isSearchApplied={isSearchApplied} reposList={reposList}>
          <>
            <GithubTable reposList={reposList} />
            <TablePagination
              rowsPerPageOptions={[30, 50, 100]}
              component="div"
              count={1000}
              rowsPerPage={rowsPerPage}
              page={0}
              onChangePage={() => {}}
              onChangeRowsPerPage={handleChangeRowsPerPage}
            />
          </>
        </Content>
      </Box>
    </Container>
  )
}

export default GithubSearchPage
