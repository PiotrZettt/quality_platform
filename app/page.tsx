import Image from 'next/image'


export default async function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h3>This is the landing Page, hi </h3>
      <div className="relative isolate">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div className="relative left-[calc(50%-11rem)] aspect-[155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#627d65] to-[#3027a6] opacity-70 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]">
        </div>
      </div>
    </div>
    </main>
  )
}
