import axios from 'axios'

const ROOT_PATH = '/api/v1'
const MESSAGES_PATH = `${ROOT_PATH}/messages`

export const getMessages = () => {
  return axios.get(MESSAGES_PATH)
}