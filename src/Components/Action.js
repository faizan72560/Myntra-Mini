// Add New Blog
import axios from 'axios'
export const getItems = () => async (dispatch) => {
    try {
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
      let { data } = await axios.get("https://api.escuelajs.co/api/v1/products",config)
  
      console.log(data)
    //  data=data.slice(1,5)

  
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


        dispatch({ type: "GET_TOCART_SUCCESS", payload: cart});


    }catch(error){

        dispatch({
            type: "GET_TOCART_FAILURE",
            payload: error
          });

    }

  }

