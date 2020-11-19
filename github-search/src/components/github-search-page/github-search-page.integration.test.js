import React from 'react'
import {render, screen, fireEvent, waitFor} from '@testing-library/react'
import {rest} from 'msw'
import {setupServer} from 'msw/node'

import {GithubSearchPage} from './github-search-page'
import {makeFakeResponse, makeFakeRepo} from '../../__fixtures__/repos'
import {handlerPaginated} from '../../__fixtures__/handlers'
import {OK_STATUS} from '../../consts'

const fakeResponse = makeFakeResponse({totalCount: 1})

const fakeRepo = makeFakeRepo()

fakeResponse.items = [fakeRepo]

const server = setupServer(
  rest.get('/search/repositories', (req, res, ctx) =>
    res(ctx.status(OK_STATUS), ctx.json(fakeResponse)),
  ),
)

beforeAll(() => server.listen())

afterEach(() => server.resetHandlers())

afterAll(() => server.close())

beforeEach(() => render(<GithubSearchPage />))

const fireClickSearch = () =>
  fireEvent.click(screen.getByRole('button', {name: /search/i}))

describe('when the developer does a search and selects 50 rows per page', () => {
  it('must fetch a new search and didsplay 50 rows results on the table', async () => {
    server.use(rest.get('/search/repositories', handlerPaginated))

    fireClickSearch()

    expect(await screen.findByRole('table')).toBeInTheDocument()
    expect(await screen.findAllByRole('row')).toHaveLength(31)

    fireEvent.mouseDown(screen.getByLabelText(/rows per page/i))
    fireEvent.click(screen.getByRole('option', {name: '50'}))

    await waitFor(
      () =>
        expect(
          screen.getByRole('button', {name: /search/i}),
        ).not.toBeDisabled(),
      {timeout: 3000},
    )
    expect(screen.getAllByRole('row')).toHaveLength(51)
  }, 10000)
})

describe('when the developer clicks on search and then on next page button and then on previous page button', () => {
  it('must display the previous repositories page', async () => {
    server.use(rest.get('/search/repositories', handlerPaginated))

    fireClickSearch()

    expect(await screen.findByRole('table')).toBeInTheDocument()

    expect(screen.getByRole('cell', {name: /1-0/})).toBeInTheDocument()

    expect(screen.getByRole('button', {name: /next page/i})).not.toBeDisabled()

    fireEvent.click(screen.getByRole('button', {name: /next page/i}))

    expect(screen.getByRole('button', {name: /search/i})).toBeDisabled()

    await waitFor(
      () =>
        expect(
          screen.getByRole('button', {name: /search/i}),
        ).not.toBeDisabled(),
      {timeout: 3000},
    )

    expect(screen.getByRole('cell', {name: /2-0/})).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', {name: /previous page/i}))

    await waitFor(
      () =>
        expect(
          screen.getByRole('button', {name: /search/i}),
        ).not.toBeDisabled(),
      {timeout: 3000},
    )

    expect(screen.getByRole('cell', {name: /1-0/})).toBeInTheDocument()
  }, 30000)
})

describe('when the developer does a search and clicks on next page button and selects 50 rows per page', () => {
  it.only('must display the results of the first page', async () => {
    server.use(rest.get('/search/repositories', handlerPaginated))

    fireClickSearch()

    expect(await screen.findByRole('table')).toBeInTheDocument()

    expect(screen.getByRole('cell', {name: /1-0/})).toBeInTheDocument()

    expect(screen.getByRole('button', {name: /next page/i})).not.toBeDisabled()

    fireEvent.click(screen.getByRole('button', {name: /next page/i}))

    expect(screen.getByRole('button', {name: /search/i})).toBeDisabled()

    await waitFor(
      () =>
        expect(
          screen.getByRole('button', {name: /search/i}),
        ).not.toBeDisabled(),
      {timeout: 3000},
    )

    expect(screen.getByRole('cell', {name: /2-0/})).toBeInTheDocument()

    fireEvent.mouseDown(screen.getByLabelText(/rows per page/i))
    fireEvent.click(screen.getByRole('option', {name: '50'}))

    await waitFor(
      () =>
        expect(
          screen.getByRole('button', {name: /search/i}),
        ).not.toBeDisabled(),
      {timeout: 3000},
    )

    expect(screen.getByRole('cell', {name: /1-0/})).toBeInTheDocument()
  }, 30000)
})
