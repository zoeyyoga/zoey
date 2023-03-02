import * as React from "react";
import "../components/studio.scss";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import Seo from "../components/seo";

const Studio = () => (
  <Layout>
    <div id="studio">
      <section className="sub-visual"></section>

      <section className="main-content">
        <div className="image_01">
          <StaticImage
            src="../images/studio/image_01.jpg"
            loading="lazy"
            placeholder="blurred"
            quality={95}
            width={540}
            formats={["auto", "webp", "avif"]}
            alt="첫번째 조이 이미지"
          />
          <p className="detail_02">
            최상의 컨디션을 만들어내기 위해 끊임없이 연구하고 발전하겠습니다.
          </p>
        </div>
        <h1 className="title">스튜디오 소개</h1>
        <p className="detail">
          조이요가 스튜디오는 경력 13년차 원장이 회원님과 1:1 체형 상담부터
          멘탈케어까지 건강한 몸과 마음의 밸런스를 찾아드리겠습니다.
        </p>
        <div className="image_02">
          <StaticImage
            src="../images/studio/image_02.jpg"
            loading="lazy"
            placeholder="blurred"
            quality={95}
            width={620}
            formats={["auto", "webp", "avif"]}
            alt="두번째 조이 이미지"
          />
        </div>
      </section>

      <section className="studio-wrap">
        <div className="studio-images">
          <div>
            <StaticImage
              src="../images/studio/studio_01.jpg"
              loading="lazy"
              placeholder="blurred"
              quality={95}
              width={398}
              formats={["auto", "webp", "avif"]}
              alt="조이요가 스튜디오 내부 이미지 01"
            />
            <StaticImage
              src="../images/studio/studio_02.jpg"
              loading="lazy"
              placeholder="blurred"
              quality={95}
              width={398}
              formats={["auto", "webp", "avif"]}
              alt="조이요가 스튜디오 내부 이미지 02"
            />
            <StaticImage
              src="../images/studio/studio_03.jpg"
              loading="lazy"
              placeholder="blurred"
              quality={95}
              width={398}
              formats={["auto", "webp", "avif"]}
              alt="조이요가 스튜디오 내부 이미지 03"
            />
          </div>
          <div>
            <StaticImage
              src="../images/studio/studio_04.jpg"
              loading="lazy"
              placeholder="blurred"
              quality={95}
              width={398}
              formats={["auto", "webp", "avif"]}
              alt="조이요가 스튜디오 내부 이미지 04"
            />
            <StaticImage
              src="../images/studio/studio_05.jpg"
              loading="lazy"
              placeholder="blurred"
              quality={95}
              width={398}
              formats={["auto", "webp", "avif"]}
              alt="조이요가 스튜디오 내부 이미지 05"
            />
            <StaticImage
              src="../images/studio/studio_06.jpg"
              loading="lazy"
              placeholder="blurred"
              quality={95}
              width={398}
              formats={["auto", "webp", "avif"]}
              alt="조이요가 스튜디오 내부 이미지 06"
            />
          </div>
          <div>
            <StaticImage
              src="../images/studio/studio_07.jpg"
              loading="lazy"
              placeholder="blurred"
              quality={95}
              width={398}
              formats={["auto", "webp", "avif"]}
              alt="조이요가 스튜디오 내부 이미지 07"
            />
            <StaticImage
              src="../images/studio/studio_08.jpg"
              loading="lazy"
              placeholder="blurred"
              quality={95}
              width={398}
              formats={["auto", "webp", "avif"]}
              alt="조이요가 스튜디오 내부 이미지 08"
            />
            <StaticImage
              src="../images/studio/studio_09.jpg"
              loading="lazy"
              placeholder="blurred"
              quality={95}
              width={398}
              formats={["auto", "webp", "avif"]}
              alt="조이요가 스튜디오 내부 이미지 09"
            />
          </div>
        </div>
      </section>
    </div>
  </Layout>
);

export const Head = () => <Seo title="스튜디오 소개" />;

export default Studio;
