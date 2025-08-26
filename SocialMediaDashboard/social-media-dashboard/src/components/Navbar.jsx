import { ThemeContext } from "../context/ThemeContext";

export default function Navbar() {
    const { user, logout } = useAuth();
    const { theme } = useContext(ThemeContext);

    return (
        <nav className="bg-blue-500 p-4 text-white flex justify-between">
      <div>
        <Link to="/feed" className="mr-4">Feed</Link>
        <Link to="/profile" className="mr-4">Profile</Link>
        <Link to="/settings">Settings</Link>
      </div>
      <div>
        {user ? (
          <button onClick={logout}>Logout</button>
        ) : (
          <Link to="/login">Login</Link>
        )}
        <span className="ml-4">Theme: {theme}</span>
      </div>
    </nav>
    ) 
}