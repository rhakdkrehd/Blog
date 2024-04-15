import React from 'react'

import "./about.css"

import Me from "../img/ME.jpg"
import PsImg from "../img/PS.png"
import AiImg from "../img/AI.png"
import XdImg from "../img/XD.png"
import CImg from "../img/C.png"
import CpImg from "../img/C++.png"
import HtmlImg from "../img/HTML.png"
import CssImg from "../img/CSS.png"
import JsImg from "../img/JS.png"
import JqImg from "../img/JQUERY.png"
import ReImg from "../img/REACT.png"

const About = () => {
    return (
    <div className='container'>
        <div className='contatsLeft'>
            <img src={Me} />
        </div>
        <div className='contantsRight'>
            <ul>
                <li>
                    <h2>About</h2>
                </li>
                <li>
                    <h4>
                        저는 벽돌처럼 쌓아가며 성장하는 개발자입니다. <br/>
                        새로운 기술과 도전을 즐기며 끊임없이 발전하는 것을 목표로 삼고 있습니다. <br/>
                        협업을 중요시하며 항상 열린 마음으로 <br/> 
                        새로운 아이디어를 수용하고 발전시키는 데에 힘쓰고 있습니다. <br/>
                        함께 일하며 팀의 목표를 이루고 더 나은 결과물을 만들기 위해 노력하는 것을 즐깁니다.
                    </h4>
                </li>
                <li className='emailBox'>
                    <h3>
                        E-mail
                    </h3>
                    <a href="mailto:mins0159@naver.com" target="_blank" rel="noreferrer">
                        mins0159@naver.com
                    </a>
                </li>
                <li>
                    <h3>
                        Skill
                    </h3>
                    <ul className='skillBox'>
                        <li>
                            <img src = {PsImg} />
                        </li>
                        <li>
                            <img src = {AiImg} />
                        </li>
                        <li>
                            <img src = {XdImg} />
                        </li>
                        <li>
                            <img src = {CImg} />
                        </li>
                        <li>
                            <img src = {CpImg} />
                        </li>
                        <li>
                            <img src = {HtmlImg} />
                        </li>
                        <li>
                            <img src = {CssImg} />
                        </li>
                        <li>
                            <img src = {JsImg} />
                        </li>
                        <li>
                            <img src = {JqImg} />
                        </li>
                        <li>
                            <img src = {ReImg} />
                        </li>
                    </ul>
                </li>
                <li>
                    <h3>
                        #신입 #퍼블리셔 #프론트엔드
                    </h3>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default About