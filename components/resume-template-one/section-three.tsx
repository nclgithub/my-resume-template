import { Svg, Path, Page, Text, View, Document, StyleSheet, Image, Link, Font } from "@react-pdf/renderer";
import { ContactSection } from "@/param/datatype";

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
    minWidth: 0,
    display: "flex",
    flexDirection: "column"
  },
  infoRow: {
    display: "flex",
    flexDirection: "row"
  },
  iconCol: {
    width: 14,
    height: 14,
    marginRight: 3,
    display: "flex",
    justifycontent: "start",
    alignItems: "center"
  },
  contentText: {
    alignContent: "center",
    lineHeight: 0.9
  },
  secondContentRow: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap"
  },
  link: {
    color: "#000",
    textDecoration: "none"
  },
  emptyColumn: {
    flexBasis: "25%",
    flexShrink: 0
  },
});

export default function TemplateOneSectionThree({ section, isFirst, isPrint }: { section: ContactSection; isFirst: boolean; isPrint: boolean }) {
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
                {isPrint ? (
                  <Svg width={11} height={11} viewBox="0 0 24 24" fill="#8675A9">
                    <Path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </Svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#8675A9"
                    style={{ width: "11px", height: "11px", alignItems: "center" }}
                  >
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                )}
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.contentText}>{section.email}</Text>
              </View>
            </View>
            <View style={styles.infoRow} wrap={false}>
              <View style={styles.iconCol}>
                {isPrint ? (
                  <Svg width={11} height={11} viewBox="0 0 24 24" fill="#8675A9">
                    <Path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1v3.5c0 .55-.45 1-1 1C9.39 20 2 12.61 2 3c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </Svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#8675A9" style={{ width: "11px", height: "11px" }}>
                    <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1v3.5c0 .55-.45 1-1 1C9.39 20 2 12.61 2 3c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                )}
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.contentText}>{section.contact}</Text>
              </View>
            </View>
            <View style={styles.infoRow} wrap={false}>
              <View style={styles.iconCol}>
                {isPrint ? (
                  <Svg width={11} height={11} viewBox="0 0 24 24" fill="#8675A9">
                    <Path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
                  </Svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#8675A9" style={{ width: "11px", height: "11px" }}>
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
                  </svg>
                )}
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.contentText}>{section.location}</Text>
              </View>
            </View>
            <View style={styles.infoRow} wrap={false}>
              <View style={styles.iconCol}>
                {isPrint ? (
                  <Svg width={11} height={11} viewBox="0 1 22 22" fill="#8675A9">
                    <Path d="M 4.125 6.164062 L 4.125 17.835938 C 4.125 18.9375 4.992188 19.804688 6.09375 19.804688 L 17.765625 19.804688 C 18.304688 19.804688 18.820312 19.546875 19.148438 19.21875 C 19.5 18.867188 19.734375 18.421875 19.734375 17.835938 L 19.734375 6.164062 C 19.734375 5.0625 18.867188 4.195312 17.765625 4.195312 L 6.09375 4.195312 C 5.507812 4.195312 5.0625 4.429688 4.710938 4.78125 C 4.382812 5.109375 4.125 5.625 4.125 6.164062 Z M 6.234375 7.710938 C 6.234375 6.960938 6.84375 6.304688 7.59375 6.304688 C 8.367188 6.304688 9 6.960938 9 7.710938 C 9 8.484375 8.367188 9.09375 7.59375 9.09375 C 6.84375 9.09375 6.234375 8.484375 6.234375 7.710938 Z M 10.007812 17.34375 L 10.007812 10.195312 C 10.007812 10.03125 10.171875 9.890625 10.289062 9.890625 L 12.28125 9.890625 C 12.5625 9.890625 12.5625 10.21875 12.5625 10.429688 C 13.125 9.867188 13.851562 9.726562 14.601562 9.726562 C 16.429688 9.726562 17.601562 10.59375 17.601562 12.515625 L 17.601562 17.34375 C 17.601562 17.507812 17.460938 17.648438 17.320312 17.648438 L 15.257812 17.648438 C 15.09375 17.648438 14.976562 17.484375 14.976562 17.34375 L 14.976562 12.984375 C 14.976562 12.257812 14.765625 11.859375 13.945312 11.859375 C 12.914062 11.859375 12.65625 12.539062 12.65625 13.453125 L 12.65625 17.34375 C 12.65625 17.507812 12.492188 17.648438 12.328125 17.648438 L 10.289062 17.648438 C 10.171875 17.648438 10.007812 17.484375 10.007812 17.34375 Z M 6.28125 17.34375 L 6.28125 10.195312 C 6.28125 10.03125 6.445312 9.890625 6.5625 9.890625 L 8.601562 9.890625 C 8.789062 9.890625 8.90625 10.007812 8.90625 10.195312 L 8.90625 17.34375 C 8.90625 17.507812 8.765625 17.648438 8.601562 17.648438 L 6.5625 17.648438 C 6.421875 17.648438 6.28125 17.484375 6.28125 17.34375 Z M 6.28125 17.34375" />
                  </Svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 1 22 22"
                    fill="#8675A9"
                    style={{ width: "11px", height: "11px" }}
                  >
                    <path d="M 4.125 6.164062 L 4.125 17.835938 C 4.125 18.9375 4.992188 19.804688 6.09375 19.804688 L 17.765625 19.804688 C 18.304688 19.804688 18.820312 19.546875 19.148438 19.21875 C 19.5 18.867188 19.734375 18.421875 19.734375 17.835938 L 19.734375 6.164062 C 19.734375 5.0625 18.867188 4.195312 17.765625 4.195312 L 6.09375 4.195312 C 5.507812 4.195312 5.0625 4.429688 4.710938 4.78125 C 4.382812 5.109375 4.125 5.625 4.125 6.164062 Z M 6.234375 7.710938 C 6.234375 6.960938 6.84375 6.304688 7.59375 6.304688 C 8.367188 6.304688 9 6.960938 9 7.710938 C 9 8.484375 8.367188 9.09375 7.59375 9.09375 C 6.84375 9.09375 6.234375 8.484375 6.234375 7.710938 Z M 10.007812 17.34375 L 10.007812 10.195312 C 10.007812 10.03125 10.171875 9.890625 10.289062 9.890625 L 12.28125 9.890625 C 12.5625 9.890625 12.5625 10.21875 12.5625 10.429688 C 13.125 9.867188 13.851562 9.726562 14.601562 9.726562 C 16.429688 9.726562 17.601562 10.59375 17.601562 12.515625 L 17.601562 17.34375 C 17.601562 17.507812 17.460938 17.648438 17.320312 17.648438 L 15.257812 17.648438 C 15.09375 17.648438 14.976562 17.484375 14.976562 17.34375 L 14.976562 12.984375 C 14.976562 12.257812 14.765625 11.859375 13.945312 11.859375 C 12.914062 11.859375 12.65625 12.539062 12.65625 13.453125 L 12.65625 17.34375 C 12.65625 17.507812 12.492188 17.648438 12.328125 17.648438 L 10.289062 17.648438 C 10.171875 17.648438 10.007812 17.484375 10.007812 17.34375 Z M 6.28125 17.34375 L 6.28125 10.195312 C 6.28125 10.03125 6.445312 9.890625 6.5625 9.890625 L 8.601562 9.890625 C 8.789062 9.890625 8.90625 10.007812 8.90625 10.195312 L 8.90625 17.34375 C 8.90625 17.507812 8.765625 17.648438 8.601562 17.648438 L 6.5625 17.648438 C 6.421875 17.648438 6.28125 17.484375 6.28125 17.34375 Z M 6.28125 17.34375" />
                  </svg>
                )}
              </View>
              {isPrint ? (
                <View style={styles.infoRow}>
                  <Link src={section.linkedIn} style={{ ...styles.link, ...styles.contentText }}>
                    <Text>{section.linkedIn}</Text>
                  </Link>
                </View>
              ) : (
                <a href={section.linkedIn} style={{ ...styles.link, ...styles.contentText }}>
                  {section.linkedIn}
                </a>
              )}
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
