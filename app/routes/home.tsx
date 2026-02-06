import type { Route } from "./+types/home";
import { resumes } from "~/constants";
import Navbar from "~/components/Navbar";
import ResumeCard from "~/components/ResumeCard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Thrive" },
    { name: "description", content: "AI Resume Analyzer Assistant" },
  ];
}

export default function Home() {
  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover">
      <Navbar />

      <section className="main-section">
        <div className="page-heading py-16">
          <h1>Track Your Applications & Resume Ratings</h1>
          <h2>Review your submissions and check AI-powered feedback.</h2>
        </div>

        {resumes.length > 0 && (
          <div className="resumes-section">
            {resumes.map((resume) => (
              <ResumeCard resume={resume} key={resume.id} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
