import {  Card, CardBody, CardFooter, CardHeader, Typography } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import PageHeading from '../../Shared/PageHeading/PageHeading';
import WebTitle from '../../Shared/WebTitle/WebTitle';
const Projects = () => {
    return (
        <div className='mt-12'>
            <WebTitle title={'Projects'}></WebTitle>
            <PageHeading title={'  What have I build?'}></PageHeading>
            <div className='mt-10'>
                <h1 className='text-2xl mb-6'>My Latest Projects :</h1>
                <div className='flex gap-5'>
                    <Card className="max-w-[280px] overflow-hidden border-[1px] border-opacity-5 rounded-md">
                        <CardHeader
                            floated={false}
                            shadow={false}
                            color="transparent"
                            className="m-0 rounded-none"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                                alt="ui/ux review check"
                            />
                        </CardHeader>
                        <CardBody className='px-3 py-4'>
                            <Typography variant="h4" color="blue-gray">
                                UI/UX Review Check
                            </Typography>
                            <Typography variant="lead" color="gray" className="mt-3 text-base font-normal">
                                Because it&apos;s about motivating the doers. Because I&apos;m here to
                                follow my dreams and inspire others.
                            </Typography>
                        </CardBody>
                        <CardFooter className='mx-auto'>
                            <Link to="/">
                            <button className='bg-[#3c393c] font-bold bg-opacity-80 border-[1px] border-[#20c997] rounded-xl px-6 py-3 hover:cursor-pointer hover:bg-[#20c997] hover:text-black my-5'>Details</button>
                            </Link>
                        </CardFooter>
                    </Card>
                    <Card className="max-w-[280px] overflow-hidden border-[1px] border-opacity-5 rounded-md">
                        <CardHeader
                            floated={false}
                            shadow={false}
                            color="transparent"
                            className="m-0 rounded-none"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                                alt="ui/ux review check"
                            />
                        </CardHeader>
                        <CardBody className='px-3 py-4'>
                            <Typography variant="h4" color="blue-gray">
                                UI/UX Review Check
                            </Typography>
                            <Typography variant="lead" color="gray" className="mt-3 text-base font-normal">
                                Because it&apos;s about motivating the doers. Because I&apos;m here to
                                follow my dreams and inspire others.
                            </Typography>
                        </CardBody>
                        <CardFooter className='mx-auto'>
                            <Link to="/">
                            <button className='bg-[#3c393c] font-bold bg-opacity-80 border-[1px] border-[#20c997] rounded-xl px-6 py-3 hover:cursor-pointer hover:bg-[#20c997] hover:text-black my-5'>Details</button>
                            </Link>
                        </CardFooter>
                    </Card>
                    <Card className="max-w-[280px] overflow-hidden border-[1px] border-opacity-5 rounded-md">
                        <CardHeader
                            floated={false}
                            shadow={false}
                            color="transparent"
                            className="m-0 rounded-none"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                                alt="ui/ux review check"
                            />
                        </CardHeader>
                        <CardBody className='px-3 py-4'>
                            <Typography variant="h4" color="blue-gray">
                                UI/UX Review Check
                            </Typography>
                            <Typography variant="lead" color="gray" className="mt-3 text-base font-normal">
                                Because it&apos;s about motivating the doers. Because I&apos;m here to
                                follow my dreams and inspire others.
                            </Typography>
                        </CardBody>
                        <CardFooter className='mx-auto'>
                            <Link to="/">
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