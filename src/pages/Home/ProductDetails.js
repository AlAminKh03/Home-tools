import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";
import UseProductdetail from "../../Hooks/UseProductdetail";
import Loading from "../Shared/Loading";

const ProductDetails = () => {
  const { productId } = useParams();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [user, loading, error] = useAuthState(auth);
  const [product, setProduct] = UseProductdetail(productId);

  if (loading) {
    return <Loading></Loading>;
  }
  const onSubmit = (data) => {
    const quantity = parseInt(data.quantity);

    const orders = {
      name: user.displayName,
      email: user.email,
      quantity: quantity,
      number: data.phoneNumber,
      location: data.location,
      totalPrice: quantity * product.price,
    };

    fetch("https://home-tools-server.onrender.com/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(orders),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("booked, please go to dashboard to purchase");
        // alert('booked')
      });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 mb-10 mt-16 lg:mt-28">
      <div className="items-center ">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img className="w-56" src={product.img} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{product.name}</h2>
            <p>{product.description}</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Price:${product.price}</div>
              <div className="badge badge-outline">
                Available:{product.available}
              </div>
            </div>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="name"
            value={user.displayName}
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="name"
            value={user.email}
            className="input input-bordered w-full max-w-xs"
          />

          {/* product quantity  */}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Product Quantity</span>
          </label>
          <input
            type="number"
            className="input input-bordered w-full max-w-xs"
            defaultValue={product.minimumOrder}
            {...register(
              "quantity",

              {
                required: {
                  value: true,
                },
                min: {
                  value: `${product.minimumOrder}`,
                },
                max: {
                  value: `${product.available}`,
                },
              }
            )}
          />
        </div>
        {errors.quantity?.type === "min" && (
          <strong className="text-red-500 font-bold">
            inter minimum Amount
          </strong>
        )}
        {errors.quantity?.type === "max" && (
          <strong className="text-red-500 font-bold">
            reduce your quantity
          </strong>
        )}

        {/* phone number  */}

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Phone Number</span>
          </label>
          <input
            type="tel"
            className="input input-bordered w-full max-w-xs"
            {...register("phoneNumber", { required: true })}
          />
        </div>

        {/* location  */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Location</span>
          </label>
          <input
            type="text"
            className="input input-bordered w-full max-w-xs"
            {...register("location", { required: true })}
          />
        </div>

        <div className="form-control w-full max-w-xs mt-5">
          {" "}
          <input className="btn w-50 max-w-xs" type="submit" value="Purchase" />
        </div>
      </form>
    </div>
  );
};

export default ProductDetails;
