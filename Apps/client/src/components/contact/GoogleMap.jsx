const GoogleMap = () => {
  return (
    <section className="py-10 sm:py-14 lg:py-20">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-10 lg:mb-12">
          Visit Our Store
        </h2>

        <div className="rounded-2xl overflow-hidden shadow-lg">

          <iframe
            title="Verdique Location"
            src="https://www.google.com/maps?q=Chennai&output=embed"
            className="w-full h-[300px] sm:h-[400px] lg:h-[500px]"
            style={{ border: 0 }}
            loading="lazy"
          />

        </div>

      </div>

    </section>
  );
};

export default GoogleMap;