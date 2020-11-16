const baseUrl =
  process.env.NODE_ENV === 'test' ? '' : process.env.REACT_APP_BASE_URL

export const getRepos = ({q}) =>
  fetch(`${baseUrl}/search/repositories?q=${q}&page=0&per_page=30`)

export default {
  getRepos,
}
