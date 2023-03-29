import { useState } from 'react';

import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Box,
  Text,
  Flex,
  Stack,
  useTheme,
  Textarea,
  useBreakpointValue,
} from '@chakra-ui/react';
import { PhoneIcon, EmailIcon, InfoIcon } from '@chakra-ui/icons';
function App() {
  const theme = useTheme();
  const display = useBreakpointValue({ base: 'block', md: 'flex' });

  return (
    <Box bg="gray.50" minH="100vh" display="flex">
      <Flex
        paddingLeft={{ base: '24px', md: '10%' }}
        paddingRight={{ base: '24px', md: '10%' }}
        pt="5%"
        style={{ display }}
      >
        <Stack
          display="block"
          mb={{ base: 0, md: '50px' }}
          bg={{ base: 'gray.60', md: 0 }}
          borderRadius={{ base: '8px', md: 0 }}
          boxShadow={{
            base: '0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)',
            md: '0 0',
          }}
        >
          <Box padding={{ base: '30px', md: 0 }}>
            <Text
              fontSize={theme.fontSize.lg}
              fontWeight="800"
              pb="26px"
              lineHeight="40px"
            >
              Let's Connect
            </Text>
            <Text
              fontSize={theme.fontSize.md}
              pb="26px"
              fontWeight="400"
              lineHeight="28px"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              augue ex, iaculis non magna sit amet, posuere fermentum magna.
              Praesent tempus risus mauris, ac pharetra mi sagittis id.
            </Text>
          </Box>

          <Stack
            display="block"
            bg="gray.60"
            borderRadius="8px"
            boxShadow="0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)"
          >
            <Flex style={{ display }}>
              <FormControl id="nome" padding="30px">
                <FormLabel
                  fontWeight="600"
                  color="gray.75"
                  fontSize={theme.fontSize.vd}
                >
                  Name
                </FormLabel>
                <Input type="text" fontSize={theme.fontSize.md} />
              </FormControl>

              <FormControl id="nome" padding="30px">
                <FormLabel
                  fontWeight="600"
                  color="gray.75"
                  fontSize={theme.fontSize.vd}
                >
                  Company Name
                </FormLabel>
                <Input type="text" fontSize={theme.fontSize.md} />
              </FormControl>
            </Flex>

            <Flex style={{ display }}>
              <FormControl id="nome" padding="30px">
                <FormLabel
                  fontWeight="600"
                  color="gray.75"
                  fontSize={theme.fontSize.vd}
                >
                  Email
                </FormLabel>
                <Input type="Email" fontSize={theme.fontSize.md} />
              </FormControl>

              <FormControl id="nome" padding="30px">
                <FormLabel
                  fontWeight="600"
                  color="gray.75"
                  fontSize={theme.fontSize.vd}
                >
                  Phone Number
                </FormLabel>
                <Input type="number" fontSize={theme.fontSize.md} />
              </FormControl>
            </Flex>

            <Flex>
              <FormControl id="nome" padding="30px">
                <FormLabel
                  fontWeight="600"
                  color="gray.75"
                  fontSize={theme.fontSize.vd}
                >
                  Subject
                </FormLabel>
                <Input type="Text" fontSize={theme.fontSize.md} />
              </FormControl>
            </Flex>

            <Flex>
              <FormControl id="nome" padding="30px">
                <FormLabel
                  fontWeight="600"
                  color="gray.75"
                  fontSize={theme.fontSize.vd}
                >
                  Your Message
                </FormLabel>
                <Textarea fontSize={theme.fontSize.md}></Textarea>
              </FormControl>
            </Flex>

            <Box padding="30px">
              <Button
                borderRadius="4px"
                height="48px"
                w={{ base: '100%', md: '110px' }}
                pt="10px"
                pb="10px"
                pl="24px"
                pr="24px"
                bgColor="gray.70"
                color="#fff"
                fontSize={theme.fontSize.ld}
              >
                Enviar
              </Button>
            </Box>
          </Stack>
        </Stack>

        <Stack
          display="block"
          pt={{ base: '70px', md: '5.3%' }}
          paddingLeft={{ base: '0px', md: '40px' }}
          pb={{ base: '80px', md: '30px' }}
        >
          <Text
            fontWeight="700"
            lineHeight="28px"
            fontSize={theme.fontSize.ld}
            w={{ base: '100%', md: '100%' }}
            pl={{ base: '20px', md: 0 }}
          >
            Our Commitment
          </Text>
          <Box
            w={{ base: '100%', md: 0 }}
            display={{ base: 'flex', md: 'block' }}
            justifyContent="center"
          >
            <Box
              height="168px"
              w={{ base: '327px', md: '384px' }}
              bg="gray.60"
              borderRadius="8px"
              display="flex"
              alignItems="center"
              boxShadow="0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)"
            >
              <Text
                color="gray.500"
                fontSize={theme.fontSize.ld}
                fontWeight="400"
                lineHeight="28px"
                padding="10px"
              >
                Orci varius natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Vivamus hendrerit justo eu diam varius
                dictum
              </Text>
            </Box>
          </Box>

          <Text
            fontWeight="700"
            lineHeight="28px"
            fontSize={theme.fontSize.ld}
            pt="60px"
            pl={{ base: '20px', md: 0 }}
          >
            Art Difecting
          </Text>

          <Box
            w={{ base: '100%', md: '100%' }}
            display="flex"
            justifyContent="center"
          >
            <Box
              height={{ base: '248px', md: '308px' }}
              w={{ base: '327px', md: '384px' }}
              bg="gray.60"
              borderRadius="8px"
              display="flex"
              justifyContent="start"
              alignItems="center"
              boxShadow="0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)"
            >
              <Stack display="block" padding="28px">
                <Text
                  color="gray.500"
                  fontSize={theme.fontSize.ld}
                  pt="30px"
                  lineHeight="28px"
                >
                  Proin sapien ligula, aliquam eget enim ac, fringilla hendrerit
                  nulla.
                </Text>

                <Flex justifyContent="start" pt="20px" alignItems="center">
                  <PhoneIcon color="gray.500" />
                  <Text
                    pl="20px"
                    color="gray.500"
                    fontSize={theme.fontSize.ld}
                    fontWeight="500"
                  >
                    +123 (4567) 8910
                  </Text>
                </Flex>

                <Flex justifyContent="start" pt="20px" alignItems="center">
                  <EmailIcon color="gray.500" />
                  <Text pl="20px" color="gray.500" fontSize={theme.fontSize.ld}>
                    hello@exmple.com
                  </Text>
                </Flex>

                <Flex
                  justifyContent="start"
                  pt="20px"
                  pb={{ base: '30px', md: '20px' }}
                  alignItems="center"
                >
                  <InfoIcon color="gray.500" />
                  <Text pl="20px" color="gray.500" fontSize={theme.fontSize.ld}>
                    120 Street Lorem Ipsum Sit Amet
                  </Text>
                </Flex>
              </Stack>
            </Box>
          </Box>
        </Stack>
      </Flex>
    </Box>
  );
}

export default App;
