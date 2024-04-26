import { useDispatch, useSelector } from 'react-redux';
import { useGetOneCapsuleQuery } from '../../../../../services/rocket';
import Card from '../card';
import { overlay } from '../../../../../features/overlaySlice';
import { Loader } from '../../../../../components/ui';

const CardDetails = () => {
  const details = useSelector((state) => state.details.id);
  const { data, isFetching} = useGetOneCapsuleQuery(details)
  const dispatch = useDispatch()

  if(isFetching) {
    return <Loader />
  }
  
const handleClose = () => {
  dispatch(overlay(false))
}
  return (
      <div className=' px-10 py-10'>
        <span className="text-4xl flex justify-end py-6 hover:cursor-pointer" onClick={handleClose}>X</span>
        <Card rocket={data} showButton /> 
      </div>
  )
}

export default CardDetails