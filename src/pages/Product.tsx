import PageNav from "../components/PageNav";

function Product() {
  return (
    <main className="m-10 py-10 px-20 bg-[var(--color-dark--1)] min-h-[calc(100vh-5rem)]">
      <PageNav />
      <section className="grid grid-cols-2 gap-28 items-center w-[clamp(80rem,80%,90rem)] my-24 mx-auto">
        <img
          src="img-1.jpg"
          alt="person with dog overlooking mountain with sunset"
          className="w-full"
        />
        <div>
          <h2 className="text-6xl leading-[1.2] mb-12">About WorldWide.</h2>
          <p className="text-2xl mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo est
            dicta illum vero culpa cum quaerat architecto sapiente eius non
            soluta, molestiae nihil laborum, placeat debitis, laboriosam at fuga
            perspiciatis?
          </p>
          <p className="text-2xl mb-8">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
            doloribus libero sunt expedita ratione iusto, magni, id sapiente
            sequi officiis et.
          </p>
        </div>
      </section>
    </main>
  );
}

export default Product;
