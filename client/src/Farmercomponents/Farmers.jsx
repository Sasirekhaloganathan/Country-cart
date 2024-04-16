import React , {Fragment} from "react";
import '../FarmerStyle/Farmers.css';
import Navigation from "../Buyercomponents/Navigation";
const Farmers = () => {
    return(
        <>
        <div className="icon"><img src="Country_Cart_Logo.png" /></div>
        <div className="fcont1">
            <h2 className="title" ><b>POST</b></h2>
            <form action="/action_page.php">
   <p className="attribute">Choose category : </p>
   <select name="cat" id="cat" className="ip">
    <option value="Vegetables">Vegetables</option>
    <option value="Fruits">Fruits</option>
    <option value="Greens">Greens</option>
    <option value="Nuts">Nuts</option>
  </select>
  <br></br>
  <p className="attribute1">Product Details</p>
  <p className="attribute">Product Name : </p><input type="text" className="ip" placeholder="Enter your Product Name" id="name" required></input>
  <p className="attribute">Description : </p><textarea rows="5" cols="70" className="ip" placeholder="Enter the Description"></textarea>
  <p className="attribute">Price :</p><input type="text" className="ip" placeholder ="Enter the Price " id="pr" required></input>
  <p className="attribute">Quantity :</p><input type="text" className="ip" placeholder ="Enter the Quantity " id="qty" required></input>
  <p className="attribute">Upload Photos : </p><input type="file" className="ip" id="imgip" accept="image/*" required></input>
  <p className="attribute">Location : </p><input type="text" className="ip" id="loc"></input><br></br>
  <p className="attribute"></p><button className="ip" type="submit">Post</button>
</form>
        </div>
        </>
    );
}
export default Farmers;
