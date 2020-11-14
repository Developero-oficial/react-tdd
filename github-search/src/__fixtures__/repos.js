export const makeFakeResponse = ({totalCount = 0}) => ({
  total_count: totalCount,
  items: [],
})

export const makeFakeRepo = () => ({
  id: '56757919',
  name: 'django-rest-framework-reactive',
  owner: {
    avatar_url: 'https://avatars0.githubusercontent.com/u/2120224?v=4',
  },
  html_url: 'https://github.com/genialis/django-rest-framework-reactive',
  updated_at: '2020-10-24',
  stargazers_count: 58,
  forks_count: 9,
  open_issues_count: 0,
})

export default {
  makeFakeResponse,
  makeFakeRepo,
}
