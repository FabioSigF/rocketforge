import logo from "../../assets/logo.svg";

const Logo = () => {

  return (
    <div className="flex gap-4">
      <img src={logo} alt="Rocket Forge" className="h-[40px] w-auto"/>
      <h1 className='text-4xl'>Rocket Forge</h1>
    </div>
  )
}

export default Logo