import { useState } from "react";
import { Platform, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  const [installedHint, setInstalledHint] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.page}>
      <View style={styles.container}>
        <View style={styles.brandRow}>
          <View style={styles.logo}><Text style={styles.logoText}>P</Text></View>
          <Text style={styles.brand}>Expo PWA</Text>
          <View style={styles.pill}><Text style={styles.pillText}>PROTÓTIPO</Text></View>
        </View>

        <View style={styles.hero}>
          <Text style={styles.eyebrow}>APLICAÇÃO WEB PROGRESSIVA</Text>
          <Text accessibilityRole="header" style={styles.title}>Seu projeto, pronto para evoluir.</Text>
          <Text style={styles.subtitle}>
            Uma base com Expo, React Native Web e estrutura PWA para testar a experiência
            no navegador e preparar a próxima etapa do aplicativo.
          </Text>
          <View style={styles.actions}>
            <Pressable accessibilityRole="button" style={styles.primaryButton} onPress={() => setInstalledHint(true)}>
              <Text style={styles.primaryButtonText}>Conhecer o projeto</Text>
            </Pressable>
            <Text style={styles.platform}>{Platform.OS === "web" ? "Executando na Web" : "Executando no aplicativo"}</Text>
          </View>
          {installedHint ? (
            <View accessibilityLiveRegion="polite" style={styles.notice}>
              <Text style={styles.noticeTitle}>Base inicial configurada</Text>
              <Text style={styles.noticeText}>Próxima etapa: definir os requisitos e conectar um serviço de dados, como Firebase ou Supabase.</Text>
            </View>
          ) : null}
        </View>

        <View style={styles.cards}>
          <View style={styles.card}>
            <Text style={styles.cardIcon}>◈</Text>
            <Text style={styles.cardTitle}>Multiplataforma</Text>
            <Text style={styles.cardText}>Compartilhe a base entre web e dispositivos móveis com Expo.</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardIcon}>↗</Text>
            <Text style={styles.cardTitle}>Experiência PWA</Text>
            <Text style={styles.cardText}>Prepare instalação, manifesto e recursos básicos de funcionamento offline.</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardIcon}>⌘</Text>
            <Text style={styles.cardTitle}>Pronto para crescer</Text>
            <Text style={styles.cardText}>Organize componentes, dados e funcionalidades conforme os requisitos.</Text>
          </View>
        </View>
        <Text style={styles.footer}>Expo PWA · Projeto inicial para fins educacionais</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: { flexGrow: 1, backgroundColor: "#f7f8fc", paddingVertical: 28, paddingHorizontal: 18 },
  container: { width: "100%", maxWidth: 1040, alignSelf: "center" },
  brandRow: { flexDirection: "row", alignItems: "center", gap: 10, marginBottom: 48, flexWrap: "wrap" },
  logo: { width: 38, height: 38, borderRadius: 12, backgroundColor: "#5145cd", alignItems: "center", justifyContent: "center" },
  logoText: { color: "#fff", fontSize: 22, fontWeight: "800" },
  brand: { color: "#17172a", fontSize: 18, fontWeight: "800" },
  pill: { marginLeft: 4, borderRadius: 99, paddingHorizontal: 10, paddingVertical: 5, backgroundColor: "#e8e7ff" },
  pillText: { color: "#5145cd", fontSize: 10, fontWeight: "800", letterSpacing: 1 },
  hero: { backgroundColor: "#fff", borderRadius: 28, padding: 30, borderWidth: 1, borderColor: "#e9eaf2" },
  eyebrow: { color: "#5145cd", fontSize: 11, fontWeight: "800", letterSpacing: 1.6, marginBottom: 14 },
  title: { color: "#17172a", fontSize: 42, lineHeight: 49, fontWeight: "800", maxWidth: 680 },
  subtitle: { color: "#62657a", fontSize: 16, lineHeight: 25, marginTop: 16, maxWidth: 650 },
  actions: { flexDirection: "row", alignItems: "center", flexWrap: "wrap", gap: 16, marginTop: 26 },
  primaryButton: { backgroundColor: "#5145cd", paddingHorizontal: 20, paddingVertical: 13, borderRadius: 12 },
  primaryButtonText: { color: "#fff", fontWeight: "700", fontSize: 14 },
  platform: { color: "#77798c", fontSize: 12 },
  notice: { marginTop: 20, padding: 16, borderRadius: 14, backgroundColor: "#f0efff", borderWidth: 1, borderColor: "#dedbff" },
  noticeTitle: { color: "#332a9e", fontSize: 14, fontWeight: "800", marginBottom: 4 },
  noticeText: { color: "#4f4a82", fontSize: 13, lineHeight: 19 },
  cards: { flexDirection: "row", flexWrap: "wrap", gap: 14, marginTop: 18 },
  card: { flexGrow: 1, flexBasis: 230, backgroundColor: "#fff", borderRadius: 20, padding: 22, borderWidth: 1, borderColor: "#e9eaf2" },
  cardIcon: { color: "#5145cd", fontSize: 26, marginBottom: 16 },
  cardTitle: { color: "#17172a", fontSize: 16, fontWeight: "800", marginBottom: 8 },
  cardText: { color: "#62657a", fontSize: 13, lineHeight: 20 },
  footer: { textAlign: "center", color: "#8a8b9b", fontSize: 12, marginTop: 30, marginBottom: 12 },
});
