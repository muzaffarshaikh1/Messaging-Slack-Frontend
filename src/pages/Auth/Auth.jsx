const Auth = ({ children }) => {
  return (
    <div className='h-[100vh] flex justify-center items-center bg-slack'>
      <div className="md:h-auto md:w-[420px]">
        {children}
      </div>
    </div>
  )
}

export default Auth