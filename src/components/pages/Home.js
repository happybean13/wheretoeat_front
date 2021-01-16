import React, { useState, useEffect } from "react";
import axios from "axios";

const Restaurant = (props) => {
    return (
        <tr>
            <td><a href={props.restaurant.link}>        
                {props.restaurant.name}</a></td>
            <td>{props.restaurant.category_name}</td>
            <td>{props.restaurant.rate}</td>
        </tr>
    );
};

const Home = () => {
    const [restaurantList, setRestuarantList] = useState([])
    useEffect( async () => {
        const res = await axios.get("/list")
        setRestuarantList(res.data.data)
    }, [])

    return(
        <table className="table">
            <thead className="thead-light">
                <tr>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Rate</th>
                </tr>
            </thead>
            <tbody>{
                restaurantList.map((r)=>{
                    return(
                        < Restaurant
                            restaurant={r}
                            key={r.id}
                        />
                    )
                })
            }</tbody>
         </table>
    )
}

export default Home;