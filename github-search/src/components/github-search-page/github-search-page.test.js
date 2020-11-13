import React from 'react'
import {render, screen} from '@testing-library/react'

import {GithubSearchPage} from './github-search-page'

describe('when the GithubSearchPage is mounted', () => {
  it('must display the title', () => {
    render(<GithubSearchPage />)

    expect(
      screen.getByRole('heading', {name: /github repositories list/i}),
    ).toBeInTheDocument()
  })
})
