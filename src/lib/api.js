/**
 * API base for fetch():
 * - If VITE_API_URL is set -> use it (ngrok, staging, production builds).
 * - Else in dev -> "/api" (Vite proxy -> FastAPI, same origin as the dev server).
 * - Else (preview/build without env) -> direct local FastAPI.
 */
const trimmed = (import.meta.env.VITE_API_URL || "").trim().replace(/\/$/, "");

export const API_BASE_URL = trimmed
  ? trimmed
  : import.meta.env.DEV
    ? "/api"
    : "http://127.0.0.1:8000";

async function handleApiResponse(response) {
  if (!response.ok) {
    let message = "Something went wrong. Please try again.";

    try {
      const errorPayload = await response.json();
      if (errorPayload?.message) {
        message = String(errorPayload.message);
      } else if (errorPayload?.detail) {
        message = String(errorPayload.detail);
      }
    } catch { }

    throw new Error(message);
  }

  return response.json();
}

const NETWORK_HINT =
  "Could not reach the API. Start FastAPI on port 8000 (wait until you see \"Application startup complete\"), " +
  "and restart \"npm run dev\" if you changed Vite env.";

/** @param {string} path e.g. "/recommend" */
export async function apiFetch(path, init) {
  const url = `${API_BASE_URL}${path}`;
  try {
    return await fetch(url, init);
  } catch (e) {
    const name = e && typeof e === "object" && "name" in e ? e.name : "";
    if (name === "TypeError") {
      throw new Error(NETWORK_HINT);
    }
    throw e instanceof Error ? e : new Error(NETWORK_HINT);
  }
}

export async function recommendCourses(data) {
  const response = await apiFetch("/recommend", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return handleApiResponse(response);
}

export async function sendFeedback(query_id, feedback) {
  const response = await apiFetch("/feedback", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query_id, feedback }),
  });

  return handleApiResponse(response);
}

export async function loginApi(email, password) {
  const response = await apiFetch("/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  return handleApiResponse(response);
}

export async function signupApi(name, email, password) {
  const response = await apiFetch("/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password }),
  });
  return handleApiResponse(response);
}

export async function getProfileApi() {
  const response = await apiFetch("/profile", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  return handleApiResponse(response);
}

export async function updateProfileApi(data) {
  const response = await apiFetch("/profile", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return handleApiResponse(response);
}

export async function saveCourseApi(courseData) {
  const email = localStorage.getItem("email");
  if (!email) {
    alert("Please login first");
    throw new Error("Unauthorized");
  }
  const headers = {
    "Content-Type": "application/json",
  };

  const response = await apiFetch("/save-course", {
    method: "POST",
    headers,
    body: JSON.stringify(courseData),
  });
  return handleApiResponse(response);
}

export const getHistoryApi = async () => {
  const email = localStorage.getItem("email");

  if (!email) {
    throw new Error("User not logged in");
  }

  const response = await fetch(
    `http://127.0.0.1:8000/history?email=${email}`
  );

  const data = await response.json();

  return data;
};

export async function submitCourseFeedbackApi(courseId, rating, comment) {
  const headers = { "Content-Type": "application/json" };

  const response = await apiFetch("/feedback", {
    method: "POST",
    headers,
    body: JSON.stringify({ courseId, rating, comment }),
  });
  return handleApiResponse(response);
}

export const getProgressApi = async () => {
  const email = localStorage.getItem("email");

  if (!email) {
    throw new Error("User not logged in");
  }

  const response = await fetch(
    `http://127.0.0.1:8000/progress?email=${email}`
  );

  return await response.json();
};
