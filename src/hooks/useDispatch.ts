import { useContext } from 'react';
import DispatchContext from './DispatchContext';

const useDispatch = () => useContext(DispatchContext);

export default useDispatch;
