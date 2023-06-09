import React from "react";
import style from "./finalPage.module.css";
import {SuccessModal} from "../../components/modals/successModal/SuccessModal";
import {FailModal} from "../../components/modals/failModal/FailModal";

export const FinalPage = ({
                            setPage,
                            onSubmit,
                            register,
                            errors,
                            handleSubmit,
                            setShowSuccess,
                            setShowFail,
                            showFail,
                            showSuccess
                          }) => {

  const [aboutValue, setAboutValue] = React.useState('')


  return (
    <div className={style.container}>
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
        <div className={style.status_line_active}/>
        <div className={style.status_circle_active}>
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
              maxLength: 200
            })}
          onChange={(e) => setAboutValue(e.target.value)}
          defaultValue={aboutValue}
          name="about"
          cols="30"
          rows="10">
        </textarea>
        <span className={style.count}>{aboutValue.replaceAll(" ", '').length}</span>
      </div>
      {errors.about && <p className={style.errors}>{errors.about.message}</p>}
      <div className={style.button_footer}>
        <button onClick={() => setPage(2)} className={style.previous_button}>Назад</button>
        <button type='submit' onClick={handleSubmit(onSubmit)} className={style.next_button}>Отправить</button>
      </div>
      <SuccessModal showSuccess={showSuccess} setShowSuccess={setShowSuccess}/>
      <FailModal showFail={showFail} setShowFail={setShowFail}/>
    </div>
  )
}