import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import axios from "axios";
import Nav from "./../Nav";
import Header from "./../Header";
import Footer from "./../Footer";
import "./style.css";

const Home = () => {
  const [program, setProgram] = useState([]);
  // const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await axios.get("http://localhost:5000/programs");

    // console.log(data.data[0].data);

    setProgram(res.data);
  };

  // render() {
  // const settings = {
  //   className: "center",
  //   centerMode: true,
  //   infinite: true,
  //   centerPadding: "60px",
  //   slidesToShow: 3,
  //   speed: 500
  // };

  return (
    <div className="homeWrapper">
      <Nav />
      <Header />
      <div className="contDiv">
        <div className="about">
          <div className="content">
            <div className="youtubeBg">
              <iframe
                width="510"
                height="330"
                src="https://www.youtube.com/embed/WNzYGeBbOUA"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <p className="Paragraph">
              <h1 className="homeHead">الشتاء_حولك#</h1>
              استكشف مجموعة مثيرة للاهتمام من الأنشطة والوجهات المناسبة لأشهر
              السنة الأكثر برودة. استمتع بمناخ البحر الأحمر مع شمس الشتاء
              والرمال، أو استكشف المنتزهات الوطنية في المملكة التي تمنحك الفرصة
              للاختباء من البرد قرب نيران المخيم الموقدة تحت نجوم الصحراء
              المتألقة
              <br />
              <br /> كما يمكنك التوجّه لزيارة المناطق الأكثر بردًا في جبال
              المملكة الشمالية للاستمتاع برؤية الثلوج البيضاء تفترش رمال
              الصحراء. مهما كان الخيار الذي تفضله لقضاء فصل الشتاء، توفّر لك
              المملكة العربية السعودية تجربة ممتعة بانتظارك.
            </p>
          </div>
        </div>
      </div>
      <div className="interiorDiv">
        <h1 className="interiorHead">هنا السعودية</h1>
      </div>
      <div className="programsDiv">
        <h1 className="progHead">برامج الطيران</h1>
        <div className="cardsDiv">
          {program.map((item, i) => (
            <a
              href={item.origLink}
              target="_blank"
              className="exNavigateLink"
              rel="noreferrer"
            >
              <div key={i} className="card">
                <div className="imgWrapper">
                  <img
                    key={`img-${i}`}
                    src={item.img}
                    alt={`alula=${i}`}
                    className="cardImg"
                  />
                </div>
                <div className="progCont">
                  <h3 key={`prog name-${i}`}>{item.name}</h3>
                  <p className="cardParagraph" key={`desc-${i}`}>
                    {item.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
      {/* <div className="packagesDiv">
        <h1>packages</h1>
      </div>
      <div className="touristDiv">
        <h1>tourist spots</h1>
      </div> */}
      <Footer />
    </div>
  );
};

export default Home;
