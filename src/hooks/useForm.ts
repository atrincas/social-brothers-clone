import { useDispatch } from 'react-redux'
import { saveFormValue } from '../store'

export default function useForm() {
  const dispatch = useDispatch()

  function handleOnChange(name: string, value: string) {
    dispatch(saveFormValue(name, value))
  }

  return {
    handleOnChange
  }
}
