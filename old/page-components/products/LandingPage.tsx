import Section from "@components/Section";
import Article from "@page-components/products/ProductsArticle";

const LandingPage = () => {
  return (
    <Section heading="Landing Page" color="green">
      <Article>
        <p>
          For businesses that operate primarily outside of the web, one page is
          often all it takes to introduce and inform users about their products
          and services.
          <br />
          <br />
          An eye-catching landing page would establish your brand’s online
          presence and open you up to a huge set of potential clients who would
          otherwise be left in the dark!
          <br />
          <br />
          Single landing pages are very similar to portfolios in their design
          and development, but they may differ in terms of scope and content
          management. Portfolios may require multiple pages or integration with
          a CMS so that the owner can regularly update their website with new
          works, but for many businesses, neither is necessary.
        </p>
      </Article>

      <Article heading="Price & timeframe">
        <p>
          A landing page should cost between £4,800 and £7,700 and take about 5
          weeks to complete; however, as with portfolio websites, price and
          timescale may vary depending on the scope of the animations
          implemented.
        </p>
      </Article>
    </Section>
  );
};
export default LandingPage;
