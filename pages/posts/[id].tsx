import {postStyle} from '../../styles/posts/post.styles';
import {GetServerSideProps} from "next";


type Props = {
    id: string;
};

export default function Post({ id }: Props) {
    return (
        <div className={postStyle}>
            <h1>Post ID: {id}</h1>
            <p>This is a dynamic post page.</p>
        </div>
    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { res, params } = context;
    const id = params?.id as string;

    res.setHeader('Bob', `Marley`);

    // cache control only is set in production builds as in dev mode its overwritten.
    // This sets the cache header in the actual response
    res.setHeader('Cache-Control', `public, max-age=10, stale-while-revalidate=${Number(id) % 5}`);

    return {
        props: { id }
    };
};
