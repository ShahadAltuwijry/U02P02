import React from "react";
import Header from "./../Header";
import "./style.css";
// import footerimg from "./../روح السعودية/footer.png";

const Home = () => {
  return (
    <div className="homeWrapper">
      <Header />
      {/* <img src={footerimg} className="footerImg" alt="footer img" /> */}
      <div className="contDiv">
        <div className="about">
          <img src="./campain.png" className="campain" />
          <div className="content">
            <iframe
              width="500"
              height="306"
              src="https://www.youtube.com/embed/WNzYGeBbOUA"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <p className="Paragraph">
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
      
    </div>
  );
};

export default Home;
