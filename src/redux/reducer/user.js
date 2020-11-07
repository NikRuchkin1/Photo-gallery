const initialState = {
  users: [],
  currentUser: {
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
  albums: [],
  photos: [],
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
      case 'GET_ALBUM_USER':
        return {
          ...state,
          albums: action.album,
        };
      case 'GET_PHOTO_ALBUM':
        return {
          ...state,
          photos: action.photo,
        };
      case 'GET_PHOTO_USER':
        const photo1 = action.photo.map(a => a.albumId)
        return {
          ...state,
          albums: state.albums.map(u => {
            if (photo1.includes(+u.id)) {
              return {...u, amountPhoto: photo1.filter(function(x){return x==+u.id}).length}
            }
              return u
          }),
        };

      default:
        return state;
    }
  };

  export default userReducer;