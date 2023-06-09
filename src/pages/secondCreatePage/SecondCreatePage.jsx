import style from "./secondPage.module.css";
import {useFieldArray} from "react-hook-form";
import React from "react";

export const SecondCreatePage = ({setPage, register, handleSubmit, errors, control}) => {

  const {fields: advantagesFields, append: appendAdvantage, remove: removeAdvantage} = useFieldArray({
    control,
    name: 'advantages'
  })
  const onSubmit = (data) => {
    setPage(3)
  }

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
              <input
                name='advantages'
                {...register(`advantages.${index}.value`,
                  {
                    required: 'Введите достижение'
                  })}
                className={style.form_input}
                placeholder='Placeholder'
                type="text"/>
              <img onClick={() => removeAdvantage(index)} src="/assets/Delete.svg" alt="Delete"/>
              {errors.advantages && <p className={style.errors}>Добавьте достижение</p>}
            </div>)}
          <button type='button' onClick={() => appendAdvantage({value: ''})} className={style.add_button}><img
            src="/assets/Plus.svg"
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
              type="checkbox"/>
            <span>1</span>
          </div>
          <div>
            <input
              className={style.checkbox}
              name='checkboxes'
              {...register(`checkboxes[2]`)}
              type="checkbox"/>
            <span>2</span>
          </div>
          <div>
            <input
              name='checkboxes'
              {...register(`checkboxes[3]`)}
              className={style.checkbox}
              type="checkbox"/>
            <span>3</span>
          </div>
        </div>
        {errors.checkboxes && <p className={style.errors}>{errors.checkboxes.message}</p>}
        {/*radio group*/}
        <div className={style.radio_group}>
          <label>Radio group</label>
          <div>
            <input
              name='number'
              {...register('number', {required:true})}
              value='1'
              className={style.checkbox}
              type="radio"
            />
            <span>1</span>
          </div>
          <div>
            <input
              name='number'
              {...register('number',{required: true})}
              value='2'
              className={style.checkbox}
              type="radio"
            />
            <span>2</span>
          </div>
          <div>
            <input
              name='number'
              {...register('number', {required:true})}
              value='3'
              className={style.checkbox}
              type="radio"
            />
            <span>3</span>
          </div>
          {errors.number && <p className={style.errors}>Выберите</p>}
        </div>

        <div className={style.button_footer}>
          <button onClick={()=>setPage(1)} className={style.previous_button}>Назад</button>
          <button onClick={handleSubmit(onSubmit)} className={style.next_button}>Далее</button>
        </div>
      </div>
    </main>
  )
}