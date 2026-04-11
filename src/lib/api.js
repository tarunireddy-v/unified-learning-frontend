export const API_BASE_URL = (
  import.meta.env.VITE_API_URL || "http://13.232.86.171:8000"
).replace(/\/$/, "");

async function handleApiResponse(response) {
  if (!response.ok) {
    let message = "Something went wrong. Please try again.";

    try {
      const errorPayload = await response.json();
      if (errorPayload?.detail) {
        message = String(errorPayload.detail);
      }
    } catch {}

    throw new Error(message);
  }

  return response.json();
}

export async function recommendCourses(data) {
  const response = await fetch(`${API_BASE_URL}/recommend`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return handleApiResponse(response);
}

export async function sendFeedback(query_id, feedback) {
  const response = await fetch(`${API_BASE_URL}/feedback`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query_id, feedback }),
  });

  return handleApiResponse(response);
}
