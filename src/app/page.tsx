import {
  Button,
  HStack,
  VStack,
  Text,
  Box,
  Container,
  Link,
} from "@chakra-ui/react";

export default function Home() {
  return (
    <Box
      minH="100vh"
      bg="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
      position="relative"
    >
      {/* Background Pattern */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        opacity={0.1}
        backgroundImage="radial-gradient(circle at 25% 25%, white 2px, transparent 2px)"
        backgroundSize="60px 60px"
      />

      <Container maxW="7xl" py={{ base: 8, md: 16 }} position="relative">
        {/* App Title and Description */}
        <VStack gap={2} textAlign="center" mb={{ base: 8, md: 12 }}>
          <Text
            fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
            fontWeight="bold"
            color="white"
            textShadow="2px 2px 4px rgba(0,0,0,0.3)"
            letterSpacing="-0.01em"
          >
            AnaVue
          </Text>
          <Text
            fontSize={{ base: "md", md: "lg" }}
            color="whiteAlpha.800"
            fontWeight="medium"
            textTransform="uppercase"
            letterSpacing="0.1em"
          >
            Dreamy Synth Indie Pop
          </Text>
        </VStack>

        <VStack gap={8} alignItems="center">
          <Text
            fontSize={{ base: "xl", md: "2xl" }}
            fontWeight="semibold"
            color="white"
            textAlign="center"
            textShadow="1px 1px 2px rgba(0,0,0,0.3)"
          >
            Welcome to the ethereal world of synth-indie pop
          </Text>

          <HStack gap={4} flexWrap="wrap" justify="center">
            <Link href="/follow-your-dream" _hover={{ textDecoration: "none" }}>
              <Button
                size="lg"
                bg="whiteAlpha.200"
                color="white"
                border="2px solid"
                borderColor="whiteAlpha.300"
                _hover={{
                  bg: "whiteAlpha.300",
                  borderColor: "whiteAlpha.500",
                  transform: "translateY(-2px)",
                  boxShadow: "lg",
                }}
                transition="all 0.3s ease"
                fontWeight="semibold"
                backdropFilter="blur(10px)"
                px={8}
                py={4}
                minH="56px"
              >
                Listen to &ldquo;Follow Your Dream&rdquo;
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              borderColor="whiteAlpha.500"
              color="white"
              _hover={{
                bg: "whiteAlpha.200",
                borderColor: "whiteAlpha.600",
                transform: "translateY(-2px)",
                boxShadow: "lg",
              }}
              transition="all 0.3s ease"
              fontWeight="semibold"
              px={8}
              py={4}
              minH="56px"
            >
              Explore Music
            </Button>
          </HStack>
        </VStack>
      </Container>
    </Box>
  );
}
