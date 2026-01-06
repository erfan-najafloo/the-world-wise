import PageNav from "../components/PageNav";

function Login() {
  return (
    <main className="m-10 py-10 px-20 bg-[var(--color-dark--1)] min-h-[calc(100vh-5rem)]">
      <PageNav />
      <form className="bg-[var(--color-dark--2)] rounded-lg py-8 px-12 w-3xl flex gap-8 my-32 mx-auto flex-col">
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email address</label>
          <input type="email" id="email" value="jack@example.com" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" value="qwerty" />
        </div>
        <button className="ctaLink w-1/5">Login</button>
      </form>
    </main>
  );
}

export default Login;
