import React, { useState, useEffect, useRef } from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import { StaticImage } from "gatsby-plugin-image";
import { AutoPlay } from "@egjs/flicking-plugins";
import "../components/index.scss";

const IndexPage = () => {
  const flickingRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const plugins = [
    new AutoPlay({ duration: 2000, direction: "NEXT", stopOnHover: false }),
  ];

  useEffect(() => {
    moveToFlicking(currentIndex);
  }, [currentIndex]);

  const moveToFlicking = item => {
    const flicking = flickingRef.current;
    if (!flicking) return;
    flicking.moveTo(item);
  };

  return (
    <Layout>
      <div id="home">
        <main>
          <div className="content-wrap">
            <div className="intro-wrap">
              <div className="mo logo">
                <StaticImage
                  src="../images/main/main_visual_logo.png"
                  loading="lazy"
                  placeholder="blurred"
                  quality={95}
                  formats={["auto", "webp", "avif"]}
                  alt="조이요가 스튜디오 로고"
                />
              </div>
              <h2>Enjoy Your Life </h2>
              <p>
                프라이빗한 공간에서 온전히 나의 몸과 마음을 그리고 호흡을
                바라보는 시간
              </p>
              <div className="links-wrap">
                <a
                  href="https://open.kakao.com/o/sZQaTLAc"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="mo">
                    <StaticImage
                      src="../images/main/kakao_ico.png"
                      loading="lazy"
                      placeholder="blurred"
                      quality={95}
                      formats={["auto", "webp", "avif"]}
                      alt="조이요가 카카오톡 문의"
                    />
                  </i>
                  <span>카카오톡 문의</span>
                </a>
                <a
                  href="https://www.instagram.com/zoeyyogastudio/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="mo">
                    <StaticImage
                      src="../images/main/instagram_ico.png"
                      loading="lazy"
                      placeholder="blurred"
                      quality={95}
                      formats={["auto", "webp", "avif"]}
                      alt="조이요가 인스타그램"
                    />
                  </i>
                  <span>인스타그램</span>
                </a>
                <a
                  href="https://youtube.com/@ZoeyYoga"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="mo">
                    <StaticImage
                      src="../images/main/youtube_ico.png"
                      loading="lazy"
                      placeholder="blurred"
                      quality={95}
                      formats={["auto", "webp", "avif"]}
                      alt="조이요가 유튜브"
                    />
                  </i>
                  <span>유튜브</span>
                </a>
              </div>
            </div>

            <div className="slider-wrap">
              <Flicking
                plugins={plugins}
                ref={flickingRef}
                align="prev"
                moveType="strict"
                circular={true}
                onChanged={e => {
                  setCurrentIndex(e.index);
                }}
              >
                <div>
                  <StaticImage
                    src="../images/main/main_01.jpg"
                    loading="lazy"
                    placeholder="blurred"
                    quality={95}
                    formats={["auto", "webp", "avif"]}
                    alt="첫번째 메인이미지"
                  />
                </div>
                <div>
                  <StaticImage
                    src="../images/main/main_02.jpg"
                    loading="lazy"
                    placeholder="blurred"
                    quality={95}
                    formats={["auto", "webp", "avif"]}
                    alt="두번째 메인이미지"
                  />
                </div>
              </Flicking>
              <ul className="indicator-wrap">
                {[0, 1].map(item => (
                  <li>
                    <button
                      className={currentIndex === item ? "active" : ""}
                      onClick={() => {
                        moveToFlicking(item);
                      }}
                    >
                      <span>{item}번째</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </main>

        <section className="about">
          <h2>
            <span>ABOUT</span> ZOEY YOGA
          </h2>
          <p>
            너무 잘하려고 노력하지 않아도 돼요.
            <br />
            나만의 호흡을 천천히 따라가세요.
            <br />
            걱정은 내쉬고 행복을 들이쉬세요.
            <br />
            <br />
            건강한 몸과 마음은 내일 더 기대되는 나를 만듭니다.
            <br />
            모든 분들의 하루가 행복으로 가득 채워지길 바랍니다.
          </p>
          <Link to="/about">대표원장 소개보기</Link>
        </section>

        <section className="program">
          <dl className="therapy">
            <Link to="/program/#therapy">
              <dt>테라피 자세교정</dt>
              <dd>
                소도구를 이용해 근막을 풀고, <br />
                건강하고 바른 몸을 유지
              </dd>
            </Link>
          </dl>
          <dl className="golf">
            <Link to="/program/#golf">
              <dt>골프 요가</dt>
              <dd>
                골프로 발생하는 불균형을 바로잡고 <br />
                하체 코어를 안정화
              </dd>
            </Link>
          </dl>
          <dl className="senior">
            <Link to="/program/#senior">
              <dt>시니어 요가</dt>
              <dd>
                말초신경을 자극하여 <br />
                몸을 유연하게 만들어 신체기능 향상
              </dd>
            </Link>
          </dl>
          <dl className="insideflow">
            <Link to="/program/#insideflow">
              <dt>인사이드플로우 요가</dt>
              <dd>
                음악이 주는 힘을 통해 <br />
                빈야사의 올바른 전환으로 몸을 건강하게 함
              </dd>
            </Link>
          </dl>
        </section>

        <section className="contact">
          <h2>
            <span>CONTACT</span> ZOEY YOGA
          </h2>
          <ul>
            <li>
              <a href="tel:01048951777">010.4895.1777</a>
              <span>-</span>
            </li>
            <li>
              <a
                href="https://open.kakao.com/o/sZQaTLAc"
                target="_blank"
                rel="noreferrer"
              >
                카카오 플러스 친구로 문의하기
              </a>
              <span>-</span>
            </li>
            <li>
              <a
                href="https://www.instagram.com/zoeyyogastudio/"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
              <span>-</span>
            </li>
            <li>
              <a
                href="https://youtube.com/@ZoeyYoga"
                target="_blank"
                rel="noreferrer"
              >
                YouTube
              </a>
              <span>-</span>
            </li>
            <li>
              <a
                href="mailto:didwldls0229@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                didwldls0229@gmail.com
              </a>
              <span>-</span>
            </li>
            <li>
              <a
                href="https://naver.me/GD5yIAlY"
                target="_blank"
                rel="noreferrer"
              >
                서울시 용산구 한남대로60길 한남리첸시아
              </a>
            </li>
          </ul>
        </section>
      </div>
    </Layout>
  );
};

export const Head = () => <Seo title="Home" />;

export default IndexPage;
