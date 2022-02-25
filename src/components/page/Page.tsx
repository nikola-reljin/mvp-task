import React, { PropsWithChildren, useEffect } from "react";
import { Navbar } from "../navbar";
import { Sidebar } from "../sidebar";
import { Footer } from "../footer";
import classNames from "classnames";
import "./Page.scss";

interface IPageProps {
  htmlTitle: string;
}

const Page = ({ htmlTitle, children }: PropsWithChildren<IPageProps>) => {
  useEffect(() => {
    document.title = htmlTitle;
  }, [htmlTitle]);

  const mainClassName = classNames("container-fluid content, flex: 1");
  return (
    <>
      <Navbar />
      <section className="page-section">
        <Sidebar />
        <main className={mainClassName}>{children}</main>
      </section>
      <Footer />
    </>
  );
};

export default Page;
