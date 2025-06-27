import { use } from "react";
import { useNavigate } from "react-router";
import { FaUser, FaEnvelope, FaCamera } from "react-icons/fa";
import { toast } from "react-toastify";
import AuthContext from "../../context/AuthContext";
import SiteTitle from "../../components/SiteTitle";
import GoBack from "../../components/GoBack";

const EditProfile = () => {
  const { user, updateUserProfile } = use(AuthContext);
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;

    updateUserProfile(name, photoURL)
      .then(() => {
        toast.success("Profile updated successfully!");
        navigate("/dashboard");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-base-200 rounded-2xl shadow-xl" data-aos="fade-up">
      <SiteTitle>Edit Profile</SiteTitle>
      <GoBack />
      <h2 className="text-3xl font-bold text-center text-primary mb-6 flex items-center justify-center gap-2">
        <FaUser /> Edit Profile
      </h2>
      <form onSubmit={handleUpdate} className="space-y-4">
        <div className="flex items-center gap-2">
          <FaUser />
          <input
            type="text"
            name="name"
            defaultValue={user?.displayName}
            placeholder="Your Name"
            className="input input-bordered w-full"
            required
          />
        </div>
        <div className="flex items-center gap-2">
          <FaEnvelope />
          <input
            type="email"
            value={user?.email}
            readOnly
            className="input input-bordered w-full bg-base-300 cursor-not-allowed"
          />
        </div>
        <div className="flex items-center gap-2">
          <FaCamera />
          <input
            type="text"
            name="photoURL"
            defaultValue={user?.photoURL}
            placeholder="Profile Photo URL"
            className="input input-bordered w-full"
          />
        </div>
        <button type="submit" className="btn btn-primary w-full">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditProfile;
