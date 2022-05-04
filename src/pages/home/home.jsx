import Navbar from "../../components/navbar/navbar";
import Sidebar from "../../components/sidebar/sidebar";
import "./home.scss"

const Home = () => {
    return ( 
        <div className="home">
            <Sidebar/>
            <div className="homeContainer">
                <Navbar/>
            </div>
        </div>
     );
}
 
export default Home;