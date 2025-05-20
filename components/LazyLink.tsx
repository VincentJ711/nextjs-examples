// import Link from "next/link";
//
// const LazyLink = (props: any) => <Link onMouseEnter={(e) => {e.preventDefault();}} prefetch={false} {...props} />;
//
// export default LazyLink;
//
import { useRouter } from 'next/router';
import {LinkProps} from "next/link";
import {ReactNode} from "react";

type LazyLinkProps = LinkProps & {
  children: ReactNode;
};

const LazyLink = ({ href, children, ...props }: LazyLinkProps) => {
  const router = useRouter();

  const handleClick = async (e: any) => {
    e.preventDefault();
    await router.push(href);
  };

  return (
      <a href={href as string} onClick={handleClick} {...props}>
        {children}
      </a>
  );
};

export default LazyLink;
