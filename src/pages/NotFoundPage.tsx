import Page from "../components/page/Page";
import pageNotFoundSvg from "../img/404.svg";

const NotFoundPage = () => {
  return (
    <Page htmlTitle={"404 Not Found"}>
      <h1>404 | Not found</h1>
      <section className="section">
        <img
          className="page-img"
          src={pageNotFoundSvg}
          alt="404 | Page not found"
        />
      </section>
    </Page>
  );
};

export default NotFoundPage;
