import AppNav from "../components/AppNav";

function HomePage() {
  return (
    <main className="h-[calc(100vh-5rem)] bg-hero-overlay bg-cover bg-center m-10 py-10 px-20 ">
      <AppNav />
      <section className="flex flex-col h-[85%] items-center justify-center gap-10 text-center">
        <h1 className="text-7xl leading-[1.3]">
          You travel the world.
          <br />
          WorldWise keeps track of your adventures.
        </h1>
        <h2
          className="w-[90%] text-3xl text-[var(--color-light--1)]
 mb-10"
        >
          A world map that tracks your footsteps into every city you can think
          of. Never forget your wonderful experiences, and show your friends how
          you have wandered the world.
        </h2>
        <a className="cta">start tracking now</a>
      </section>
    </main>
  );
}

export default HomePage;
