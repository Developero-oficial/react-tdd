import React from 'react'
import PropTypes from 'prop-types'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Avatar from '@material-ui/core/Avatar'
import Link from '@material-ui/core/Link'

const tableHeaders = [
  'Repository',
  'Stars',
  'Forks',
  'Open issues',
  'Updated at',
]

export const GithubTable = ({reposList}) => (
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
)

export default GithubTable

GithubTable.propTypes = {
  reposList: PropTypes.arrayOf(PropTypes.object).isRequired,
}
