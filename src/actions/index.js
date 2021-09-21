// import axios from 'axios'
// export const Start = 'Start'
// export const Success = 'Success'
// export const Fail = 'Fail'


// export const fetchDog = () => dispatch => {

//   dispatch({ type: Start })
// // own API:
//   axios.get("https://api.thedogapi.com/v1/breeds")
//     .then(response => dispatch({
//       payload: response.data.results,
//       type: Success
//     }))
//     .catch(error => dispatch({
//       payload: error.message,
//       type: Fail
//     }))
// }