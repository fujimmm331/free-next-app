// src/mocks/handlers.js
import { rest } from 'msw'

/**
 * モックしたいAPIをこの中に定義していく
 */
export const handlers = [
  rest.get('/samples', (req, res, ctx) => {
    return res(
      ctx.json(
        [
          {
            title: 'タイトル'
          }
        ]
      )
    )
  })
]