import { configureStore } from "@reduxjs/toolkit";
// import { BlogReducer, GetBlogReducer, ViewBlogReducer } from "./Components/reducers/Blogreducer";
import { GetCart, GetItems } from "./Components/Reducer";

const store=configureStore({
    reducer:{
        item:GetItems,
        cart:GetCart
    //    blog:BlogReducer,
    //    getblog:GetBlogReducer,
    //    viewblog:ViewBlogReducer
        // myPlaces:getPlaceReducer
        // postOfFollowing: postOfFollowingReducer,
        // createPost:createNewPost,
        // allUsers: allUsersReducer,
        // myposts:myPostsReducer
    
    }
    , middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),   

    })

export default store