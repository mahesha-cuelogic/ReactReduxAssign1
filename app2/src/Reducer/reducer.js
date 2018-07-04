const initialState={
    user:{
        firstName:'',
        lastName:'',
        email:'',
        address:''
      },
      registered:false
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
       case 'REGISTER':


         return {
                ...state,
                user:{
                    firstName:action.formObject.firstName,
                    lastName:action.formObject.lastName,
                    email:action.formObject.email,
                    address:action.formObject.address
                },
                registered:true
         }
     
     }
  };
  export default reducer;