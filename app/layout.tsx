import './globals.css'
import { Nav, Footer } from './components'




export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body
        className={"mx-4 md:mx-48 xl:mx-96  font-sans bg-gray-200"}
      >
        <div className="min-h-screen grid grid-rows-1 overflow-x-hidden">
          {/* @ts-expect-error Server Component */}
          <Nav />
          <main className="w-full mx-auto row-start-2">{children}</main>
          <footer>
            <Footer />
          </footer>
        </div>
      </body>
    </html>
  );
}
