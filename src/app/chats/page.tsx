'use client';

import { FaComments } from 'react-icons/fa';

import { NavigationBar } from '@/components/navigation-bar';
import { NewGroup } from '@/components/new-group';
import { MobileChatContent } from '@/components/mobile-chat-content';

const ChatPage = () => {
  return (
    <>
      <NavigationBar trigger={<NewGroup />} />
      <div className='hidden md:grid h-full max-w-56 text-center mx-auto place-content-center'>
        <FaComments className='mx-auto text-primary-main' size={200} />
        <p className='text-sm mt-5 text-primary-main'>
          Welcome to Chatty messenger! Start a new chat or select an existing
          one to get started.
        </p>
      </div>
      <div className='md:hidden flex flex-col space-y-2'>
        <MobileChatContent />
      </div>
    </>
  );
};

export default ChatPage;
