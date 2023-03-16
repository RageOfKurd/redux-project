import { useSelector, useDispatch } from 'react-redux'
import { login, logout } from './slices/userSlice'

function App() {
 
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch();
  console.log(user)

  function handleClick() {

    user.name ? dispatch(logout()) : dispatch(login())
    
  }
  return (
    <div className="w-screen h-screen bg-stone-100 flex flex-col gap-5 justify-center items-center ">
      <img className='w-80 h-80 object-cover rounded-full' src={user.image} alt="" />
      <h1 className="text-3xl">{ user.name}</h1>
      <div className="flex  gap-5 mt-5">
       
        <button onClick={handleClick} className={`${user.name ? 'bg-red-200' : 'bg-blue-200'} text-2xl px-4 py-2 rounded font-semibold`}>{ user.name ? 'logout' : 'login'  }</button>
 
      </div>
   
    </div>
  )
}

export default App


