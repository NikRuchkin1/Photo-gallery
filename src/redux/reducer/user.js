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
  currentPhoto: null,
  currentId: null,
  };

  const userReducer = (state = initialState, action) => {
    function prevPhoto() {
      if (+state.photos[0].id > +state.currentId - 1)
        {return (state.currentPhoto = state.photos[state.photos.length-1].url,
        state.currentId = state.photos[state.photos.length-1].id)}
        {return (state.currentPhoto = state.photos.find(u => u.id === +state.currentId - 1).url),
        state.currentId = state.currentId-1}
    }

    function nextPhoto() {
      if (+state.photos[state.photos.length-1].id < +state.currentId + 1)
        {return (state.currentPhoto = state.photos[0].url,
        state.currentId = state.photos[0].id)}
        {return (state.currentPhoto = state.photos.find(u => u.id === +state.currentId + 1).url),
        state.currentId = state.currentId+1}
    }

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
      case 'GET_CURRENT_PHOTO':
        return {
          ...state,
          currentPhoto: state.photos.find(u => u.id === action.currentPhoto).url,
          currentId: action.currentPhoto,
        };
      case 'NEXT_CURRENT_PHOTO':
        return {
          ...state,
          currentPhoto: nextPhoto(),
          currentPhoto: state.currentPhoto,
          currentId: state.currentId
        };
      case 'PREV_CURRENT_PHOTO':
        return {
          ...state,
          currentPhoto: prevPhoto(),
          currentPhoto: state.currentPhoto,
          currentId: state.currentId
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
        case 'GET_ALL_ALBUMS':
          return {
            ...state,
            albums: action.albums,
          };
      default:
        return state;
    }
  };

  export default userReducer;