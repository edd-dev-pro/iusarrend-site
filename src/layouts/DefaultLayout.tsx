import type { FC, ReactNode } from "react";

import Header from "../core/header/Header";

interface DefaultLayoutProps {
  children: ReactNode;
}

const DefaultLayout: FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <div className="container">
      <Header />

      <div>
        <main>{children}</main>
      </div>
    </div>
  );
};

export default DefaultLayout;
