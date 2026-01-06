import React from 'react';
import EditSection from '../editor/EditSection';

const Privacy = () => {
    const privacyData = 'This is the privacy policy content.'; // Placeholder content
    return (
        <div>
            <EditSection section="privacy" data={privacyData} />
        </div>
    );
};

export default Privacy;