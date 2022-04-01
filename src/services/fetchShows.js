import axios from "axios";

export async function apiCall(searchInput){
    const siteAPI = `https://api.tvmaze.com/search/shows?q=:${searchInput}`;

    const apiCall = await axios.get(siteAPI)
    .then(({ data }) => {
        return data;
    });
    return apiCall;
}
