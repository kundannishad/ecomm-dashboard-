import Header from "./Header"
import { useNavigate } from "react-router-dom";
import { useState } from "react"

function AddProduct() {
let navigate = useNavigate();
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [price, setPrice] = useState();
    const [image, setImage] = useState();
    const [message,setMessage] = useState();

async function addProduct() {
    console.warn(title,description,price,image)

    const formData = new FormData();
    formData.append("title",title)
    formData.append("description",description)
    formData.append("price",price)
    formData.append("image",image)
    
    let result =await fetch("http://127.0.0.1:8000/api/product",{
        method:"POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "multipart/form-data"
          },
          body: JSON.stringify({
            title:title,
            description:description,
            price:price,
            //image:image.name,
          }),
    });

    let resJson = await result.json();
        console.warn("result", resJson)
    if (resJson.success === true) {
        setTitle("");
        setDescription("");
        setPrice("");
        setImage("");
        setMessage("Product created successfully!");
        navigate('/add');
        } else {
        setMessage("Something went wrong");
        }

}




    return (
        <><Header></Header>
            <div className="row offset-sm-1">
                <h1>
                    <legend>PRODUCTS</legend>
                </h1>

                <div className="form-group">
                    <label className="col-md-4 control-label"></label>
                    <div className="col-md-4">
                        <input id="title"
                            name="title"
                            placeholder="PRODUCT Title"
                            className="form-control input-md"
                            onChange={(e)=>{setTitle(e.target.value)}}
                            type="text" />
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-md-4 control-label"></label>
                    <div className="col-md-4">
                        <input id="description"
                            name="description"
                            placeholder="Product Description"
                            className="form-control input-md"
                            onChange={(e)=>{setDescription(e.target.value)}}
                            type="text" />
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-md-4 control-label"></label>
                    <div className="col-md-4">
                        <input id="price"
                            name="price"
                            placeholder="Product Price"
                            className="form-control input-md"
                            onChange={(e)=>{setPrice(e.target.value)}}
                            type="text" />
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-md-4 control-label"></label>
                    <div className="col-md-4">
                        <input id="image"
                            name="image"
                            placeholder="PRODUCT ID"
                            className="form-control input-md"
                            onChange={(e)=>{setImage(e.target.files[0])}}
                            type="file" />
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-md-4 control-label"></label>
                    <div className="col-md-4">
                        <button id="singlebutton" 
                        name="singlebutton"
                         className="btn btn-primary"
                         onClick={addProduct}>Button</button>
                    </div>
                </div>

                <div className="message">{message ? <p>{message}</p> : null}</div>
            </div>
        </>
    )
}

export default AddProduct