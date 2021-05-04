import axios from "axios"

axios.defaults.baseURL = process.env.REACT_APP_API_URL

const token = localStorage.getItem("token")
if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
}

// .env.development file is default URL location (REACT_APP_API_URL)