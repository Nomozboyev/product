import { Content } from "./contents"
import { Notes } from "./notes"
import { Price } from "./price_table"
import { Product } from "./product"

export const Main =()=>
{
    return(<>
    <Product></Product>
    <Content/>
    <Price/>
    <Notes/>
    </>)
}