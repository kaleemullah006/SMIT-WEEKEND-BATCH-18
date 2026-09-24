import { json } from "stream/consumers"

type IProp = {
    params: Promise<{slug:string []}>

}
    const Slug = async (props:IProp)=>{
        const params = await props.params
        const resolvedParams = params.slug
        const slug = resolvedParams

        return(<>
        <h1>Blogs Detaile</h1>

        <p>slug:  {JSON.stringify(slug)}</p>
        
        
        
        
        </>)
    }

    export default Slug