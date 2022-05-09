import * as axios from 'axios'

export const fetcher = axios.default.create({
    baseURL: `https://deckofcardsapi.com/api/deck/`,
})