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
<<<<<<< HEAD
  const response = await fetch(`http://127.0.0.1:8000/recommend`, {
=======
  const response = await fetch(`${API_BASE_URL}/recommend`, {
>>>>>>> d29d898be73ddd6bf85f910fdf307d9cdcf38c19
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return handleApiResponse(response);
}

export async function sendFeedback(query_id, feedback) {
<<<<<<< HEAD
  const response = await fetch(`http://127.0.0.1:8000/feedback`, {
=======
  const response = await fetch(`${API_BASE_URL}/feedback`, {
>>>>>>> d29d898be73ddd6bf85f910fdf307d9cdcf38c19
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query_id, feedback }),
  });

  return handleApiResponse(response);
}

