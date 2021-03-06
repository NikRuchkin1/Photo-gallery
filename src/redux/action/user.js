export const getUserInfo = (action) => ({
    type: 'GET_USER',
    users: action,
});

export const getCurrentPhoto = (action) => ({
    type: 'GET_CURRENT_PHOTO',
    currentPhoto: action,
});

export const nextCurrentPhoto = () => ({
    type: 'NEXT_CURRENT_PHOTO',
});

export const prevCurrentPhoto = () => ({
    type: 'PREV_CURRENT_PHOTO',
});

export const getUserId = (action) => ({
    type: 'CURRENT_USER',
    currentUser: action,
});

export const getAlbumUser = (action) => ({
    type: 'GET_ALBUM_USER',
    album: action,
});

export const getPhotoUser = (action) => ({
    type: 'GET_PHOTO_USER',
    photo: action,
});

export const getPhotoAlbum = (action) => ({
    type: 'GET_PHOTO_ALBUM',
    photo: action,
});

export const getAllAlbums = (action) => ({
    type: 'GET_ALL_ALBUMS',
    albums: action,
});

export const getCurrentUser = (userID) => (dispatch) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userID}`)
    .then(response => response.json())
    .then(user => dispatch(getUserId(user)))

    fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userID}`)
    .then(response => response.json())
    .then(album => dispatch(getAlbumUser(album)))

    fetch(`https://jsonplaceholder.typicode.com/photos`)
    .then(response => response.json())
    .then(photo => dispatch(getPhotoUser(photo)))
}
export const setUser = () => (dispatch) => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(user => dispatch(getUserInfo(user)))
}

export const setPhoto = (albumId) => (dispatch) => {
    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
    .then(response => response.json())
    .then(album => dispatch(getPhotoAlbum(album)))
}

export const getAllAlbum = () => (dispatch) => {
    fetch(`https://jsonplaceholder.typicode.com/albums`)
    .then(response => response.json())
    .then(album => dispatch(getAllAlbums(album)))

    fetch(`https://jsonplaceholder.typicode.com/photos`)
    .then(response => response.json())
    .then(photo => dispatch(getPhotoUser(photo)))
}
