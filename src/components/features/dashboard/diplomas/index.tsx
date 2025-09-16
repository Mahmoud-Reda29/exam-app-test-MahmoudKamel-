"use client";
import Loading from "@app/(dashboard)/loading";
import InfiniteScroll from "react-infinite-scroll-component";
import { getAllSubjects } from "@lib/api/subjects/getAllSubjects";
import { cn } from "@lib/utils/cn.utils";
import { useInfiniteQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
// import { useState } from "react";
import { GetAllSubjects } from "@lib/types/api/subjects/getAll";

export default function Diplomas() {
  const { data, error, isLoading, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery<GetAllSubjects>({
      queryKey: ["subjects"],
      queryFn: async ({ pageParam = 2 }) => getAllSubjects(pageParam as number),
      getNextPageParam: (lastPage) => {
        const { currentPage, numberOfPages } = lastPage.metadata;
        return currentPage < numberOfPages ? currentPage + 1 : undefined;
      },
      initialPageParam: 2,
    });

  // when loading data
  if (isLoading) return <Loading />;

  // if there is an error
  if (error || !data)
    return (
      <p className={cn("mt-10 text-red-500 text-center font-bold")}>
        <span className={cn("text-2xl")}>Oops!</span>
        <br />
        {error?.message}
      </p>
    );

  return (
    <section id="diplomas">
      <InfiniteScroll
        dataLength={data?.pages.flatMap((page) => page.subjects).length || 0}
        next={fetchNextPage}
        hasMore={!!hasNextPage}
        className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2"
        scrollThreshold={0.9}
        // loader={<h4>Loading...</h4>}
        scrollableTarget="scroll-react-infinity"
        pullDownToRefreshContent={<p>Scroll to view more</p>}
      >
        {data?.pages.flatMap((page) =>
          page.subjects.map((item) => (
            <Link
              key={item._id}
              href="/exams"
              className="item | h-card-height relative overflow-hidden"
            >
              <Image
                className="h-full w-full object-cover hover:scale-110 transition-transform duration-300"
                src={item.icon}
                alt={item.name}
                width={334}
                height={447}
                loading="lazy"
              />
              <h3
                className="info | w-11/12 mx-auto absolute left-0 right-0 bottom-4 p-5 overflow-hidden text-nowrap text-ellipsis bg-blue-600/50 text-xl text-white font-semibold"
                title={item.name}
              >
                {item.name}
              </h3>
            </Link>
          ))
        )}
      </InfiniteScroll>

      {isFetchingNextPage && <p>Loading...</p>}
    </section>
  );
}
