import React from "react";

const Faq = () => {
    return (
        <div className="example2-anchor bgc px-5 md:px-16 py-8 my-8">
            <div
                className="my-16 max-w-screen-xl mx-auto">
                <div
                    data-aos="fade-left"
                    data-aos-anchor=".example2-anchor"
                    data-aos-duration="1500"
                    data-aos-delay="100"
                >
                    <h1 className="text-indigo-900 font-pppins my-4 text-xl md:text-4xl font-bold">
                        Common Frequently Asked Questions
                    </h1>
                </div>
                <div
                    data-aos="fade-right"
                    data-aos-anchor=".example2-anchor"
                    data-aos-duration="1500"
                    data-aos-delay="100"
                    className="collapse rounded-none collapse-plus py-2 bg-[#E8F6FC] mt-8 text-black">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                        Q: What is Flynass?/Why Flynass?
                    </div>
                    <div className="collapse-content">
                        <p>
                            FlyNass is a one-stop logistics solutions provider company. We offer doorstep delivery services all around Bangladesh at the union level, along with warehousing and fulfilment facilities. Having started our operation back in February 2016, we now have the widest cash-on-delivery coverage through FlyNass’s own points-of-presence in all 64 districts. Our whole operation is backed by state-of-the-art technology, which we have developed from the scratch. We scan and track package movement at 25 steps and have a ‘near-to’ paperless supply chain. We are the first company in the country to have 100% of the field force using apps and updating status in real-time. We are constantly trying out new steps to solve core issues in logistics. All our effort is for only one thing – to develop the infra that enables the pathway for a successful e-commerce drive. With a very strong and proven pan-country infrastructure, we now offer the same standard of services to all small/medium online merchants. To know more about us and our services, just visit our website or drop us a message.
                        </p>
                    </div>
                </div>
                <div
                    data-aos="fade-left"
                    data-aos-anchor=".example2-anchor"
                    data-aos-duration="1500"
                    data-aos-delay="100"
                    className="collapse rounded-none collapse-plus py-2 bg-[#E8F6FC] mt-3 text-black">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                        Q: What are the current delivery coverage areas of Paperfly?
                    </div>
                    <div className="collapse-content">
                        <p>
                            Paperfly provides home delivery service in 64 districts and 491 Upazilas all over Bangladesh with its own set-up and owns field force.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Faq;