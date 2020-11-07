const initialState = {
  users: [  ],
  currentUser: [
    {
      id: 1,
      name: '',
      username: '',
      email: '',
      address: {
        street: '',
        suite: '',
        city: '',
        zipcode: '',
        geo: {
          lat: '',
          lng: ''
        }
      },
      phone: '',
      website: '',
      company: {
        name: '',
        catchPhrase: '',
        bs: ''
      }
    },
],
  albums: [],
  photo: [],
  };

  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_USER':
        return {
          ...state,
          users: action.users,
        };
      case 'CURRENT_USER':
        return {
          ...state,
          currentUser: action.currentUser,
        };

      default:
        return state;
    }
  };

  export default userReducer;