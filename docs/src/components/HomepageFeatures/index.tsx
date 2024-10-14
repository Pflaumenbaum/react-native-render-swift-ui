import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: ' Easy to integrate',
    Svg: require('@site/static/img/integrate.svg').default,
    description: (
      <>
  
   Thanks to expo-modules and expo-config-plugins, this package can be easily integrated into any expo app, without additional configuration.
      </>
    ),
  },
  {
    title: '100% Native',
    Svg: require('@site/static/img/native.svg').default,
    description: (
      <>
 This package utilizes real SwiftUI views built with native Swift code, allowing you to add features like a native iOS list or a ContentUnavailableView directly to your app.
      </>
    ),
  },
  {
    title: 'Easy to use',
    Svg: require('@site/static/img/react.svg').default,
    description: (
      <>
   Thanks to JSX support, Swift UI views can be created like normal react views. A react native view can also be integrated into swift ui.
      </>
    ),
  },
  {
    title: 'Expandable',
    Svg: require('@site/static/img/expandable.svg').default,
    description: (
      <>
   Our config plugin allows you to write custom Swift code diretctly inside your app directory, enabling direct use of native code from React Native. <p style={{fontSize: 10}}>(A prebuild is required after each change)</p>
      </>
    ),
  },
  {
    title: 'Fully documented',
    Svg: require('@site/static/img/documented.svg').default,
    description: (
      <>
   To make it as easy as possible to understand the function and use of this package, it is fully documented.
      </>
    ),
  },
  {
    title: 'Open Source',
    Svg: require('@site/static/img/mit.svg').default,
    description: (
      <>
This package is licensed under the MIT licence, so you can use it free of charge in all your projects.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
