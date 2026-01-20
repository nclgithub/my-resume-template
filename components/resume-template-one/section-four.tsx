import { Svg, Path, Page, Text, View, Document, StyleSheet, Image, Link, Font } from "@react-pdf/renderer";
import { SectionData } from "@/param/datatype";

const styles = StyleSheet.create({
  sectionMain: {
    paddingLeft: 36,
    paddingRight: 36,
    paddingBottom: 3
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
  sectionTitle: {
    display: "flex",
    flexDirection: "column",
    paddingTop: 9,
    paddingBottom: 9,
    fontWeight: 600,
    textTransform: "uppercase",
    color: "#8675A9"
  },
  subSectionMargin: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 3
  },
  contentRow: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap"
  },
  leftColumn: {
    flexBasis: "25%",
    color: "#6B7280",
    flexShrink: 0,
    marginRight: 12,
    lineHeight: 0.9
  },
  rightColumn: {
    flex: 1,
    minWidth: 0
  },
  subtitleBold: {
    fontWeight: 600,
    lineHeight: 1
  },
  subtitleColor: {
    color: "#8675A9",
    fontSize: 12
  },
  detailsContent: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginLeft: 3
  },
  listContent: {
    display: "flex",
    flexDirection: "row",
    marginLeft: 3
  },
  listItem: {
    marginLeft: 4,
    wordBreak: "break-word",
    lineHeight: 0.9,
    flexGrow: 1,
    flexBasis: 0,
    textAlign: "justify"
  },
  lessMargin: {
    marginBottom: -1
  },
  moreMargin: {
    marginBottom: 6
  },
  listFontWeight: {
    fontWeight: 600,
    textTransform: "uppercase",
    fontSize: 16
  },
  commonLineHeight: {
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
          <View key={subIndex} style={styles.subSectionMargin}>
            <View style={{ ...styles.contentRow, ...styles.lessMargin }}>
              <View style={styles.leftColumn}>
                <Text>{subSection.location}</Text>
              </View>
              <View style={styles.rightColumn}>
                <Text style={{ ...styles.subtitleBold, ...styles.subtitleColor }}>{subSection.subtitle}</Text>
              </View>
            </View>
            <View style={{ ...styles.contentRow, ...styles.moreMargin }}>
              <View style={styles.leftColumn}>
                <Text>
                  {subSection.durationstart} – {subSection.durationend}
                </Text>
              </View>
              <View style={styles.rightColumn}>
                <Text style={styles.subtitleColor}>{subSection.organization}</Text>
              </View>
            </View>
            {subSection.details &&
              subSection.details.split("\n").map((item: any, index: number) => (
                <View key={index} style={styles.detailsContent}>
                  <View style={{ ...styles.leftColumn, ...styles.listFontWeight, ...styles.commonLineHeight }}>
                    <Text>&nbsp;</Text>
                  </View>
                  <View style={styles.rightColumn}>
                    <View style={styles.listContent}>
                      <Text style={styles.commonLineHeight}>{"\u2022"}</Text>
                      <Text style={styles.listItem}>{item}</Text>
                    </View>
                  </View>
                </View>
              ))}
          </View>
        ))}
      </View>
      {section.contents?.slice(1).map((subSection, subIndex) => (
        <View key={subIndex} style={styles.subSectionMargin}>
          <View style={{ ...styles.contentRow, ...styles.lessMargin }}>
            <View style={styles.leftColumn}>
              <Text>{subSection.location}</Text>
            </View>
            <View style={styles.rightColumn}>
              <Text style={{ ...styles.subtitleBold, ...styles.subtitleColor }}>{subSection.subtitle}</Text>
            </View>
          </View>
          <View style={{ ...styles.contentRow, ...styles.moreMargin }}>
            <View style={styles.leftColumn}>
              <Text>
                {subSection.durationstart} – {subSection.durationend}
              </Text>
            </View>
            <View style={styles.rightColumn}>
              <Text style={styles.subtitleColor}>{subSection.organization}</Text>
            </View>
          </View>
          {subSection.details &&
            subSection.details.split("\n").map((item: any, index: number) => (
              <View key={index} style={styles.detailsContent}>
                <View style={{ ...styles.leftColumn, ...styles.listFontWeight, ...styles.commonLineHeight }}>
                  <Text>&nbsp;</Text>
                </View>
                <View style={styles.rightColumn}>
                  <View style={styles.listContent}>
                    <Text style={styles.commonLineHeight}>{"\u2022"}</Text>
                    <Text style={styles.listItem}>{item}</Text>
                  </View>
                </View>
              </View>
            ))}
        </View>
      ))}
    </View>
  );
}
