import Navbar from 'components/Static/Navbar'
import { PageProvider } from 'context/page'
import { ThemeProvider } from 'context/theme'
import 'styles/globals.css'
import "react-multi-carousel/lib/styles.css";
import { useEffect } from 'react';
import Footer from 'components/Static/Footer';
import CustomCursor from 'components/Global/Cursor';
import ContextMenu, { Item } from 'components/Global/ContextMenu';
import Key from 'components/Global/Key';

function MyApp({ Component, pageProps }) {

  return <>
    <ThemeProvider>
      <PageProvider>
        <main>
          <head>
            <title>XierraUniverse | ThePS</title>
          </head>
          <CustomCursor />
          <ContextMenu
            content={event => <>

              <div className="pt-2">
                <Item icon={<i className="fa fa-code" />} text="Xierra GitHub" onClick={event.xierragit} />
				<Item icon={<i className="fa fa-code" />} text="Projects" onClick={event.projects} />
			    <Item icon={<i className="fa fa-code" />} text="Home" onClick={event.home} />
				
              </div>
			                <div className="pt-2">
                <Item icon={<i className="fa fa-code" />} text="Support" onClick={event.support} />

				
              </div>
            </>}
          >
            <Navbar />
            <main className="min-h-[67vh] px-6 lg:px-0">
              <Component {...pageProps} />
            </main>
            <Footer />
          </ContextMenu>

          <div className="color-layout layout-blue position-right-top" />
          <div className="color-layout layout-purple position-c-bottom" />
		  <div className="color-layout layout-purple position-right-top" />
          <div className="color-layout layout-blue position-left-bottom" />
        </main>
      </PageProvider>
    </ThemeProvider>
  </>
}

export default MyApp
