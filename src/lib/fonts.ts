import {
  Radio_Canada_Big,
  Lora,
  JetBrains_Mono,
  Prociono,
} from "next/font/google";

export const radio_canada = Radio_Canada_Big({
  subsets: ["latin"],
});

export const lora = Lora({
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const prociono = Prociono({
  weight: "400",
  subsets: ["latin"],
  style: ["normal"],
});

export const jetbrains_mono = JetBrains_Mono({
  subsets: ["latin"],
});
