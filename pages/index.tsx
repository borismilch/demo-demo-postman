import Layout from '../components/Layout';

import { Sidebar, RequestForm } from '@/components/.'

export default function Home() {

  return (
    <Layout title='Some App'>
      <div className='flex'>

        <Sidebar />

        <RequestForm />

      </div>
    </Layout>
  );
}
