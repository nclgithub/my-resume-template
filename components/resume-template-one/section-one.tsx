import { Page, Text, View, Document, StyleSheet, Image, Link, Font } from "@react-pdf/renderer";
import { PointFormSection } from "@/param/datatype";
import { RefObject } from "react";

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
    minWidth: 0
  },
  listContent: {
    flexDirection: "row",
    marginLeft: 3,
  },
  listItem: {
    marginLeft: 4,
    wordBreak: "break-word",
    lineHeight: 0.9
  },
  secondContentRow: {
    flexDirection: "row",
    flexWrap: "wrap"
  },
  secondContentDetails: {
    flex: 1,
    minWidth: 0
  }
});

export default function TemplateOneSectionOne({ section, isFirst }: { section: PointFormSection; isFirst: boolean }) {
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
            {section.details
              .split("\n")
              .slice(0, 1)
              .map((item: any, index: number) => (
                <View key={index} style={styles.listContent}>
                  <Text>{"\u2022"}</Text>
                  <Text key={index} style={styles.listItem}>
                    {item}
                  </Text>
                </View>
              ))}
          </View>
        </View>
      </View>
      <View style={styles.secondContentRow}>
        <View style={styles.sectionTitle} />
        <View style={styles.secondContentDetails}>
          {section.details &&
            section.details
              .split("\n")
              .slice(1)
              .map((item: any, index: number) => (
                <View key={index} style={styles.listContent} wrap={false}>
                  <Text>{"\u2022"}</Text>
                  <Text style={styles.listItem}>{item}</Text>
                </View>
              ))}
        </View>
      </View>
    </View>
  );
}
