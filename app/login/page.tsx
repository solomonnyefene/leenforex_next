export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background font-sans">
      <form className="bg-white dark:bg-zinc-900 shadow-md rounded px-8 pt-8 pb-8 w-full max-w-sm flex flex-col gap-6">
        <h1 className="text-2xl font-bold text-center text-purple-600 ">Leenforex Login</h1>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="px-3 py-2 border border-zinc-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-background text-foreground"
            placeholder="you@email.com"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="text-sm font-medium text-foreground">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            required
            className="px-3 py-2 border border-zinc-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-background text-foreground"
            placeholder="••••••••"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-purple-600 py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded transition-colors"
        >
          Login
        </button>
      </form>
    </div>
  );
}
