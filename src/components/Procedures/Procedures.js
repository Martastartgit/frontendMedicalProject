import React from "react";
import {Link} from "react-router-dom";

export const Procedures = () => {
    return (
        <>
            <ul>
                <li>
                    <Link to={'/admin/create_procedures'}>Додати процедуру</Link>
                </li>
                <li>
                    <Link to={'/admin/all_procedures'}>Всі процедури</Link>
                </li>
            </ul>

        </>
    )
}
