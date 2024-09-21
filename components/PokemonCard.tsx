import { Image, StyleSheet, View, ViewStyle } from "react-native";
import Card from "./Card";
import ThemedText from "./ThemedText";
import useThemeColors from "@/hooks/useThemeColors";

type Props = {
  style?: ViewStyle;
  pokemon: {
    id: number;
    name: string;
    image: string;
  };
};

export default function PokemonCard({
  style,
  pokemon: { id, name, image },
}: Props) {
  const colors = useThemeColors();

  return (
    <Card style={[style, styles.card]}>
      <View
        style={[styles.shadow, { backgroundColor: colors.grayBackground }]}
      />
      <ThemedText style={styles.id} variant="caption" color="grayMedium">
        # {id.toString().padStart(3, "0")}
      </ThemedText>
      <Image
        source={{
          uri: image,
        }}
        width={72}
        height={72}
      />
      <ThemedText>{name}</ThemedText>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    padding: 4,
    position: "relative",
  },
  id: {
    alignSelf: "flex-end",
  },
  shadow: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 44,
    borderRadius: 7,
  },
});
