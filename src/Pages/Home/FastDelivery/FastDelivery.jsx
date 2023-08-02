import man from "../../../assets/images/man.png";

const FastDelivery= () => {
  return (
    <div className="tolly-anchor font-pppins  flex flex-col items-center mt-4 mb-4">
      <div className="md:flex  max-w-screen-xl mx-auto  items-center">
        <div className="mx-4 md:mx-16">
          <h1 className="uppercase text-3xl font-pppins font-semibold mb-5">
            Get the{" "}
            <span className="text-[#1E8FD0] font-pppins font-bold">
              fastest
            </span>{" "}
            parcel delivery
          </h1>
          <p
          data-aos="zoom-in-up"
          data-aos-duration="1000"
          data-aos-anchor=".tolly-anchor"
          className="text-xl text-justify text-gray-500">
            In today's fast-paced world, efficiency and speed are paramount when it comes to parcel delivery. With our cutting-edge logistics solutions and dedicated team, we guarantee the fastest parcel delivery service available. Say goodbye to long waiting times and delays, as we prioritize swift transit and timely dispatch.
          </p>
        </div>
        <img
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-anchor=".tolly-anchor"
          data-aos-duration="1000"
          data-aos-delay="800"
          className="h-[500px]"
          src={man}
          alt="flynass"
        />
      </div>
    </div>
  );
};

export default FastDelivery;