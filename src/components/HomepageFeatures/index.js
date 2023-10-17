import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '功能丰富且灵活',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        小到挖掘20个石头的简单任务，大到拥有复杂故事线、条件、事件和好感度系统的大型任务。NotQuests都可以做到！
      </>
    ),
  },
  {
    title: '简单易用',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        NotQuests功能强大并不意味着它很难上手！我在设计时将NotQuests设计得简单易用，只要你想，你还可以用它制作出复杂的任务。
      </>
    ),
  },
  {
    title: '完全开源',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        NotQuests是完全开源的！没有任何隐藏费用，任何人都开源在Github上为NotQuests作出贡献。
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
