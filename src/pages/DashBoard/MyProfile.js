import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import auth from "../../firebase.init";

const MyProfile = () => {
  const [user] = useAuthState(auth);
  const handleForm = (e) => {
    e.preventDefault();
    const phone = e.target.phone.value;
    const facebook = e.target.facebook.value;
    const github = e.target.github.value;

    const profileInfo = {
      name: user.displayName,
      email: user.email,
      phone: phone,
      github: github,
      facebook: facebook,
    };

    const email = user?.email;
    if (email) {
      fetch(`/${email}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(profileInfo),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result) {
            toast.success("Update Successfully");
          }
        });
    }
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl mt-20">
      <form onSubmit={handleForm}>
        <div className="card-body items-center text-center">
          <div className="avatar">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={user.photoURL} alt="" />
            </div>
          </div>
          <h2 className="card-title">{user.displayName}</h2>
          <p>{user.email}</p>

          <button className="btn btn-primary">update</button>
        </div>
      </form>
    </div>
  );
};

export default MyProfile;
