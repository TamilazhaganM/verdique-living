const StatusDropdown = ({
  value,
  onChange,
}) => {
  return (
    <select
      value={value}
      onChange={(e) =>
        onChange(e.target.value)
      }
      className="
        border
        rounded-lg
        px-3
        py-2
        text-sm
        focus:outline-none
        focus:ring-2
        focus:ring-green-600
      "
    >
      <option value="New">
        New
      </option>

      <option value="Read">
        Read
      </option>

      <option value="Resolved">
        Resolved
      </option>

    </select>
  );
};

export default StatusDropdown;