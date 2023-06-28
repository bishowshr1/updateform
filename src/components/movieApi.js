import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';




const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({ baseUrl: '' })
})