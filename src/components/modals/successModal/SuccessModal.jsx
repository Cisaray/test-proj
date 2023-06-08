import style from './successModal.module.css'
import {Link} from "react-router-dom";

export const SuccessModal = ({showSuccess, setShowSuccess}) => {
  return (
    <div className={showSuccess ? style.modal_container_active : style.modal_container} onClick={()=>setShowSuccess(false)}>
      <div className={style.modal_body} onClick={(e) => e.stopPropagation()}>
        <h1 className={style.modal_header}>Форма успешно отправлена</h1>
        <div className={style.success_image}>
          <img  src="/assets/success.svg" alt="success"/>
        </div>
        <div className={style.button_block}>
          <Link to='/'><button className={style.back_button} >На главную</button></Link>
        </div>
      </div>
    </div>
  )
}