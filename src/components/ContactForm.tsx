import Button from "./Button"
import Input from "./Input"

import { useForm } from 'react-hook-form'
import { server_calls } from '../api/server'
import { useDispatch, useStore } from 'react-redux';
import { chooseColor, chooseNum_Of_Lemons, chooseTime_To_Make } from "../redux/slices/RootSlice";

// interfaces

interface ContactFormProps {
  id?: string[],
}

const ContactForm = (props:ContactFormProps) => {
  const { register, handleSubmit } = useForm({})
  const dispatch = useDispatch();
  const store = useStore();

  const onSubmit = (data: any, event: any) => {
    console.log(`ID: ${typeof props.id}`);
    console.log(props.id)
    console.log(data)
    if (props.id && props.id.length > 0) {
      server_calls.update(props.id[0], data)
      console.log(`Updated: ${ data.name } ${ props.id }`)
      setTimeout(() => {window.location.reload()}, 500);
      event.target.reset()
    } else {
      // Use dispatch to update our state in our store
      dispatch(chooseColor(data.color));
      dispatch(chooseNum_Of_Lemons(data.num_of_lemons));
      dispatch(chooseTime_To_Make(data.time_to_make));

      server_calls.create(store.getState())
      setTimeout( () => {window.location.reload()}, 500);
    }
    
  }

  return (


    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="color">Color</label>
          <Input {...register('color')} name='color' placeholder="Color"/>
        </div>
        <div>
          <label htmlFor="num_of_lemons">Number Of Lemons</label>
          <Input   {...register('num_of_lemons')} name='num_of_lemons' placeholder="Num Of Lemons" />
        </div>
        <div>
          <label htmlFor="time_to_make">Time To Make</label>
          <Input {...register('time_to_make')} name='time_to_make' placeholder="Time To Make"/>
        </div>

        <div className="flex p-1">
          <Button
            className="flex justify-start m-3 bg-yellow-400 p-2 rounded hover:bg-slate-800 text-white"
            >
              Submit
          </Button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm