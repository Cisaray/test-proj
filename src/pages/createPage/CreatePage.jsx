import style from './createPage.module.css'
import {Link} from "react-router-dom";
import React from 'react'
import {TextInput} from "../../components/Inputs/TextInput";
import {SelectInput} from "../../components/Inputs/SelectInput";
import {useFormContext} from "react-hook-form";

export const CreatePage = ({setPage}) => {
  const {handleSubmit} = useFormContext()
  const onSubmit = React.useCallback(() => {
    setPage(2)
  },[setPage])

  return (
    <div className={style.container}>
      <div className={style.status_bar}>
        <div className={style.status_circle_active}>
          <div className={style.mini_circle}></div>
          <p className={style.first}>1</p>
        </div>
        <div className={style.status_line}/>
        <div className={style.status_circle}>
          <p className={style.unactive_numbers}>2</p>
        </div>
        <div className={style.status_line}/>
        <div className={style.status_circle}>
          <p className={style.unactive_numbers}>3</p>
        </div>
      </div>
      <div className={style.content}>
        <div>
          <label className={style.input_label}>Nickname</label>
          <div>
            <TextInput
              name='nickname'
              pattern_value={/^[A-Za-z0-9]+$/i}
              pattern_message='Неправильный формат'
              required_message='Введите допустимый никнейм'
              maxLength={30}
              id='field-nickname'
              placeholder='Placeholder'
            />
          </div>
        </div>
        <div className={style.input_block}>
          <label className={style.input_label}>Name</label>
          <div>
            <TextInput
              name='name'
              maxLength={50}
              id='field-name'
              pattern_message='Неправильный формат'
              required_message='Это поле обязательное'
              pattern_value={/^[A-Za-zА-Яа-я]+$/i}
              placeholder='Placeholder'
            />
          </div>
        </div>
        <div className={style.input_block}>
          <label className={style.input_label}>Surname</label>
          <div>
            <TextInput
              name='surname'
              maxLength={50}
              id='field-sername'
              pattern_message='Неправильный формат'
              required_message='Это поле обязательное'
              pattern_value={/^[A-Za-zА-Яа-я]+$/i}
              placeholder='Placeholder'
            />
          </div>
        </div>
        <div className={style.input_block}>
          <label className={style.input_label}>Sex</label>
          <div>
            <SelectInput name='sex' required_message='Выберите пол'/>
          </div>
        </div>
        <div className={style.button_footer}>
          <Link to='/'>
            <button id='button-back' className={style.previous_button}>Назад</button>
          </Link>
          <button id='button-next' onClick={handleSubmit(onSubmit)} className={style.next_button}>Далее</button>
        </div>
      </div>
    </div>

  )
}