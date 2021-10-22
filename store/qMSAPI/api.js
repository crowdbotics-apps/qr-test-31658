import axios from "axios"
import { QMS_API_TOKEN } from "react-native-dotenv"
const qMSAPI = axios.create({
  baseURL:
    "https://stg.ac.parkcitygroup.com/application/vwavecgi/public/restdev.cgi/rest/qms/1.0/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${QMS_API_TOKEN}`
  }
})
function qmsapi_post_login_create(payload) {
  return qMSAPI.post(`/login`, payload.data)
}
export const apiService = { qmsapi_post_login_create }
