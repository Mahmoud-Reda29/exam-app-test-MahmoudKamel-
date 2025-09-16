import { GetAllSubjects } from "@lib/types/api/subjects/getAll";

export async function getAllSubjects(page?: number, limit?: number) {
  const countPage = limit ? `?page=${page}` : "";
  const isLimit = limit ? `?limit=${limit}` : "";

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL!}/subjects${isLimit}${countPage}`,
      {
        headers: {
          token: process.env.NEXT_PUBLIC_TOKEN!,
        },
      }
    );

    const data: GetAllSubjects = await response.json();
    return data;

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    throw new Error("Something went wrong while loading the subjects. Please try again later.");
  }
}
