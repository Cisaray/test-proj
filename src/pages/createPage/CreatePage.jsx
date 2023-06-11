import style from './createPage.module.css'
import {Link} from "react-router-dom";
import React from 'react'

export const CreatePage = ({register, handleSubmit, errors, setPage}) => {
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
            <input
              className={style.form_input}
              name='nickname'
              {...register('nickname', {
                  required: true,
                  maxLength: 30,
                  pattern: /^[A-Za-z0-9]+$/i
                }
              )}
              placeholder='Placeholder'
              type="text"
            />
            {errors.nickname && (<p className={style.errors}>Введите допустимый никнейм</p>)}
          </div>
        </div>
        <div className={style.input_block}>
          <label className={style.input_label}>Name</label>
          <div>
            <input
              className={style.form_input}
              name='name'
              {...register('name',
                {
                  required: true,
                  maxLength: 50,
                  pattern: /^[A-Za-zА-Яа-я]+$/i
                })}
              placeholder='Placeholder'
              type="text"
            />
            {errors.name && (<p className={style.errors}>Введите допустимое имя</p>)}
          </div>
        </div>
        <div className={style.input_block}>
          <label className={style.input_label}>Surname</label>
          <div>
            <input
              className={style.form_input}
              name='surname'
              {...register('surname',
                {
                  required: true,
                  maxLength: 50,
                  pattern: /^[A-Za-zА-Яа-я]+$/i
                })}
              placeholder='Placeholder'
              type="text"
            />
            {errors.surname && (<p className={style.errors}>Введите допустимую фамилию</p>)}
          </div>
        </div>
        <div className={style.input_block}>
          <label className={style.input_label}>Sex</label>
          <div>
            <select
              name='sex'
              {...register('sex',
                {
                  required: true
                })}
              className={style.form_input}>
              <option className={style.select_option} value='' hidden>Не выбрано</option>
              <option className={style.select_option} value="man">man</option>
              <option className={style.select_option} value="woman">woman</option>
            </select>
            {errors.sex && <p className={style.errors}>Выберите пол</p>}
          </div>
        </div>
        <div className={style.button_footer}>
          <Link to='/'>
            <button className={style.previous_button}>Назад</button>
          </Link>
          <button onClick={handleSubmit(onSubmit)} className={style.next_button}>Далее</button>
        </div>
      </div>
    </div>

  )
}