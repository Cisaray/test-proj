import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const formApi = createApi({
  reducerPath: 'formApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://api.sbercloud.ru/content/v1/bootcamp/frontend'}),
  endpoints: build => ({
    postData: build.mutation({
      query: body => ({
        method: 'POST',
        body
      })
    })
  })
})
export const {usePostDataMutation} = formApi;