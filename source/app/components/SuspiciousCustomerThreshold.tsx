import { BlockStack, Box, Card, RangeSlider, Text, TextField } from "@shopify/polaris";
import { useCallback, useState } from "react";

export default function SuspiciousCustomerThreshold(){
  const [rangeValue, setRangeValue] = useState(32);

  const handleRangeSliderChange = useCallback(
    (value: number) => setRangeValue(value),
    [],
  );

  const [value, setValue] = useState('1');

  const handleChange = useCallback(
    (newValue: string) => setValue(newValue),
    [],
  );


  return (
    <Card roundedAbove="sm">
      <BlockStack gap="500">
          <Text as="h2" variant="headingSm">
          Suspicious customer threshold
          </Text>
        <Box paddingBlock="200">
          <BlockStack gap="300">
            <Text as="p" variant="bodyMd">
            Specify the percentage of returns at which the customer will be considered suspicious
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
        <Box paddingBlock="200">
          <BlockStack gap="300">
            <Text as="p" variant="bodyMd">
              Specify the number of returns at which the customer will be considered suspicious
            </Text>
            <TextField
              label=""
              type="number"
              value={value}
              onChange={handleChange}
              autoComplete="off"
            />
          </BlockStack>
        </Box>
      </BlockStack>
    </Card>
  )
}