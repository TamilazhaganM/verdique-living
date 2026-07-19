import { Leaf, Sprout, TreePine } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "Eco Friendly",
    description: "Sustainable solutions that respect nature.",
  },
  {
    icon: Sprout,
    title: "Premium Plants",
    description: "Healthy plants selected with care.",
  },
  {
    icon: TreePine,
    title: "Creative Designs",
    description: "Unique landscapes for every space.",
  },
];

const AboutStory = () => {
  return (
    <section className="py-16 sm:py-20 bg-[#FAF8F2]">

      <div className="
        max-w-7xl 
        mx-auto 
        px-5 
        sm:px-8 
        grid 
        lg:grid-cols-2 
        gap-10 
        lg:gap-16 
        items-center
      ">


        {/* Image Section */}
        <div className="relative group">

          <img
            src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=900&q=80"
            alt="Verdique garden"
            className="
              w-full
              h-[350px]
              sm:h-[450px]
              object-cover
              rounded-3xl
              shadow-xl
              transition
              duration-500
              group-hover:scale-105
            "
          />


          {/* Experience Badge */}
          <div
            className="
              absolute
              bottom-5
              right-5
              bg-[#4A7C59]
              text-white
              px-5
              py-4
              rounded-2xl
              shadow-lg
            "
          >
            <h3 className="text-3xl font-bold">
              10+
            </h3>

            <p className="text-sm">
              Years Experience
            </p>

          </div>

        </div>



        {/* Content Section */}
        <div>

          <p className="
            text-[#4A7C59]
            font-semibold
            tracking-widest
            uppercase
          ">
            Our Story
          </p>


          <h2 className="
            mt-4
            text-3xl
            sm:text-4xl
            lg:text-5xl
            font-bold
            text-[#0D1F0F]
            leading-tight
          ">
            Bringing Nature Into Modern Living
          </h2>


          <p className="
            mt-6
            text-gray-600
            leading-7
            sm:leading-8
          ">
            Verdique Living was created with a vision to bring
            beautiful green spaces closer to people. We combine
            creativity, quality plants, and sustainable practices
            to transform homes, offices, and outdoor areas into
            refreshing natural environments.
          </p>



          {/* Feature Cards */}
          <div className="
            mt-8
            grid
            sm:grid-cols-3
            gap-4
          ">

            {
              features.map((item,index)=>{

                const Icon = item.icon;

                return (

                  <div
                    key={index}
                    className="
                      bg-white
                      p-5
                      rounded-2xl
                      shadow-sm
                      hover:shadow-lg
                      transition
                    "
                  >

                    <Icon
                      className="text-[#4A7C59]"
                      size={32}
                    />

                    <h3 className="
                      mt-4
                      font-semibold
                      text-[#0D1F0F]
                    ">
                      {item.title}
                    </h3>


                    <p className="
                      mt-2
                      text-sm
                      text-gray-500
                    ">
                      {item.description}
                    </p>


                  </div>

                );

              })
            }

          </div>


        </div>


      </div>

    </section>
  );
};

export default AboutStory;