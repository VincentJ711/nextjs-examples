import {GetServerSideProps} from 'next';
import Link from 'next/link';
import {Box, Button, Paper, Typography} from '@mui/material';

type Post = {
  id: string;
  title: string;
  body: string;
};

type PostPageProps = {
  post: Post;
};

export default function PostPage({ post }: PostPageProps) {
  return (
      <Box
          sx={{
            maxWidth: 700,
            margin: 'auto',
            padding: 3,
          }}
      >
        <Paper elevation={3} sx={{ padding: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            {post.title}
          </Typography>
          <Typography
              variant="subtitle2"
              color="text.secondary"
              gutterBottom
          >
            Post ID: {post.id}
          </Typography>
          <Typography variant="body1" sx={{ marginTop: 2, whiteSpace: 'pre-line' }}>
            {post.body}
          </Typography>
          <Box sx={{ marginTop: 4 }}>
            <Link href="/" passHref>
              <Button variant="contained" color="primary">
                Back to Home
              </Button>
            </Link>
          </Box>
        </Paper>
      </Box>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!;
  const res = context.res;

  res.setHeader('Bob', `Marley`);

  if (Number(id || 0) < 10) {
    // cache control only is set in production builds as in dev mode its overwritten.
    // This sets the cache header in the actual response
    res.setHeader('Cache-Control', `public, max-age=600`);
  }


  // Fake fetch — replace with your data fetching logic
  const post = {
    id: id as string,
    title: `Post Title ${id}`,
    body: `This is the content of post #${id}. You can replace this with real fetched data.\n\nThis layout is cleaner and easier to read.`,
  };

  return {
    props: {
      post,
      theme: Number(id || 0) % 2 === 0 ? 'light' : 'dark',
    },
  };
};
