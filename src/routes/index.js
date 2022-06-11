import { lazy, Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import LoadingScreen from '../components/LoandingScreen';

const Loadable = Component => props => {
    return (
        <Suspense
            fallback={<LoadingScreen/>}
        >
            <Component {...props} />
        </Suspense>
    );
};

const Router = () => {
    return useRoutes([
        
        {path: '/data-transcription', element: <DataTranscription /> },
        {path: '/data-collection', element: <DataCollection /> },
        {path: '/data-annotation', element: <DataAnnotation /> },
        {path: '/off-the-shelf', element: <OffTheShelf /> },
        {path: '/resources', element: <Resources/> },
        {path: '/join-our-talent-pool', element: <JoinOurTalentPool /> },
        {path: '/about-us', element: <AboutUs /> },
        {path: '/contact', element: <Contact /> },
        {path: '/detail-blog', element: <DetailBlog /> },
        {path: '/', element: <Home /> },
    ])

};

export default Router;

const Home = Loadable(lazy(() => import('../pages/Home')));
const DataTranscription = Loadable(lazy(() => import('../pages/Services/DataTranscription')));
const DataCollection = Loadable(lazy(() => import('../pages/Services/DataCollection')));
const DataAnnotation = Loadable(lazy(() => import('../pages/Services/DataAnnotation')));
const OffTheShelf = Loadable(lazy(() => import('../pages/OffTheShelf')));
const Resources = Loadable(lazy(() => import('../pages/Resource.js/Resources')));
const JoinOurTalentPool = Loadable(lazy(() => import('../pages/JoinOurTalentPool')));
const AboutUs = Loadable(lazy(() => import('../pages/Company/AboutUs')));
const Contact = Loadable(lazy(() => import('../pages/Company/Contact')));
const DetailBlog = Loadable(lazy(() => import('../pages/DetailBlog')));
