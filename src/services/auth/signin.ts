import { fetcher } from "utils";
import { ApiContext, User } from 'types'


export type SigninParams = {
  /**
   * ユーザー名
   * サンプルユーザーのユーザー名は user
   */
  username: string

  /**
   * パスワード
   * サンプルユーザーのパスワードは password
   */
  password: string
}

const signin = async (context: ApiContext, params: SigninParams,): Promise<User> => {
  return await fetcher(
    `${context.apiRootUrl.replace(/\/$/g, '')}/auth/signin`,
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'ContentType': 'application/json',
      },
      body: JSON.stringify(params),
    },
  )
}

export default signin