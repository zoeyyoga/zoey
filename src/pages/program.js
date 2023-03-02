import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import "../components/program.scss";
import { StaticImage } from "gatsby-plugin-image";

const Program = () => (
  <Layout>
    <div id="program">
      <section className="sub-visual"></section>

      <section className="main-content">
        <div className="image_01">
          <StaticImage
            src="../images/program/image_01.jpg"
            loading="lazy"
            placeholder="blurred"
            quality={95}
            width={540}
            formats={["auto", "webp", "avif"]}
            alt="첫번째 조이 이미지"
          />
        </div>
        <h1 className="title">프로그램 소개</h1>
        <div className="detail">
          <ul>
            <li>
              <a href="#therapy">테라피 자세교정</a>
            </li>
            <li>
              <a href="#golf">골프 요가</a>
            </li>
            <li>
              <a href="#senior">시니어 요가</a>
            </li>
            <li>
              <a href="#insideflow">인사이드플로우 요가</a>
            </li>
          </ul>
        </div>
        <div className="image_02">
          <StaticImage
            src="../images/program/image_02.jpg"
            loading="lazy"
            placeholder="blurred"
            quality={95}
            width={620}
            height={452}
            formats={["auto", "webp", "avif"]}
            alt="두번째 조이 이미지"
          />
        </div>
      </section>

      <section className="program-wrap">
        <ul>
          <li>
            <h2>테라피 자세교정</h2>
            <p>
              소도구를 이용해 딱딱하게 굳어있는 근육(근막)을 풀어내어 통증을
              완화시킨 후 근력을 이용한 강화운동 및 스트레칭을 통해 건강하고
              바른 몸을 유지하도록 합니다.
            </p>
            <StaticImage
              src="../images/program/therapy.jpg"
              loading="lazy"
              placeholder="blurred"
              quality={95}
              width={570}
              formats={["auto", "webp", "avif"]}
              alt="테라피 자세교정 이미지"
            />
            <span id="therapy"></span>
          </li>
          <li>
            <h2>골프 요가</h2>
            <p>
              한 쪽으로 사용하는 운동으로 몸의 불균형이 발생하기 때문에 신체
              균형을 바로 잡고 하체코어를 안정화시켜 안전하게 부상없이 비거리
              늘리는 데에 도움을 줍니다.
            </p>
            <StaticImage
              src="../images/program/golf.jpg"
              loading="lazy"
              placeholder="blurred"
              quality={95}
              width={570}
              formats={["auto", "webp", "avif"]}
              alt="테라피 자세교정 이미지"
            />
            <span id="golf"></span>
          </li>
          <li>
            <h2>시니어 요가</h2>
            <p>
              손끝부터 발끝까지 말초신경을 자극하여 굳어있는 몸을 유연하고
              건강하도록 움직이게 만들어주어 신체기능을 향상 시킵니다.
            </p>
            <StaticImage
              src="../images/program/senior.jpg"
              loading="lazy"
              placeholder="blurred"
              quality={95}
              width={570}
              formats={["auto", "webp", "avif"]}
              alt="테라피 자세교정 이미지"
            />
            <span id="senior"></span>
          </li>
          <li>
            <h2>인사이드플로우 요가</h2>
            <p>
              현대요가의 선구자이나 독일,한국,중국,미국 등 세계각지에서
              활동하시는 Insideyoga 대표 김영호선생님에 의해 창시된 프로그램
              입니다. <br />
              인사이드플로우 요가는 음악이 주는 힘을 통해, 가사로 마음의 공감을
              하고 음악의 비트를 통해서 호흡을 느끼고, 빈야사의 올바른 전환으로
              몸을 건강하게 해주는 빈야사 요가 입니다.
            </p>
            <StaticImage
              src="../images/program/insideflow.jpg"
              loading="lazy"
              placeholder="blurred"
              quality={95}
              width={570}
              formats={["auto", "webp", "avif"]}
              alt="테라피 자세교정 이미지"
            />
            <span id="insideflow"></span>
          </li>
        </ul>
      </section>
    </div>
  </Layout>
);

export const Head = () => <Seo title="프로그램 소개" />;

export default Program;
