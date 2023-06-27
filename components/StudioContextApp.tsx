import {
  Footer,
  Header,
  FooterContextConfig,
  HeaderContextConfig,
  Main,
  MenuContextData,
  MenuSegmentContext,
  StudioLayout,
  StyledMetadataPanel,
  StudioMetadataPanel,
  useStudioContext,
  useStudioContextUpdate
} from '@studiosymmetries/studio-design-system';
// import { useStudioContext, useStudioContextUpdate } from '../contexts/StudioContext';

import styled from 'styled-components';
import { Container } from './sharedstyles';


/**
 * Build Context Menus
 * @param contextConfig 
 * @param contextMenu 
 * @returns MenuSegmentContext
 */
function buildContextMenu(contextConfig: FooterContextConfig | HeaderContextConfig, contextMenu: MenuContextData[]): MenuSegmentContext {

  // MenuSegmentContext
  const menu = {
    social: [],
    site: []
  };

  // Build Menu Segments
  if (contextMenu && contextConfig.displayMenu) {
    // Social Links
    if (contextConfig.displaySocialLinks) {
      contextMenu.forEach((segment) => {
        console.log({ segment }, segment.segments, segment.type)
        if (contextConfig.displaySocialLinks && segment.type === "social") {
          menu['social'] = segment.segments;
        }
      });
    }
    // Site Links
    if (contextConfig.displaySiteLinks) {
      contextMenu.forEach((segment) => {
        if (contextConfig.displaySiteLinks && segment.type === "site") {
          menu['site'] = segment.segments;
        }
      });
    }
  }
  console.log("AFTER COMPILATION", { menu })
  return menu;
}

function buildContextMenu2(contextConfig: FooterContextConfig | HeaderContextConfig, contextMenu: MenuContextData[]): MenuSegmentContext {

  // MenuSegmentContext
  const menu = {
    social: [],
    site: []
  };

  // Build Menu Segments
  if (contextMenu && contextConfig.displayMenu) {
    // Social Links
    if (contextConfig.displaySocialLinks) {
      contextMenu.forEach((weblink) => {
        console.log("social", weblink)
        console.log({ contextMenu })
        if (contextConfig.displaySocialLinks && weblink.segment === "social") {
          menu.social[menu.social.length] = weblink;
        }
      });
    }
    // Site Links
    if (contextConfig.displaySiteLinks) {
      contextMenu.forEach((weblink) => {
        console.log("site", weblink)
        console.log({ contextMenu })
        if (contextConfig.displaySiteLinks && weblink.segment === "site") {
          menu.site[menu.site.length] = weblink;
        }
      });
    }
  }

  return menu;
}
const StyledFullFlex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  height: 100vh;
`;

export const StudioContextApp = ({ children }) => {
  const studioContext = useStudioContext();
  const studioUpdateContext = useStudioContextUpdate();

  const { setDisplayMetadata } = studioUpdateContext;
  const {
    loading,
    // brand,
    metadata,
    // footer,
    // header,
    // site,
    debug
  } = studioContext;
  // const { config : headerConfig } = header;
  // const { copyright, panel, config : footerConfig } = footer;

  // const { weblinks, websocials } = site;

  // setDisplayMetadata(true);
  return (
    <StudioLayout>
     
      {(loading ? <StyledFullFlex>loading...</StyledFullFlex> : children)}
    

    </StudioLayout>
  )
}


