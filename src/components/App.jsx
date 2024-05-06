export const App = () => {
  return (
    <div>
      <header className="header">
        <div className="container header-container">
          <nav className="header-navigation">
            <a className="header-logo link" href="./index.html">
              РУХ<span className="header-logo-web">ДОПОМОГИ</span>
            </a>
            <ul className="header-list list">
              <li className="header-item">
                <a className="header-link header-line link" href="./index.html">ПРОЄКТИ</a>
              </li>
              <li className="header-item">
                <a className="header-link link" href="./project.html">МАТЕРІАЛИ</a>
              </li>
            </ul>
          </nav>
          <address className="header-address">
            <ul className="header-list list">
              <li className="header-item">
                <a className="link item-text" href="mailto:suppor.ukra@gmail.com">suppor.ukra@gmail.com</a>
              </li>
            </ul>
          </address>
        </div>
      </header>

      <main>
        <section className="gellery">
          <div className="container">
            <h1 hidden>gallery</h1>
            <ul className="gallery-list list">
              <li className="gallery-item">
                <a className="gallery-btn btn link" href="./support.html">ДОЛУЧАЙТЕСЬ ДО ДОПОМОГИ</a>
              </li>
            </ul>
            <p className="text-ua">
              Звертаємося до всіх небайдужих! Ми знаємо, що разом ми сильніші. Ваш внесок, ваша підтримка можуть зробити реальний вплив на підтримку наших захисників, які борються за мир і свободу нашого народу. Приєднуйтесь до нашої місії. Давайте показати світу, що Україна має непохитних друзів та союзників, що разом ми можемо захистити та зберегти наші цінності та незалежність. Ми вдячні за будь-яку підтримку, яку ви можете надати. Ваша щедрість та солідарність є фундаментом, на якому стоїть наша оборона та надія на перемогу.
            </p>
            <ul className="gallery-foto-list list">
              <li className="gallery-foto-item link">
                <a href="./support.html" className="gallery-link-link link">
                  <div className="gallery-cover-wrap">
                    <img src="./images/auto-ua.jpg" alt="Card Content in Portfolio" width="540" height="300" />
                    <p className="gallery-foto-cover">
                      Збройні сили України мають нагальну потребу у мобільності, а саме: їм необхідні автомобілі, що можуть проїжджати по бездоріжжю, матимуть високу прохідність та хорошу маневреність. Ідеально для цього піходять автомобілі типу Pick-up. Автомобілів потрібно багато, адже вони часто попадають під обстріли, виходять з ладу. В наших з вами силах допомогти армії не зупинятись та зібрати кошти на нові авто.
                    </p>
                  </div>
                  <div className="gallery-foto-container">
                    <h2 className="gallery-item-title">ПІКАП ДЛЯ ЗСУ</h2>
                    <p className="gallery-title-text">400 000 ₴</p>
                  </div>
                </a>
              </li>
              {/* Додати решту елементів галереї тут */}
            </ul>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-container">
          <div className="footer-div">
            <a className="footer-logo link" href="./index.html">
              РУХ<span className="footer-logo-web">ДОПОМОГИ</span>
            </a>
            <p className="footer-item-text">Донатьте, щоб перемога України стала ближчою</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
