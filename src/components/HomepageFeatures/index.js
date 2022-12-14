import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'GitHub',
    Svg: require('@site/static/img/githublogo.svg').default,
    description: (
      <>
        Visit my <a href="https://github.com/furkantaskin" target="_blank">GitHub profile</a> for personal projects
      </>
    ),
  },
  {
    title: 'Who am I',
    Svg: require('@site/static/img/python-img.svg').default,
    description: (
      <>
      Pythonista <br/>
      Loves Blender, Photoshop and GNU/Linux <br/>
      There is nothing greater than the love of cats for him <br/>
      Can be found on the internet as 'muffinisamuffin'
      </>
    ),
  },
  {
    title: 'Contact Me',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
      Email: furkan.taskin[at]tuta.io <br/>
      LinkedIn: <a href='https://linkedin.com/in/furkant1' target="_blank">furkant1</a>
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
