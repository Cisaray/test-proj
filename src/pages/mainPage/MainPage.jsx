import style from './main.module.css'
import {useNavigate} from "react-router-dom";
import {FormProvider, useForm} from "react-hook-form";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {setEmail, setPhoneNumber} from "../../redux/slices/formSlice";
import {InputMaskForm} from "../../components/Inputs/InputMaskForm";
import {TextInput} from "../../components/Inputs/TextInput";

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

  const methods = useForm({
    mode: "onBlur"
  })

  const links = [
    {link: 'https://t.me/Kirill2367', label:'Telegram'},
    {link: 'https://github.com/Cisaray', label:'GitHub'},
    {link: 'https://hh.ru/applicant/resumes/view?resume=50bcb1d4ff0bdd0f630039ed1f49306e4c6471', label:'Resume'}
  ]

  const onSubmit = React.useCallback((data, e) => {
    e.preventDefault()
    dispatch(setEmail(data.email))
    dispatch(setPhoneNumber(data.phone_number))
    navigate('/create')
  }, [dispatch, navigate])

  return (
    <div className={style.container}>
      <header className={style.header}>
        <img src="/assets/Avatar.svg" alt="avatar"/>
        <div>
          <h3 className={style.name}>Кирилл Лядов</h3>
          <div className={style.links}>
            {links.map((item, index) =>
              <div key={index} className={style.link_item}>
              <img src="/assets/Folder.svg" alt="Folder"/>
              <a href={item.link} rel='noreferrer' target='_blank' className={style.link_style}>{item.label}</a>
            </div>)}
          </div>
        </div>
      </header>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className={style.content}>
          <div>
            <label className={style.input_label}>Номер телефона</label>
            <div>
              <InputMaskForm handleKeyDown={handleKeyDown} phone_number={phone_number}/>
            </div>
          </div>
          <div className={style.input_email_block}>
            <label className={style.input_label}>Email</label>
            <div>
              <TextInput
                name='email'
                required_message='Это поле обязательное'
                pattern_value={/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i}
                pattern_message='Неправильный формат email'
                placeholder='tim.jennings@example.com'
                email={email}
              />
            </div>
          </div>
          <button type='submit' className={style.form_button}>Начать</button>
        </form>
      </FormProvider>
    </div>
  )
}