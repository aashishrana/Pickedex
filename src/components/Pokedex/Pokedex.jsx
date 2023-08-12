import Search from "../Search/Search";
import "./Pokedex.css"
function Pokedex() {

    return (
        <div className="pokedex-wrapper">
        {/* <h2>Sita Ram</h2> */}

        
        <h1 id="pokedex-heading">Pokedex</h1>


        <Search ></Search>
        {/* {Search} */}
        
        </div>
    )

}

export default Pokedex;