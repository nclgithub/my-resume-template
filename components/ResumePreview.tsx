"use client";

import ResumeTemplateOne from "./resume-template-one";
import { TemplateData } from "@/param/datatype";

export default function ResumePreview({ data }: { data: TemplateData }) {
  return (
    <div style={{ width: "596px", margin: "auto", overflow: "auto" }}>
      <ResumeTemplateOne data={data} isPrint={false} />
    </div>
  );
}
