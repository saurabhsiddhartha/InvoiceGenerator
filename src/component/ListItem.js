import { Fragment } from "react"

const ListItem = ({ id, item, quantity, price }) => {
    return (
        <Fragment>
            <div className="mb-3 m grid grid-cols-4 mt-1 "> 
                <p>{item}</p>
                <p>Quantity:{quantity}</p>
                <p>Price :{price}</p>
                <button className="bg-red-500 w-20 rounded-sm text-white">Delete</button>
            </div> 

        </Fragment>
    )
}

export default ListItem