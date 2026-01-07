import React from 'react';
import EditSection from './editor/EditSection';

const Terms = () => {
    const termsData = 'These are the terms and conditions.'; // Placeholder content
    return (
        <div>
            <EditSection section="terms" data={termsData} />
        </div>
    );
};

export default Terms;