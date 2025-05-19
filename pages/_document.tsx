import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import { getStyles } from 'typestyle';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          <style
            id="typestyle"
            dangerouslySetInnerHTML={{ __html: getStyles() }}
          />
        </>
      ),
    };
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
