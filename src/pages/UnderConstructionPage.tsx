import Page from "../components/page/Page";
import underConstructionSvg from "../img/under_construction.svg";

interface IUnderConstructionPage {
  title: string;
}

const UnderConstructionPage = ({ title }: IUnderConstructionPage) => {
  return (
    <Page htmlTitle={title}>
      <h1>{title} Page is still in development.</h1>
      <section className="section">
        <img
          className="page-img"
          src={underConstructionSvg}
          alt="Feature is in development."
        />
      </section>
    </Page>
  );
};

export default UnderConstructionPage;
