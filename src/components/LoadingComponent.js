import React from 'react';

export const Loading = () => {
    return (
        <div className="container">

        <div className="col" class="loading-spinner">
            <i class="fa fa-spinner fa-pulse fa-3x fa-fw text-white" aria-hidden="true"></i>
            <p className="text-white">Loading...</p>
        </div>
        </div>
    );
};
