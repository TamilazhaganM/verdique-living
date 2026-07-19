const stats = [
  {
    number: "250+",
    title: "Projects Completed",
  },
  {
    number: "10+",
    title: "Years Experience",
  },
  {
    number: "500+",
    title: "Happy Customers",
  },
  {
    number: "1000+",
    title: "Plants Delivered",
  },
];


const AboutStats = () => {
  return (
    <section className="py-16 sm:py-20 bg-[#F5F2EC]">

      <div className="
        max-w-7xl
        mx-auto
        px-5
        sm:px-8
      ">


        <div className="
          grid
          grid-cols-2
          lg:grid-cols-4
          gap-6
        ">

          {
            stats.map((item,index)=>(

              <div
                key={index}
                className="
                  bg-white
                  rounded-3xl
                  p-6
                  sm:p-8
                  text-center
                  shadow-sm
                  hover:shadow-xl
                  hover:-translate-y-2
                  transition
                  duration-300
                "
              >

                <h2 className="
                  text-4xl
                  sm:text-5xl
                  font-bold
                  text-[#4A7C59]
                ">
                  {item.number}
                </h2>


                <p className="
                  mt-3
                  text-gray-600
                  font-medium
                ">
                  {item.title}
                </p>


              </div>

            ))
          }


        </div>


      </div>

    </section>
  );
};

export default AboutStats;