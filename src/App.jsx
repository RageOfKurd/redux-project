

function App() {
 

  return (
    <div className="w-screen h-screen bg-stone-100 flex flex-col gap-5 justify-center items-center ">
      <img className='w-80 h-80 object-cover rounded-full' src='https://media.istockphoto.com/id/1288129985/vector/missing-image-of-a-person-placeholder.jpg?s=612x612&w=0&k=20&c=9kE777krx5mrFHsxx02v60ideRWvIgI1RWzR1X4MG2Y=' alt="" />
      <h1 className="text-3xl">name</h1>
      <div className="flex  gap-5 mt-5">
       
        <button   className="bg-red-200 text-2xl px-4 py-2 rounded">logout</button>
        <button  className="bg-blue-200 text-2xl px-4 py-2 rounded">login</button>
      </div>
   
    </div>
  )
}

export default App


