type IProp={
    params: Promise<{slug:string}>
}

const Slug =async (props:IProp)=> {
    const params = await props.params
    const resolvedParams = params.slug
    const slug = resolvedParams
  return (<>
    <div>BlogSlugPage</div>
    <p>Blog Slug: {slug}</p>

    
  </>
  )
}

export default Slug