import { Svg, Path, Page, Text, View, Document, StyleSheet, Image, Link, Font } from "@react-pdf/renderer";
import { SectionData } from "@/param/datatype";

const styles = StyleSheet.create({
  sectionMain: {
    display: "flex",
    paddingLeft: 36,
    paddingRight: 36,
    paddingBottom: 12
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
    paddingVertical: 12,
    flexWrap: "wrap"
  },
  leftColumn: {
    flexBasis: "25%",
    flexShrink: 0,
    fontWeight: 600,
    textTransform: "uppercase",
    color: "#8675A9",
    marginRight: 12
  },
  rightColumn: {
    flex: 1,
    flexWrap: "wrap",
    marginTop: -12,
    minWidth: 0,
    flexDirection: "row"
  },
  skillItem: {
    width: "50%",
    paddingRight: 24,
    paddingTop: 12,
    flexWrap: "wrap"
  },
  skillRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 4
  },
  skillName: {
    flex: 1,
    minWidth: 0,
    wordBreak: "break-word"
  },
  skillLevelText: {
    color: "#6B7280",
    whiteSpace: "nowrap"
  },
  skillBarRow: {
    flexDirection: "row",
    marginTop: 4,
    width: "100%"
  },
  skillBarFilled: {
    backgroundColor: "#8675A9",
    height: 4,
    flex: 1,
    marginRight: 2
  },
  skillBarEmpty: {
    backgroundColor: "#f4f4f4",
    height: 4,
    flex: 1,
    marginRight: 2
  },
  secondContentRow: {
    flexDirection: "row",
    flexWrap: "wrap"
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

  const getLevelText = (level: any) => {
    switch (level) {
      case "1":
        return "Beginner";
      case "2":
        return "Basic";
      case "3":
        return "Intermediate";
      case "4":
        return "Advanced";
      case "5":
        return "Expert";
      default:
        return "";
    }
  };

  return (
    <View style={styles.sectionMain} wrap={!section.lock}>
      <View wrap={false}>
        <Separator />
        <View style={styles.contentRow}>
          <View style={styles.leftColumn}>
            <Text>{section.title}</Text>
          </View>
          <View style={styles.rightColumn}>
            {section.contents?.slice(0, 2).map((subSection, idx) => (
              <View key={idx} style={styles.skillItem}>
                <View style={styles.skillRow}>
                  <Text style={styles.skillName}>{subSection.subtitle}</Text>
                  <Text style={styles.skillLevelText}>{getLevelText(subSection.level)}</Text>
                </View>
                <View style={styles.skillBarRow}>
                  {Array.from({ length: 5 }).map((_, barIdx) => (
                    <View key={barIdx} style={barIdx < subSection.level ? styles.skillBarFilled : styles.skillBarEmpty} />
                  ))}
                </View>
              </View>
            ))}
          </View>
        </View>
      </View>
      <View style={styles.secondContentRow}>
        <View style={styles.leftColumn}></View>
        <View style={styles.rightColumn}>
          {section.contents.slice(2).map((subSection, idx) => (
            <View key={idx} style={styles.skillItem} wrap={false}>
              <View style={styles.skillRow}>
                <Text style={styles.skillName}>{subSection.subtitle}</Text>
                <Text style={styles.skillLevelText}>{getLevelText(subSection.level)}</Text>
              </View>
              <View style={styles.skillBarRow}>
                {Array.from({ length: 5 }).map((_, barIdx) => (
                  <View key={barIdx} style={barIdx < subSection.level ? styles.skillBarFilled : styles.skillBarEmpty} />
                ))}
              </View>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}
