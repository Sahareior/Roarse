import React from 'react';
import ConversationList from './_components/ConversationList';
import MessageBody from './_components/MessageBody';

const AdminMessages = () => {
    return (
        <div className='flex'>
           <ConversationList />
           <MessageBody />
        </div>
    );
};

export default AdminMessages;