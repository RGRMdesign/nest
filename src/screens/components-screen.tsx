import { useState } from 'react';
import { Platform, View } from 'react-native';

import { ScreenScaffold } from '@/components/screen-scaffold';
import { ShowcaseSection } from '@/components/showcase-section';
import { ThemeToggle } from '@/components/theme-toggle';
import {
  Actionsheet,
  ActionsheetBackdrop,
  ActionsheetContent,
  ActionsheetDragIndicator,
  ActionsheetDragIndicatorWrapper,
  ActionsheetItem,
  ActionsheetItemText,
} from '@/components/ui/actionsheet';
import { Alert, AlertIcon, AlertText } from '@/components/ui/alert';
import {
  AlertDialog,
  AlertDialogBackdrop,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
} from '@/components/ui/alert-dialog';
import { Avatar, AvatarFallbackText } from '@/components/ui/avatar';
import { Badge, BadgeText } from '@/components/ui/badge';
import { Button, ButtonGroup, ButtonText } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Checkbox,
  CheckboxIcon,
  CheckboxIndicator,
  CheckboxLabel,
} from '@/components/ui/checkbox';
import { Divider } from '@/components/ui/divider';
import {
  FormControl,
  FormControlHelper,
  FormControlHelperText,
  FormControlLabel,
  FormControlLabelText,
} from '@/components/ui/form-control';
import { Heading } from '@/components/ui/heading';
import { CheckIcon, ChevronDownIcon, CircleIcon, InfoIcon } from '@/components/ui/icon';
import { Input, InputField } from '@/components/ui/input';
import {
  Modal,
  ModalBackdrop,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@/components/ui/modal';
import { Radio, RadioGroup, RadioIcon, RadioIndicator, RadioLabel } from '@/components/ui/radio';
import {
  Select,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicator,
  SelectDragIndicatorWrapper,
  SelectIcon,
  SelectInput,
  SelectItem,
  SelectPortal,
  SelectTrigger,
} from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  TabsTriggerText,
} from '@/components/ui/tabs';
import { Text } from '@/components/ui/text';
import { Textarea, TextareaInput } from '@/components/ui/textarea';
import { Toast, ToastDescription, ToastTitle, useToast } from '@/components/ui/toast';

export function ComponentsScreen() {
  const toast = useToast();
  const [notes, setNotes] = useState('Korte toelichting bij dit verzoek.');
  const [name, setName] = useState('Mila Vos');
  const [checked, setChecked] = useState(true);
  const [disabledChecked, setDisabledChecked] = useState(false);
  const [role, setRole] = useState('editor');
  const [notify, setNotify] = useState(true);
  const [team, setTeam] = useState('design');
  const [tab, setTab] = useState('overview');
  const [dialogOpen, setDialogOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);

  return (
    <ScreenScaffold>
      <View className="gap-10 pb-10">
        <View className="flex-row items-start justify-between gap-4">
          <View className="flex-1 gap-2">
            <Heading size="2xl" className="text-foreground">
              Componenten
            </Heading>
            <Text className="max-w-2xl text-muted-foreground">
              Deze pagina toont de lokale gluestack-ui kit, gestyled met dezelfde semantische
              tokens als de rest van de app. Hover, focus, pressed en disabled states horen
              zichtbaar te zijn.
            </Text>
          </View>
          {Platform.OS !== 'web' ? <ThemeToggle /> : null}
        </View>

        <ShowcaseSection title="Typografie" description="Koppen, body, muted tekst en labels.">
          <View className="gap-3 rounded-xl border border-border bg-card p-5">
            <Heading size="3xl">Pagina titel</Heading>
            <Heading size="xl">Sectiekop</Heading>
            <Heading size="md">Subkop</Heading>
            <Text>Bodytekst blijft leesbaar en gebruikt het foreground-token.</Text>
            <Text className="text-muted-foreground">Muted tekst voor hulp en metadata.</Text>
            <Text size="sm" bold className="text-foreground">
              Label
            </Text>
          </View>
        </ShowcaseSection>

        <ShowcaseSection title="Acties" description="Varianten, groottes en disabled states.">
          <View className="gap-4">
            <ButtonGroup flexDirection="row" className="flex-wrap gap-2">
              <Button className="min-h-11">
                <ButtonText>Primary</ButtonText>
              </Button>
              <Button variant="secondary" className="min-h-11">
                <ButtonText>Secondary</ButtonText>
              </Button>
              <Button variant="outline" className="min-h-11">
                <ButtonText>Outline</ButtonText>
              </Button>
              <Button variant="ghost" className="min-h-11">
                <ButtonText>Ghost</ButtonText>
              </Button>
              <Button variant="destructive" className="min-h-11">
                <ButtonText>Destructive</ButtonText>
              </Button>
              <Button isDisabled className="min-h-11">
                <ButtonText>Disabled</ButtonText>
              </Button>
            </ButtonGroup>
            <View className="flex-row flex-wrap items-center gap-2">
              <Button size="sm">
                <ButtonText>Klein</ButtonText>
              </Button>
              <Button size="default" className="min-h-11">
                <ButtonText>Standaard</ButtonText>
              </Button>
              <Button size="lg" className="min-h-11">
                <ButtonText>Groot</ButtonText>
              </Button>
            </View>
          </View>
        </ShowcaseSection>

        <ShowcaseSection title="Formulieren">
          <View className="gap-5 rounded-xl border border-border bg-card p-5">
            <FormControl>
              <FormControlLabel>
                <FormControlLabelText>Naam</FormControlLabelText>
              </FormControlLabel>
              <Input className="min-h-11">
                <InputField
                  value={name}
                  onChangeText={setName}
                  placeholder="Volledige naam"
                  accessibilityLabel="Naam"
                />
              </Input>
              <FormControlHelper>
                <FormControlHelperText>Wordt gebruikt in het dashboard.</FormControlHelperText>
              </FormControlHelper>
            </FormControl>

            <FormControl>
              <FormControlLabel>
                <FormControlLabelText>Toelichting</FormControlLabelText>
              </FormControlLabel>
              <Textarea>
                <TextareaInput
                  value={notes}
                  onChangeText={setNotes}
                  placeholder="Schrijf een toelichting"
                  accessibilityLabel="Toelichting"
                />
              </Textarea>
            </FormControl>

            <Checkbox
              value="updates"
              isChecked={checked}
              onChange={setChecked}
              className="min-h-11">
              <CheckboxIndicator>
                <CheckboxIcon as={CheckIcon} />
              </CheckboxIndicator>
              <CheckboxLabel>Stuur mij productupdates</CheckboxLabel>
            </Checkbox>

            <Checkbox
              value="disabled"
              isChecked={disabledChecked}
              onChange={setDisabledChecked}
              isDisabled
              className="min-h-11">
              <CheckboxIndicator>
                <CheckboxIcon as={CheckIcon} />
              </CheckboxIndicator>
              <CheckboxLabel>Disabled checkbox</CheckboxLabel>
            </Checkbox>

            <RadioGroup value={role} onChange={setRole} accessibilityLabel="Rol">
              <View className="gap-2">
                <Radio value="editor" className="min-h-11">
                  <RadioIndicator>
                    <RadioIcon as={CircleIcon} />
                  </RadioIndicator>
                  <RadioLabel>Editor</RadioLabel>
                </Radio>
                <Radio value="viewer" className="min-h-11">
                  <RadioIndicator>
                    <RadioIcon as={CircleIcon} />
                  </RadioIndicator>
                  <RadioLabel>Viewer</RadioLabel>
                </Radio>
              </View>
            </RadioGroup>

            <View className="min-h-11 flex-row items-center justify-between gap-4">
              <Text className="text-foreground">Meldingen</Text>
              <Switch
                value={notify}
                onToggle={setNotify}
                accessibilityLabel="Meldingen"
              />
            </View>

            <FormControl>
              <FormControlLabel>
                <FormControlLabelText>Team</FormControlLabelText>
              </FormControlLabel>
              <Select selectedValue={team} onValueChange={setTeam}>
                <SelectTrigger variant="outline" size="md" className="min-h-11">
                  <SelectInput placeholder="Kies een team" />
                  <SelectIcon className="mr-3" as={ChevronDownIcon} />
                </SelectTrigger>
                <SelectPortal>
                  <SelectBackdrop />
                  <SelectContent>
                    <SelectDragIndicatorWrapper>
                      <SelectDragIndicator />
                    </SelectDragIndicatorWrapper>
                    <SelectItem label="Design" value="design" />
                    <SelectItem label="Product" value="product" />
                    <SelectItem label="Engineering" value="engineering" />
                  </SelectContent>
                </SelectPortal>
              </Select>
            </FormControl>
          </View>
        </ShowcaseSection>

        <ShowcaseSection title="Content">
          <View className="gap-4">
            <Card className="gap-3">
              <Heading size="md">Kaart</Heading>
              <Text className="text-muted-foreground">
                Kaarten gebruiken bg-card, text-foreground en een subtiele border.
              </Text>
              <Divider className="bg-border" />
              <View className="flex-row items-center gap-3">
                <Avatar className="bg-secondary">
                  <AvatarFallbackText>MV</AvatarFallbackText>
                </Avatar>
                <View className="flex-1">
                  <Text bold>Mila Vos</Text>
                  <Text size="sm" className="text-muted-foreground">
                    Product design
                  </Text>
                </View>
                <Badge className="rounded-full bg-secondary">
                  <BadgeText className="text-secondary-foreground">Actief</BadgeText>
                </Badge>
              </View>
            </Card>
          </View>
        </ShowcaseSection>

        <ShowcaseSection title="Feedback en overlays">
          <View className="gap-4">
            <Alert className="rounded-xl border border-border bg-card">
              <AlertIcon as={InfoIcon} className="text-primary" />
              <AlertText className="text-foreground">
                Tokens blijven leidend. Deze alert gebruikt geen hardcoded kleur.
              </AlertText>
            </Alert>

            <View className="flex-row flex-wrap gap-2">
              <Button
                className="min-h-11"
                onPress={() => {
                  toast.show({
                    placement: 'top',
                    render: ({ id }) => (
                      <Toast nativeID={`toast-${id}`} action="success" variant="solid">
                        <ToastTitle>Opgeslagen</ToastTitle>
                        <ToastDescription>De wijziging staat klaar voor review.</ToastDescription>
                      </Toast>
                    ),
                  });
                }}>
                <ButtonText>Toon toast</ButtonText>
              </Button>
              <Button variant="outline" className="min-h-11" onPress={() => setDialogOpen(true)}>
                <ButtonText>Open dialog</ButtonText>
              </Button>
              <Button variant="outline" className="min-h-11" onPress={() => setModalOpen(true)}>
                <ButtonText>Open modal</ButtonText>
              </Button>
              <Button variant="secondary" className="min-h-11" onPress={() => setSheetOpen(true)}>
                <ButtonText>Open sheet</ButtonText>
              </Button>
            </View>
          </View>
        </ShowcaseSection>

        <ShowcaseSection title="Navigatie" description="In-page tabs, naast de app-tabs onderin of bovenin.">
          <Tabs value={tab} onValueChange={setTab} className="gap-3">
            <TabsList>
              <TabsTrigger value="overview" className="min-h-11">
                <TabsTriggerText>Overzicht</TabsTriggerText>
              </TabsTrigger>
              <TabsTrigger value="activity" className="min-h-11">
                <TabsTriggerText>Activiteit</TabsTriggerText>
              </TabsTrigger>
              <TabsTrigger value="settings" className="min-h-11">
                <TabsTriggerText>Instellingen</TabsTriggerText>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="overview">
              <Text className="text-muted-foreground">Overzicht van de geselecteerde set.</Text>
            </TabsContent>
            <TabsContent value="activity">
              <Text className="text-muted-foreground">Recente wijzigingen verschijnen hier.</Text>
            </TabsContent>
            <TabsContent value="settings">
              <Text className="text-muted-foreground">Instellingen blijven lokaal in deze playground.</Text>
            </TabsContent>
          </Tabs>
        </ShowcaseSection>
      </View>

      <AlertDialog isOpen={dialogOpen} onClose={() => setDialogOpen(false)}>
        <AlertDialogBackdrop />
        <AlertDialogContent
          accessibilityLabel="Project archiveren"
          className="rounded-xl border border-border bg-card">
          <AlertDialogHeader>
            <Heading size="md">Project archiveren?</Heading>
          </AlertDialogHeader>
          <AlertDialogBody>
            <Text className="text-muted-foreground">
              Dit haalt het project uit het actieve overzicht. Je kunt het later terugzetten.
            </Text>
          </AlertDialogBody>
          <AlertDialogFooter className="gap-2">
            <Button variant="outline" className="min-h-11" onPress={() => setDialogOpen(false)}>
              <ButtonText>Annuleren</ButtonText>
            </Button>
            <Button className="min-h-11" onPress={() => setDialogOpen(false)}>
              <ButtonText>Archiveren</ButtonText>
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <ModalBackdrop />
        <ModalContent
          accessibilityLabel="Nieuwe notitie"
          className="rounded-xl border border-border bg-card">
          <ModalHeader>
            <Heading size="md">Nieuwe notitie</Heading>
            <ModalCloseButton accessibilityLabel="Sluiten" />
          </ModalHeader>
          <ModalBody>
            <Text className="text-muted-foreground">
              Modals delen dezelfde tokenlaag. Op web blijft focus zichtbaar via ring-tokens.
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button className="min-h-11" onPress={() => setModalOpen(false)}>
              <ButtonText>Sluiten</ButtonText>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Actionsheet isOpen={sheetOpen} onClose={() => setSheetOpen(false)}>
        <ActionsheetBackdrop />
        <ActionsheetContent className="border-border bg-card">
          <ActionsheetDragIndicatorWrapper>
            <ActionsheetDragIndicator />
          </ActionsheetDragIndicatorWrapper>
          <ActionsheetItem onPress={() => setSheetOpen(false)}>
            <ActionsheetItemText>Toewijzen</ActionsheetItemText>
          </ActionsheetItem>
          <ActionsheetItem onPress={() => setSheetOpen(false)}>
            <ActionsheetItemText>Delen</ActionsheetItemText>
          </ActionsheetItem>
          <ActionsheetItem onPress={() => setSheetOpen(false)}>
            <ActionsheetItemText>Annuleren</ActionsheetItemText>
          </ActionsheetItem>
        </ActionsheetContent>
      </Actionsheet>
    </ScreenScaffold>
  );
}
