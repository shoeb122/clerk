import { UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Left Side - "My App" */}
        <div className="text-2xl font-bold">My App</div>

        {/* Right Side - Links */}
        <div className="flex space-x-6">
          <a href="#" className="hover:text-gray-400">
            Home
          </a>
          <a href="#" className="hover:text-gray-400">
            About
          </a>
          <a href="#" className="hover:text-gray-400">
            Contact
          </a>
          <UserButton></UserButton>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
