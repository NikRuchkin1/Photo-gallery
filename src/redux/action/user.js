export const getUserInfo = (action) => ({
    type: 'GET_USER',
    users: action,
});

export const getUserId = (action) => ({
    type: 'CURRENT_USER',
    currentUser: action,
});
//Вместо экшион креэйтор сделал запрос к бд, нужно сюда прокинуть юзер айди
export const getCurrentUser = (userID) => (dispatch) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userID}`)
    .then(response => response.json())
    .then(user => dispatch(getUserId(user)))
   }
export const setUser = () => (dispatch) => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(user => dispatch(getUserInfo(user)))
   }