import { FiArrowLeft} from 'react-icons/fi';
import { FiArrowRight} from 'react-icons/fi';


const nav = () => {
  return (
    <>

    <div className="flex items-center justify-between p-10 lg:flex-row">
        <div>
           <a href="#" className="text-white font-mono text-3xl
           tracking-wider flex items-center"><FiArrowLeft/> KOME OSAUZOU <FiArrowRight/>
            </a></div>
    <div className="space-x-4">
      <div className="ssm:hidden lg:block space-x-2">
        <a href="#" className="text-white hover:bg-black rounded-full px-5 py-2 text-xl">Skills</a>
        <a href="#" className="text-white hover:bg-black rounded-full px-5 py-2 text-xl">Projects</a>
    </div>
</div>
</div>
    </>
  )
}   

export default nav