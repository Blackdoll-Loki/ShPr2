import { ProgressBar, Page, BlockStack, Text} from "@shopify/polaris"

export default function LoadingPage (){
  return (
      <BlockStack gap="600" inlineAlign="center">
          <div style={{width: 220 }}>
            <ProgressBar progress={75} />
          </div>
          <Text variant="bodyLg" as="p" alignment="center">
            Synchronization of materials is in progress, it may take some time.
          </Text>
      </BlockStack>
  )
}