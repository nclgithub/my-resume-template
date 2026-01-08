"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import ResumeTemplate from "@/components/resume-template";
import ContactSectionImage from "../../images/contact-template.png";
import PointFormSectionImage from "../../images/pointform-template.png";
import ExperienceSectionImage from "../../images/experience-template.png";
import ThreeColumnSectionImage from "../../images/threecolumn-template.png";
import LevelSectionImage from "../../images/level-template.png";

import {
  sampleData,
  TemplateData,
  newContactSection,
  newPointFormSection,
  newExperienceSection,
  newThreeColumnGridSection,
  newLevelSection,
  newExperienceContent,
  newLevelContent
} from "@/param/datatype";
import TooltipButton from "@/components/tooltipbutton";

export default function ResumePDF() {
  const [isLoading, setIsLoading] = useState(false);
  const [isOpenSectionModel, setIsOpenSectionModel] = useState(false);
  const [isOpenSampleModel, setIsOpenSampleModel] = useState(false);
  const [indexInsert, setIndexInsert] = useState(-1);
  const [data, setData] = useState<TemplateData>({
    profilepic: "",
    firstname: "First Name",
    lastname: "Last Name",
    sections: [
      newContactSection(),
      newPointFormSection(),
      newExperienceSection(),
      newExperienceSection(),
      newThreeColumnGridSection(),
      newLevelSection()
    ]
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setData(prev => ({ ...prev, profilepic: reader.result as string }));
    };
    reader.readAsDataURL(file);
  };

  const addSectionData = (newSection: any) => {
    setData(prev => ({
      ...prev,
      sections: [...prev.sections.slice(0, indexInsert), newSection, ...prev.sections.slice(indexInsert)]
    }));
  };

  const updateSectionData = (id: string, key: string, value: any, index?: number) => {
    setData(prev => ({
      ...prev,
      sections: prev.sections.map(section => {
        if (section.id === id) {
          if (typeof index === "number") {
            const newContent = [...section.contents];
            newContent[index] = { ...newContent[index], [key]: value };
            return { ...section, contents: newContent };
          }
          return { ...section, [key]: value };
        }
        return section;
      })
    }));
  };

  const deleteSectionData = (id: string) => {
    setData(prev => ({
      ...prev,
      sections: prev.sections.filter(section => section.id !== id)
    }));
  };

  const addContentToSection = (id: string, newSection: any) => {
    setData(prev => ({
      ...prev,
      sections: prev.sections.map(section => (section.id === id ? { ...section, contents: [...section.contents, newSection] } : section))
    }));
  };

  const deleteContentFromSection = (id: string, index: number) => {
    setData(prev => ({
      ...prev,
      sections: prev.sections.map(section =>
        section.id === id ? { ...section, contents: section.contents.filter((_: any, i: number) => i !== index) } : section
      )
    }));
  };

  const generatePDF = async () => {
    setIsLoading(true);
    const res = await fetch("/api/pdf", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
    const blob = await res.blob(); // directly get Blob from response
    const blobUrl = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = blobUrl;
    link.download = "resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsLoading(false);
  };

  return (
    <div className="flex-1 min-h-0 grid grid-rows-2 md:grid-rows-1 md:grid-cols-5 gap-8 p-4 md:p-6 bg-gray-100">
      {isOpenSectionModel && (
        <div
          id="select-template-modal"
          className="bg-gray-600 bg-opacity-80 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-items-center content-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
        >
          <div className="relative p-4 w-fit h-fit max-w-full max-h-full">
            <div className="relative bg-white border border-default rounded-xl shadow-sm p-4 md:p-6 w-fit">
              <div className="flex items-center justify-between border-b border-default pb-4 md:pb-5">
                <h3 className="text-lg font-medium text-heading">Select Section Type</h3>
                <button
                  type="button"
                  className="text-body bg-transparent hover:bg-neutral-tertiary hover:text-heading rounded-base text-sm w-9 h-9 ms-auto inline-flex justify-center items-center"
                  onClick={() => setIsOpenSectionModel(false)}
                >
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6" />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="grid gap-4 py-4 md:py-6 grid-cols-1 md:grid-cols-3 auto-rows-fr">
                <button
                  className="w-full max-w-[500px] text-left border-2 rounded-lg hover:border-gray-500"
                  onClick={() => {
                    addSectionData(newContactSection());
                    setIsOpenSectionModel(false);
                  }}
                >
                  <img src={ContactSectionImage.src} alt="Contact Section" className="mt-2 border border-gray-300 rounded-md" />
                </button>
                <button
                  className="w-full max-w-[500px] text-left border-2 rounded-lg hover:border-gray-500"
                  onClick={() => {
                    addSectionData(newPointFormSection());
                    setIsOpenSectionModel(false);
                  }}
                >
                  <img src={PointFormSectionImage.src} alt="Point Form Section" className="mt-2 border border-gray-300 rounded-md" />
                </button>
                <button
                  className="w-full max-w-[500px] text-left border-2 rounded-lg hover:border-gray-500"
                  onClick={() => {
                    addSectionData(newExperienceSection());
                    setIsOpenSectionModel(false);
                  }}
                >
                  <img src={ExperienceSectionImage.src} alt="Experience Section" className="mt-2 border border-gray-300 rounded-md" />
                </button>
                <button
                  className="w-full max-w-[500px] text-left border-2 rounded-lg hover:border-gray-500"
                  onClick={() => {
                    addSectionData(newThreeColumnGridSection());
                    setIsOpenSectionModel(false);
                  }}
                >
                  <img src={ThreeColumnSectionImage.src} alt="Three Column Section" className="mt-2 border border-gray-300 rounded-md" />
                </button>
                <button
                  className="w-full max-w-[500px] text-left border-2 rounded-lg hover:border-gray-500"
                  onClick={() => {
                    addSectionData(newLevelSection());
                    setIsOpenSectionModel(false);
                  }}
                >
                  <img src={LevelSectionImage.src} alt="Level Section" className="mt-2 border border-gray-300 rounded-md" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {isOpenSampleModel && (
        <div
          id="sample-template-modal"
          className="bg-gray-600 bg-opacity-80 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-items-center content-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
        >
          <div className="relative p-4 w-[1100px] h-[90%] max-w-full max-h-full">
            <div className="flex flex-col relative bg-white border border-default rounded-xl shadow-sm p-4 md:p-6 h-full">
              <div className="flex items-center justify-between border-b border-default pb-4 md:pb-5">
                <h3 className="text-lg font-medium text-heading">Sample Resume</h3>
                <button
                  type="button"
                  className="text-body bg-transparent hover:bg-neutral-tertiary hover:text-heading rounded-base text-sm w-9 h-9 ms-auto inline-flex justify-center items-center"
                  onClick={() => setIsOpenSampleModel(false)}
                >
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6" />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="relative h-[100%]">
                <div className="absolute top-0 left-0 right-0 bottom-0 p-8 bg-gray-200 opacity-100 rounded-lg overflow-auto">
                  <ResumeTemplate data={sampleData} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="flex flex-col bg-white p-6 shadow-md rounded-lg md:col-span-2 min-h-0">
        <div className="flex-1 mb-4 pl-2 pr-2 overflow-y-auto overflow-x-hidden">
          <div className="section-group">
            <div className="relative">
              <div className="section-cover"></div>
              <div className="flex flex-wrap -mx-3 mt-2 mb-4">
                <div className="w-full px-3 mb-2 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Profile Image</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="block w-full text-sm text-gray-500
                      file:mr-4 file:rounded-md file:border-0
                      file:bg-blue-600 file:px-4 file:py-2
                      file:text-white hover:file:bg-blue-700"
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full md:w-1/2 px-3 mb-2 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">First Name</label>
                  <input
                    className="appearance-none block w-full text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="text"
                    onChange={e => setData({ ...data, firstname: e.target.value })}
                    placeholder=""
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Last Name</label>
                  <input
                    className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-last-name"
                    type="text"
                    onChange={e => setData({ ...data, lastname: e.target.value })}
                    placeholder=""
                  />
                </div>
              </div>
            </div>
            <div className="relative pt-8 pb-8 hrline-with-menu">
              <hr className="border-gray-400" />
              <div className="float-menu flex flex-row items-center justify-between bg-white bg-opacity-80 backdrop-blur-md rounded-full px-4 py-3 shadow-lg w-fit mx-auto transition-all duration-300 hover:shadow-xl hover:bg-opacity-90">
                <TooltipButton
                  className="text-gray-600 hover:text-gray-800 mx-2 transition-all duration-200 ease-in-out hover:bg-gray-200 hover:shadow-md rounded-full p-1 focus:outline-none focus:ring-2 focus:ring-gray-500"
                  tooltip="Add section after"
                  onClick={e => {
                    setIsOpenSectionModel(true);
                    setIndexInsert(0);
                  }}
                >
                  <svg stroke="currentColor" viewBox="0 0 24 24" fill="none" className="h-7 w-7" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 6v6m0 0v6m0-6h6m-6 0H6" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"></path>
                  </svg>
                </TooltipButton>
              </div>
            </div>
          </div>
          {data.sections.map((section, index) => {
            if (section.type === "1") {
              return (
                <div key={section.id} className="section-group">
                  <div className="relative">
                    <div className="section-cover"></div>
                    <div className="flex flex-wrap -mx-3 mt-4 mb-2">
                      <div className="w-full px-3 mb-2">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Title</label>
                        <input
                          className="appearance-none block w-full text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                          id="grid-first-name"
                          type="text"
                          placeholder="ex. Achievements"
                          onChange={e => updateSectionData(section.id, "title", e.target.value)}
                        />
                      </div>
                      <div className="w-full px-3 mb-2">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Details</label>
                        <textarea
                          className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          id="grid-last-name"
                          onChange={e => updateSectionData(section.id, "details", e.target.value)}
                          placeholder=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="relative pt-8 pb-8 hrline-with-menu">
                    <hr className="border-gray-400" />
                    <div className="float-menu flex items-center justify-between bg-white bg-opacity-80 backdrop-blur-md rounded-full px-4 py-3 shadow-lg w-fit mx-auto transition-all duration-300 hover:shadow-xl hover:bg-opacity-90">
                      <TooltipButton
                        className="text-gray-600 hover:text-gray-800 mx-2 transition-all duration-200 ease-in-out hover:bg-gray-200 hover:shadow-md rounded-full p-1 focus:outline-none focus:ring-2 focus:ring-gray-500"
                        tooltip="Add section after"
                        onClick={e => {
                          setIsOpenSectionModel(true);
                          setIndexInsert(index + 1);
                        }}
                      >
                        <svg stroke="currentColor" viewBox="0 0 24 24" fill="none" className="h-7 w-7" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 6v6m0 0v6m0-6h6m-6 0H6" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"></path>
                        </svg>
                      </TooltipButton>
                      <TooltipButton
                        className="text-gray-600 hover:text-gray-800 mx-2 transition-all duration-200 ease-in-out hover:bg-gray-200 hover:shadow-md rounded-full p-1 focus:outline-none focus:ring-2 focus:ring-gray-500"
                        tooltip={section.lock ? "This section will not split across pages" : "This section can split across pages"}
                        onClick={e => updateSectionData(section.id, "lock", !section.lock)}
                      >
                        {section.lock ? (
                          <svg stroke="currentColor" viewBox="0 0 448 512" fill="red" className="h-5 w-5 lock" xmlns="http://www.w3.org/2000/svg">
                            <path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"></path>
                          </svg>
                        ) : (
                          <svg stroke="currentColor" viewBox="0 0 576 512" fill="currentColor" className="h-5 w-5 lock-open" xmlns="http://www.w3.org/2000/svg">
                            <path d="M352 144c0-44.2 35.8-80 80-80s80 35.8 80 80v48c0 17.7 14.3 32 32 32s32-14.3 32-32V144C576 64.5 511.5 0 432 0S288 64.5 288 144v48H64c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V256c0-35.3-28.7-64-64-64H352V144z"></path>
                          </svg>
                        )}
                      </TooltipButton>
                      <TooltipButton
                        className="text-gray-600 hover:text-gray-800 mx-2 transition-all duration-200 ease-in-out hover:bg-gray-200 hover:shadow-md rounded-full p-1 focus:outline-none focus:ring-2 focus:ring-gray-500"
                        tooltip="Delete this section"
                        onClick={() => deleteSectionData(section.id)}
                      >
                        <svg stroke="currentColor" viewBox="0 0 24 24" fill="none" className="h-6 w-6" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            strokeWidth="2"
                            strokeLinejoin="round"
                            strokeLinecap="round"
                          ></path>
                        </svg>
                      </TooltipButton>
                    </div>
                  </div>
                </div>
              );
            } else if (section.type === "2") {
              return (
                <div key={section.id} className="section-group">
                  <div className="relative">
                    <div className="section-cover"></div>
                    <div className="flex flex-wrap -mx-3 mt-4 mb-2">
                      <div className="w-full px-3 mb-2">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Title</label>
                        <input
                          className="appearance-none block w-full text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                          id="grid-first-name"
                          type="text"
                          placeholder="ex. Skills"
                          onChange={e => updateSectionData(section.id, "title", e.target.value)}
                        />
                      </div>
                      <div className="w-full px-3 mb-2">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Details</label>
                        <textarea
                          className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          id="grid-last-name"
                          onChange={e => updateSectionData(section.id, "details", e.target.value)}
                          placeholder="ex. Skill 1, Skill 2, Skill 3"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="relative pt-8 pb-8 hrline-with-menu">
                    <hr className="border-gray-400" />
                    <div className="float-menu flex items-center justify-between bg-white bg-opacity-80 backdrop-blur-md rounded-full px-4 py-3 shadow-lg w-fit mx-auto transition-all duration-300 hover:shadow-xl hover:bg-opacity-90">
                      <TooltipButton
                        className="text-gray-600 hover:text-gray-800 mx-2 transition-all duration-200 ease-in-out hover:bg-gray-200 hover:shadow-md rounded-full p-1 focus:outline-none focus:ring-2 focus:ring-gray-500"
                        tooltip="Add section after"
                        onClick={e => {
                          setIsOpenSectionModel(true);
                          setIndexInsert(index + 1);
                        }}
                      >
                        <svg stroke="currentColor" viewBox="0 0 24 24" fill="none" className="h-7 w-7" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 6v6m0 0v6m0-6h6m-6 0H6" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"></path>
                        </svg>
                      </TooltipButton>
                      <TooltipButton
                        className="text-gray-600 hover:text-gray-800 mx-2 transition-all duration-200 ease-in-out hover:bg-gray-200 hover:shadow-md rounded-full p-1 focus:outline-none focus:ring-2 focus:ring-gray-500"
                        tooltip={section.lock ? "This section will not split across pages" : "This section can split across pages"}
                        onClick={e => updateSectionData(section.id, "lock", !section.lock)}
                      >
                        {section.lock ? (
                          <svg stroke="currentColor" viewBox="0 0 448 512" fill="red" className="h-5 w-5 lock" xmlns="http://www.w3.org/2000/svg">
                            <path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"></path>
                          </svg>
                        ) : (
                          <svg stroke="currentColor" viewBox="0 0 576 512" fill="currentColor" className="h-5 w-5 lock-open" xmlns="http://www.w3.org/2000/svg">
                            <path d="M352 144c0-44.2 35.8-80 80-80s80 35.8 80 80v48c0 17.7 14.3 32 32 32s32-14.3 32-32V144C576 64.5 511.5 0 432 0S288 64.5 288 144v48H64c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V256c0-35.3-28.7-64-64-64H352V144z"></path>
                          </svg>
                        )}
                      </TooltipButton>
                      <TooltipButton
                        className="text-gray-600 hover:text-gray-800 mx-2 transition-all duration-200 ease-in-out hover:bg-gray-200 hover:shadow-md rounded-full p-1 focus:outline-none focus:ring-2 focus:ring-gray-500"
                        tooltip="Delete this section"
                        onClick={() => deleteSectionData(section.id)}
                      >
                        <svg stroke="currentColor" viewBox="0 0 24 24" fill="none" className="h-6 w-6" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            strokeWidth="2"
                            strokeLinejoin="round"
                            strokeLinecap="round"
                          ></path>
                        </svg>
                      </TooltipButton>
                    </div>
                  </div>
                </div>
              );
            } else if (section.type === "3") {
              return (
                <div key={section.id} className="section-group">
                  <div className="relative">
                    <div className="section-cover"></div>
                    <div className="flex flex-wrap -mx-3 mt-4 mb-2">
                      <div className="w-full px-3 mb-2">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Title</label>
                        <input
                          className="appearance-none block w-full text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                          id="grid-first-name"
                          type="text"
                          onChange={e => updateSectionData(section.id, "title", e.target.value)}
                          placeholder="ex. Contact"
                        />
                      </div>
                      <div className="w-full md:w-1/2 px-3 mb-2 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Email</label>
                        <input
                          className="appearance-none block w-full text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                          id="grid-first-name"
                          type="text"
                          onChange={e => updateSectionData(section.id, "email", e.target.value)}
                          placeholder=""
                        />
                      </div>
                      <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Phone Number</label>
                        <input
                          className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          id="grid-last-name"
                          type="text"
                          onChange={e => updateSectionData(section.id, "contact", e.target.value)}
                          placeholder=""
                        />
                      </div>
                      <div className="w-full px-3 mb-2">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Location</label>
                        <input
                          className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          id="grid-last-name"
                          type="text"
                          onChange={e => updateSectionData(section.id, "location", e.target.value)}
                          placeholder=""
                        />
                      </div>
                      <div className="w-full px-3 mb-2">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">LinkedIn URL</label>
                        <input
                          className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          id="grid-last-name"
                          type="text"
                          onChange={e => updateSectionData(section.id, "linkedIn", e.target.value)}
                          placeholder=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="relative pt-8 pb-8 hrline-with-menu">
                    <hr className="border-gray-400" />
                    <div className="float-menu flex items-center justify-between bg-white bg-opacity-80 backdrop-blur-md rounded-full px-4 py-3 shadow-lg w-fit mx-auto transition-all duration-300 hover:shadow-xl hover:bg-opacity-90">
                      <TooltipButton
                        className="text-gray-600 hover:text-gray-800 mx-2 transition-all duration-200 ease-in-out hover:bg-gray-200 hover:shadow-md rounded-full p-1 focus:outline-none focus:ring-2 focus:ring-gray-500"
                        tooltip="Add section after"
                        onClick={e => {
                          setIsOpenSectionModel(true);
                          setIndexInsert(index + 1);
                        }}
                      >
                        <svg stroke="currentColor" viewBox="0 0 24 24" fill="none" className="h-7 w-7" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 6v6m0 0v6m0-6h6m-6 0H6" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"></path>
                        </svg>
                      </TooltipButton>
                      <TooltipButton
                        className="text-gray-600 hover:text-gray-800 mx-2 transition-all duration-200 ease-in-out hover:bg-gray-200 hover:shadow-md rounded-full p-1 focus:outline-none focus:ring-2 focus:ring-gray-500"
                        tooltip={section.lock ? "This section will not split across pages" : "This section can split across pages"}
                        onClick={e => updateSectionData(section.id, "lock", !section.lock)}
                      >
                        {section.lock ? (
                          <svg stroke="currentColor" viewBox="0 0 448 512" fill="red" className="h-5 w-5 lock" xmlns="http://www.w3.org/2000/svg">
                            <path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"></path>
                          </svg>
                        ) : (
                          <svg stroke="currentColor" viewBox="0 0 576 512" fill="currentColor" className="h-5 w-5 lock-open" xmlns="http://www.w3.org/2000/svg">
                            <path d="M352 144c0-44.2 35.8-80 80-80s80 35.8 80 80v48c0 17.7 14.3 32 32 32s32-14.3 32-32V144C576 64.5 511.5 0 432 0S288 64.5 288 144v48H64c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V256c0-35.3-28.7-64-64-64H352V144z"></path>
                          </svg>
                        )}
                      </TooltipButton>
                      <TooltipButton
                        className="text-gray-600 hover:text-gray-800 mx-2 transition-all duration-200 ease-in-out hover:bg-gray-200 hover:shadow-md rounded-full p-1 focus:outline-none focus:ring-2 focus:ring-gray-500"
                        tooltip="Delete this section"
                        onClick={() => deleteSectionData(section.id)}
                      >
                        <svg stroke="currentColor" viewBox="0 0 24 24" fill="none" className="h-6 w-6" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            strokeWidth="2"
                            strokeLinejoin="round"
                            strokeLinecap="round"
                          ></path>
                        </svg>
                      </TooltipButton>
                    </div>
                  </div>
                </div>
              );
            } else if (section.type === "4") {
              return (
                <div key={section.id} className="section-group">
                  <div className="relative">
                    <div className="section-cover"></div>
                    <div className="flex flex-wrap -mx-3 mt-4 mb-2">
                      <div className="w-full px-3 mb-2">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Title</label>
                        <input
                          className="appearance-none block w-full text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                          id="grid-first-name"
                          type="text"
                          onChange={e => updateSectionData(section.id, "title", e.target.value)}
                          placeholder="ex. Work Experience / Education"
                        />
                      </div>
                      {section.contents?.map((subSection: any, subIndex: number) => (
                        <span key={section.id + subIndex} className="flex flex-wrap w-full">
                          {subIndex !== 0 && (
                            <div className="w-full px-3 m-auto">
                              <hr className="border-dashed border-gray-400" />
                              <TooltipButton
                                className="text-gray-600 hover:text-gray-800 mt-3 mr-1 float-right transition-all duration-200 ease-in-out hover:bg-gray-200 hover:shadow-md rounded-full p-1 focus:outline-none focus:ring-2 focus:ring-gray-500"
                                tooltip="Delete this Subsection"
                                onClick={() => deleteContentFromSection(section.id, subIndex)}
                              >
                                <svg stroke="currentColor" viewBox="0 0 24 24" fill="none" className="h-6 w-6" xmlns="http://www.w3.org/2000/svg">
                                  <path
                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                    strokeWidth="2"
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                  ></path>
                                </svg>
                              </TooltipButton>
                            </div>
                          )}
                          <div className="w-full md:w-1/2 px-3 mb-2 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Location</label>
                            <input
                              className="appearance-none block w-full text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                              id="grid-first-name"
                              type="text"
                              onChange={e => updateSectionData(section.id, "location", e.target.value, subIndex)}
                              placeholder=""
                            />
                          </div>
                          <div className="w-full md:w-1/2 flex">
                            <div className="w-full md:w-1/2 px-3">
                              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Start Time</label>
                              <input
                                className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="grid-last-name"
                                type="text"
                                onChange={e => updateSectionData(section.id, "durationstart", e.target.value, subIndex)}
                                placeholder=""
                              />
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">End Time</label>
                              <input
                                className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="grid-last-name"
                                type="text"
                                onChange={e => updateSectionData(section.id, "durationend", e.target.value, subIndex)}
                                placeholder=""
                              />
                            </div>
                          </div>
                          <div className="w-full px-3 mb-2">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Subtitle</label>
                            <input
                              className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                              id="grid-last-name"
                              type="text"
                              onChange={e => updateSectionData(section.id, "subtitle", e.target.value, subIndex)}
                              placeholder=""
                            />
                          </div>
                          <div className="w-full px-3 mb-2">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Organization</label>
                            <input
                              className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                              id="grid-last-name"
                              type="text"
                              onChange={e => updateSectionData(section.id, "organization", e.target.value, subIndex)}
                              placeholder=""
                            />
                          </div>
                          <div className="w-full px-3 mb-2">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Details</label>
                            <textarea
                              className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                              id="grid-last-name"
                              onChange={e => updateSectionData(section.id, "details", e.target.value, subIndex)}
                              placeholder=""
                            />
                          </div>
                        </span>
                      ))}
                      <div className="w-full px-3 mb-2">
                        <div
                          className="flex justify-center p-4 border-2 border-dashed rounded-md hover:bg-gray-100 cursor-pointer"
                          onClick={e => addContentToSection(section.id, newExperienceContent())}
                        >
                          <svg stroke="currentColor" viewBox="0 0 24 24" fill="none" className="h-10 w-10" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 6v6m0 0v6m0-6h6m-6 0H6" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative pt-8 pb-8 hrline-with-menu">
                    <hr className="border-gray-400" />
                    <div className="float-menu flex items-center justify-between bg-white bg-opacity-80 backdrop-blur-md rounded-full px-4 py-3 shadow-lg w-fit mx-auto transition-all duration-300 hover:shadow-xl hover:bg-opacity-90">
                      <TooltipButton
                        className="text-gray-600 hover:text-gray-800 mx-2 transition-all duration-200 ease-in-out hover:bg-gray-200 hover:shadow-md rounded-full p-1 focus:outline-none focus:ring-2 focus:ring-gray-500"
                        tooltip="Add section after"
                        onClick={e => {
                          setIsOpenSectionModel(true);
                          setIndexInsert(index + 1);
                        }}
                      >
                        <svg stroke="currentColor" viewBox="0 0 24 24" fill="none" className="h-7 w-7" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 6v6m0 0v6m0-6h6m-6 0H6" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"></path>
                        </svg>
                      </TooltipButton>
                      <TooltipButton
                        className="text-gray-600 hover:text-gray-800 mx-2 transition-all duration-200 ease-in-out hover:bg-gray-200 hover:shadow-md rounded-full p-1 focus:outline-none focus:ring-2 focus:ring-gray-500"
                        tooltip={section.lock ? "This section will not split across pages" : "This section can split across pages"}
                        onClick={e => updateSectionData(section.id, "lock", !section.lock)}
                      >
                        {section.lock ? (
                          <svg stroke="currentColor" viewBox="0 0 448 512" fill="red" className="h-5 w-5 lock" xmlns="http://www.w3.org/2000/svg">
                            <path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"></path>
                          </svg>
                        ) : (
                          <svg stroke="currentColor" viewBox="0 0 576 512" fill="currentColor" className="h-5 w-5 lock-open" xmlns="http://www.w3.org/2000/svg">
                            <path d="M352 144c0-44.2 35.8-80 80-80s80 35.8 80 80v48c0 17.7 14.3 32 32 32s32-14.3 32-32V144C576 64.5 511.5 0 432 0S288 64.5 288 144v48H64c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V256c0-35.3-28.7-64-64-64H352V144z"></path>
                          </svg>
                        )}
                      </TooltipButton>
                      <TooltipButton
                        className="text-gray-600 hover:text-gray-800 mx-2 transition-all duration-200 ease-in-out hover:bg-gray-200 hover:shadow-md rounded-full p-1 focus:outline-none focus:ring-2 focus:ring-gray-500"
                        tooltip="Delete this section"
                        onClick={() => deleteSectionData(section.id)}
                      >
                        <svg stroke="currentColor" viewBox="0 0 24 24" fill="none" className="h-6 w-6" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            strokeWidth="2"
                            strokeLinejoin="round"
                            strokeLinecap="round"
                          ></path>
                        </svg>
                      </TooltipButton>
                    </div>
                  </div>
                </div>
              );
            } else if (section.type === "5") {
              return (
                <div key={section.id} className="section-group">
                  <div className="relative">
                    <div className="section-cover"></div>
                    <div className="flex flex-wrap -mx-3 mt-4 mb-2">
                      <div className="w-full px-3 mb-2">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Title</label>
                        <input
                          className="appearance-none block w-full text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                          id="grid-first-name"
                          type="text"
                          placeholder="ex. Languages / Skills"
                          onChange={e => updateSectionData(section.id, "title", e.target.value)}
                        />
                      </div>
                      {section.contents?.map((subSection: any, subIndex: number) => (
                        <span key={section.id + subIndex} className="flex flex-wrap w-full">
                          {subIndex !== 0 && (
                            <div className="w-full px-3 m-auto">
                              <hr className="border-dashed border-gray-400" />
                              <TooltipButton
                                className="text-gray-600 hover:text-gray-800 mt-3 mr-1 float-right transition-all duration-200 ease-in-out hover:bg-gray-200 hover:shadow-md rounded-full p-1 focus:outline-none focus:ring-2 focus:ring-gray-500"
                                tooltip="Delete this Subsection"
                                onClick={() => deleteContentFromSection(section.id, subIndex)}
                              >
                                <svg stroke="currentColor" viewBox="0 0 24 24" fill="none" className="h-6 w-6" xmlns="http://www.w3.org/2000/svg">
                                  <path
                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                    strokeWidth="2"
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                  ></path>
                                </svg>
                              </TooltipButton>
                            </div>
                          )}
                          <div className="w-full md:w-1/2 px-3 mb-2">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Subtitle</label>
                            <input
                              className="appearance-none block w-full text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                              id="grid-first-name"
                              type="text"
                              onChange={e => updateSectionData(section.id, "subtitle", e.target.value, subIndex)}
                              placeholder=""
                            />
                          </div>
                          <div className="w-full md:w-1/2 px-3 mb-2">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Level</label>
                            <select
                              className="appearance-none block w-full text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                              id="grid-first-name"
                              onChange={e => updateSectionData(section.id, "level", e.target.value, subIndex)}
                            >
                              <option value="1">Beginner</option>
                              <option value="2">Basic</option>
                              <option value="3">Intermediate</option>
                              <option value="4">Advanced</option>
                              <option value="5">Expert</option>
                            </select>
                          </div>
                        </span>
                      ))}
                      <div className="w-full px-3 mb-2">
                        <div
                          className="flex justify-center p-4 border-2 border-dashed rounded-md hover:bg-gray-100 cursor-pointer"
                          onClick={e => addContentToSection(section.id, newLevelContent())}
                        >
                          <svg stroke="currentColor" viewBox="0 0 24 24" fill="none" className="h-10 w-10" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 6v6m0 0v6m0-6h6m-6 0H6" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative pt-8 pb-8 hrline-with-menu">
                    <hr className="border-gray-400" />
                    <div className="float-menu flex items-center justify-between bg-white bg-opacity-80 backdrop-blur-md rounded-full px-4 py-3 shadow-lg w-fit mx-auto transition-all duration-300 hover:shadow-xl hover:bg-opacity-90">
                      <TooltipButton
                        className="text-gray-600 hover:text-gray-800 mx-2 transition-all duration-200 ease-in-out hover:bg-gray-200 hover:shadow-md rounded-full p-1 focus:outline-none focus:ring-2 focus:ring-gray-500"
                        tooltip="Add section after"
                        onClick={e => {
                          setIsOpenSectionModel(true);
                          setIndexInsert(index + 1);
                        }}
                      >
                        <svg stroke="currentColor" viewBox="0 0 24 24" fill="none" className="h-7 w-7" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 6v6m0 0v6m0-6h6m-6 0H6" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"></path>
                        </svg>
                      </TooltipButton>
                      <TooltipButton
                        className="text-gray-600 hover:text-gray-800 mx-2 transition-all duration-200 ease-in-out hover:bg-gray-200 hover:shadow-md rounded-full p-1 focus:outline-none focus:ring-2 focus:ring-gray-500"
                        tooltip={section.lock ? "This section will not split across pages" : "This section can split across pages"}
                        onClick={e => updateSectionData(section.id, "lock", !section.lock)}
                      >
                        {section.lock ? (
                          <svg stroke="currentColor" viewBox="0 0 448 512" fill="red" className="h-5 w-5 lock" xmlns="http://www.w3.org/2000/svg">
                            <path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"></path>
                          </svg>
                        ) : (
                          <svg stroke="currentColor" viewBox="0 0 576 512" fill="currentColor" className="h-5 w-5 lock-open" xmlns="http://www.w3.org/2000/svg">
                            <path d="M352 144c0-44.2 35.8-80 80-80s80 35.8 80 80v48c0 17.7 14.3 32 32 32s32-14.3 32-32V144C576 64.5 511.5 0 432 0S288 64.5 288 144v48H64c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V256c0-35.3-28.7-64-64-64H352V144z"></path>
                          </svg>
                        )}
                      </TooltipButton>
                      <TooltipButton
                        className="text-gray-600 hover:text-gray-800 mx-2 transition-all duration-200 ease-in-out hover:bg-gray-200 hover:shadow-md rounded-full p-1 focus:outline-none focus:ring-2 focus:ring-gray-500"
                        tooltip="Delete this section"
                        onClick={() => deleteSectionData(section.id)}
                      >
                        <svg stroke="currentColor" viewBox="0 0 24 24" fill="none" className="h-6 w-6" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            strokeWidth="2"
                            strokeLinejoin="round"
                            strokeLinecap="round"
                          ></path>
                        </svg>
                      </TooltipButton>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
        <div className="flex flex-wrap justify-end items-baseline -mx-3 px-3 mt-auto">
          {isLoading && <label className="block tracking-wide text-gray-700 text-sm font-bold mr-2">Generating PDF...</label>}
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={generatePDF}>
            Generate PDF
          </button>
        </div>
      </div>
      <div className="relative md:col-span-3 min-h-0">
        <div className="absolute top-0 left-0 right-0 bottom-0 p-8 bg-gray-200 opacity-100 rounded-lg overflow-auto">
          <ResumeTemplate data={data} />
        </div>
        <div className="absolute right-0 bottom-0 pr-6 pb-6 mb:pr-8 mb:pb-8">
          <button
            className="flex flex-wrap gap-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-3 rounded"
            onClick={() => setIsOpenSampleModel(true)}
          >
            <span className="mt-[1px]">Sample</span>
            <svg
              stroke="currentColor"
              viewBox="0 0 24 24"
              fill="none"
              className="h-6 w-6"
              strokeWidth="2"
              strokeLinejoin="round"
              strokeLinecap="round"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
