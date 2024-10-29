import { TiWorld } from "react-icons/ti"

const Logo = () => {
  return (
    <div className=" flex gap-2 items-center ">
    <div className={`bg-main p-[6px] rounded-md`}>
      <TiWorld className=" text-white text-3xl" />
    </div>
    <div className=" flex gap-1 text-[19px]">
      <span className={`font-bold text-main `}>World</span>
      <span className="text-slate-400">Atlas</span>
    </div>
  </div>
  )
}

export default Logo