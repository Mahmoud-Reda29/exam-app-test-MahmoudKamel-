"use client";
import Loading from "@app/(dashboard)/loading";
import { getAllExams } from "@lib/api/exams";
import { cn } from "@lib/utils/cn.utils";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import React from "react";

export default function ExamsItems() {
  // const { data, error, isLoading, hasNextPage, fetchNextPage, isFetchingNextPage } = useInfiniteQuery({
  //        queryKey: ["subjects"],
  //        queryFn: async ({ pageParam = 2 }) => getAllExams(),
  //        getNextPageParam: (lastPage) => {
  //               const { currentPage, numberOfPages } = lastPage.metadata;
  //               return currentPage < numberOfPages ? currentPage + 1 : undefined;
  //        },
  //        initialPageParam: 2,
  // });

  const { data, error, isLoading } = useQuery({
    queryKey: ["exams"],
    queryFn: getAllExams,
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
    <section className={cn("mt-6 p-6 flex flex-col gap-4 bg-white")}>
      {data.exams.map((item) => (
        <div
          key={item._id}
          className={cn("item | p-4 flex items-center justify-between bg-blue-50")}
        >
          <Link href={`exams/${item.title}`} className={cn("")}>
            <h3 className={cn("text-xl text-blue-600 font-semibold")}>{item.title}</h3>
            <p className={cn("mt-1 text-sm text-gray-500")}>{item.numberOfQuestions} Questions</p>
          </Link>
          <p className={cn("text-sm font-medium")}>Duration: {item.duration} minutes</p>
        </div>
      ))}
    </section>
  );
}
