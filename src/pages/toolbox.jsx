import React from "react";
import HeadlineWithFocus from '../components/HeadlineWithFocus';
import Helmet from 'react-helmet';

import ToolBoxListContainer from '../containers/ToolBoxListContainer';

export default () => (
  <div className="c-content-box">
    <Helmet title="That's my front-end developer toolbox" />  

    <HeadlineWithFocus><span>Items in </span>my toolbox</HeadlineWithFocus>
    <ToolBoxListContainer />
   
  </div>
);