import { Badge, BlockStack, Box, Button, Card, InlineStack, RangeSlider, Text } from "@shopify/polaris";
import { useCallback, useState } from "react";

export default function SettingsReturnDetection(){
  const [rangeValue, setRangeValue] = useState(32);

  const handleRangeSliderChange = useCallback(
    (value: number) => setRangeValue(value),
    [],
  );

  return(
    <Card roundedAbove="sm">
      <Box paddingBlock="300">
        <Text as="h2" variant="headingSm">
          Settings Returned Detection
        </Text>
      </Box>
      <Box paddingBlock="300">
        <InlineStack gap="200">
          <Text as="p" variant="bodyMd">
            Consider the RETURNED status?
          </Text>
          <Badge>On</Badge>
        </InlineStack>
        <Button>Enabled</Button>
      </Box>
      <Box paddingBlock="300">
        <InlineStack gap="200">
          <Text as="p" variant="bodyMd">
            Consider the REFUNDED status?
          </Text>
          <Badge>On</Badge>
        </InlineStack>
        <Button>Enabled</Button>
      </Box>
      <Box paddingBlock="300">
        <InlineStack gap="200">
          <Text as="p" variant="bodyMd">
            Consider the PARTIALLY_REFUNDED status?
          </Text>
          <Badge>On</Badge>
        </InlineStack>
        <Button>Enabled</Button>
      </Box>
      <Box paddingBlock="300">
        <BlockStack gap="300">
          <Text as="p" variant="bodyMd">
            PARTIALLY_REFUNDED percentage threshold
          </Text>
          <RangeSlider
            label=""
            value={rangeValue}
            onChange={handleRangeSliderChange}
            output
            min={0}
            max={360}
            suffix={
              <p
                style={{
                  minWidth: '24px',
                  textAlign: 'right',
                }}
              >
                {rangeValue}
              </p>
            }
          />
        </BlockStack>
      </Box>
    </Card>
  )
}