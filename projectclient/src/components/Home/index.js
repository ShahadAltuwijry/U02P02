import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "./../Header";
import "./style.css";
// import footerimg from "./../روح السعودية/footer.png";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="homeWrapper">
      <Header />
      {/* <img src={footerimg} className="footerImg" alt="footer img" /> */}
      <div className="contDiv">
        <div className="about">
          {/* <img src="./campain.png" className="campain" /> */}
          <div className="content">
            <div className="youtubeBg">
              <iframe
                width="510"
                height="330"
                src="https://www.youtube.com/embed/WNzYGeBbOUA"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            {/* <h1>#الشتاء حولك</h1> */}
            <p className="Paragraph">
              <h1>الشتاء_حولك#</h1>
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
        {/* </div> */}
      </div>
      {/* <div className="programsDiv">
        <h1>programs</h1>

        <div className="cardsDiv">
          <div
            className="card"
            onClick={() => {
              navigate("https://www.flynas.com/ar");
            }}
          >
            <div className="imgWrapper">
              <img src="./alula.png" alt="alula" className="cardImg" />
            </div>
            <div className="progCont">
              <h3>أكتشف العُلا !</h3>
              <p className="cardParagraph">
                احجز رحلتك المباشرة من دبي - الكويت - الرياض - جده - الدمام.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="packagesDiv">
        <h1>packages</h1>
      </div>
      <div className="touristDiv">
        <h1>tourist spots</h1>
      </div> */}
    </div>
  );
};

export default Home;
