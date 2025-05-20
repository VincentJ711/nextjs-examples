import { GetServerSideProps } from 'next';
import { getThemeByName } from '../../lib/theme';
import { Typography } from '@mui/material';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const id = ctx.params?.id;

  return {
    props: {
      theme: id % 2 == 0 ? 'light' : 'dark',
      id: ctx.params?.id || null,
    },
  };
};

export default function Post({ id }: { id: string }) {
  return <Typography variant="h4">Post ID: {id}</Typography>;
}
