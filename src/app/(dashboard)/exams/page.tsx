import ExamsItems from "@components/features/dashboard/exams";
import HeaderPage from "@components/features/dashboard/header-page";
import BookOpenCheckIcon from "@public/icons/book-open-check";
import React from "react";

export default function ExamsPage() {
  return (
    <>
      {/* Header */}
      <HeaderPage title="Exams" icon={<BookOpenCheckIcon color="white" />} showButtonBack={true} />

      {/* Exams List */}
      <ExamsItems />
    </>
  );
}
