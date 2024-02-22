
const PageHeading = ({title}) => {
    return (
        <div className="rout-heading">
        <h1 className=' text-4xl uppercase font-bold'>
       { title}
        </h1>
        <div className="progress-line">
            <span></span>
        </div>
    </div>
    );
};

export default PageHeading;