import Link from 'next/link';
import {homeStyle} from '../../styles/home/home.styles';

export default function Home() {
    return (
        <div className={homeStyle}>
            <h1>Welcome to the Blog</h1>
            <p>
                <Link href="/posts/1">Go to Post 1</Link>
            </p>
        </div>
    );
}