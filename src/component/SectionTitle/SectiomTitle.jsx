
const SectiomTitle = ({heading, subHeading}) => {
    return (
        <div className=" py-24 text-center">
        <h1 className="text-5xl ">{heading}</h1>
        <p className="py-10">
        {subHeading}
        </p>
            
        </div>
    );
};

export default SectiomTitle;