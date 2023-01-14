import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi I'm a computer science student at UVIC. This website shows my current projects and interests</p>
      
      </section>
      <a href='assets/Deedy_CV.pdf' download>Download resume</a>
    </Layout>
  );
}
