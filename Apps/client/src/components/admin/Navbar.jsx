const Navbar = () => {
  return (
    <header className="h-16 bg-white shadow-sm border-b flex items-center justify-between px-6">

      <h1 className="text-2xl font-semibold text-gray-800">
        Verdique Living Admin
      </h1>

      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-green-700 text-white flex items-center justify-center font-bold">
          T
        </div>

        <div>
          <p className="font-semibold">Tamilazhagan</p>
          <p className="text-sm text-gray-500">Administrator</p>
        </div>
      </div>

    </header>
  );
};

export default Navbar;