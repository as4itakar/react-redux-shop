import axios from "axios";

const BASE_URL = "http://localhost:5000/api/"

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNTg2NDcxMDA0YjU4Mzg5ZjQzZTkzOSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NDk5NjAwNzgsImV4cCI6MTY1MDEzMjg3OH0.CA13keEEhruJaJ2mUsKSGnEnTqlzaSPZ99TXuewYTAQ"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header:{token:`Bearer ${TOKEN}`}
})