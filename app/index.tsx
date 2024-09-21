import Card from "@/components/Card";
import PokemonCard from "@/components/PokemonCard";
import ThemedText from "@/components/ThemedText";
import useThemeColors from "@/hooks/useThemeColors";
import { FlatList, Image, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const colors = useThemeColors();

  const pokemons = Array.from({ length: 35 }, (_, i) => {
    return {
      id: i + 1,
      name: `Pokemon ${i + 1}`,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
        i + 1
      }.png`,
    };
  });

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.tint }]}>
      <View style={styles.header}>
        <Image
          source={require("@/assets/images/pokeball.png")}
          width={24}
          height={24}
        />
        <ThemedText variant="headline" color="grayLight">
          Pokedex
        </ThemedText>
      </View>
      <Card style={styles.body}>
        <FlatList
          data={pokemons}
          numColumns={3}
          columnWrapperStyle={styles.gridGap}
          contentContainerStyle={[styles.gridGap, styles.list]}
          renderItem={({ item }) => {
            return <PokemonCard style={{ flex: 1 / 3 }} pokemon={item} />;
          }}
          keyExtractor={(item) => item.id.toString()}
        />
      </Card>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 4,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    padding: 12,
  },
  body: {
    flex: 1,
  },
  gridGap: {
    gap: 8,
  },
  list: {
    padding: 12,
  },
});
