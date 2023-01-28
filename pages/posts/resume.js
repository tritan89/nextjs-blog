import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout';
import Image from 'next/image';


export default function Resume() {


 

  return (
    <Layout>
    <Head>
      <title>Resume</title>
    </Head>
    <Image src="/images/resumejan2023-1.png"
            alt="my resume"
            width= {700}
            height={700 }
    />
  </Layout>
    
    
  );
}
