import "../assets/styles/home.css";
import "../assets/styles/project.css";

const Home = () => {
    return (
        <>
            <section className="section" id="home">
                <div className="home__container ">
                    <div className="home__content">
                        <div className="home__img">
                            <div className="home__social">
                                <a
                                    href="https://www.linkedin.com/in/briggitte-merch%C3%A1n/"
                                    target="_blank"
                                    className="home__social-icon"
                                >
                                    <i className="fa-brands fa-linkedin"></i>
                                </a>
                                <a
                                    href="https://github.com/briggittem12"
                                    target="_blank"
                                    className="home__social-icon"
                                >
                                    <i className="fa-brands fa-github"></i>
                                </a>
                                {/* <a
                                    href="https://t.me/Brigg20"
                                    target="_blank"
                                    className="home__social-icon"
                                >
                                    <i className="fa-brands fa-telegram"></i>
                                </a> */}
                                <a href="https://wa.me/593939461112?text=Hi%20I%20talk" target="_blank" className="home__social-icon">
                    <i className="fa-brands fa-whatsapp"></i>
                  </a> 
                            </div>
                            <img
                                src="/img/option.png"
                                alt="Briggite"
                                className="home-img"
                            />
                        </div>
                        <div className="home__data">
                            <h1 className="home__title">Hi, Iam Briggitte!</h1>
                            <h3 className="home__subtitle">
                                Junior Web Developer
                            </h3>
                            <p className="home__description">
                                Briging you development solutions!
                            </p>
                            <a
                                href="mailto:briggittemerchan6@gmail.com"
                                target="_blank"
                                className="button button--flex"
                            >
                                Contact Me{" "}
                                <i className="fa-solid fa-file-import button__icon"></i>
                            </a>
                        </div>
                        
                    </div>
                    {/* <div className="home__scroll">
            <a href="#about" className="home__scroll-button button--flex">
            <i className="fa-solid fa-circle-down home__scroll-mouse"></i>
            <span className="home__scroll-name"> Scroll down</span>
            </a>
          </div> */}
                </div>
            </section>
        </>
    );
};

export default Home;
