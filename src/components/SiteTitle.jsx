import { Helmet } from 'react-helmet-async';

const SiteTitle = ({ children }) => {
    return (
        <Helmet>
            <title>Taskero | {children}</title>
        </Helmet>
    );
};

export default SiteTitle;