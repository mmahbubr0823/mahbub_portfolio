import {  Card, CardBody, CardFooter, CardHeader, Typography } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import PageHeading from '../../Shared/PageHeading/PageHeading';
import WebTitle from '../../Shared/WebTitle/WebTitle';
const Projects = () => {
    return (
        <div className='mt-12'>
            <WebTitle title={'Projects'}></WebTitle>
            <PageHeading title={'  What have I built?'}></PageHeading>
            <div className='mt-10'>
                <h1 className='text-2xl mb-6'>My Latest Projects :</h1>
                <div className='flex gap-5'>
                    <Card className="max-w-[280px] flex flex-col overflow-hidden border-[1px] border-opacity-5 rounded-md">
                        <CardHeader
                            floated={false}
                            shadow={false}
                            color="transparent"
                            className="m-0 rounded-none"
                        >
                            <img
                                src="./img-1.jpg"
                            />
                        </CardHeader>
                        <CardBody className='px-3 py-4 flex-grow'>
                            <Typography variant="h4" color="blue-gray">
                               Weedy Hub
                            </Typography>
                            <Typography variant="lead" color="gray" className="mt-3 text-base font-normal">
                            Embrace Love's Journey: Your Perfect Match Awaits invites users to embark on the exciting adventure of finding their...
                            </Typography>
                        </CardBody>
                        <CardFooter className='mx-auto'>
                            <Link to="/weedyHub">
                            <button className='bg-[#3c393c] font-bold bg-opacity-80 border-[1px] border-[#20c997] rounded-xl px-6 py-3 hover:cursor-pointer hover:bg-[#20c997] hover:text-black my-5'>Details</button>
                            </Link>
                        </CardFooter>
                    </Card>
                    <Card className="max-w-[280px] flex flex-col overflow-hidden border-[1px] border-opacity-5 rounded-md">
                        <CardHeader
                            floated={false}
                            shadow={false}
                            color="transparent"
                            className="m-0 rounded-none"
                        >
                            <img
                                src="./img-2.jpg"
                                alt="ui/ux review check"
                            />
                        </CardHeader>
                        <CardBody className='px-3 py-4 flex-grow'>
                            <Typography variant="h4" color="blue-gray">
                                Feed The Hunger
                            </Typography>
                            <Typography variant="lead" color="gray" className="mt-3 text-base font-normal">
                            By redirecting surplus food that would otherwise go to waste, the website aims to contribute to...
                            </Typography>
                        </CardBody>
                        <CardFooter className='mx-auto'>
                            <Link to="/feedTheHunger">
                            <button className='bg-[#3c393c] font-bold bg-opacity-80 border-[1px] border-[#20c997] rounded-xl px-6 py-3 hover:cursor-pointer hover:bg-[#20c997] hover:text-black my-5'>Details</button>
                            </Link>
                        </CardFooter>
                    </Card>
                    <Card className="max-w-[280px] flex flex-col overflow-hidden border-[1px] border-opacity-5 rounded-md">
                        <CardHeader
                            floated={false}
                            shadow={false}
                            color="transparent"
                            className="m-0 rounded-none"
                        >
                            <img
                                src="./img-3.jpg"
                                alt="ui/ux review check"
                            />
                        </CardHeader>
                        <CardBody className='px-3 py-4 flex-grow'>
                            <Typography variant="h4" color="blue-gray">
                                Foody World
                            </Typography>
                            <Typography variant="lead" color="gray" className="mt-3 text-base font-normal">
                            Maintain high standards of food quality, freshness, and presentation throughout the delivery process...
                            </Typography>
                        </CardBody>
                        <CardFooter className='mx-auto'>
                            <Link to="/foodyWorld">
                            <button className='bg-[#3c393c] font-bold bg-opacity-80 border-[1px] border-[#20c997] rounded-xl px-6 py-3 hover:cursor-pointer hover:bg-[#20c997] hover:text-black my-5'>Details</button>
                            </Link>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Projects;