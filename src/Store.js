import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./cartSlice";
// import { addcarthandler } from "./Components/Action";
// import { BlogReducer, GetBlogReducer, ViewBlogReducer } from "./Components/reducers/Blogreducer";
import { AddCart, GetCart, GetItems } from "./Components/Reducer";

const store=configureStore({
    reducer:{
        item:GetItems,
        cart:GetCart,
        reducer:cartReducer
        //  addcart:AddCart
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