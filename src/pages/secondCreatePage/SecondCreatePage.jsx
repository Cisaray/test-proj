import style from "./secondPage.module.css";
import {useFieldArray, useFormContext} from "react-hook-form";
import React from "react";
import {TextInput} from "../../components/Inputs/TextInput";
import {CheckBoxInput} from "../../components/Inputs/CheckBoxInput";
import {RadioInput} from "../../components/Inputs/RadioInput";

export const SecondCreatePage = ({setPage}) => {
  const {handleSubmit, control, formState: {errors}} = useFormContext()
  const {fields: advantagesFields, append: appendAdvantage, remove: removeAdvantage} = useFieldArray({
    control,
    name: 'advantages'
  })

  const Radios = [
    {value: '1', label: '1'},
    {value: '2', label: '2'},
    {value: '3', label: '3'}
  ]
  const CheckBoxes = [
    {value: 'checkboxes[1]', label: '1'},
    {value: 'checkboxes[2]', label: '2'},
    {value: 'checkboxes[3]', label: '3'},
  ]
  const onSubmit = React.useCallback((data) => {
    setPage(3)
  }, [setPage])

  return (
    <main className={style.container}>
      <div className={style.status_bar}>
        <div className={style.status_circle_active}>
          <div className={style.mini_circle}></div>
          <p className={style.first}>1</p>
        </div>

        <div className={style.status_line_active}/>
        <div className={style.status_circle_active}>
          <div className={style.mini_circle}></div>
          <p className={style.first}>2</p>
        </div>
        <div className={style.status_line}/>
        <div className={style.status_circle}>
          <p className={style.unactive_numbers}>3</p>
        </div>
      </div>
      <div className={style.content}>
        {/*advantages group*/}
        <div>
          <label>Advantages</label>
          {advantagesFields.map((field, index) =>
            <div key={field.id} className={style.advantages_input__block}>
              <TextInput name={`advantages.${index}.value`} required_message='Введите достижение'
                         placeholder='Placeholder'/>
              <img onClick={() => removeAdvantage(index)} src="/assets/Delete.svg" alt="Delete"/>
            </div>)}
          <button type='button' onClick={() => appendAdvantage({value: ''})} className={style.add_button}><img
            src="/assets/Plus.svg"
            alt="Plus"/>
          </button>
        </div>
        {/*checkboxes group*/}
        <div className={style.checkbox_group}>
          <label>Checkbox group</label>
          {CheckBoxes.map((item, index) =>
            <div key={index}>
              <CheckBoxInput name={item.value}/>
              <span>{item.label}</span>
            </div>
          )}
        </div>
        {errors.checkboxes && <p className={style.errors}>{errors.checkboxes.message}</p>}
        {/*radio group*/}
        <div className={style.radio_group}>
          <label>Radio group</label>
          {Radios.map((item, index) =>
            <div>
              <RadioInput name='number' value={item.value}/>
              <span>{item.label}</span>
            </div>)}
          {errors.number && <p className={style.errors}>Выберите</p>}
        </div>

        <div className={style.button_footer}>
          <button onClick={() => setPage(1)} className={style.previous_button}>Назад</button>
          <button onClick={handleSubmit(onSubmit)} className={style.next_button}>Далее</button>
        </div>
      </div>
    </main>
  )
}