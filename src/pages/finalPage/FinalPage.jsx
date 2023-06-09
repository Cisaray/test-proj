import React from "react";
import style from "./finalPage.module.css";
import {Link, useNavigate} from "react-router-dom";
import {SuccessModal} from "../../components/modals/successModal/SuccessModal";
import {FailModal} from "../../components/modals/failModal/FailModal";
import {useForm} from "react-hook-form";

export const FinalPage = () => {
  const [showSuccess, setShowSuccess] = React.useState(false)
  const [showFail, setShowFail] = React.useState(false)
  const[aboutValue, setAboutValue]=React.useState('')
  const navigate = useNavigate()
  const {register, handleSubmit, formState:{errors}, watch} = useForm()

  const onSubmit = (data, e) => {
    e.stopPropagation()
    console.log(data)
  }


  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.container}>
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
        <div className={style.status_line_active}/>
        <div className={style.status_circle_active} onClick={() => navigate('/final-create')}>
          <div className={style.mini_circle}></div>
          <p className={style.first}>3</p>
        </div>
      </div>
      <div className={style.about_block}>
        <label>About</label>
        <textarea
          className={style.about_area}
          {...register('about',
            {
              required: 'Заполните это поле',
              maxLength:200
            })}
          onChange={(e)=>setAboutValue(e.target.value)}
          defaultValue={aboutValue}
          name="about"
          cols="30"
          rows="10">
        </textarea>
        <span className={style.count}>{aboutValue.replaceAll(" ",'').length}</span>
      </div>
      {errors.about && <p className={style.errors}>{errors.about.message}</p>}
      <div className={style.button_footer}>
        <Link to='/second-create'> <button className={style.previous_button}>Назад</button></Link>
        <button type='submit' onClick={() => setShowSuccess(true)} className={style.next_button}>Отправить</button>
        <button type='button' onClick={() => setShowFail(true)} className={style.next_button}>fail</button>
      </div>
      <SuccessModal showSuccess={showSuccess} setShowSuccess={setShowSuccess}/>
      <FailModal showFail={showFail} setShowFail={setShowFail}/>
    </form>
  )
}