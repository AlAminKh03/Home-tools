import React, { useState } from "react";
import toast from "react-hot-toast";
import useProducts from "../../Hooks/useProducts";

const ManageProduct = () => {
  const [products, setProducts] = useProducts();
  const handleDeleteButton = (id) => {
    const proceed = window.confirm("Are you sure want to delete??");
    if (proceed) {
      const url = `https://home-tools-server-qeek.vercel.app/products/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remaining = products.filter((product) => product._id !== id);
            setProducts(remaining);
            toast.success("Successfully deleted item");
          }
        });
    }
  };
  return (
    <div className="overflow-x-auto mt-20">
      <table className="table w-full">
        <thead>
          <tr>
            <th>no</th>
            <th>Name</th>
            <th>Price</th>
            <th>Ordered(piece)</th>
            <th>Transaction ID</th>
            <th>Pay</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((product, index) => (
            <tr key={product._id}>
              <th>{index + 1}</th>
              <td>{product.name}</td>
              <td>{product.quantity}</td>
              <button
                onClick={() => handleDeleteButton(product._id)}
                className="btn btn-xs btn-error"
              >
                DELETE
              </button>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageProduct;
