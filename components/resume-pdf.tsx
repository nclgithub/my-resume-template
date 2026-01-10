'use client';

import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  Link,
  Font,
} from '@react-pdf/renderer';
import { TemplateData } from '@/param/datatype';

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#FFFFFF',
    padding: 0,
    fontFamily: 'Helvetica',
    fontSize: 9,
    lineHeight: 1.4,
    color: '#000000',
  },
  container: {
    width: '100%',
    paddingBottom: 20,
  },
  header: {
    position: 'relative',
    paddingHorizontal: 30,
    marginBottom: 10,
    color: '#8675A9',
  },
  headerBg: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: '#8675A9',
    opacity: 0.1,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 30,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 50,
    objectFit: 'cover',
  },
  section: {
    paddingHorizontal: 30,
    paddingBottom: 10,
  },
  separator: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  separatorLeft: {
    width: '25%',
    borderTopWidth: 2,
    borderTopColor: '#e5e7eb',
  },
  separatorRight: {
    flexGrow: 1,
    borderTopWidth: 2,
    borderTopColor: '#e5e7eb',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 4,
  },
  leftCol: {
    width: '25%',
    color: '#8675A9',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    paddingRight: 10,
  },
  rightCol: {
    flex: 1,
  },
  list: {
    marginLeft: 10,
  },
  listItem: {
    flexDirection: 'row',
    marginBottom: 2,
  },
  bullet: {
    width: 10,
    fontSize: 10,
  },
  listContent: {
    flex: 1,
  },
  subHeader: {
    color: '#8675A9',
    fontSize: 10,
    marginBottom: 2,
  },
  bold: {
    fontWeight: 'bold',
  },
  skillRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  skillItem: {
    width: '33%',
    paddingRight: 8,
    marginBottom: 2,
  },
  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
  },
  icon: {
    width: 10,
    height: 10,
    marginRight: 4,
  },
  levelRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  levelItem: {
    width: '50%',
    paddingRight: 20,
    marginBottom: 8,
  },
  levelHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 2,
  },
  levelBarContainer: {
    flexDirection: 'row',
    height: 4,
    gap: 2,
  },
  levelBar: {
    flex: 1,
    height: '100%',
  },
});

interface ResumePDFProps {
  data: TemplateData;
}

const BulletPoint = ({ children }: { children: React.ReactNode }) => (
  <View style={styles.listItem}>
    <Text style={styles.bullet}>•</Text>
    <Text style={styles.listContent}>{children}</Text>
  </View>
);

export default function ResumePDF({ data }: ResumePDFProps) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.container}>
          {/* Header */}
          <View style={styles.header}>
            <View style={styles.headerBg} />
            <View style={styles.headerContent}>
              <View>
                <Text style={styles.name}>
                  {data?.firstname} {data?.lastname}
                </Text>
              </View>
              {data?.profilepic && (
                <Image src={data.profilepic} style={styles.profilePic} />
              )}
            </View>
          </View>

          {/* Sections */}
          {data?.sections?.map((section, index) => {
            const isFirst = index === 0;

            const Separator = () =>
              !isFirst && (
                <View style={styles.separator}>
                  <View style={styles.separatorLeft} />
                  <View style={styles.separatorRight} />
                </View>
              );

            if (section.type === '1') {
              const details = section.details.split('\n');
              return (
                <View
                  key={section.id}
                  style={styles.section}
                  wrap={!section.lock}
                >
                  <Separator />
                  <View style={styles.row}>
                    <Text style={styles.leftCol}>{section.title}</Text>
                    <View style={styles.rightCol}>
                      {details.length > 0 && (
                        <View style={styles.list}>
                          <BulletPoint>{details[0]}</BulletPoint>
                        </View>
                      )}
                    </View>
                  </View>
                  {details.length > 1 && (
                    <View style={styles.row}>
                      <View style={styles.leftCol} />
                      <View style={styles.rightCol}>
                        <View style={styles.list}>
                          {details.slice(1).map((item: string, i: number) => (
                            <BulletPoint key={i}>{item}</BulletPoint>
                          ))}
                        </View>
                      </View>
                    </View>
                  )}
                </View>
              );
            }

            if (section.type === '2') {
              const details = section.details
                .split(',')
                .map((s: string) => s.trim());
              return (
                <View
                  key={section.id}
                  style={styles.section}
                  wrap={!section.lock}
                >
                  <Separator />
                  <View style={styles.row}>
                    <Text style={styles.leftCol}>{section.title}</Text>
                    <View style={[styles.rightCol, styles.skillRow]}>
                      {details.slice(0, 3).map((item: string, i: number) => (
                        <Text key={i} style={styles.skillItem}>
                          {item}
                        </Text>
                      ))}
                    </View>
                  </View>
                  {details.length > 3 && (
                    <View style={styles.row}>
                      <View style={styles.leftCol} />
                      <View style={[styles.rightCol, styles.skillRow]}>
                        {details.slice(3).map((item: string, i: number) => (
                          <Text key={i + 3} style={styles.skillItem}>
                            {item}
                          </Text>
                        ))}
                      </View>
                    </View>
                  )}
                </View>
              );
            }

            if (section.type === '3') {
              return (
                <View
                  key={section.id}
                  style={styles.section}
                  wrap={!section.lock}
                >
                  <Separator />
                  <View style={styles.row}>
                    <Text style={styles.leftCol}>{section.title}</Text>
                    <View style={styles.rightCol}>
                      {section.email && (
                        <View style={styles.contactRow}>
                          <Text>{section.email}</Text>
                        </View>
                      )}
                    </View>
                  </View>
                  <View style={styles.row}>
                    <View style={styles.leftCol} />
                    <View style={styles.rightCol}>
                      {section.contact && (
                        <View style={styles.contactRow}>
                          <Text>{section.contact}</Text>
                        </View>
                      )}
                      {section.location && (
                        <View style={styles.contactRow}>
                          <Text>{section.location}</Text>
                        </View>
                      )}
                      {section.linkedIn && (
                        <View style={styles.contactRow}>
                          <Link
                            src={section.linkedIn}
                            style={{ color: '#000000', textDecoration: 'none' }}
                          >
                            <Text>{section.linkedIn}</Text>
                          </Link>
                        </View>
                      )}
                    </View>
                  </View>
                </View>
              );
            }

            if (section.type === '4') {
              return (
                <View
                  key={section.id}
                  style={styles.section}
                  wrap={!section.lock}
                >
                  <Separator />
                  <Text
                    style={[
                      styles.leftCol,
                      { width: '100%', marginBottom: 10 },
                    ]}
                  >
                    {section.title}
                  </Text>

                  {section.contents?.map((sub: any, subIndex: number) => (
                    <View
                      key={subIndex}
                      style={[styles.row, { marginBottom: 10 }]}
                      wrap={false}
                    >
                      <View style={styles.leftCol}>
                        <Text style={{ color: '#6b7280', fontSize: 9 }}>
                          {sub.location}
                        </Text>
                        <Text style={{ color: '#6b7280', fontSize: 9 }}>
                          {sub.durationstart} – {sub.durationend}
                        </Text>
                      </View>
                      <View style={styles.rightCol}>
                        <View style={styles.subHeader}>
                          <Text style={styles.bold}>{sub.subtitle}</Text>
                          <Text>{sub.organization}</Text>
                        </View>
                        <View style={styles.list}>
                          {sub.details
                            ?.split('\n')
                            .map((item: string, i: number) => (
                              <BulletPoint key={i}>{item}</BulletPoint>
                            ))}
                        </View>
                      </View>
                    </View>
                  ))}
                </View>
              );
            }

            if (section.type === '5') {
              return (
                <View
                  key={section.id}
                  style={styles.section}
                  wrap={!section.lock}
                >
                  <Separator />
                  <View style={styles.row}>
                    <Text style={styles.leftCol}>{section.title}</Text>
                    <View style={styles.rightCol}>
                      <View style={styles.levelRow}>
                        {section.contents
                          ?.slice(0, 2)
                          .map((sub: any, i: number) => (
                            <View key={i} style={styles.levelItem}>
                              <View style={styles.levelHeader}>
                                <Text>{sub.subtitle}</Text>
                                <Text style={{ color: '#6b7280', fontSize: 8 }}>
                                  {sub.level == 1
                                    ? 'Beginner'
                                    : sub.level == 2
                                    ? 'Basic'
                                    : sub.level == 3
                                    ? 'Intermediate'
                                    : sub.level == 4
                                    ? 'Advanced'
                                    : sub.level == 5
                                    ? 'Expert'
                                    : ''}
                                </Text>
                              </View>
                              <View style={styles.levelBarContainer}>
                                {Array.from({ length: 5 }).map((_, idx) => (
                                  <View
                                    key={idx}
                                    style={[
                                      styles.levelBar,
                                      {
                                        backgroundColor:
                                          idx < sub.level
                                            ? '#8675A9'
                                            : '#f4f4f4',
                                      },
                                    ]}
                                  />
                                ))}
                              </View>
                            </View>
                          ))}
                      </View>
                    </View>
                  </View>
                  {section.contents?.length > 2 && (
                    <View style={styles.row}>
                      <View style={styles.leftCol} />
                      <View style={styles.rightCol}>
                        <View style={styles.levelRow}>
                          {section.contents
                            ?.slice(2)
                            .map((sub: any, i: number) => (
                              <View key={i + 2} style={styles.levelItem}>
                                <View style={styles.levelHeader}>
                                  <Text>{sub.subtitle}</Text>
                                  <Text
                                    style={{ color: '#6b7280', fontSize: 8 }}
                                  >
                                    {sub.level == 1
                                      ? 'Beginner'
                                      : sub.level == 2
                                      ? 'Basic'
                                      : sub.level == 3
                                      ? 'Intermediate'
                                      : sub.level == 4
                                      ? 'Advanced'
                                      : sub.level == 5
                                      ? 'Expert'
                                      : ''}
                                  </Text>
                                </View>
                                <View style={styles.levelBarContainer}>
                                  {Array.from({ length: 5 }).map((_, idx) => (
                                    <View
                                      key={idx}
                                      style={[
                                        styles.levelBar,
                                        {
                                          backgroundColor:
                                            idx < sub.level
                                              ? '#8675A9'
                                              : '#f4f4f4',
                                        },
                                      ]}
                                    />
                                  ))}
                                </View>
                              </View>
                            ))}
                        </View>
                      </View>
                    </View>
                  )}
                </View>
              );
            }

            return null;
          })}
        </View>
      </Page>
    </Document>
  );
}
