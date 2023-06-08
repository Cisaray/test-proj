import React from "react";
import style from "./finalPage.module.css";
import {Link, useNavigate} from "react-router-dom";
import {SuccessModal} from "../../components/modals/successModal/SuccessModal";
import {FailModal} from "../../components/modals/failModal/FailModal";

export const FinalPage = () => {
  const [showSuccess, setShowSuccess] = React.useState(false)
  const [showFail, setShowFail] = React.useState(false)
  const navigate = useNavigate()
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
        <div className={style.status_line_active}/>
        <div className={style.status_circle_active} onClick={() => navigate('/final-create')}>
          <div className={style.mini_circle}></div>
          <p className={style.first}>3</p>
        </div>
      </div>
      <div className={style.about_block}>
        <label>About</label>
        <textarea className={style.about_area} name="about" cols="30" rows="10"></textarea>
      </div>
      <div className={style.button_footer}>
        <Link to='/second-create'> <button className={style.previous_button}>Назад</button></Link>
        <Link to='/final-create'><button onClick={() => setShowSuccess(true)} className={style.next_button}>Отправить</button></Link>
        <Link to='/final-create'><button onClick={() => setShowFail(true)} className={style.next_button}>fail</button></Link>
      </div>
      <SuccessModal showSuccess={showSuccess} setShowSuccess={setShowSuccess}/>
      <FailModal showFail={showFail} setShowFail={setShowFail}/>
    </main>
  )
}