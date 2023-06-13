import style from './main.module.css'
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import React from "react";
import InputMask from 'react-input-mask'
import {useDispatch, useSelector} from "react-redux";
import {setEmail, setPhoneNumber} from "../../redux/slices/formSlice";

const handleKeyDown = (e) => {
  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  if (!numbers.includes((e.key))) {
    e.preventDefault()
  }
}

export const MainPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {phone_number, email} = useSelector(state => state.form)

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({
    mode: "onBlur"
  })

  const onSubmit = React.useCallback((data, e) => {
    e.preventDefault()
    dispatch(setEmail(data.email))
    dispatch(setPhoneNumber(data.phone_number))
    navigate('/create')
  },[dispatch, navigate])

  return (
    <div className={style.container}>
      <header className={style.header}>
        <img src="/assets/Avatar.svg" alt="avatar"/>
        <div>
          <h3 className={style.name}>Кирилл Лядов</h3>
          <div className={style.links}>
            <div className={style.link_item}>
              <img src="/assets/Folder.svg" alt="Folder"/>
              <a href='https://t.me/Kirill2367' className={style.link_style}>Telegram</a>
            </div>
            <div className={style.link_item}>
              <img src="/assets/Folder.svg" alt="Folder"/>
              <a href='https://github.com/Cisaray' className={style.link_style}>GitHub</a>
            </div>
            <div className={style.link_item}>
              <img src="/assets/Folder.svg" alt="Folder"/>
              <a
                href='https://hh.ru/applicant/resumes/view?resume=50bcb1d4ff0bdd0f630039ed1f49306e4c6471'
                className={style.link_style}>Resume</a>
            </div>
          </div>
        </div>
      </header>
      <form onSubmit={handleSubmit(onSubmit)} className={style.content}>
        <div>
          <label className={style.input_label}>Номер телефона</label>
          <div>
            <InputMask
              className={style.form_input}
              mask='+7 (999) 999-99-99'
              maskChar={null}
              onKeyPress={handleKeyDown}
              placeholder='+7 999 999 99 99'
              name='phone_number'
              defaultValue={phone_number}
              {...register('phone_number',
                {
                  required: 'Это поле обязательное',
                  pattern: {
                    value: /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/,
                    message: 'Неверный формат номера телефона',
                  },
                })}
            />
            {errors.phone_number && <p className={style.phone_error}>{errors.phone_number.message}</p>}

          </div>
        </div>
        <div className={style.input_email_block}>
          <label className={style.input_label}>Email</label>
          <div>
            <input
              className={style.form_input}
              name='email'
              defaultValue={email}
              {...register('email',
                {
                  required: 'Это поле обязательное',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Неправильный формат email',
                  },
                })}

              placeholder='tim.jennings@example.com'
              type="email"/>
            {errors.email && <p className={style.phone_error}>{errors.email.message}</p>}
          </div>
        </div>
        <button type='submit' className={style.form_button}>Начать</button>
      </form>
    </div>
  )
}