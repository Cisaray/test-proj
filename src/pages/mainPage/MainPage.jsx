import style from './main.module.css'
import {Link} from "react-router-dom";
export const MainPage = () => {
  return (
    <div className={style.container}>
      <header className={style.header}>
        <img src="/assets/Avatar.svg" alt="avatar"/>
        <div>
          <h3 className={style.name}>Иван Иванов</h3>
          <div className={style.links}>
            <div className={style.link_item}>
              <img src="/assets/Folder.svg" alt="Folder"/>
              <a href="#">Telegram</a>
            </div>
            <div className={style.link_item}>
              <img src="/assets/Folder.svg" alt="Folder"/>
              <a href="#">GitHub</a>
            </div>
            <div className={style.link_item}>
              <img src="/assets/Folder.svg" alt="Folder"/>
              <a href="#">Resume</a>
            </div>
          </div>
        </div>
      </header>
      <main className={style.content}>
          <div>
            <label className={style.input_label}>Номер телефона</label>
            <div>
              <input className={style.form_input} placeholder='+7 999 999-99-99' type="tel"/>
            </div>
          </div>
          <div className={style.input_email_block}>
            <label className={style.input_label}>Email</label>
            <div>
              <input className={style.form_input} placeholder='tim.jennings@example.com' type="email"/>
            </div>
          </div>
          <div>
            <button className={style.form_button}><Link to='/create'>Начать</Link></button>
          </div>
      </main>
    </div>
  )
}