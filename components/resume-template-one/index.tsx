import { Page, Text, View, Document, StyleSheet, Image, Link, Font } from "@react-pdf/renderer";
import { TemplateData } from "@/param/datatype";
import TemplateOneSectionOne from "./section-one";
import TemplateOneSectionTwo from "./section-two";
import TemplateOneSectionThree from "./section-three";
import TemplateOneSectionFour from "./section-four";
import TemplateOneSectionFive from "./section-five";

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#FFFFFF",
    margin: "auto",
    fontSize: 10,
    width: "100%",
    flex: 1,
  },
  content: {
    overflow: "hidden",
    color: "#000000",
    marginTop: -40
  },
  headerContainer: {
    position: "relative",
    paddingHorizontal: 36,
    marginBottom: 12,
    fontSize: 18,
    fontWeight: 600,
    color: "#8675A9"
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "#8675A9",
    opacity: 0.1
  },
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 48
  },
  profilePic: {
    position: "absolute",
    right: 36,
    top: 20,
    width: 130,
    height: 130,
    borderRadius: 90,
    objectFit: "cover"
  }
});

Font.registerHyphenationCallback(word => [word]);

export default function ResumeTemplateOne({ data }: { data: TemplateData }) {
  return (
    <Document>
      <Page size="A4" style={{ paddingVertical: 40 }}>
        <View style={styles.wrapper}>
          <View style={styles.content}>
            <View style={styles.headerContainer}>
              <View style={styles.overlay} />
              <View style={styles.headerContent}>
                <Text>
                  {data?.firstname} {data?.lastname}
                </Text>
              </View>
              {data?.profilepic && <Image src={data.profilepic} style={styles.profilePic} />}
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
                return <TemplateOneSectionThree key={sectionindex} section={section} isFirst={isFirst} />;
              }
              if (section.type === "4") {
                return <TemplateOneSectionFour key={sectionindex} section={section} isFirst={isFirst} />;
              }
              if (section.type === "5") {
                return <TemplateOneSectionFive key={sectionindex} section={section} isFirst={isFirst} />;
              }
            })}
          </View>
        </View>
      </Page>
    </Document>
  );
}
