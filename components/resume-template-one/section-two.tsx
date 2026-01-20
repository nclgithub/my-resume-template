import { Page, Text, View, Document, StyleSheet, Image, Link, Font } from "@react-pdf/renderer";
import { ThreeColumnGridSection } from "@/param/datatype";

const styles = StyleSheet.create({
  sectionMain: {
    paddingLeft: 36,
    paddingRight: 36,
    paddingBottom: 6
  },
  dividerRow: {
    display: "flex",
    flexDirection: "row"
  },
  dividerSmall: {
    flexBasis: "25%",
    borderTopWidth: 2,
    borderStyle: "solid",
    borderTopColor: "#c6c9ce",
    flexShrink: 0,
    marginRight: 12
  },
  dividerLarge: {
    flex: 1,
    borderTopWidth: 2,
    borderStyle: "solid",
    borderTopColor: "#c6c9ce"
  },
  contentRow: {
    display: "flex",
    flexDirection: "row",
    paddingTop: 12
  },
  sectionTitle: {
    flexBasis: "25%",
    fontWeight: 600,
    textTransform: "uppercase",
    color: "#8675A9",
    flexShrink: 0,
    marginRight: 12
  },
  sectionDetails: {
    flex: 1,
    minWidth: 0,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginLeft: 2
  },
  itemBox: {
    flexBasis: "33%",
    paddingRight: 24,
    wordBreak: "break-word",
    lineHeight: 0.9,
    textAlign: "justify"
  },
  secondContentRow: {
    display: "flex",
    flexDirection: "row"
  }
});

export default function TemplateOneSectionTwo({ section, isFirst }: { section: ThreeColumnGridSection; isFirst: boolean }) {
  const eachRowDetails = [];

  if (section.details) {
    let temp = [];
    for (const detail of section.details.split(",")) {
      temp.push(detail);
      if (temp.length === 3) {
        eachRowDetails.push(temp);
        temp = [];
      }
    }
    if (temp.length > 0) eachRowDetails.push(temp);
  }

  const Separator = () =>
    !isFirst && (
      <View style={styles.dividerRow}>
        <View style={styles.dividerSmall} />
        <View style={styles.dividerLarge} />
      </View>
    );

  return (
    <View style={styles.sectionMain} wrap={!section.lock}>
      <View wrap={false}>
        <Separator />
        <View style={styles.contentRow}>
          <View style={styles.sectionTitle}>
            <Text>{section.title}</Text>
          </View>
          <View style={styles.sectionDetails}>
            {eachRowDetails &&
              eachRowDetails[0].map((item, index) => (
                <Text key={index} style={styles.itemBox}>
                  {item}
                </Text>
              ))}
          </View>
        </View>
      </View>
      {eachRowDetails &&
        eachRowDetails.slice(1).map((details, index) => (
          <View style={styles.secondContentRow} wrap={false}>
            <View style={styles.sectionTitle}><Text>&nbsp;</Text></View>
            <View style={styles.sectionDetails}>
              {details.map((item, subindex) => (
                <Text key={subindex} style={styles.itemBox}>
                  {item}
                </Text>
              ))}
            </View>
          </View>
        ))}
    </View>
  );
}
