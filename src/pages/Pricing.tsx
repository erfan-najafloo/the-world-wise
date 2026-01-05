import AppNav from "../components/AppNav";

function Pricing() {
  return (
    <main className="m-10 py-10 px-20 bg-[var(--color-dark--1)] min-h-[calc(100vh-5rem)]">
      <AppNav />
      <section className="grid grid-cols-2 gap-28 items-center w-[clamp(80rem,80%,90rem)] my-24 mx-auto">
        <div>
          <h2 className="text-6xl leading-[1.2] mb-12">
            Simple pricing.
            <br />
            Just $9/month.
          </h2>
          <p className="text-2xl mb-8">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae vel
            labore mollitia iusto. Recusandae quos provident, laboriosam fugit
            voluptatem iste.
          </p>
        </div>
        <img
          src="/img-2.jpg"
          alt="city beside of sea with many tower"
          className="w-full"
        />
      </section>
    </main>
  );
}

export default Pricing;
