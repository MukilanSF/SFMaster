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

  if (loading) return <div className="p-8">Loading...</div>;
  if (!question) return <div className="p-8 text-red-600">Question not found.</div>;

  return (
    <div className="max-w-3xl mx-auto mt-8 p-4 bg-white rounded shadow">
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
    </div>
  );
}
