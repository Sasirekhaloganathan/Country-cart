import React , {Fragment} from "react";
import '../FarmerStyle/Farmers.css';
import Navigation from "../Buyercomponents/Navigation";
const Farmers = () => {
    return(
        <>
        <div className="fcont1">
            <h2 className="title" ><b>POST</b></h2>
            <form action="/action_page.php">
  <label for="cat">Choose category : </label>
  <select name="cat" id="cat">
    <option value="Vegetables">Vegetables</option>
    <option value="Fruits">Fruits</option>
    <option value="Greens">Greens</option>
    <option value="Nuts">Nuts</option>
  </select>
  <br></br>
  <p>Details</p>
</form>
        </div>
        </>
    );
}
export default Farmers;
