
import { createSlice } from '@reduxjs/toolkit'

const initialState = {

    name: '', 
    image: 'https://media.istockphoto.com/id/1288129985/vector/missing-image-of-a-person-placeholder.jpg?s=612x612&w=0&k=20&c=9kE777krx5mrFHsxx02v60ideRWvIgI1RWzR1X4MG2Y=',
    age : '',

    
}

const userSlice = createSlice({
  name: 'user',
  initialState,
    reducers: {

        login: (state) => {
            
            state.name = 'barez'
            state.image = 'https://media.licdn.com/dms/image/D4D03AQHgXRnJuqwlrQ/profile-displayphoto-shrink_800_800/0/1668683093877?e=2147483647&v=beta&t=CR_CmEsQkzuUXMlImZgzZRMOJhqwL4Cj7S9TJ3IY2Pw'
        }
        ,

        logout: (state) => {
            state.name = '';
            state.image = 'https://media.istockphoto.com/id/1288129985/vector/missing-image-of-a-person-placeholder.jpg?s=612x612&w=0&k=20&c=9kE777krx5mrFHsxx02v60ideRWvIgI1RWzR1X4MG2Y='
        }
      
  }
});

export const {login , logout} = userSlice.actions

export default userSlice.reducer