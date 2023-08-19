import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import '../style/gradients.css'
import { blogData } from '../data'
import { useBlog } from '../hooks/useBlog'
import { Cards } from '../components/Cards'

function Blog() {
  const { state, stateUpdaters } = useBlog()
  const { filterData, newblogDataLast } = state
  const { setfilterData } = stateUpdaters
  const { id } = useParams()

  useEffect(() => {
    const filterDataArea = blogData.filter((area) => area.title.includes(id))
    setfilterData(filterDataArea)
  }, [id])

  return (
    <main className="bg-slate-100 px-5">
      {filterData.map((blog) => {
        return (
          <>
            <section className="relative py-5" key={blog.title}>
              <figure className="relative z-10 mx-auto md:h-[280px] md:w-[590px] lg:h-[293px] lg:w-[890px] xl:h-[367px] xl:w-[1252px]">
                <picture>
                  <source media="(min-width:945px)" srcSet={blog.imgDesktop} />
                  <img
                    className="rounded-2xl bg-cover bg-center bg-no-repeat md:h-[280px] md:w-[590px] lg:h-[293px] lg:w-[890px] xl:h-[367px] xl:w-[1252px]"
                    src={blog.imgIphone}
                    alt={blog.altDescription}
                  />
                </picture>
              </figure>
              <div className="diamond absolute -bottom-40 -left-20 h-44 w-40 "></div>
              <div className="diamond absolute -bottom-20 -right-20 h-44 w-40"></div>
            </section>
            <section className="relative z-10">
              <h1 className=" font-oswald text-xl font-bold">{blog.title}</h1>
              <article className="mb-3 mt-1 flex justify-between">
                <p
                  className={`${
                    blog.hashtag === '#Blogs'
                      ? 'text-purple-900'
                      : blog.hashtag === '#Events'
                      ? 'text-lime-400'
                      : 'text-teal-600'
                  } font-oscald text-base font-bold`}
                >
                  {blog.hashtag}
                </p>
                <p className="font-roboto text-base font-normal">{blog.date}</p>
              </article>

              <p
                className="font-robot text-base font-normal leading-6 text-zinc-950"
                dangerouslySetInnerHTML={{ __html: blog.text }}
              ></p>
            </section>
          </>
        )
      })}

      <section className="relative mt-4 pb-10">
        <p className="mb-6 text-center font-oswald text-xl font-bold">
          Ultimos Blogs
        </p>
        <div className="diamond absolute -left-20 -top-7 h-44 w-40"></div>
        <div className="diamond absolute -right-20 -top-7 h-44 w-40"></div>
        <Cards blogData2={blogData} filterData={newblogDataLast} />
      </section>
    </main>
  )
}

export { Blog }
