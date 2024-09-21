import Card from "@/components/Card";
import ThemedText from "@/components/ThemedText";
import useThemeColors from "@/hooks/useThemeColors";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const colors = useThemeColors();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.tint }]}>
      <Card>
        <ThemedText variant="headline">
          Pokedex
        </ThemedText>
      </Card>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
