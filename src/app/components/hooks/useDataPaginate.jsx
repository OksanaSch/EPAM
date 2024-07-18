// import axios from "axios"
"use client";
import { useCallback, useEffect, useState } from "react";

// if you are using Mockup Data

// We don't know or have access to the data in this hook, so we are passing `data` as a placeholder argument
// We also don't know the limit yet, we simply pass `limit` as argument

export const useDataPaginate = (data, limit) => {
    const [currentPage, setPage] = useState(1);
    const [lastPage, setLastPage] = useState(false);

    const getPaginatedData = () => {

        // assuming the limit is 5

        // remember counting data in an array starts from 0

        // declare where to start getting the data from
        const startIndex = (currentPage - 1) * limit // if current page is 1, it will be start fetching the data from 0. i.e; (1-1) * 20 = 0

        // declare where to stop the data
        const endIndex = startIndex + limit; // if the current page is 1, it will stop fetching the data at 20. i.e (0 + 20)

        // Finally return the data

        return data.slice(0, endIndex)   //
    }


    // save and invoke the paginatedData function in a variable

	const paginatedData = getPaginatedData();




    // handle Next page


    const nextPage = () => {

        // If the user is not already at the last page, go to the next page
        // If the user is at the last page, do nothing

        // We check if the current page is less than the paginated pages.

        if (currentPage < Math.ceil(data.length / limit)) {
            setPage(previousPage => previousPage + 1)
        }


        if (Math.ceil(data.length / (currentPage * limit)) < 3) {
            setLastPage(true)
        }
    }


    // Finally return all your functions

    return { nextPage, paginatedData, currentPage, lastPage }

}

//

// If there's a backend API

//https://dev.to/stephengade/data-pagination-in-react-nextjs-with-custom-hooks-1ik0