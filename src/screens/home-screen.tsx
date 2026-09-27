import { Link } from 'expo-router';
import { Platform, View } from 'react-native';

import { ScreenScaffold } from '@/components/screen-scaffold';
import { ThemeToggle } from '@/components/theme-toggle';
import { Button, ButtonText } from '@/components/ui/button';
import { Divider } from '@/components/ui/divider';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';

export function HomeScreen() {
  return (
    <ScreenScaffold maxWidth={760}>
      <View className="gap-8">
        <View className="flex-row items-start justify-between gap-4">
          <View className="flex-1 gap-3">
            <Text size="sm" className="text-muted-foreground">
              Expo playground
            </Text>
            <Heading size="3xl" className="text-foreground">
              Eén codebase, drie oppervlakken
            </Heading>
            <Text className="max-w-xl text-muted-foreground">
              Deze app onderzoekt of Expo, React Native, NativeWind en lokale gluestack-ui
              componenten een stevige basis zijn voor latere producten. De styling blijft
              semantisch; de UI-kit blijft vervangbaar.
            </Text>
          </View>
          {Platform.OS !== 'web' ? <ThemeToggle /> : null}
        </View>

        <View className="flex-col gap-3 md:flex-row">
          <Link href="/components" asChild>
            <Button className="min-h-11 flex-1">
              <ButtonText>Bekijk de UI-kit</ButtonText>
            </Button>
          </Link>
          <Link href="/playground" asChild>
            <Button variant="outline" className="min-h-11 flex-1">
              <ButtonText>Open de playground</ButtonText>
            </Button>
          </Link>
        </View>

        <Divider className="bg-border" />

        <View className="gap-5">
          <InfoRow title="Fundament" body="Expo SDK 57, React Native en Expo Router. Web, iOS en Android delen dezelfde routes." />
          <InfoRow title="Styling" body="NativeWind v5 RC met semantische tokens in styles/global.css. Light en dark via het systeem, plus een handmatige toggle." />
          <InfoRow title="Componenten" body="gluestack-ui v5 kopieert componentcode naar src/components/ui. Applicatieschermen importeren die lokale bestanden, niet een gesloten runtime-kit." />
          <InfoRow title="Beweging" body="React Native Gesture Handler en Reanimated voor native swipe. Op desktop web zijn zichtbare acties de betere UX." />
        </View>
      </View>
    </ScreenScaffold>
  );
}

function InfoRow({ title, body }: { title: string; body: string }) {
  return (
    <View className="gap-1">
      <Text className="text-foreground" bold>
        {title}
      </Text>
      <Text className="text-muted-foreground">{body}</Text>
    </View>
  );
}
