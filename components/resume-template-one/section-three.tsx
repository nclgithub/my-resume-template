import { Svg, Path, Page, Text, View, Document, StyleSheet, Image, Link, Font } from "@react-pdf/renderer";
import { ContactSection } from "@/param/datatype";

const styles = StyleSheet.create({
  sectionMain: {
    paddingLeft: 36,
    paddingRight: 36,
    paddingBottom: 9
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
    paddingTop: 9
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
    flexWrap: "wrap",
    minWidth: 0,
    flexDirection: "row"
  },
  infoRow: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4
  },
  iconCol: {
    width: 14
  },
  secondContentRow: {
    flexDirection: "row"
  },
  icon: {
    width: 14,
    height: 14,
    color: "#8675A9",
    marginRight: 4
  },
  link: {
    color: "#000",
    textDecoration: "none"
  },
  emptyColumn: {
    flexBasis: "25%",
    flexShrink: 0
  }
});

export default function TemplateOneSectionThree({ section, isFirst }: { section: ContactSection; isFirst: boolean }) {
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
            <View style={styles.infoRow}>
              <View style={styles.iconCol}>
                <Svg width={11} height={11} viewBox="0 0 24 24" fill="#8675A9">
                  <Path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </Svg>
              </View>
              <Text>{section.email}</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.secondContentRow}>
        <View style={styles.sectionTitle}></View>
        <View style={styles.sectionDetails}>
          <View style={styles.infoRow} wrap={false}>
            <View style={styles.iconCol}>
              <Svg width={11} height={11} viewBox="0 0 24 24" fill="#8675A9">
                <Path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1v3.5c0 .55-.45 1-1 1C9.39 20 2 12.61 2 3c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </Svg>
            </View>
            <Text>{section.contact}</Text>
          </View>
          <View style={styles.infoRow} wrap={false}>
            <View style={styles.iconCol}>
              <Svg width={11} height={11} viewBox="0 0 24 24" fill="#8675A9">
                <Path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
              </Svg>
            </View>
            <Text>{section.location}</Text>
          </View>
          <Link src={section.linkedIn} style={styles.link} wrap={false}>
            <View style={[styles.infoRow, { marginBottom: 0 }]}>
              <View style={styles.iconCol}>
                <Svg width={13} height={13} viewBox="0 0 55 60" fill="#8675A9" style={{ marginLeft: -0.5 }}>
                  <Path d="M 10.3125 15.410156 L 10.3125 44.589844 C 10.3125 47.34375 12.480469 49.511719 15.234375 49.511719 L 44.414062 49.511719 C 45.761719 49.511719 47.050781 48.867188 47.871094 48.046875 C 48.75 47.167969 49.335938 46.054688 49.335938 44.589844 L 49.335938 15.410156 C 49.335938 12.65625 47.167969 10.488281 44.414062 10.488281 L 15.234375 10.488281 C 13.769531 10.488281 12.65625 11.074219 11.777344 11.953125 C 10.957031 12.773438 10.3125 14.0625 10.3125 15.410156 Z M 15.585938 19.277344 C 15.585938 17.402344 17.109375 15.761719 18.984375 15.761719 C 20.917969 15.761719 22.5 17.402344 22.5 19.277344 C 22.5 21.210938 20.917969 22.734375 18.984375 22.734375 C 17.109375 22.734375 15.585938 21.210938 15.585938 19.277344 Z M 25.019531 43.359375 L 25.019531 25.488281 C 25.019531 25.078125 25.429688 24.726562 25.722656 24.726562 L 30.703125 24.726562 C 31.40625 24.726562 31.40625 25.546875 31.40625 26.074219 C 32.8125 24.667969 34.628906 24.316406 36.503906 24.316406 C 41.074219 24.316406 44.003906 26.484375 44.003906 31.289062 L 44.003906 43.359375 C 44.003906 43.773438 43.652344 44.121094 43.300781 44.121094 L 38.144531 44.121094 C 37.734375 44.121094 37.441406 43.710938 37.441406 43.359375 L 37.441406 32.460938 C 37.441406 30.644531 36.914062 29.648438 34.863281 29.648438 C 32.285156 29.648438 31.640625 31.347656 31.640625 33.632812 L 31.640625 43.359375 C 31.640625 43.773438 31.230469 44.121094 30.820312 44.121094 L 25.722656 44.121094 C 25.429688 44.121094 25.019531 43.710938 25.019531 43.359375 Z M 15.703125 43.359375 L 15.703125 25.488281 C 15.703125 25.078125 16.113281 24.726562 16.40625 24.726562 L 21.503906 24.726562 C 21.972656 24.726562 22.265625 25.019531 22.265625 25.488281 L 22.265625 43.359375 C 22.265625 43.769531 21.914062 44.121094 21.503906 44.121094 L 16.40625 44.121094 C 16.054688 44.121094 15.703125 43.710938 15.703125 43.359375 Z M 15.703125 43.359375 " />
                </Svg>
              </View>
              <Text>{section.linkedIn}</Text>
            </View>
          </Link>
        </View>
      </View>
    </View>
  );
}
