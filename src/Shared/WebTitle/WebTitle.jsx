import { Helmet } from "react-helmet-async";

const WebTitle = ({title}) => {
    return (
        <div>
            <Helmet>
                <title>Mahbub_Portfolio || {title}</title>
            </Helmet>
        </div>
    );
};

export default WebTitle;