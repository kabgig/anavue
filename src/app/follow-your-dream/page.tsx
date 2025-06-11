import {
  Box,
  Container,
  Grid,
  GridItem,
  VStack,
  HStack,
  Text,
  Button,
  Link,
  Center,
} from "@chakra-ui/react";
import Image from "next/image";
import { FaSpotify, FaAmazon, FaYoutube, FaCompactDisc } from "react-icons/fa";
import { SiPandora } from "react-icons/si";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Follow Your Dream - AnaVue | Stream Now",
  description:
    "Stream 'Follow Your Dream' by AnaVue - A dreamy synth-indie pop journey. Available on Spotify, Amazon Music, Pandora, CD Baby, and YouTube.",
  keywords: [
    "AnaVue",
    "Follow Your Dream",
    "synth indie pop",
    "music",
    "streaming",
  ],
  openGraph: {
    title: "Follow Your Dream - AnaVue",
    description:
      "A dreamy synth-indie pop journey that captures the essence of chasing your aspirations.",
    images: ["/follow_your_dream_album_art.jpg"],
  },
};

export default function FollowYourDreamPage() {
  const streamingPlatforms = [
    {
      name: "Spotify",
      icon: FaSpotify,
      color: "#1DB954",
      url: "#", // Replace with actual Spotify URL
    },
    {
      name: "Amazon Music",
      icon: FaAmazon,
      color: "#FF9900",
      url: "#", // Replace with actual Amazon Music URL
    },
    {
      name: "Pandora",
      icon: SiPandora,
      color: "#0074E4",
      url: "#", // Replace with actual Pandora URL
    },
    {
      name: "CD Baby",
      icon: FaCompactDisc,
      color: "#1E88E5",
      url: "#", // Replace with actual CD Baby URL
    },
    {
      name: "YouTube",
      icon: FaYoutube,
      color: "#FF0000",
      url: "#", // Replace with actual YouTube URL
    },
  ];

  const AlbumArt = () => (
    <Center>
      <Box
        position="relative"
        borderRadius="2xl"
        overflow="hidden"
        boxShadow="2xl"
        maxW="400px"
        w="100%"
      >
        <Image
          src="/follow_your_dream_album_art.jpg"
          alt="Follow Your Dream - Album Art by AnaVue"
          width={400}
          height={400}
          priority
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "1rem",
            objectFit: "cover",
          }}
        />
      </Box>
    </Center>
  );

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
        {/* Mobile Layout - Single Column */}
        <VStack
          gap={8}
          alignItems="center"
          display={{ base: "flex", md: "none" }}
        >
          <VStack gap={4} textAlign="center">
            <Text
              fontSize="4xl"
              fontWeight="bold"
              color="white"
              textShadow="2px 2px 4px rgba(0,0,0,0.3)"
              letterSpacing="-0.02em"
            >
              Follow Your Dream
            </Text>
            <Text fontSize="xl" color="whiteAlpha.900" fontWeight="medium">
              by AnaVue
            </Text>
          </VStack>

          <AlbumArt />

          <Box w="100%" maxW="400px">
            <VStack gap={3}>
              <Text fontSize="lg" fontWeight="semibold" color="white" mb={2}>
                Stream Now
              </Text>
              {streamingPlatforms.map((platform) => {
                const IconComponent = platform.icon;
                return (
                  <Link
                    key={platform.name}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    w="100%"
                    _hover={{ textDecoration: "none" }}
                  >
                    <Button
                      w="100%"
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
                    >
                      <HStack gap={2}>
                        <IconComponent />
                        <Text>{platform.name}</Text>
                      </HStack>
                    </Button>
                  </Link>
                );
              })}
            </VStack>
          </Box>
        </VStack>

        {/* Desktop/Tablet Layout - Two Columns */}
        <Grid
          templateColumns={{ md: "1fr 1fr" }}
          gap={12}
          alignItems="center"
          minH="70vh"
          display={{ base: "none", md: "grid" }}
        >
          <GridItem>
            <AlbumArt />
          </GridItem>

          <GridItem>
            <VStack gap={6} alignItems="start">
              <VStack gap={2} alignItems="start">
                <Text
                  fontSize={{ md: "4xl", lg: "5xl" }}
                  fontWeight="bold"
                  color="white"
                  textShadow="2px 2px 4px rgba(0,0,0,0.3)"
                  letterSpacing="-0.02em"
                >
                  Follow Your Dream
                </Text>
                <Text
                  fontSize={{ md: "xl", lg: "2xl" }}
                  color="whiteAlpha.900"
                  fontWeight="medium"
                >
                  by AnaVue
                </Text>
                <Text
                  fontSize="md"
                  color="whiteAlpha.800"
                  maxW="500px"
                  mt={4}
                  lineHeight="1.6"
                >
                  A dreamy synth-indie pop journey that captures the essence of
                  chasing your aspirations. Let the ethereal melodies guide you
                  towards your dreams.
                </Text>
              </VStack>

              <Box w="100%" maxW="400px">
                <VStack gap={3}>
                  <Text
                    fontSize="lg"
                    fontWeight="semibold"
                    color="white"
                    mb={2}
                    alignSelf="flex-start"
                  >
                    Stream Now
                  </Text>
                  {streamingPlatforms.map((platform) => {
                    const IconComponent = platform.icon;
                    return (
                      <Link
                        key={platform.name}
                        href={platform.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        w="100%"
                        _hover={{ textDecoration: "none" }}
                      >
                        <Button
                          w="100%"
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
                        >
                          <HStack gap={2}>
                            <IconComponent />
                            <Text>{platform.name}</Text>
                          </HStack>
                        </Button>
                      </Link>
                    );
                  })}
                </VStack>
              </Box>
            </VStack>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
}
