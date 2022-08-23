import { fetcher } from "utils";
import { ApiContext, User } from 'types'


export type GetUserParams = {
  /**
   * ユーザーid
   */
  id: number
}

const signin = async (context: ApiContext, { id }: GetUserParams,): Promise<User> => {
  /**
   * //ユーザーAPI
   * //サンプルレスポンス
   * {
   *    "id":"1",
   *    "username":"taketo",
   *    "displayName":"TaketoYoshida",
   *    "email":"taketo@example.com",
   *    "profileImageUrl":"/users/1.png",
   *    "description":"LoremIpsumissimplydummytextoftheprintingandtypesettingindustry"
   * }
   * */

  return await fetcher(
    `${context.apiRootUrl.replace(/\/$/g, '')}/users/${id}`,
    {
      headers: {
        Accept: 'application/json',
        'ContentType': 'application/json',
      },
    },
  )
}

export default signin