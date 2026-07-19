import { Menu, Bell } from "lucide-react";

const Navbar = ({ setSidebarOpen }) => {
  return (
    <header
      className="
        sticky
        top-0
        z-30
        h-16
        bg-white/95
        backdrop-blur
        border-b
        shadow-sm
        flex
        items-center
        justify-between
        px-4
        sm:px-6
      "
    >
      {/* Left */}

      <div className="flex items-center gap-3">

        <button
          onClick={() => setSidebarOpen(true)}
          className="
            lg:hidden
            p-2
            rounded-lg
            hover:bg-gray-100
            transition
          "
        >
          <Menu size={24} />
        </button>

        <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800">
          Verdique Living Admin
        </h1>

      </div>

      {/* Right */}

      <div className="flex items-center gap-3 sm:gap-5">

        {/* Notification (Future Ready) */}

        <button
          className="
            relative
            p-2
            rounded-lg
            hover:bg-gray-100
            transition
          "
        >
          <Bell size={21} />

          {/* Uncomment when notifications are available */}

          {/*
          <span className="
            absolute
            top-1
            right-1
            w-2
            h-2
            bg-red-500
            rounded-full
          " />
          */}
        </button>

        {/* Avatar */}

        <div
          className="
            w-10
            h-10
            rounded-full
            bg-green-700
            text-white
            flex
            items-center
            justify-center
            font-bold
            shadow-sm
          "
        >
          T
        </div>

        {/* User Info */}

        <div className="hidden sm:block">

          <p className="font-semibold text-gray-800">
            Tamilazhagan
          </p>

          <p className="text-xs text-gray-500">
            Administrator
          </p>

        </div>

      </div>

    </header>
  );
};

export default Navbar;