import Footer from "../componens/Footer";
import Header from "../componens/Header";

export default function About() {
  return (
    <>
      <Header />
    <div className="px-4 py-12 mx-auto text-center">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-slate-800">About</h1>
        <p className="mb-4 text-lg text-slate-700">
          Gucci, a powerhouse in the realm of luxury fashion, has its roots deeply
          embedded in Italian heritage and craftsmanship. Established in Florence
          in 1921 by Guccio Gucci, the brand began as a modest leather goods shop
          and has since evolved into an international icon of style and
          sophistication.
        </p>
        <p className="mb-4 text-lg text-slate-700">
          At the core of Gucci allure is its commitment to exquisite craftsmanship
          and innovative design. From impeccably crafted handbags to stylish
          ready-to-wear collections, each Gucci piece exudes elegance and luxury.
          The brands signature logo, the interlocking double Gs, has become a
          symbol of status and refinement, adorning everything from accessories to
          fragrances.
        </p>
        <p className="mb-4 text-lg text-slate-700">
          Under the creative direction of Alessandro Michele, Gucci has embraced a
          bold and eclectic aesthetic that celebrates individuality and
          self-expression. With whimsical motifs and vibrant colors, each
          collection tells a unique story that resonates with modern
          sensibilities.
        </p>
        <p className="mb-4 text-lg text-slate-700">
          Beyond its fashion prowess, Gucci is dedicated to social responsibility
          and sustainability. Through initiatives like Gucci Equilibrium, the
          brand strives to make a positive impact on the environment and promote
          diversity and inclusivity.
        </p>
        <p className="mb-4 text-lg text-slate-700">
          In summary, Gucci rich heritage, exceptional craftsmanship, and
          visionary design continue to captivate fashion enthusiasts around the
          world, solidifying its status as a timeless symbol of luxury and style.
        </p>
      </div>
    </div>
      <Footer />
    </>
  );
}
