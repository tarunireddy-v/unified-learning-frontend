import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Button from "../components/Button";
import Select from "../components/Select";
import { recommendCourses, sendFeedback } from "../lib/api";

function courseExternalUrl(raw) {
  const u = (raw || "").trim();
  if (!u) return null;
  return /^https?:\/\//i.test(u) ? u : null;
}

/** Hide description/reason when it is only a duplicate URL (common for API-backed rows). */
function shouldShowDetailText(text, href) {
  const t = (text || "").trim();
  if (!t) return false;
  if (/^https?:\/\//i.test(t)) return false;
  const h = (href || "").trim();
  if (h && t === h) return false;
  return true;
}

const titleLinkClass =
  "text-slate-900 font-semibold no-underline cursor-pointer hover:underline hover:text-slate-800 underline-offset-2 decoration-slate-400 transition-colors";

const RANK_BADGES = [
  { label: "1st", className: "bg-amber-100 text-amber-950 ring-amber-300/90" },
  { label: "2nd", className: "bg-slate-100 text-slate-800 ring-slate-300/80" },
  { label: "3rd", className: "bg-orange-100 text-orange-950 ring-orange-300/80" },
];

const RecommendationResultsPage = () => {
  const [formData, setFormData] = useState({
    query: "",
    level: "Beginner",
    duration: "3 months",
    goal: "job",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [recommendations, setRecommendations] = useState([]);
  const [queryId, setQueryId] = useState("");
  const [feedbackSelection, setFeedbackSelection] = useState({});
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  useEffect(() => {
    setFeedbackSelection({});
    setFeedbackMessage("");
  }, [queryId]);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");
    setFeedbackMessage("");
    setHasSearched(true);

    try {
      const response = await recommendCourses(formData);
      setRecommendations(response.recommendations || []);
      setQueryId(response.query_id || "");
    } catch (err) {
      setError(err.message || "Failed to fetch recommendations.");
      setRecommendations([]);
      setQueryId("");
    } finally {
      setLoading(false);
    }
  };

  const handleFeedback = async (courseIndex, feedbackType) => {
    if (!queryId || feedbackSelection[courseIndex]) {
      return;
    }

    try {
      setError("");
      await sendFeedback(queryId, feedbackType);
      setFeedbackSelection((prev) => ({ ...prev, [courseIndex]: feedbackType }));
      setFeedbackMessage("Thanks for your feedback.");
    } catch (err) {
      setError(err.message || "Could not submit feedback.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto pt-4 space-y-10">
      <section className="space-y-5">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-semibold text-slate-800 tracking-tight">
            Get Course Recommendations
          </h1>
          <p className="text-slate-500 text-sm max-w-xl mx-auto">
            Enter your learning goal and preferences. We will call your FastAPI unified-learning-backend service and return ranked results.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-[0_2px_24px_rgba(0,0,0,0.02)] border border-slate-100 p-6 space-y-6"
        >
          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider ml-1">
              Course Query
            </label>
            <textarea
              value={formData.query}
              onChange={(e) => handleInputChange("query", e.target.value)}
              placeholder="e.g. Best beginner AWS course"
              required
              className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200 focus:border-slate-300 focus:bg-white transition-all min-h-[96px] resize-none text-sm leading-relaxed"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Select
              label="Level"
              value={formData.level}
              onChange={(e) => handleInputChange("level", e.target.value)}
              options={[
                { value: "Beginner", label: "Beginner" },
                { value: "Intermediate", label: "Intermediate" },
                { value: "Advanced", label: "Advanced" },
              ]}
            />
            <Select
              label="Duration"
              value={formData.duration}
              onChange={(e) => handleInputChange("duration", e.target.value)}
              options={[
                { value: "1 month", label: "1 month" },
                { value: "2 months", label: "2 months" },
                { value: "3 months", label: "3 months" },
                { value: "6 months", label: "6 months" },
              ]}
            />
            <Select
              label="Goal"
              value={formData.goal}
              onChange={(e) => handleInputChange("goal", e.target.value)}
              options={[
                { value: "job", label: "Job" },
                { value: "project", label: "Project" },
                { value: "certification", label: "Certification" },
              ]}
            />
          </div>

          <Button
            variant="primary"
            type="submit"
            disabled={loading}
            className="w-full justify-center h-11 text-sm"
          >
            {loading ? "Loading..." : "Generate Recommendations"}
          </Button>
        </form>
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-slate-900 tracking-tight">Recommendations</h2>
          {queryId && (
            <span className="text-xs text-slate-500 bg-slate-100 rounded-full px-3 py-1">
              Query ID: {queryId}
            </span>
          )}
        </div>

        {error && (
          <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {error}
          </div>
        )}

        {feedbackMessage && (
          <div className="rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
            {feedbackMessage}
          </div>
        )}

        {!loading && recommendations.length === 0 && !error && !hasSearched && (
          <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-8 text-center text-slate-500">
            Submit a query to see recommendations.
          </div>
        )}

        {!loading && recommendations.length === 0 && !error && hasSearched && (
          <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-8 text-center text-slate-500">
            No courses found
          </div>
        )}

        <div className="space-y-4">
          {recommendations.map((item, index) => {
            const selectedFeedback = feedbackSelection[index];
            const disabled = Boolean(selectedFeedback);
            const detailText = item.description || item.reason;
            const href = courseExternalUrl(item.url);
            const showDetail = shouldShowDetailText(detailText, href);

            const rankBadge = index < 3 ? RANK_BADGES[index] : null;

            return (
              <Card key={`${item.title}-${index}`} variant="default" className="p-5 bg-white">
                <div className="space-y-3">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-semibold text-slate-900 leading-snug">
                      {href ? (
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={titleLinkClass}
                          title="Open course in a new tab"
                        >
                          {item.title}
                        </a>
                      ) : (
                        item.title
                      )}
                    </h3>
                    {showDetail ? (
                      <p className="text-sm text-slate-600 leading-relaxed">{detailText}</p>
                    ) : null}
                    <div className="text-sm text-slate-500 font-medium mt-1">
                      Platform: {item.platform || "—"}
                    </div>
                    {item.duration &&
                    String(item.duration).trim().toLowerCase() !== "short" ? (
                      <div className="text-sm text-slate-500 font-medium">
                        Duration: {item.duration}
                      </div>
                    ) : null}
                    {item.explanation ? (
                      <p className="text-xs text-slate-500 leading-relaxed border-t border-slate-100 pt-3 mt-1">
                        {item.explanation}
                      </p>
                    ) : null}
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-100">
                    <div className="flex flex-wrap items-center gap-2">
                      <Button
                        variant={selectedFeedback === "helpful" ? "primary" : "secondary"}
                        disabled={disabled}
                        onClick={() => handleFeedback(index, "helpful")}
                        className="h-9 px-4"
                      >
                        👍 Helpful
                      </Button>
                      <Button
                        variant={selectedFeedback === "not_helpful" ? "primary" : "secondary"}
                        disabled={disabled}
                        onClick={() => handleFeedback(index, "not_helpful")}
                        className="h-9 px-4"
                      >
                        👎 Not Helpful
                      </Button>
                    </div>
                    {rankBadge ? (
                      <span
                        className={`shrink-0 inline-flex items-center justify-center rounded-md px-2 py-1 text-xs font-bold tabular-nums tracking-tight ring-1 ring-inset ${rankBadge.className}`}
                        aria-label={`Rank ${rankBadge.label}`}
                      >
                        {rankBadge.label}
                      </span>
                    ) : null}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default RecommendationResultsPage;
