import React from 'react';

export const ProcedureCart = (item) => {
    return (
        <div className={'card-group'}>
            <div className={'card'}>
                <div className={'card-body'}>
                    <h4 className={'card-title'}>{item.name}</h4>
                    <p className={'card-text'}>{item.description}</p>
                </div>
            </div>
        </div>
    );
}
