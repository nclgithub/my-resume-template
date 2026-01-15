import { Page, Text, View, Document, StyleSheet, Image, Link, Font } from "@react-pdf/renderer";
import { ThreeColumnGridSection } from "@/param/datatype";

const styles = StyleSheet.create({
  sectionMain: {
    display: "flex",
    paddingLeft: 36,
    paddingRight: 36,
    paddingBottom: 6
  },
  dividerRow: {
    flexDirection: "row"
  },
  dividerSmall: {
    flexBasis: "25%",
    borderTopWidth: 2,
    borderTopColor: "#c6c9ce",
    flexShrink: 0,
    marginRight: 12
  },
  dividerLarge: {
    flex: 1,
    borderTopWidth: 2,
    borderTopColor: "#c6c9ce"
  },
  contentRow: {
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
    flexDirection: "row"
  }
});

export default function TemplateOneSectionTwo({ section, isFirst }: { section: ThreeColumnGridSection; isFirst: boolean }) {
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
            {section.details &&
              section.details
                .split(",")
                .slice(0, 3)
                .map((item, index) => (
                  <Text key={index} style={styles.itemBox}>
                    {item}
                  </Text>
                ))}
          </View>
        </View>
      </View>
      <View style={styles.secondContentRow}>
        <View style={styles.sectionTitle}></View>
        <View style={styles.sectionDetails}>
          {section.details &&
            section.details
              .split(",")
              .slice(3)
              .map((item, index) => (
                <Text key={index} style={styles.itemBox}>
                  {item}
                </Text>
              ))}
        </View>
      </View>
    </View>
  );
}
