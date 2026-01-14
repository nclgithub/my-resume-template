import { Svg, Path, Page, Text, View, Document, StyleSheet, Image, Link, Font } from "@react-pdf/renderer";
import { SectionData } from "@/param/datatype";

const styles = StyleSheet.create({
  sectionMain: {
    display: "flex",
    paddingLeft: 36,
    paddingRight: 36
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
  sectionTitle: {
    paddingVertical: 9,
    fontWeight: 600,
    textTransform: "uppercase",
    color: "#8675A9"
  },
  contentRow: {
    flexDirection: "row",
    paddingBottom: 6,
    flexWrap: "wrap"
  },
  leftColumn: {
    flexBasis: "25%",
    flexShrink: 0,
    color: "#6B7280",
    marginRight: 12
  },
  rightColumn: {
    flex: 1,
    minWidth: 0
  },
  subtitleText: {
    color: "#8675A9",
    marginBottom: 3
  },
  subtitleBold: {
    fontWeight: 600,
    lineHeight: 0.9
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
  text: {
    lineHeight: 0.9
  }
});

export default function TemplateOneSectionThree({ section, isFirst }: { section: SectionData; isFirst: boolean }) {
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
        <Text style={styles.sectionTitle}>{section.title}</Text>
        {section.contents?.slice(0, 1).map((subSection, subIndex) => (
          <View key={subIndex}>
            <View style={styles.contentRow}>
              <View style={styles.leftColumn}>
                <Text style={{ lineHeight: 0.9 }}>{subSection.location}</Text>
                <Text>
                  {subSection.durationstart} – {subSection.durationend}
                </Text>
              </View>
              <View style={styles.rightColumn}>
                <View style={styles.subtitleText}>
                  <Text style={styles.subtitleBold}>{subSection.subtitle}</Text>
                  <Text style={styles.text}>{subSection.organization}</Text>
                </View>
                {subSection.details &&
                  subSection.details.split("\n").map((item: any, index: number) => (
                    <View key={index} style={styles.listContent}>
                      <Text>{"\u2022"}</Text>
                      <Text style={styles.listItem}>
                        {item}
                      </Text>
                    </View>
                  ))}
              </View>
            </View>
          </View>
        ))}
      </View>
      {section.contents?.slice(1).map((subSection, subIndex) => (
        <View key={subIndex} wrap={false}>
          <View style={styles.contentRow}>
            <View style={styles.leftColumn}>
              <Text style={styles.text}>{subSection.location}</Text>
              <Text style={styles.text}>
                {subSection.durationstart} – {subSection.durationend}
              </Text>
            </View>
            <View style={styles.rightColumn}>
              <View style={styles.subtitleText}>
                <Text style={styles.subtitleBold}>{subSection.subtitle}</Text>
                <Text style={styles.text}>{subSection.organization}</Text>
              </View>
              {subSection.details &&
                subSection.details.split("\n").map((item: any, index: number) => (
                  <View key={index} style={styles.listContent}>
                    <Text>{"\u2022"}</Text>
                    <Text style={styles.listItem}>
                      {item}
                    </Text>
                  </View>
                ))}
            </View>
          </View>
        </View>
      ))}
    </View>
  );
}
