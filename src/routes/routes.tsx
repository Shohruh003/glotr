import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FC } from 'react';
import NotFound from '../components/views/NotFound';
import Profile from '../components/views/Profile';
import Home from '../components/views/Home';

const RoutesComponent: FC = () => {
    return (
        <Router 
            future={{
                v7_relativeSplatPath: true,
                v7_startTransition: true,
            }}
        >
            <Routes>
                <Route path="/profile" element={<Profile />} />
                <Route path="/" element={<Home />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
};

export default RoutesComponent;