import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import "./header.scss";
import { useEffect } from "react";
import { useState } from "react";

const pageLinks = [
  {
    text: "대표원장 소개",
    url: "/about",
    badge: false,
    description: "조이요가 대표원장 소개 페이지",
  },
  { text: "프로그램 소개", url: "/program" },
  { text: "스튜디오 소개", url: "/studio" },
];

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 80) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      window.addEventListener("scroll", handleScroll);
    }, 100);
    return () => {
      clearInterval(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={isActive ? "header_wrap active" : "header_wrap"}>
      <header>
        <h1>
          <Link to="/">
            <StaticImage
              src="../images/logo.png"
              loading="lazy"
              placeholder="none"
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="조이요가 스튜디오 로고"
              className="pc"
            />
            <span className="mo">
              <StaticImage
                src="../images/logo_mo.png"
                loading="lazy"
                placeholder="none"
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt="조이요가 스튜디오 로고"
              />
            </span>
          </Link>
        </h1>

        <div>
          <input type="checkbox" id="check_box" />
          <label htmlFor="check_box">
            <span></span>
            <span></span>
            <span></span>
          </label>

          <nav>
            <ul>
              {pageLinks.map((link, i) => (
                <React.Fragment key={link.url}>
                  <li>
                    <Link
                      to={link.url}
                      activeStyle={{ color: "#1A0F00", fontWeight: "500" }}
                    >
                      {link.text}
                    </Link>
                  </li>
                </React.Fragment>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
