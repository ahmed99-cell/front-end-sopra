import {Reset} from 'styled-reset'
import Acceuil from "./Acceuil";
import NewNavbar from "./homeComponents/NewNavbar";






function Home (){
    return(
        <div>
            <Reset />
            <NewNavbar />
            <Acceuil />
        </div>
    )
}

export default Home;