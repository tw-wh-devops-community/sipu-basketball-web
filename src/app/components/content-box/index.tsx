import React from 'react';
import './index.less';

interface ContentBoxProps {
  icon: React.FC;
  title: string
}

const ContentBox: React.FC<ContentBoxProps> = ({ icon: Icon, children, title }) => (
  <div>
    <header className="content-box-title">
      <Icon />
      <h4 className="content-box-title">{title}</h4>
    </header>
    <div className="content-box-body">
      {children}
    </div>
  </div>
);

export default ContentBox;
