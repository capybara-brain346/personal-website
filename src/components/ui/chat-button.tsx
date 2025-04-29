'use client';

import React, { useState } from 'react';
import { Button } from './button';
import { MessageCircle } from 'lucide-react';
import { ChatInterface } from '@/components/ui/chat-interface';

export const ChatButton = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-4 right-4 bg-white text-black rounded-full p-4 shadow-lg z-50 md:bottom-6 md:right-6"
                size="lg"
            >
                <MessageCircle className="h-6 w-6" />
            </Button>

            {isOpen && <ChatInterface onClose={() => setIsOpen(false)} />}
        </>
    );
};