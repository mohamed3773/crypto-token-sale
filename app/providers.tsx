"use client";

import { ThirdwebProvider } from "@thirdweb-dev/react";
import { Polygon } from "@thirdweb-dev/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <QueryClientProvider client={queryClient}>
            <ThirdwebProvider
                activeChain={Polygon}
                supportedChains={[Polygon]}
                clientId={process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID}
                queryClient={queryClient}
            >
                {children}
            </ThirdwebProvider>
        </QueryClientProvider>
    );
}
