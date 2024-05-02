
let token = null;
let userId = null;
export const setToken = (newToken) => {
    token = newToken;
};

export const getToken = () => {
    return token;
};

export const setUserId = (newUserId) =>{
    userId=newUserId;
    console.log(userId);
}
export const getUserId = () =>{
    return userId;
}



