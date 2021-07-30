import "../styles/global.css";
import { AppProps,Container  } from "next/app";
import { appWithTranslation } from 'next-i18next';
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';

function App({ Component, pageProps }: AppProps) {
  return(
    <Container>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </Container>
  ) ;
}

export default appWithTranslation(App);
