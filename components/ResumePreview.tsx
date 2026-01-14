"use client";

import { PDFViewer } from "@react-pdf/renderer";
import dynamic from "next/dynamic";
import ResumeTemplateOne from "./resume-template-one";
import { TemplateData } from "@/param/datatype";

const DynamicPDFViewer = dynamic(() => import("@react-pdf/renderer").then(module => module.PDFViewer), {
  ssr: false
});

export default function ResumePreview({ data }: { data: TemplateData }) {
  return (
    <DynamicPDFViewer style={{ width: "100%", height: "100%"}} showToolbar={false}>
      <ResumeTemplateOne data={data} />
    </DynamicPDFViewer>
  );
}
