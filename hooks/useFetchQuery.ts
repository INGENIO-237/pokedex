import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

const URI = "https://pokeapi.co/api/v2";

export function useFetchQuery(path: string) {
  return useQuery({
    queryKey: [path],
    queryFn: async () => {
      await wait(1);
      return fetch(URI + path).then((res) => res.json());
    },
  });
}

export function useInfiniteFetchQuery(path: string) {
  return useInfiniteQuery({
    queryKey: [path],
    initialPageParam: URI + path,
    queryFn: async ({ pageParam }) => {
      await wait(1);
      return await fetch(pageParam).then(async (res) => {
        return await res.json();
      });
    },
    getNextPageParam: (lastPage) => {
      const nextUrl = lastPage.next;
      return nextUrl != null ? nextUrl : undefined;
    },
  });
}

function wait(duration: number) {
  return new Promise((resolve) => setTimeout(resolve, duration * 1000));
}
