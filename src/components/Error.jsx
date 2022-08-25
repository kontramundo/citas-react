const Error = ({ children }) => {
  return (
    <div>
        <p className='bg-red-800 text-white uppercase text-center p-3 mb-3 font-bold rounded-md'>{ children }</p>
    </div>
  )
}

export default Error
