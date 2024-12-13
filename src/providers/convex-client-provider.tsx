'use client';

import { FC, ReactNode } from 'react';
import { ClerkProvider, useAuth, SignInButton } from '@clerk/clerk-react';
import { ConvexProviderWithClerk } from 'convex/react-clerk';
import { Authenticated, ConvexReactClient, Unauthenticated } from 'convex/react';
import { FaComments } from 'react-icons/fa';
import { PulseLoader } from 'react-spinners'; // Add a loading spinner component

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const CONVEX_URL = process.env.NEXT_PUBLIC_CONVEX_URL!;
const CLERK_PUBLISHABLE_KEY = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!;

const convex = new ConvexReactClient(CONVEX_URL);

const ConvexClientProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY}>
      <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
        <Authenticated>{children}</Authenticated>
        <Unauthenticated>
          <div className="bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-600 w-full h-screen grid place-items-center p-4 animate-fadeIn">
            <div className="flex flex-col items-center justify-center space-y-8">
              <FaComments size={250} className="text-white animate-pulse" />

              <Card className="bg-slate-800 w-[350px] border-none shadow-2xl rounded-xl p-6 space-y-6 transform transition-transform hover:scale-105 hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="text-white text-3xl font-bold tracking-wider">Welcome to Chatty!</CardTitle>
                </CardHeader>
                <CardContent className="text-white text-center space-y-4">
                  <p className="text-lg font-medium text-gray-300">Sign in to start chatting</p>

                  {/* SignIn Button with matching gradient effect */}
                  <div className="flex justify-center items-center space-x-4">
                    <SignInButton>
                      <button className="relative overflow-hidden bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600 text-black py-3 px-6 rounded-full font-semibold text-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50">
                        Sign In
                        {/* Adding a subtle animated glow effect */}
                        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600 opacity-30 animate-pulse rounded-full"></span>
                      </button>
                    </SignInButton>
                  </div>
                </CardContent>
              </Card>

              {/* Loading Spinner (appears while waiting for the authentication) */}
              <div className="flex justify-center items-center space-x-4">
                <PulseLoader size={10} color="#4F46E5" />
              </div>
            </div>
          </div>
        </Unauthenticated>
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
};

export default ConvexClientProvider;
