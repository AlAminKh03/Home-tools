import React from 'react';

const AddProduct = () => {

    const handleForm = (e) => {
        e.preventDefault()
        const product = {
            name: e.target.name.value,
            price: e.target.price.value,
            minmumOrder: e.target.minimumOrder.value,
            description: e.target.description.value,
            img: e.target.img.value
        }
        console.log(product)
    }
    return (

        <div>
            <form onSubmit={handleForm}>
                <div>
                    <label htmlFor="">Name:</label>
                    <input name="name" type="text" />
                </div>
                <div>
                    <label htmlFor="">price:</label>
                    <input name="price" type="number" />
                </div>
                <div>
                    <label htmlFor="">minimum order:</label>
                    <input name="minimumOrder" type="number" />
                </div>
                <div>
                    <label htmlFor="">Available Quantity:</label>
                    <input name="quantity" type="number" />
                </div>
                <div>
                    <label htmlFor="">img:</label>
                    <input name='img' type="text" />
                </div>


                <div>
                    <label htmlFor="">Description:</label>
                    <input name="description" type="text" />
                </div>
                <input type="submit" value='Add product' />
            </form>
        </div>
    );
};

export default AddProduct;