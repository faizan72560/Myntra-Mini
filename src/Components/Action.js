// Add New Blog
import axios from 'axios'
export const getItems = (currentpage,indexoflastpost,text) => async (dispatch,getState) => {
    try {
      console.log(getState())
    //   console.log(title)
        dispatch({type:"GET_REQUEST"});
        
        const config = {
            headers: {
                "Content-Type": "application/json",
              },

            //   withCredentials:true
          };

          // const obj={
          //   title,text
          // }
        //   console.log(title,text)
        // let text=localStorage.getItem("text")
        console.log(text)
        let id;

        if(text=='Clothes'){
           id=1
        }
        else if(text=='Electronics'){
          id=2
        }
        else if(text=='Furniture'){
          id=3
        }
        else if(text=='Shoes'){
          id=4
        }
        else{
          id=5
        }

        console.log(id)


      let { data } = await axios.get("https://api.escuelajs.co/api/v1/products",config)
      // let { data } = await axios.get("https://api.escuelajs.co/api/v1/categories/1/products",config)

  
      console.log(data)
      if(indexoflastpost<=data.length){

        data=data.slice(currentpage,indexoflastpost)
      }
      else{
        // window.location.reload()

      }

  
      dispatch({ type: "GET_SUCCESS", payload: data});
    } catch (error) {
      dispatch({
        type: "GET_FAILURE",
        payload: error
      });
    }
  };


  export const getcarthandler=()=>(dispatch)=>{
    try{
        console.log("hrhh")
        dispatch({type:"GET_TOCART_REQUEST"});

        const cart=JSON.parse(localStorage.getItem('cart'))
        console.log(cart)


        dispatch({ type: "GET_TOCART_SUCCESS",});


    }catch(error){

        dispatch({
            type: "GET_TOCART_FAILURE",
            payload: error
          });

    }

  }

  //  let arr=[]

  export const addcarthandler=(cart,state, action)=>(dispatch)=>{
    try{
        console.log("hrhh")
        dispatch({type:"ADD_TOCART_REQUEST"});

        // console.log(cart)

        // arr.push(cart)
        // console.log(arr)
        // localStorage.setItem('arr',JSON.stringify(arr))
        console.log(state)

        const itemInCart = state.cart.find((item) => item.id === action.payload.id);
        if (itemInCart) {
          itemInCart.quantity++;
        } else {
          state.cart.push({ ...cart, quantity: 1 });
        }




        
        dispatch({ type: "ADD_TOCART_SUCCESS",payload: state.cart});


    }catch(error){

        dispatch({
            type: "ADD_TOCART_FAILURE",
            payload: error
          });

    }

  }

