import axiosBase, { AxiosInstance } from 'axios';

export const useAxios = (): AxiosInstance => {
  const axios = axiosBase.create({
    baseURL: 'http://localhost:8080',
    timeout: 1000,
    headers: {
      'Content-Type': 'application/json'
    }
  })

  /**
   * interceptorsは文字通りaxiosの処理を捕まえることができる
   * リクエストもしくはレスポンスに対して処理を行うことができる
   * 下の例ではaxiosを使ったapi通信のレスポンスに対して処理を行っている
   * 下のようにしておくことで、axiosの呼び出し時が楽になる
   */
  axios.interceptors.response.use(
    (response) => {
    // 第一引数はリクエスト成功時のレスポンスを取れる
      return response;
    },
    (error) => {
      throw error.response;
    }
  )

  return axios;
}