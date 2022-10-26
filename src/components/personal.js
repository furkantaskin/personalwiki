import React from 'react';
import clsx from 'clsx';
import myAvatar from '@site/static/img/me.jpeg'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Personal() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div className="container">
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        paddingTop: "30px"
      }}>
        <img src={myAvatar} style={{
          width: "300px",
          borderRadius: "50%",
          marginBottom: "30px"
        }} />
        <h1 style={{ marginBottom: "10px" }}>{siteConfig.title}</h1>
        <p style={{textAlign: "center"}}>
          Born in 1996 and started to learn front-end development in 2012. And then, met his lovely language Python in 2017. <br />
          Currently working as freelance Python and Front-end developer for government organizations and private companies in Turkey. <br/>
          Improving himself on modern Front-end technologies like React, Redux, Next.js etc. <br />
          Learning new languages like Go and Rust.
        </p>
      </div>
    </div>
  )
}