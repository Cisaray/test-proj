import style from '../successModal/successModal.module.css'
import ReactDOM from "react-dom";

const portal = document.getElementById('portal')

export const FailModal = ({showFail, setShowFail}) => {
  return ReactDOM.createPortal(
    <div className={showFail ? style.modal_container_active : style.modal_container} onClick={()=>setShowFail(false)}>
      <div className={style.modal_body} onClick={(e) => e.stopPropagation()}>
        <div className={style.header_content}>
          <h1 className={style.modal_header}>Ошибка</h1>
          <img onClick={() => setShowFail(false)} className={style.close_icon} src="/assets/Close.svg" alt="Close"/>
        </div>
        <div className={style.success_image}>
          <img  src="/assets/fail.svg" alt="fail"/>
        </div>
        <div className={style.button_block_fail}>
          <button onClick={() => setShowFail(false)} className={style.back_button} >Закрыть</button>
        </div>
      </div>
    </div>, portal
  )
}