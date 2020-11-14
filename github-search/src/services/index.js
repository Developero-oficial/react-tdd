const baseUrl =
  process.env.NODE_ENV === 'test' ? '' : process.env.REACT_APP_BASE_URL

export const getRepos = () =>
  fetch(
    `${baseUrl}/search/repositories?q=react+language:python&page=2&per_page=50`,
  )

export default {
  getRepos,
}
