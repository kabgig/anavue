import { Button, HStack, VStack, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <VStack gap={8} p={8}>
      <Text fontSize="2xl" fontWeight="bold">
        Welcome to Next.js with Chakra UI!
      </Text>
      <HStack gap={4}>
        <Button colorScheme="blue">Primary Button</Button>
        <Button variant="outline">Secondary Button</Button>
      </HStack>
    </VStack>
  );
}
