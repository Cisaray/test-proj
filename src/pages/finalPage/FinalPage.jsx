import React from "react";
import style from "./finalPage.module.css";
import {SuccessModal} from "../../components/modals/successModal/SuccessModal";
import {FailModal} from "../../components/modals/failModal/FailModal";
import {useFormContext} from "react-hook-form";
import {TextArea} from "../../components/Inputs/TextArea";

export const FinalPage = ({
                            setPage,
                            onSubmit,
                            setShowSuccess,
                            setShowFail,
                            showFail,
                            showSuccess
                          }) => {
  const {handleSubmit, formState: {errors}} = useFormContext()

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
        <TextArea id='field-about' name='about' maxLength={200} required_message='Заполните это поле'/>
      </div>
      {errors.about && <p className={style.errors}>{errors.about.message}</p>}
      <div className={style.button_footer}>
        <button id='button-back' onClick={() => setPage(2)} className={style.previous_button}>Назад</button>
        <button id='button-send' type='submit' onClick={handleSubmit(onSubmit)} className={style.next_button}>Отправить</button>
      </div>
      <SuccessModal showSuccess={showSuccess} setShowSuccess={setShowSuccess}/>
      <FailModal showFail={showFail} setShowFail={setShowFail}/>
    </div>
  )
}