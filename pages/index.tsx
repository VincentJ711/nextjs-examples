import {Button, Stack, Typography} from '@mui/material';
import {GetServerSideProps} from 'next';
import Link from 'next/link';
import LazyLink from "../components/LazyLink";

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
          Current theme: <strong>{theme} . To change add to url: ?hi=1|3|... for light and ?hi=0,2,4|... for dark</strong>
        </Typography>
        <Button component={LazyLink} href="/posts/1" variant="contained">
          Go to Post 1
        </Button>
        <Button component={LazyLink} href="/posts/2" variant="contained">
          Go to Post 2
        </Button>
      </Stack>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const id = Number(ctx.query?.hi || 0);
  if (Number(id || 0) % 2 === 0) {
    // cache control only is set in production builds as in dev mode its overwritten.
    // This sets the cache header in the actual response
    ctx.res.setHeader('Cache-Control', `public, max-age=600`);
  }

  return {
    props: {
      theme: id % 2 === 0 ? 'dark' : 'light'
    },
  };
};
