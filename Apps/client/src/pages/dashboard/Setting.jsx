const Settings = () => {
  return (
    <div className="p-6">

      <h1 className="text-3xl font-bold mb-6">
        Settings
      </h1>

      <div className="bg-white rounded-xl shadow border p-6">

        <div className="mb-6">

          <label className="block mb-2 font-medium">
            Admin Name
          </label>

          <input
            className="border rounded-lg w-full p-3"
            placeholder="Tamilazhagan"
          />

        </div>

        <div className="mb-6">

          <label className="block mb-2 font-medium">
            Email
          </label>

          <input
            className="border rounded-lg w-full p-3"
            placeholder="admin@gmail.com"
          />

        </div>

        <button className="bg-green-700 text-white px-5 py-2 rounded-lg">

          Save Changes

        </button>

      </div>

    </div>
  );
};

export default Settings;