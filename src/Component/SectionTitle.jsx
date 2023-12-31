import './SectionTitile.css'

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="mx-auto">
            <p className="text-design text-5xl text-[#1E8FD0] mb-2 font-bold">{subHeading}</p>
            <h3 className="text-4xl uppercase py-4 font-bold">{heading}</h3>
        </div>
    );
};

export default SectionTitle;