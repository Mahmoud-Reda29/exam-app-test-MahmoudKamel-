export async function getAllExams() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL!}/exams`, {
      headers: {
        "Content-Type": "application/json",
        token: process.env.NEXT_PUBLIC_TOKEN!,
      },
    });

    const data = await response.json();
    return data;

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    throw new Error("Something went wrong while loading the subjects. Please try again later.");
  }
}
