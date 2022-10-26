import React from 'react'
import myAvatar from '@site/static/img/me.png'

export default function Personal() {
  <div style={{ textAlign: "center" }}>
    <img src={myAvatar} style={{
      width: "400px",
      paddingTop: "30px",
      borderRadius: "50%",
    }} />
    <ul>
      <li>
        Pythonista
      </li>
      <li>
        Loves Blender, Photoshop and GNU/Linux
      </li>
      <li>Determined himself to learn languages as many as possible</li>
    </ul>
  </div>
}