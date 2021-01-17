import React, { useState, useEffect } from "react";
import axios from "axios";

const Category = (props) => {
    return(
        <option>{props.id}. {props.category}</option>
    )
}

const AddRestaurant = () => {

    const [categoryList, setCategoryList] = useState([])
    const [restaurant, setRestaurant] = useState({name : "", link : "", category : 1, rate : 0})

    useEffect( async () => {
        const res = await axios.get("/add/category")
        setCategoryList(res.data.data)
    }, [])

    const onChange = (e) => {
        const newRestaurant = {...restaurant}
        newRestaurant[e.target.name] = e.target.value
        setRestaurant(newRestaurant)    
    }

    const onChangeCategory = (e) => {
        const newRestaurant = {...restaurant}
        const categoryName = e.target.value
        var array = categoryName.split(".")
        newRestaurant.link = array[0]
        console.log(array[0])
        setRestaurant(newRestaurant)    
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        const _restaurant = {...restaurant}
        console.log(_restaurant)
        const res = await axios.post("/add/submit",_restaurant)
    }
    
    return (
        <div className="container">
            <h1>Add Restaurant</h1>
            <form onSubmit={onSubmit}>
                <div id="form-group">
                    <label>Name</label>
                    <input
                        className="form-control"
                        name="name"
                        type="text"
                        value={restaurant.name}
                        onChange={onChange}
                    />
                </div>
                <div id="form-group">
                    <label>Link:</label>
                    <textarea
                        className="form-control"
                        name="link"
                        value={restaurant.link}
                        onChange={onChange}
                    ></textarea>
                </div>
                <div id="form-group">
                    <label>Category:</label>
                    <select
                        className="form-control"
                        name="category"
                        value={restaurant.category}
                        onChange={onChangeCategory}
                    >
                    {
                        categoryList.map((r)=>{
                            return(
                                <Category
                                    id = {r.category_id}
                                    category = {r.category_name}
                                />
                            )
                        })
                    }
                    </select>
                </div>
                <div id="form-group">
                    <label>Rate:</label>
                    <select
                        className="form-control"
                        name="rate"
                        value={restaurant.rate}
                        onChange={onChange}
                    >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
                <br />
                <input
                    className="btn btn-primary"
                    type="submit"
                    value="Submit"
                />
            </form>
        </div>
    )
    
}

export default AddRestaurant;
