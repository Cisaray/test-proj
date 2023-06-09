import style from "./secondPage.module.css";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useForm, useFieldArray, Controller} from "react-hook-form";
import {setAdvantages, setCheckboxes,setNumber} from "../../redux/slices/formSlice";
import React from "react";

export const SecondCreatePage = () => {
  const {advantages, checkboxes, number} = useSelector(state => state.form)
  const [radioValue,setRadioValue] = React.useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {register, control, handleSubmit, formState: {errors}} = useForm({
    defaultValues: {
      advantages: [{ value: '' }, { value: '' }, { value: '' }],
    }
  })
  const {fields: advantagesFields, append: appendAdvantage, remove: removeAdvantage} = useFieldArray({
    control,
    name: 'advantages'
  })

  const onSubmit = (data) => {
    const advantages = data.advantages.map(item => item.value)
    dispatch(setAdvantages(advantages))
    const checkboxes = data.checkboxes.map((item, index) => item === true ? index : null).filter(item => item!==null)
    const filteredBox = {
      checkboxes
    }
    dispatch(setCheckboxes(filteredBox))
    dispatch(setNumber(data.number))
    navigate('/final-create')
  }

  return (
    <main className={style.container}>
      <div className={style.status_bar}>
        <div className={style.status_circle_active} onClick={() => navigate('/create')}>
          <div className={style.mini_circle}></div>
          <p className={style.first}>1</p>
        </div>

        <div className={style.status_line_active}/>
        <div className={style.status_circle_active} onClick={() => navigate('/second-create')}>
          <div className={style.mini_circle}></div>
          <p className={style.first}>2</p>
        </div>
        <div className={style.status_line}/>
        <div className={style.status_circle} onClick={() => navigate('/final-create')}>
          <p className={style.unactive_numbers}>3</p>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className={style.content}>
        {/*advantages group*/}
        <div>
          <label>Advantages</label>
          {advantagesFields.map((field, index) =>
            <div key={field.id} className={style.advantages_input__block}>
              <input
                name='advantages'
                {...register(`advantages.${index}.value`,
                  {
                    required: 'Введите достижение'
                  })}
                defaultValue={advantages[index]}
                className={style.form_input}
                placeholder='Placeholder'
                type="text"/>
              <img onClick={() => removeAdvantage(index)} src="/assets/Delete.svg" alt="Delete"/>
              {errors.advantages && <p className={style.errors}>Добавьте достижение</p>}
            </div>)}
          <button type='button' onClick={() => appendAdvantage({value:''})} className={style.add_button}><img src="/assets/Plus.svg"
                                                                                             alt="Plus"/>
          </button>
        </div>
        {/*checkboxes group*/}
        <div className={style.checkbox_group}>
          <label>Checkbox group</label>
          <div>
            <input
              name='checkboxes'
              {...register(`checkboxes[1]`)}
              className={style.checkbox}
              defaultValue={checkboxes[0]}
              type="checkbox"/>
            <span>1</span>
          </div>
          <div>
            <input
              className={style.checkbox}
              name='checkboxes'
              {...register(`checkboxes[2]`)}
              defaultValue={checkboxes[1]}
              type="checkbox"/>
            <span>2</span>
          </div>
          <div>
            <input
              name='checkboxes'
              {...register(`checkboxes[3]`)}
              className={style.checkbox}
              defaultValue={checkboxes[0]}
              type="checkbox"/>
            <span>3</span>
          </div>
        </div>
        {errors.checkboxes && <p className={style.errors}>{errors.checkboxes.message}</p>}
        {/*radio group*/}
        <div className={style.radio_group}>
          <label>Radio group</label>
          <Controller
            name='number'
            control={control}
            rules={{required: "Выберите"}}
            value='1'
            onChange={(e)=>setRadioValue(e.target.value)}
            checked={radioValue==='1'}
            render={({field}) =>
            <div>
              <input name='number' {...field} value='1' className={style.checkbox} type="radio"/>
              <span>1</span>
            </div>
          }/>
          <Controller
            name='number'
            control={control}
            rules={{required:'Выберите'}}
            value='2'
            onChange={(e)=>setRadioValue(e.target.value)}
            checked={radioValue==='2'}
            render={({field}) =>
              <div>
                <input name='number' {...field} value='2' className={style.checkbox} type="radio"/>
                <span>2</span>
              </div>
          }/>

          <Controller
            name='number'
            control={control}
            rules={{required: 'Выберите'}}
            value='3'
            onChange={(e)=>setRadioValue(e.target.value)}
            checked={radioValue==='3'}
            render={({field}) =>
              <div>
                <input name='number' className={style.checkbox} type="radio"/>
                <span>3</span>
              </div>
          }/>
          {errors.number && <p className={style.errors}>Выберите</p>}
        </div>

        <div className={style.button_footer}>
          <Link to='/create'>
            <button className={style.previous_button}>Назад</button>
          </Link>
          <button type='submit' className={style.next_button}>Далее</button>
        </div>

      </form>
    </main>
  )
}