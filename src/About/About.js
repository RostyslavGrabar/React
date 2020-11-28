import React from 'react';
import "./About.css";
import logo from '../logo.svg';
import { AiFillInstagram, AiFillFacebook, AiFillYoutube } from 'react-icons/ai';
import { FaViber } from 'react-icons/fa';


class About extends React.Component {
  render() {
    return (
      <div className="about">

        <div className="about__header">
          <h2 className="about__title">React shop</h2>
          <div className="about-logo row">
            <img className="about-logo-image" src={logo} alt="logo" />
          </div>
        </div>

        <div className="about__main row">
          <div className="main__item">
            <h3 className="main__item-title">Декларативний</h3>
            <p>
              React спрощує створення інтерактивних інтерфейсів. Вам потрібно лише описати, як різні частини інтерфейсу виглядають у кожному стані вашого додатку і React ефективно оновить та відрендерить лише потрібні компоненти, коли ваші дані зміняться.
              <br />
              <br />
              Декларативні інтерфейси роблять ваш код більш передбачуваним і його набагато легше налагоджувати.
            </p>
          </div>
          <div className="main__item">
            <h3 className="main__item-title">Заснований на компонентах</h3>
            <p>
              Створюйте інкапсульовані компоненти, які керують власним станом, а з них будуйте складні інтерфейси.
              <br />
              <br />
              Оскільки логіка компонентів написана на JavaScript, замість шаблонів, ви з легкістю можете передавати складні дані у вашому додатку і зберігати стан окремо від DOM.
            </p>
          </div>
          <div className="main__item">
            <h3 className="main__item-title">Вивчіть лише раз — пишіть будь-де</h3>
            <p>
              Ми не робимо припущень щодо стеку технологій які ви використовуєте, тому ви можете розробляти нові функції в React, не переписуючи існуючий код.
              <br />
              <br />
              React також може рендеритись на сервері, використовуючи Node, і приводити в дію мобільні додатки, які використовують React Native.
            </p>
          </div>
        </div>
        <div className="about__contact row">
          <div className="contact__info row">

            <h3 className="contact-title">Контакти</h3>
            <div className="contact__list row row--center row--around">

              <div className="contact__item">
                <div className="contact__social row row--center"> 
                  <AiFillInstagram />
                  <AiFillFacebook />
                  <AiFillYoutube />
                  <FaViber />
                </div>
              </div>
              <div className="contact__item ">
                <span className="contact-phone">099 999 99 99</span> 
              </div>
              <div className="contact__item">
                <span className="contact-email">react@gmail.com</span> 
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
