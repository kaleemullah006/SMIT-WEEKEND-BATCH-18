type IProp={
    params: Promise<{slug:string[]}>
}

const BlogPathPage =async (props:IProp)=> {
    const params = await props.params
    const resolvedParams = params.slug
    const slug = resolvedParams
  return (<>
    <div>BlogPathPage</div>
    <p>Blog path: {slug.join(" / ")}</p>

    
  </>
  )
}

export default BlogPathPage