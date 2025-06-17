import {
  QueryClient,
  QueryClientProvider,
  QueryClientProviderProps,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

export function TanstackProvider({
  children,
  ...rest
}: Omit<QueryClientProviderProps, "client">) {
  return (
    <QueryClientProvider client={queryClient} {...rest}>
      {children}
    </QueryClientProvider>
  );
}
