const SectionTitle = ({
  title,
  subtitle,
  center = false,
  className = "",
}) => {
  return (
    <div
      className={`
        ${center ? "text-center mx-auto" : ""}
        max-w-3xl
        mb-14
        ${className}
        mt-20
      `}
    >
      {/* Small Badge */}

      {/* Title */}

      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
        {title}
      </h2>

      {/* Subtitle */}

      {subtitle && (
        <p className="mt-5 text-gray-600 text-lg leading-8">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;