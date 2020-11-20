import {makeFakeResponse, getReposPerPage} from './repos'
import {OK_STATUS} from '../consts'

export const handlerPaginated = (req, res, ctx) =>
  res(
    ctx.status(OK_STATUS),
    ctx.json({
      ...makeFakeResponse({totalCount: 10000}),
      items: getReposPerPage({
        perPage: Number(req.url.searchParams.get('per_page')),
        currentPage: req.url.searchParams.get('page'),
      }),
    }),
  )

export default {
  handlerPaginated,
}
