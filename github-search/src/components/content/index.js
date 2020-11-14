import React from 'react'
import PropTypes from 'prop-types'
import Box from '@material-ui/core/Box'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Avatar from '@material-ui/core/Avatar'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'
import TablePagination from '@material-ui/core/TablePagination'

const tableHeaders = [
  'Repository',
  'Stars',
  'Forks',
  'Open issues',
  'Updated at',
]

export const Content = ({isSearchApplied, reposList}) =>
  isSearchApplied ? (
    <>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {tableHeaders.map(name => (
                <TableCell key={name}>{name}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {reposList.map(
              ({
                name,
                id,
                stargazers_count: stargazersCount,
                forks_count: forksCount,
                open_issues_count: openIssuesCount,
                updated_at: updatedAt,
                html_url: htmlUrl,
                owner: {avatar_url: avatarUrl},
              }) => (
                <TableRow key={id}>
                  <TableCell>
                    <Avatar alt={name} src={avatarUrl} />
                    <Link href={htmlUrl}>{name}</Link>
                  </TableCell>
                  <TableCell>{stargazersCount}</TableCell>
                  <TableCell>{forksCount}</TableCell>
                  <TableCell>{openIssuesCount}</TableCell>
                  <TableCell>{updatedAt}</TableCell>
                </TableRow>
              ),
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[30, 50, 100]}
        component="div"
        count={1}
        rowsPerPage={30}
        page={0}
        onChangePage={() => {}}
        onChangeRowsPerPage={() => {}}
      />
    </>
  ) : (
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
  )

export default Content

Content.propTypes = {
  isSearchApplied: PropTypes.bool.isRequired,
  reposList: PropTypes.arrayOf(PropTypes.object).isRequired,
}
