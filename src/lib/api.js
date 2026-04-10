const API_BASE_URL = "http://127.0.0.1:8000";

async function handleApiResponse(response) {
  if (!response.ok) {
    let message = "Something went wrong. Please try again.";

    try {
      const errorPayload = await response.json();
      if (errorPayload?.detail) {
        message = String(errorPayload.detail);
      }
    } catch {
      // Keep default message when response body is not JSON.
    }

    throw new Error(message);
  }

  return response.json();
}

export async function recommendCourses(data) {
  const response = await fetch(`http://127.0.0.1:8000/recommend`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return handleApiResponse(response);
}

export async function sendFeedback(query_id, feedback) {
  const response = await fetch(`http://127.0.0.1:8000/feedback`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query_id, feedback }),
  });

  return handleApiResponse(response);
}

