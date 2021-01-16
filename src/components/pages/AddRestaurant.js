import React, { useState, useEffect } from "react";
import axios from "axios";

const Category = (props) => {
    return(
        <option>{props.category.category_name}</option>
    )
}

const AddRestaurant = () => {

    const [categoryList, setCategoryList] = useState([])
    const [restaurant, setRestaurant] = useState({name : "", link : "", category : "", rate : 0})

    useEffect( async () => {
        const res = await axios.get("/add/category")
        setCategoryList(res.data.data)
    }, [])
    useEffect(()=>{
        console.log(restaurant.name)
    })
    const onChangeName = (e) => {
        setRestaurant({
            name: e.target.value
        })
    }
    const onChangeLink = (e) => {
        setRestaurant({
            link : e.target.value
        })
    }
    const onChangeCategory = (e) => {
        setRestaurant({
            category : e.target.value
        })
    }
    const onChangeRate = (e) => {
        setRestaurant({
            rate : e.target.value
        })
    }
    const onSubmit = async (e) => {
        e.preventDefault();
        console.log(restaurant)
        const _restaurant = restaurant
        const res = await axios.post("/add/submit",_restaurant)
    }

    // async onSubmit = (e) => {
    //     e.preventDefault();
    //     const article = {
    //         title: this.state.title,
    //         body: this.state.body,
    //     };
    //     try {
    //         const res = await axios.post("/api/articles/add", article, {
    //             headers: { "x-auth-token": token },
    //         });
    //         if (res) {
    //             this.props.history.push("/");
    //         } else {
    //             alert(
    //                 "Not a valid user! Please sign up to create an article!"
    //             );
    //             window.location = "/";
    //         }
    //     } catch (err) {
    //         alert("Not a valid token! Please sign in to create an article");
    //         window.location = "/";
    //     }
        
    // }
    
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
                        onChange={onChangeName}
                    />
                </div>
                <div id="form-group">
                    <label>Link:</label>
                    <textarea
                        className="form-control"
                        name="link"
                        value={restaurant.link}
                        onChange={onChangeLink}
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
                                    category = {r}
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
                        onChange={onChangeRate}
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
