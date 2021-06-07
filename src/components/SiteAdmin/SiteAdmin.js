import React from 'react';
import {Link} from "react-router-dom";

import {Header} from "../Header";

export const SiteAdmin = () => {

    return (
        <>
            <Header/>
            <Link to={'/admin/procedures'}>Procedures</Link>

        </>
    )
}
