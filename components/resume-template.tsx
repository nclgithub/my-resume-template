'use client';

import { TemplateData } from '@/param/datatype';

export default function ResumeTemplate({ data }: { data: TemplateData }) {
  return (
    <div
      className="text-sm leading-tight bg-white transition-all origin-top-left resume-template-wrapper m-auto w-full max-w-[795px]"
      id="resume-container"
    >
      <div className="overflow-hidden leading-normal text-black">
        <div>
          <div
            className="relative px-4 md:px-12 mb-3 text-2xl font-semibold"
            style={{ color: '#8675A9' }}
          >
            <div
              className="absolute top-0 left-0 w-full h-full opacity-10"
              style={{ backgroundColor: '#8675A9' }}
            ></div>
            <div className="flex flex-col-reverse md:block items-center">
              <div className="py-4 md:py-12 text-center md:text-left">
                {data?.firstname} {data?.lastname}
                <div
                  style={{ display: 'none' }}
                  className="mt-1 text-sm text-subtle"
                ></div>
              </div>
              {data?.profilepic && (
                <img
                  src={data.profilepic}
                  className="relative md:absolute md:right-12 w-[120px] h-[120px] md:w-[180px] md:h-[180px] mb-4 md:mb-0 rounded-full object-cover dropshadow-md mx-auto md:mx-0"
                  style={{
                    top: '1.5rem',
                  }}
                  alt="Profile Image"
                />
              )}
            </div>
          </div>
          {data?.sections?.map((section, sectionindex) => {
            if (section.type === '1') {
              return (
                <div
                  key={section.id}
                  className={
                    'px-4 md:px-12 pb-3 ' +
                    (section.lock ? 'avoid-page-break' : '')
                  }
                >
                  <div className="avoid-page-break">
                    {sectionindex !== 0 && (
                      <div className="flex space-x-3">
                        <div className="w-1/4 border-t-2 shrink-0 border-subtle"></div>
                        <div className="border-t-2 grow border-subtle"></div>
                      </div>
                    )}
                    <div className="flex flex-col md:flex-row pt-3 space-y-2 md:space-y-0 md:space-x-3">
                      <div
                        className="w-full md:w-1/4 font-semibold uppercase shrink-0 border-subtle"
                        style={{ color: '#8675A9' }}
                      >
                        {section.title}
                      </div>
                      <div className="grow border-subtle min-w-0">
                        <ul className="pl-4 mt-1 list-disc justify-text">
                          {section.details
                            .split('\n')
                            .slice(0, 1)
                            .map((item: string, index: number) => (
                              <li
                                key={section.id + index}
                                className="break-words"
                              >
                                {item}
                              </li>
                            ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-3">
                    <div className="w-full md:w-1/4 shrink-0"></div>
                    <div className="grow border-subtle min-w-0">
                      <ul className="pl-4 list-disc justify-text">
                        {section.details &&
                          section.details
                            .split('\n')
                            .slice(1)
                            .map((item: string, index: number) => (
                              <li
                                key={section.id + index}
                                className="avoid-page-break break-words"
                              >
                                {item}
                              </li>
                            ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            } else if (section.type === '2') {
              return (
                <div
                  key={section.id}
                  className={
                    'px-4 md:px-12 pb-3 ' +
                    (section.lock ? 'avoid-page-break' : '')
                  }
                >
                  <div className="avoid-page-break">
                    {sectionindex !== 0 && (
                      <div className="flex space-x-3">
                        <div className="w-1/4 border-t-2 shrink-0 border-subtle"></div>
                        <div className="border-t-2 grow border-subtle"></div>
                      </div>
                    )}
                    <div className="flex flex-col md:flex-row pt-3 space-y-2 md:space-y-0 md:space-x-3">
                      <div
                        className="w-full md:w-1/4 font-semibold uppercase shrink-0 border-subtle"
                        style={{ color: '#8675A9' }}
                      >
                        {section.title}
                      </div>
                      <div className="flex flex-wrap grow border-subtle">
                        {section.details &&
                          section.details
                            .split(',')
                            .slice(0, 3)
                            .map((item: string, index: number) => (
                              <div
                                key={section.id + index}
                                className="pr-2 w-1/2 md:w-1/3 break-words"
                              >
                                {item}
                              </div>
                            ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-3">
                    <div className="w-full md:w-1/4 shrink-0"></div>
                    <div className="flex flex-wrap grow border-subtle min-w-0">
                      {section.details &&
                        section.details
                          .split(',')
                          .slice(3)
                          .map((item: string, index: number) => (
                            <div
                              key={section.id + index}
                              className="pr-2 w-1/2 md:w-1/3 break-words"
                            >
                              {item}
                            </div>
                          ))}
                    </div>
                  </div>
                </div>
              );
            } else if (section.type === '3') {
              return (
                <div
                  key={section.id}
                  className={
                    'px-4 md:px-12 pb-3 ' +
                    (section.lock ? 'avoid-page-break' : '')
                  }
                >
                  <div className="avoid-page-break">
                    {sectionindex !== 0 && (
                      <div className="flex space-x-3">
                        <div className="w-1/4 border-t-2 shrink-0 border-subtle"></div>
                        <div className="border-t-2 grow border-subtle"></div>
                      </div>
                    )}
                    <div className="flex flex-col md:flex-row pt-3 space-y-2 md:space-y-0 md:space-x-3">
                      <div
                        className="w-full md:w-1/4 font-semibold uppercase shrink-0"
                        style={{ color: '#8675A9' }}
                      >
                        {section.title}
                      </div>
                      <div className="grow">
                        <span className="flex items-center space-x-1">
                          <span
                            className="jlu-icon jlu-icon_mail-outline"
                            style={{
                              width: '14px',
                              height: '14px',
                              color: '#8675A9',
                            }}
                          ></span>{' '}
                          <span className="no-underline">{section.email}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-3">
                    <div className="w-full md:w-1/4"></div>
                    <div className="grow">
                      <span className="flex items-center space-x-1">
                        <span
                          className="jlu-icon jlu-icon_call"
                          style={{
                            width: '14px',
                            height: '14px',
                            color: '#8675A9',
                          }}
                        ></span>{' '}
                        <span className="no-underline">{section.contact}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <span
                          className="jlu-icon jlu-icon_location_on"
                          style={{
                            width: '14px',
                            height: '14px',
                            color: '#8675A9',
                          }}
                        ></span>
                        <span className="no-underline">{section.location}</span>
                        <span style={{ display: 'none' }}>,</span>
                        <span style={{ display: 'none' }}>,</span>
                      </span>
                      <a
                        className="flex items-center space-x-1 no-underline"
                        href={section.linkedIn}
                        target="_blank"
                      >
                        <span
                          className="jlu-icon jlu-icon_linkedin"
                          style={{
                            width: '14px',
                            height: '14px',
                            color: '#8675A9',
                          }}
                        ></span>
                        <span>{section.linkedIn}</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            } else if (section.type === '4') {
              return (
                <div
                  key={section.id}
                  className={
                    'px-4 md:px-12 ' + (section.lock ? 'avoid-page-break' : '')
                  }
                >
                  <div className="avoid-page-break">
                    {sectionindex !== 0 && (
                      <div className="flex space-x-3">
                        <div className="w-1/4 border-t-2 shrink-0 border-subtle"></div>
                        <div className="border-t-2 grow border-subtle"></div>
                      </div>
                    )}
                    <div
                      className="py-3 font-semibold uppercase"
                      style={{ color: '#8675A9' }}
                    >
                      {section.title}
                    </div>
                    {section.contents
                      ?.slice(0, 1)
                      .map((subSection: any, subIndex: number) => (
                        <div
                          key={section.id + subIndex}
                          className="flex flex-col md:flex-row pb-3 space-y-2 md:space-y-0 md:space-x-3"
                        >
                          <div className="w-full md:w-1/4 shrink-0 text-subtle">
                            {subSection.location} <br />
                            {subSection.durationstart} –{' '}
                            {subSection.durationend}
                          </div>
                          <div className="grow min-w-0">
                            <div
                              className="text-base"
                              style={{ color: '#8675A9' }}
                            >
                              <span className="font-semibold">
                                {subSection.subtitle}
                              </span>
                              <br />
                              {subSection.organization}
                            </div>
                            <ul className="pl-4 mt-1 list-disc justify-text">
                              {subSection.details &&
                                subSection.details
                                  .split('\n')
                                  .map((item: string, index: number) => (
                                    <li
                                      key={section.id + index}
                                      className="break-words"
                                    >
                                      {item}
                                    </li>
                                  ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                  </div>
                  {section.contents
                    ?.slice(1)
                    .map((subSection: any, subIndex: number) => (
                      <div
                        key={section.id + subIndex}
                        className="flex flex-col md:flex-row pb-3 space-y-2 md:space-y-0 md:space-x-3 avoid-page-break"
                      >
                        <div className="w-full md:w-1/4 shrink-0 text-subtle">
                          {subSection.location} <br />
                          {subSection.durationstart} – {subSection.durationend}
                        </div>
                        <div className="grow min-w-0">
                          <div
                            className="text-base"
                            style={{ color: '#8675A9' }}
                          >
                            <span className="font-semibold">
                              {subSection.subtitle}
                            </span>
                            <br />
                            {subSection.organization}
                          </div>
                          <ul className="pl-4 mt-1 list-disc justify-text">
                            {subSection.details &&
                              subSection.details
                                .split('\n')
                                .map((item: string, index: number) => (
                                  <li
                                    key={section.id + index}
                                    className="break-words"
                                  >
                                    {item}
                                  </li>
                                ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                </div>
              );
            } else if (section.type === '5') {
              return (
                <div
                  key={section.id}
                  className={
                    'px-4 md:px-12 pb-3 ' +
                    (section.lock ? 'avoid-page-break' : '')
                  }
                >
                  <div className="avoid-page-break">
                    {sectionindex !== 0 && (
                      <div className="flex space-x-3">
                        <div className="w-1/4 border-t-2 shrink-0 border-subtle"></div>
                        <div className="border-t-2 grow border-subtle"></div>
                      </div>
                    )}
                    <div className="flex flex-col md:flex-row py-3 space-y-2 md:space-y-0 md:space-x-3">
                      <div
                        className="w-full md:w-1/4 font-semibold uppercase shrink-0 border-subtle"
                        style={{ color: '#8675A9' }}
                      >
                        {section.title}
                      </div>
                      <div className="grow border-subtle">
                        <div className="flex flex-wrap -mt-3">
                          {section.contents
                            ?.slice(0, 2)
                            .map((subSection: any, subIndex: number) => (
                              <div
                                key={section.id + subIndex}
                                className="pr-6 flex flex-wrap pt-3 w-1/2"
                              >
                                <div className="flex w-full items-start">
                                  <span className="mr-1 flex-1 min-w-0 break-words">
                                    {subSection.subtitle}
                                  </span>
                                  <span className="text-subtle whitespace-nowrap">
                                    {subSection.level == 1
                                      ? 'Beginner'
                                      : subSection.level == 2
                                      ? 'Basic'
                                      : subSection.level == 3
                                      ? 'Intermediate'
                                      : subSection.level == 4
                                      ? 'Advanced'
                                      : subSection.level == 5
                                      ? 'Expert'
                                      : ''}
                                  </span>
                                </div>
                                <div className="flex mt-1 space-x-1 w-full">
                                  {Array.from({ length: 5 }).map(
                                    (_, eachindex) => {
                                      if (eachindex < subSection.level) {
                                        return (
                                          <span
                                            style={{
                                              backgroundColor: '#8675A9',
                                            }}
                                            className="h-1 grow bg-light"
                                            key={eachindex + eachindex}
                                          ></span>
                                        );
                                      } else {
                                        return (
                                          <span
                                            style={{
                                              backgroundColor: '#f4f4f4',
                                            }}
                                            className="h-1 grow bg-light"
                                            key={eachindex + eachindex}
                                          ></span>
                                        );
                                      }
                                    }
                                  )}
                                </div>
                              </div>
                            ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-3 avoid-page-break">
                    <div className="w-full md:w-1/4"></div>
                    <div className="grow border-subtle">
                      <div className="flex flex-wrap -mt-3">
                        {section.contents
                          ?.slice(2)
                          .map((subSection: any, subIndex: number) => (
                            <div
                              key={section.id + subIndex}
                              className="pr-6 flex flex-wrap pt-3 w-1/2"
                            >
                              <div className="flex w-full items-start">
                                <span className="mr-1 flex-1 min-w-0 break-words">
                                  {subSection.subtitle}
                                </span>
                                <span className="text-subtle whitespace-nowrap">
                                  {subSection.level == 1
                                    ? 'Beginner'
                                    : subSection.level == 2
                                    ? 'Basic'
                                    : subSection.level == 3
                                    ? 'Intermediate'
                                    : subSection.level == 4
                                    ? 'Advanced'
                                    : subSection.level == 5
                                    ? 'Expert'
                                    : ''}
                                </span>
                              </div>
                              <div className="flex mt-1 space-x-1 w-full">
                                {Array.from({ length: 5 }).map(
                                  (_, eachindex) => {
                                    if (eachindex < subSection.level) {
                                      return (
                                        <span
                                          style={{ backgroundColor: '#8675A9' }}
                                          className="h-1 grow bg-light"
                                          key={eachindex + eachindex}
                                        ></span>
                                      );
                                    } else {
                                      return (
                                        <span
                                          style={{ backgroundColor: '#f4f4f4' }}
                                          className="h-1 grow bg-light"
                                          key={eachindex + eachindex}
                                        ></span>
                                      );
                                    }
                                  }
                                )}
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          })}
          {/* <div className="px-12 avoid-page-break">
            <div className="flex space-x-3">
              <div className="w-1/4 border-t-2 shrink-0 border-subtle"></div>
              <div className="border-t-2 grow border-subtle"></div>
            </div>
            <div className="flex pb-3 py-3 space-x-3 avoid-page-break">
              <div className="w-1/4 font-semibold uppercase shrink-0 border-subtle" style={{ color: "#8675A9" }}>
                <div className="w-32 h-3 bg-linear-to-r from-gray-300 via-gray-500 to-gray-700"></div>
              </div>
              <div className="grow border-subtle">
                <div className="w-96 h-3 mb-2 bg-linear-to-r from-gray-300 via-gray-500 to-gray-700"></div>
                <div className="w-96 h-3 mb-2 bg-linear-to-r from-gray-300 via-gray-500 to-gray-700"></div>
                <div className="w-96 h-3 mb-2 bg-linear-to-r from-gray-300 via-gray-500 to-gray-700"></div>
                <div className="w-96 h-3 mb-2 bg-linear-to-r from-gray-300 via-gray-500 to-gray-700"></div>
                <div className="w-96 h-3 mb-2 bg-linear-to-r from-gray-300 via-gray-500 to-gray-700"></div>
              </div>
            </div>
          </div> */}
          {/* <div className="flex px-12 space-x-3 avoid-page-break">
            <div className="py-3 w-1/4 font-semibold uppercase border-t-2 shrink-0 border-subtle"
              style={{ color: "#8675A9" }}>Summary</div>
            <div className="py-3 border-t-2 grow border-subtle justify-text">Dynamic Software Engineer
              with over two years of experience in developing innovative applications
              and integrating AI technologies. Proficient in coordinating development
              efforts, enhancing user experiences, and ensuring high-quality outcomes.
              Achievements include leading the enhancement of x-ray image management
              software, which significantly improved operational efficiency. Eager to
              leverage unique skills in software development to meet the challenges of
              the industry.</div>
          </div> */}
          {/* <div className="flex px-12 space-x-3 avoid-page-break">
          <div className="py-3 w-1/4 font-semibold uppercase border-t-2 shrink-0 border-subtle"
            style={{ color: "#8675A9" }}>Certificates</div>
          <div className="pt-3 border-t-2 grow border-subtle">
            <div className="pb-3">
              <div className="text-base" style={{ color: "#8675A9" }}><span className="font-semibold">Basic Ionising Radiation Safety (Industrial Radiography)
                For R1 Certificate </span><br />Republic Polytechnic</div>
              <div className="mt-1 text-sm">04/2024</div>
            </div>
            <div className="pb-3">
              <div className="text-base" style={{ color: "#8675A9" }}><span className="font-semibold">HUAWEI
                HCIA-AI</span><br />Huawei</div>
              <div className="mt-1 text-sm">02/2023</div>
            </div>
          </div>
        </div> */}
        </div>
      </div>
    </div>
  );
}
