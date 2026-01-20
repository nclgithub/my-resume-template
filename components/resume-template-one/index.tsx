import { Page, Text, View, Document, StyleSheet, Image, Link, Font } from "@react-pdf/renderer";
import { TemplateData } from "@/param/datatype";
import TemplateOneSectionOne from "./section-one";
import TemplateOneSectionTwo from "./section-two";
import TemplateOneSectionThree from "./section-three";
import TemplateOneSectionFour from "./section-four";
import TemplateOneSectionFive from "./section-five";
import { SuppressResumePDFErrorMessage } from "../SuppressResumePDFErrorMessage";

const styles = StyleSheet.create({
  main: {
    display: "flex",
    flexDirection: "column",
    paddingTop: 40,
    paddingBottom: 40,
    backgroundColor: "#FFFFFF",
    fontSize: 10
  },
  content: {
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    color: "#000000",
    marginTop: -40
  },
  headerContent: {
    position: "relative",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 36,
    marginBottom: 12,
    fontSize: 18,
    fontWeight: 600,
    color: "#8675A9",
    backgroundColor: "rgb(134, 117, 169, 0.1)"
  },
  profilePic: {
    position: "absolute",
    right: 36,
    top: 20,
    width: 130,
    height: 130,
    borderRadius: 90
  }
});

Font.registerHyphenationCallback(word => [word]);

export default function ResumeTemplateOne({ data, isPrint = true }: { data: TemplateData; isPrint?: boolean }) {
  return (
    <>
      <Document>
        <Page size="A4" style={styles.main}>
          <View style={styles.content}>
            <View style={styles.headerContent}>
              <Text>
                {data?.firstname} {data?.lastname}
              </Text>
              {data?.profilepic &&
                (isPrint ? <Image src={data.profilepic} style={styles.profilePic} /> : <img src={data.profilepic} style={styles.profilePic} />)}
            </View>
            {data?.sections?.map((section, sectionindex) => {
              const isFirst = sectionindex === 0;

              if (section.type === "1") {
                return <TemplateOneSectionOne key={sectionindex} section={section} isFirst={isFirst} />;
              }
              if (section.type === "2") {
                return <TemplateOneSectionTwo key={sectionindex} section={section} isFirst={isFirst} />;
              }
              if (section.type === "3") {
                return <TemplateOneSectionThree key={sectionindex} section={section} isFirst={isFirst} isPrint={isPrint} />;
              }
              if (section.type === "4") {
                return <TemplateOneSectionFour key={sectionindex} section={section} isFirst={isFirst} />;
              }
              if (section.type === "5") {
                return <TemplateOneSectionFive key={sectionindex} section={section} isFirst={isFirst} />;
              }
            })}
          </View>
        </Page>
      </Document>
      <SuppressResumePDFErrorMessage />
    </>
  );
}
