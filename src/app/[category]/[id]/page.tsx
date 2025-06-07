"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { supabase } from "../../../supabaseClient";
import MonacoEditor from "@monaco-editor/react";

export default function QuestionDetail() {
  const params = useParams();
  const { category, id } = params as { category: string; id: string };
  const [question, setQuestion] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [showContact, setShowContact] = useState(false);
  const [contactForm, setContactForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comment: "",
  });
  const [contactStatus, setContactStatus] = useState<null | "success" | "error">(null);
  const [contactLoading, setContactLoading] = useState(false);

  useEffect(() => {
    async function fetchQuestion() {
      setLoading(true);
      const { data, error } = await supabase
        .from(category)
        .select("id, title, description, level, starter_code, hints")
        .eq("id", id)
        .single();
      setQuestion(data);
      setLoading(false);
    }
    fetchQuestion();
  }, [category, id]);

  // Contact form submit handler
  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setContactLoading(true);
    setContactStatus(null);

    try {
      // Send email using a free API like Formspree, or EmailJS, or your own backend.
      // Here is an example using Formspree (no backend needed):
      const response = await fetch("https://formspree.io/f/xdoqzqoq", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: contactForm.firstName,
          lastName: contactForm.lastName,
          email: contactForm.email,
          comment: contactForm.comment,
          _replyto: contactForm.email,
          to: "developermukilan@gmail.com",
        }),
      });

      if (response.ok) {
        setContactStatus("success");
        setContactForm({ firstName: "", lastName: "", email: "", comment: "" });
      } else {
        setContactStatus("error");
      }
    } catch {
      setContactStatus("error");
    }
    setContactLoading(false);
  };

  if (loading) return <div className="p-8">Loading...</div>;
  if (!question) return <div className="p-8 text-red-600">Question not found.</div>;

  return (
    <div className="max-w-3xl mx-auto mt-8 p-4 bg-white rounded shadow relative">
      <h1 className="text-2xl font-bold mb-2">{question.title}</h1>
      <div className="mb-2 text-sm font-semibold text-blue-700">{question.level}</div>
      <p className="mb-4 text-gray-700 whitespace-pre-line">{question.description}</p>
      <div className="mb-4">
        <span className="font-semibold">Hints:</span>
        <ul className="list-disc ml-6 text-gray-600">
          {question.hints?.map((hint: string, i: number) => (
            <li key={i}>{hint}</li>
          ))}
        </ul>
      </div>
      <div className="my-6">
        <MonacoEditor
          height="400px"
          defaultLanguage={category.startsWith("apex") ? "apex" : "javascript"}
          value={question.starter_code}
          options={{ fontSize: 14, minimap: { enabled: false } }}
        />
      </div>

      {/* Contact Us Button */}
      <div className="flex justify-center mt-8">
        <button
          className="text-blue-600 underline"
          onClick={() => setShowContact(true)}
        >
          Contact Us
        </button>
      </div>

      {/* Contact Us Modal */}
      {showContact && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg relative">
            <button
              className="absolute top-2 right-3 text-gray-500 text-xl"
              onClick={() => {
                setShowContact(false);
                setContactStatus(null);
              }}
              aria-label="Close"
            >
              ×
            </button>
            <h2 className="text-xl font-bold mb-4 text-center">Contact Us</h2>
            <form className="space-y-3" onSubmit={handleContactSubmit}>
              <div className="flex gap-2">
                <input
                  className="border p-2 rounded w-1/2"
                  type="text"
                  placeholder="First Name"
                  value={contactForm.firstName}
                  onChange={e => setContactForm(f => ({ ...f, firstName: e.target.value }))}
                  required
                />
                <input
                  className="border p-2 rounded w-1/2"
                  type="text"
                  placeholder="Last Name"
                  value={contactForm.lastName}
                  onChange={e => setContactForm(f => ({ ...f, lastName: e.target.value }))}
                  required
                />
              </div>
              <input
                className="border p-2 rounded w-full"
                type="email"
                placeholder="Email"
                value={contactForm.email}
                onChange={e => setContactForm(f => ({ ...f, email: e.target.value }))}
                required
              />
              <textarea
                className="border p-2 rounded w-full"
                placeholder="Comment"
                rows={4}
                value={contactForm.comment}
                onChange={e => setContactForm(f => ({ ...f, comment: e.target.value }))}
                required
              />
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded w-full"
                type="submit"
                disabled={contactLoading}
              >
                {contactLoading ? "Sending..." : "Submit"}
              </button>
              {contactStatus === "success" && (
                <div className="text-green-600 text-center mt-2">Message sent successfully!</div>
              )}
              {contactStatus === "error" && (
                <div className="text-red-600 text-center mt-2">Failed to send. Please try again.</div>
              )}
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
