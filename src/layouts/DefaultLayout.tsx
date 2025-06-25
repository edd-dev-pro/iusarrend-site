import type { FC, ReactNode } from "react";

import Header from "../core/header/Header";

interface DefaultLayoutProps {
  children: ReactNode;
}

const DefaultLayout: FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <div className="layout-wrapper">
      <div className="bg-img" />

      <div className="container position-relative z-1">
        <Header />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default DefaultLayout;
