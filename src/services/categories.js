import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Konfiguracja API z linku podanego w zadaniu
export const categoriesApi = createApi({
    reducerPath: "categories",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://cors-anywhere.herokuapp.com/https://api.iforbet.pl/rest/market/"
    }),
    endpoints: (builder) => ({
        getCategories: builder.query({
            query: () => `categories`
        })
    })
})

export const { useGetCategoriesQuery } = categoriesApi;