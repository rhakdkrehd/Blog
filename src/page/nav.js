import React, { useState, useEffect } from 'react'

import './nav.css';

const Nav = () => {

    const [navEvent,setnavEvent] = useState(false);
    useEffect(() => {
        //scroll 이벤트가 발생되면 코드를 실행한다
        window.addEventListener("scroll", () => {
          //스크롤 값이 Y 50보다 크면 이벤트 발생
          if(window.scrollY>50){
            setnavEvent(true);
          }else{
            setnavEvent(false);
          }
        })
        return () => {
          //scroll 이벤트가 발생하지 않으면 코드를 실행한다
          window.removeEventListener("scroll", () => {});
        }
      }, [])

    return (
        <nav navEvent={navEvent}>
            <div className='logo'>
                <a href="/">
                    <svg width="100" height="50"
                         viewBox="0 0 100 50"
                         xmlns="http://www.w3.org/2000/svg"
                    >
                        <text x="50" y="25" 
                              font-family="Arial"
                              font-size="30"
                              fill="white"
                              text-anchor="middle"
                              alignment-baseline="middle"
                              dy="0.1em"
                        >
                            MIN
                        </text>
                    </svg>
                </a>
            </div>
            <ul>
                <li>
                    <a href="https://github.com/rhakdkrehd" target="_blank" rel="noreferrer">
                        Git Hub
                    </a>
                </li>
                <li>
                    <a href="mailto:mins0159@naver.com" target="_blank" rel="noreferrer">
                        Mail
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Nav