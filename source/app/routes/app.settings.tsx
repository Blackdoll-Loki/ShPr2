import { BlockStack, Box, Button, Card, Page, Text } from "@shopify/polaris";
import SettingsReturnDetection from "app/components/SettingsReturnDetection";
import SuspiciousCustomerThreshold from "app/components/SuspiciousCustomerThreshold";

export default function SettingsPage (){
  return (
    <Page>
      <BlockStack gap="500">
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Text variant="headingLg" as="h1">
            Settings
          </Text>
        </div>
        <SettingsReturnDetection />
        <SuspiciousCustomerThreshold />
        <div style={{ display: "grid", gridTemplateColumns: "25%", justifyContent: "center", alignItems: 'center', width: "100%" }}>
          <Button variant="primary">Save</Button>
        </div>
      </BlockStack>
    </Page>
  )
}