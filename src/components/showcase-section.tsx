import type { ReactNode } from 'react';
import { View } from 'react-native';

import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';

type ShowcaseSectionProps = {
  title: string;
  description?: string;
  children: ReactNode;
};

export function ShowcaseSection({ title, description, children }: ShowcaseSectionProps) {
  return (
    <View className="gap-4">
      <View className="gap-1">
        <Heading size="lg" className="text-foreground">
          {title}
        </Heading>
        {description ? <Text className="text-muted-foreground">{description}</Text> : null}
      </View>
      {children}
    </View>
  );
}
