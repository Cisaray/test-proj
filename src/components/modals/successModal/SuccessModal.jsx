import style from './successModal.module.css'
import {Link} from "react-router-dom";
import ReactDOM from "react-dom";

const portal = document.getElementById('portal')

export const SuccessModal = ({showSuccess, setShowSuccess}) => {

  return ReactDOM.createPortal(
    <div className={showSuccess ? style.modal_container_active : style.modal_container}>
      <div className={style.modal_body}>
        <h1 className={style.modal_header}>Форма успешно отправлена</h1>
        <div className={style.success_image}>
          <img  src="/assets/success.svg" alt="success"/>
        </div>
        <div className={style.button_block}>
          <Link to='/'><button className={style.back_button} >На главную</button></Link>
        </div>
      </div>
    </div>, portal
  )
}