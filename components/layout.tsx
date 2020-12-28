import { Container, Box, Heading, Flex, Spacer, Text,Link } from '@chakra-ui/react';
import NextLink from 'next/link';

export default function Layout({ children }) {
  return (
    <>
      <Heading as="header">
        <Box borderTop="8px" borderTopColor="#319795">
          <Flex height="72px" px="16px" align="center">
          <Box p="2">
              <Heading size="lg">
                <NextLink href="/profile" passHref>
                  <Link>Match</Link>
                  </NextLink>
              </Heading>
          </Box>
          <Spacer />
          <Box>
            <Flex align="center">
              <NextLink href="/signup" passHref>
                <Link mr="4">
                  <Text fontSize="md"  noOfLines={1}>Sign Up</Text>
                </Link>
              </NextLink>
              <NextLink href="/signin" passHref>
                <Link>
                  <Text fontSize="md" noOfLines={1}>Sign In</Text>
                </Link>
              </NextLink>
            </Flex>
          </Box>
        </Flex>
        </Box>
      </Heading>
      <Container>
        {children}
      </Container>
    </>
  )
}