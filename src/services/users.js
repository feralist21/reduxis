import { api } from '../api';

const usersApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getAllUsers: builder.query({
            query: () => 'https://dummyjson.com/users?limit=10&select=firstName,email,role',
        }),
        addNewProduct: builder.mutation({
            query: (product) => ({
                url: 'https://dummyjson.com/products/add',
                method: 'POST',
                body: product,
            }),
            transformResponse(baseQueryReturnValue) {
                return baseQueryReturnValue;
            }
        }),
    }),
});

export const { useGetAllUsersQuery, useAddNewProductMutation } = usersApi;
