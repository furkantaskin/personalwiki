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
        <p style={{ textAlign: "center" }}>
          Born in 1996 and started to learn front-end development in 2012. In 2017, he discovered the wonderful language Python. <br/>

          Currently working as a freelance Python and Front-end developer for government organizations and private companies in Turkey. <br/>

          Improving his knowledge of modern front-end technologies such as React, Redux, Next.js, etc. <br/>

          Learning new languages like Go and Rust.
        </p>
      </div>
    </div>
  )
}