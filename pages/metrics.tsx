import { setupAPIClient } from '../services/api';

import { withSSRAuth } from '../utils/withSSRAuth';

export default function dashboard() {
  return (
    <>
      <h1>Metrics</h1>
    </>
  );
}
export const getServerSideProps = withSSRAuth(
  async (ctx) => {
    const apiClient = setupAPIClient(ctx);

    return {
      props: {},
    };
  },
  {
    permissions: ['metrics.list'],
    roles: ['administrator'],
  }
);
