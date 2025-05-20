import {Button, Stack, Typography} from '@mui/material';
import {GetServerSideProps} from 'next';
import {parse} from 'cookie';
import Link from 'next/link';

type Props = {
  theme: 'light' | 'dark';
};

export default function Home({ theme }: Props) {

  return (
      <Stack spacing={3} sx={{ padding: 4 }}>
        <Typography variant="h4" color="primary">
          Welcome to the Home Page
        </Typography>
        <Typography variant="body1">
          Current theme from cookie: <strong>{theme}</strong>
        </Typography>
        <Button component={Link} href="/posts/1" variant="contained">
          Go to Post 1
        </Button>
      </Stack>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {
      theme: Number(ctx.query?.hi || 0) % 2 === 0 ? 'light' : 'dark'
    },
  };
};
