import { TbHandFinger } from 'react-icons/tb'
export default  function ScrollParaOTopo () {
  return (
    <button 
     onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} 
     className="btn btn-warning float-right" 
      alt="voltar ao topo" >
        Fazer simulação <TbHandFinger></TbHandFinger>
    </button>
  )
}