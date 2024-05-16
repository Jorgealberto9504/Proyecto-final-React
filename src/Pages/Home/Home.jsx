import {ItemListContainer} from "../../components/ItemListContainer/ItemListContainer"
import { Layout } from "../../components/Layout/Layout"


export const Home = () => {
    const itemListContainerProps = {
        greeting:"Welcome to villara shop!",
        bgBlue: true
    
      }

  return (
    <div>
        <Layout>
              <ItemListContainer {...itemListContainerProps} />
        </Layout>

    </div>
  )
}
