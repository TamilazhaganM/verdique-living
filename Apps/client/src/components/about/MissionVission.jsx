import { Target, Eye } from "lucide-react";

const MissionVision = () => {
  return (
    <section className="py-16 sm:py-20 bg-white">

      <div className="
        max-w-7xl 
        mx-auto 
        px-5 
        sm:px-8
      ">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">

          <p className="
            text-[#4A7C59]
            uppercase
            tracking-widest
            font-semibold
          ">
            Our Purpose
          </p>

          <h2 className="
            mt-4
            text-3xl
            sm:text-4xl
            lg:text-5xl
            font-bold
            text-[#0D1F0F]
          ">
            Growing With Nature,
            Creating Better Spaces
          </h2>

        </div>


        {/* Cards */}
        <div className="
          mt-12
          grid
          md:grid-cols-2
          gap-8
        ">


          {/* Mission */}
          <div className="
            bg-[#0D1F0F]
            rounded-3xl
            p-8
            sm:p-10
            text-white
            hover:-translate-y-2
            transition
            duration-300
          ">

            <div className="
              w-14
              h-14
              rounded-full
              bg-[#4A7C59]
              flex
              items-center
              justify-center
            ">
              <Target size={30}/>
            </div>


            <h3 className="
              mt-6
              text-3xl
              font-bold
            ">
              Our Mission
            </h3>


            <p className="
              mt-5
              text-gray-300
              leading-8
            ">
              To create sustainable and beautiful green spaces
              by providing quality plants, creative landscape
              solutions, and exceptional service that brings
              people closer to nature.
            </p>

          </div>



          {/* Vision */}
          <div className="
            bg-[#4A7C59]
            rounded-3xl
            p-8
            sm:p-10
            text-white
            hover:-translate-y-2
            transition
            duration-300
          ">


            <div className="
              w-14
              h-14
              rounded-full
              bg-white/20
              flex
              items-center
              justify-center
            ">
              <Eye size={30}/>
            </div>


            <h3 className="
              mt-6
              text-3xl
              font-bold
            ">
              Our Vision
            </h3>


            <p className="
              mt-5
              text-green-50
              leading-8
            ">
              To become a trusted destination for modern
              landscape solutions, inspiring greener lifestyles
              and healthier environments for everyone.
            </p>


          </div>


        </div>

      </div>

    </section>
  );
};

export default MissionVision;