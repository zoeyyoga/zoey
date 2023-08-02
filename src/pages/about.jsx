import * as React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";
import "../components/about.scss";
import { StaticImage } from "gatsby-plugin-image";
import Flicking from "@egjs/react-flicking";

const About = () => (
  <Layout>
    <div id="about">
      <section className="sub-visual"></section>

      <section className="main-content">
        <div className="image_01">
          <StaticImage
            src="../images/about/image_01.jpg"
            loading="lazy"
            placeholder="blurred"
            quality={95}
            width={540}
            formats={["auto", "webp", "avif"]}
            alt="첫번째 조이 이미지"
          />
        </div>
        <h1 className="title">
          대표원장 소개 <span>조이 ZOEY</span>
        </h1>
        <div className="detail">
          <ul className="certificate">
            <li>
              국제요가자격증 RYT500
              <ul>
                <li>- 인사이드요가/인사이드플로우 </li>
                <li>- 유니버셜요가/타우요가 자격증 </li>
                <li>- 임산부 산전&산후 지도자 by Jai </li>
                <li>- YSM이화무용지도자과정 수료</li>
              </ul>
            </li>
            <li>무용지도자1급 </li>
            <li>키즈바른자세 발레지도자 2급 </li>
            <li>키즈영어 발레지도자 2급 </li>
            <li>리탐빌 명상요가 마인드컨트롤 수료</li>
            {/* <li>고려대학교 대학원 체육학석사과정</li> */}
          </ul>
          <ul className="career">
            <li>현&#41; 조이요가스튜디오 원장 </li>
            <li>전&#41; 타우요가 메인강사</li>
            <li>전&#41; 콘래드 / 리베라 / 포시즌스 호텔 강의 </li>
            <li>전&#41; RBW Ent 한류 아이돌 트레이닝 </li>
            <li>
              전&#41; 다수 기업강의 및 유명인 레슨
              <span>
                3M / 박찬호유소년야구 / 한국스마트카드 <br /> 환화건설 / 현대
                하이닉스 등등
              </span>
            </li>
            <li>전&#41; 롯데백화점 문화센터 강의</li>
          </ul>
        </div>
        <div className="image_02">
          <StaticImage
            src="../images/about/image_02.jpg"
            loading="lazy"
            placeholder="blurred"
            quality={95}
            width={529}
            formats={["auto", "webp", "avif"]}
            alt="두번째 조이 이미지"
          />
        </div>
      </section>

      <section className="history-slider">
        <Flicking bound moveType="freeScroll">
          <div className="blank"></div>
          <div>
            <h2>2013</h2>
            <ul>
              <li>Adidas - All in for #mygirls 전국 이벤트 진행 </li>
              <li>Adidas – All in for #mygirls 메가 이벤트 진행 </li>
              <li>Elite Model Look Korea 합숙 및 트레이닝</li>
            </ul>
          </div>
          <div>
            <h2>2014</h2>
            <ul>
              <li>Sure Fit Womans Body Project3 진행(Sure x Reebok)</li>
            </ul>
          </div>
          <div>
            <h2>2015</h2>
            <ul>
              <li>Adidas & Reebok Branday 행사</li>
            </ul>
          </div>
          <div>
            <h2>2016</h2>
            <ul>
              <li>D Museum 요가아트에디션 행사 </li>
              <li>Yoga Mala 리더 진행 </li>
              <li>Korea Yoga Festa (휠요가 진행) </li>
              <li>Adidas My Run 스트레칭 진행</li>
            </ul>
          </div>
          <div>
            <h2>2017</h2>
            <ul>
              <li>TAO YOGA x JTBC “시티포레시티벌” 서프핏요가</li>
            </ul>
          </div>
          <div className="last-list">
            <h2>2019~</h2>
            <ul>
              <li>중국 YONION FESTIVAL 요가행사 </li>
              <li>SBS Plus ‘결혼은미친짓이다시즌2’출연 (박성현, 이수진편) </li>
              <li>KT ollehtv–Mom&Style 출연 </li>
              <li>막돼먹은영애씨 스페셜편 출연(김현숙 요가 강사) </li>
              <li>K star 한류스타리포트 “레이양의 힐링스타” 출연</li>
              <li>JTBC 신인류식품관 항산화식품 편 출연 </li>
              <li>MBN “내 손안의 부모님” (서경석 편 출연) </li>
              <li>양세찬의 텐 출연 </li>
              <li>TV조선 “광화문의 아침” 1분건강 </li>
              <li>채널A “평일 오후 세시의 연인” 드라마 </li>
              <li>출연 SBS 모닝와이드 출연</li>
            </ul>
          </div>
          <div className="blank"></div>
        </Flicking>
      </section>
    </div>
  </Layout>
);

export const Head = () => <Seo title="대표원장 소개" />;

export default About;
