import { useContext, useState } from "react";
import { UserContext } from "../UserContext";
import { Navigate, Link, useParams } from "react-router-dom";
import axios from "axios";
import PlacesPage from "./PlacesPage";
import AccountNav from "../AccountNav";

export default function AccountPage() {
  // State variables
  const [redirect, setRedirect] = useState(null); // State variable for redirecting
  const { ready, user, setUser } = useContext(UserContext); // Context for user data

  // Get subpage parameter from URL
  let { subpage } = useParams();
  if (subpage === undefined) {
    subpage = "profile"; // Default to "profile" if subpage parameter is not provided
  }

  // Logout function
  async function logout() {
    // Send logout request to server
    await axios.post("/logout");
    // Redirect to home page after logout
    setRedirect("/");
    // Clear user data from context
    setUser(null);
  }

  // Loading state
  if (!ready) {
    return "Loading..."; // Show loading message if user data is not yet available
  }

  // Redirect to login page if user is not logged in
  if (ready && !user && !redirect) {
    return <Navigate to={"/login"} />; // Navigate to login page
  }

  // Redirect to specified page if needed
  if (redirect) {
    return <Navigate to={redirect} />; // Navigate to the specified URL
  }

  return (
    <div>
      {/* Account navigation menu */}
      <AccountNav />

      {/* Profile page */}
      {subpage === "profile" && (
        <div className="text-center max-w-lg mx-auto ">
          {/* Display user information */}
          Logged in as {user.name}({user.email})<br />
          {/* Logout button */}
          <button onClick={logout} className="primary max-w-sm mt-3 mb-5">
            Logout
          </button>
        </div>
      )}

      {/* Places page */}
      {subpage === "places" && <PlacesPage />}
    </div>
  );
}
