import Colors from "@/constants/Colors";
import useThemeColors from "@/hooks/useThemeColors";
import { StyleSheet, Text, TextProps } from "react-native";

type Variant = keyof typeof styles;
type Color = keyof (typeof Colors)["light"];

type Props = TextProps & {
  variant?: Variant;
  color?: Color;
};

export default function ThemedText({ variant, color, ...rest }: Props) {
  const colors = useThemeColors();

  return (
    <Text
      {...rest}
      style={[
        { color: colors[color ?? "grayDark"] },
        styles[variant ?? "body3"],
      ]}
    />
  );
}

const styles = StyleSheet.create({
  body3: {
    fontSize: 10,
    lineHeight: 16,
  },
  headline: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 8,
    lineHeight: 12,
  },
  subtitle1: {
    fontSize: 14,
    lineHeight: 16,
    fontWeight: "bold",
  },
  subtitle2: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: "bold",
  },
  subtitle3: {
    fontSize: 10,
    lineHeight: 16,
    fontWeight: "bold",
  },
});
