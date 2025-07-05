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
                className="fixed bottom-4 right-4 bg-white hover:bg-primary/90 text-black hover:text-white rounded-full p-4 shadow-xl hover:shadow-2xl transition-all duration-200 z-50 md:bottom-8 md:right-8 scale-110 hover:scale-125"
                size="lg"
            >
                <MessageCircle className="h-6 w-6" />
            </Button>

            {isOpen && <ChatInterface onClose={() => setIsOpen(false)} />}
        </>
    );
};