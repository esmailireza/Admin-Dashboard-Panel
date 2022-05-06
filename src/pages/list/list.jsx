import DataTable from "../../components/dataTable/dataTable";
import Navbar from "../../components/navbar/navbar";
import Sidebar from "../../components/sidebar/sidebar";
import "./list.scss"
const List = () => {
    return ( 
      
            <div className="list">
            <Sidebar/>
            <div className="listContainer">
                <Navbar/>
                <DataTable/>
            </div>
            </div>
     );
}
 
export default List;