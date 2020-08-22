const INITIAL_STATE = {
    User:'',
    Bio:'',
    Tweets:[],
}
const currentUser = (state = INITIAL_STATE,action)=>{
    console.log('reducer',action.payload)
    switch(action.type){
        case 'SET_CURRENT_USER':
            return {
                ...state,
                User:action.payload.currentUser,
                Bio:action.payload.bio
            }
        case 'SET_NEW_TWEET':
            return{
                ...state,
                Tweets:action.payload.tweets
            }
        default:
            return state;
    }
}
//const inccrementUser

export default currentUser;