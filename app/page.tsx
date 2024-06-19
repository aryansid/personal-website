import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <p className="mb-4">
        {`Stanford student by day, builder by night. I'm interested in AI reasoning and systems, such as interpretability and inference optimization. Currently at Thrive exploring AI infrastructure. I'm also building Gatekeep -- AI generated Khan Academy videos.Previously, I worked under Fei Fei Li exploring computer vision in medicine.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
