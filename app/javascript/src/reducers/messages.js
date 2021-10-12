import * as api from '../api/api'
const GET_MESSAGES = "GET_MESSAGES"

export const getMessages = () => async (dispatch) => {
  const { data } = await api.getMessages()
  dispatch({
    type: GET_MESSAGES,
    payload: data.data
  })
}

export default (messages = [], action ) => {
  switch (action.type) {
    case GET_MESSAGES:
      return action.payload
    default:
      return messages
  }
}