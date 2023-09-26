import BlogSection from "@/components/blog-section"
import Contact from "@/components/contact"
import Intro from "@/components/intro"

export default function Home() {
  return (
    <>
      <section>
        <Intro />
        <div className="mb-20 flex flex-col items-center space-y-40">
          <BlogSection />
          <Contact />
        </div>
      </section>
    </>
  )
}
