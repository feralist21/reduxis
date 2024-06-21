import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const usersApi = createApi({
    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/users' }),
    endpoints: (builder) => ({
        getAllUsers: builder.query({
            query: () => '?limit=10&select=firstName,email,role',
        }),
    }),
});

const { useGetAllUsersQuery } = usersApi;

export { usersApi, useGetAllUsersQuery };
