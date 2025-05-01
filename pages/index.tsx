import * as React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import {
  Container,
  Box,
  Stack,
  HStack,
  ButtonGroup,
  Button,
  Icon,
  Heading,
  Text,
  Wrap,
  Tag,
  useClipboard,
  IconButton,
  VStack,
  Flex,
} from "@chakra-ui/react";
import { SEO } from "components/seo/seo";

import { FallInPlace } from "components/motion/fall-in-place";
import { Hero } from "components/hero";
import { Link, Br } from "@saas-ui/react";
import { Em } from "components/typography";
import { NextjsLogo, ChakraLogo } from "components/logos";
import {
  FiArrowRight,
  FiBox,
  FiCheck,
  FiCode,
  FiCopy,
  FiFlag,
  FiGrid,
  FiLock,
  FiSearch,
  FiSliders,
  FiSmile,
  FiTerminal,
  FiThumbsUp,
  FiToggleLeft,
  FiTrendingUp,
  FiUserPlus,
} from "react-icons/fi";
import { Features } from "components/features";
import { BackgroundGradient } from "components/gradients/background-gradient";
import { Faq } from "components/faq";
import { Pricing } from "components/pricing/pricing";

import { ButtonLink } from "components/button-link/button-link";
import { Testimonial, Testimonials } from "components/testimonials";

import faq from "data/faq";
import testimonials from "data/testimonials";
import pricing from "data/pricing";

import {
  Highlights,
  HighlightsItem,
  HighlightsTestimonialItem,
} from "components/highlights";

const Home: NextPage = () => {
  return (
    <Box>
      <SEO
        title="MacroSurfer"
        description="Ultimate analytics tool for Macro Investment Research"
      />
      <Box>
        <HeroSection />

        <HighlightsSection />

        <FeaturesSection />

        {/* <TestimonialsSection /> */}

        {/* <PricingSection /> */}

        <FaqSection />
      </Box>
    </Box>
  );
};

const HeroSection: React.FC = () => {
  return (
    <Box position="relative" overflow="hidden">
      <BackgroundGradient height="100%" zIndex="-1" />
      <Container maxW="container.xl" pt={{ base: 40, lg: 60 }} pb="40">
        <Stack direction={{ base: "column", lg: "row" }} alignItems="center">
          <Hero
            id="home"
            justifyContent="flex-start"
            px="0"
            title={
              <FallInPlace>
                Invest smarter
                <Br /> with your own quantative AI agent
              </FallInPlace>
            }
            description={
              <FallInPlace delay={0.4} fontWeight="medium">
                MacroSurfer is an open source platform that allows you to build your own <Em>macroeconomic</Em> and <Em>fundamental</Em> data curation pipeline for analysis and customize your own <Em>LLM</Em> based <Em>AI agent</Em> to make quantative investment decisions.
              </FallInPlace>
            }
          >
            <FallInPlace delay={0.8}>
              <HStack pt="4" pb="12" spacing="8">

              </HStack>

              <ButtonGroup spacing={4} alignItems="center">
                <ButtonLink colorScheme="primary" size="lg" href="https://chat.macrosurfer.com/">
                  Try demo
                </ButtonLink>
                <ButtonLink
                  size="lg"
                  href="https://github.com/MacroSurfer/MacroSurferFunctions"
                  variant="outline"
                  rightIcon={
                    <Icon
                      as={FiArrowRight}
                      sx={{
                        transitionProperty: "common",
                        transitionDuration: "normal",
                        ".chakra-button:hover &": {
                          transform: "translate(5px)",
                        },
                      }}
                    />
                  }
                >
                  View documentation
                </ButtonLink>
              </ButtonGroup>
            </FallInPlace>
          </Hero>
          <Box
            height={{ base: "300px", md: "400px", lg: "600px" }}
            position="absolute"
            display={{ base: "none", lg: "block" }}
            left={{ lg: "60%", xl: "55%" }}
            width={{ base: "90vw", md: "85vw", lg: "80vw" }}
            margin="0 auto"
          >
            <FallInPlace delay={1}>
              <Box overflow="hidden" height="100%" borderRightRadius="80px" borderLeftRadius="80px" borderTopRadius="80px">
                <Image
                  src="/static/screenshots/illustration.jpg"
                  layout="responsive"
                  width={1200}
                  height={900}
                  alt="Screenshot of a ListPage in Saas UI Pro"
                  quality="75"
                  priority
                />
              </Box>
            </FallInPlace>
          </Box>
        </Stack>
      </Container>

      <Features
        id="benefits"
        columns={[1, 2, 4]}
        iconSize={4}
        innerWidth="container.xl"
        pt="20"
        features={[
          {
            title: "Open Sourced",
            icon: FiSmile,
            description: "MacroSurfer is open sourced and you can build your own custom AI agent with your own data",
            iconPosition: "left",
            delay: 0.6,
          },
          {
            title: "Customizable",
            icon: FiSliders,
            description:
              "You can customize the AI agent to your own needs by providing your own data and training it on your own data",
            iconPosition: "left",
            delay: 0.8,
          },
          {
            title: "No code; just ask",
            icon: FiGrid,
            description:
              "The agent enables you to do market research in natural language and get answers in a conversational manner",
            iconPosition: "left",
            delay: 1,
          },
          {
            title: "Quantifiable",
            icon: FiThumbsUp,
            description:
              "Offers quantified evidence to support any deep dive analysis you need to arrive with an investment decision",
            iconPosition: "left",
            delay: 1.1,
          },
        ]}
        reveal={FallInPlace}
      />
    </Box>
  );
};

const HighlightsSection = () => {
  const { value, onCopy, hasCopied } = useClipboard("yarn add @saas-ui/react");
  return (<></>);
  // return (
  //   <Highlights>
  //     <HighlightsItem colSpan={[1, null, 2]} title="Think like a pro investor">
  //       <VStack alignItems="flex-start" spacing="8">
  //         <Text color="muted" fontSize="xl">
  //           Get the same foundational quantative research tools and analytics capabilities that professional investors use. The tool helps you to better explain market movements and identify opportunities easily.
  //         </Text>
  //       </VStack>
  //     </HighlightsItem>
  //     <HighlightsItem title="Make data driven decisions">
  //       <Text color="muted" fontSize="lg">
  //         We help you to easily analyze your understanding with specific market security of your pick and how it is positioned within the macro-economic trends.
  //       </Text>
  //     </HighlightsItem>
  //     <HighlightsTestimonialItem
  //       name="Warren Buffet"
  //       description="Investor"
  //       avatar="/static/images/warren-buffet-avatar.png"
  //       gradient={["pink.200", "purple.500"]}
  //     >
  //       "Investing a business where you think. Analyzing macro economic trends is important, but understanding how specific businesses are positioned within those trends is even more critical."
  //     </HighlightsTestimonialItem>
  //     <HighlightsItem
  //       colSpan={[1, null, 2]}
  //       title="Learn concepts with ease; backtest with data"
  //     >
  //       <Text color="muted" fontSize="lg">
  //       We help you to clearly understand macro-economic concepts easily without the need to go through loads of boring text books.
  //       We also help you to understand how those concepts impact market through our analytical tools.
  //       </Text>
  //       <Wrap mt="8">
  //         {[
  //           "Interest Rates",
  //           "CPI",
  //           "PPI",
  //           "Core PCE",
  //           "PMI",
  //           "FOMC Meetings",
  //           "GDP",
  //           "Fed Memo",
  //           "Initial Jobless Claims",
  //           "Government Spending",
  //           "Government Debt Auctions",
  //           "REITs",
  //           "Home Sales",
  //           "Personal Income",
  //           "ISM Factory Index",
  //           "Auto sales",
  //           "Consumer Credit",
  //         ].map((value) => (
  //           <Tag
  //             key={value}
  //             variant="subtle"
  //             colorScheme="purple"
  //             rounded="full"
  //             px="3"
  //           >
  //             {value}
  //           </Tag>
  //         ))}
  //       </Wrap>
  //     </HighlightsItem>
  //   </Highlights>
  // );
};

const FeaturesSection = () => {
  return (
    <Features
      id="features"
      title={
        <Heading
          lineHeight="short"
          fontSize={["2xl", null, "4xl"]}
          textAlign="left"
          as="p"
        >
          Not your standard
          <Br /> broker app data view
        </Heading>
      }
      description={
        <>
          MacroSurfer offers you a comprehensive set of analytics 
          <Br />
          without the need to learn programming or any sophisticated tools
        </>
      }
      align="left"
      columns={[1, 2, 3]}
      iconSize={4}
      features={[
        {
          title: "Economic Calendar",
          icon: FiBox,
          description:
            "Up to date upcoming economic event calendar across the globe",
          variant: "inline",
        },
        {
          title: "Financial Estimates",
          icon: FiLock,
          description:
            "Track financial estimates of your favorite companies",
          variant: "inline",
        },
        {
          title: "Company ratings and price targets",
          icon: FiSearch,
          description:
            "Use ratings and price targets to make investment decisions",
          variant: "inline",
        },
        {
          title: "Full history of earnings and dividends",
          icon: FiUserPlus,
          description:
            "Track foundamental shifts to identify potential opportunities",
          variant: "inline",
        },
        {
          title: "ETFs & Mutual Funds",
          icon: FiFlag,
          description:
            "Track ETFs and Mutual Funds performance without the need to know the underlying holdings",
          variant: "inline",
        },
        {
          title: "Market Index",
          icon: FiTrendingUp,
          description:
            "Track major market index performance to view how overall market is performing",
          variant: "inline",
        },
        {
          title: "Scan for Opportunities",
          icon: FiToggleLeft,
          description:
            "Scan for opportunities across the globe based on your own criteria",
          variant: "inline",
        },
        {
          title: "Explaining Market Movements",
          icon: FiTerminal,
          description:
            "identify potential relevant events that contributes to a security's current movement",
          variant: "inline",
        },
        {
          title: "Knowledge hub chatbot",
          icon: FiCode,
          description: "Learn concepts with ease without the need to go through textbooks",
          variant: "inline",
        },
      ]}
    />
  );
};

const TestimonialsSection = () => {
  const columns = React.useMemo(() => {
    return testimonials.items.reduce<Array<typeof testimonials.items>>(
      (columns, t, i) => {
        columns[i % 3].push(t);

        return columns;
      },
      [[], [], []]
    );
  }, []);

  return (
    <Testimonials
      title={testimonials.title}
      columns={[1, 2, 3]}
      innerWidth="container.xl"
    >
      <>
        {columns.map((column, i) => (
          <Stack key={i} spacing="8">
            {column.map((t, i) => (
              <Testimonial key={i} {...t} />
            ))}
          </Stack>
        ))}
      </>
    </Testimonials>
  );
};

const PricingSection = () => {
  return (
    <Pricing {...pricing}>
      <Text p="8" textAlign="center" color="muted">
        VAT may be applicable depending on your location.
      </Text>
    </Pricing>
  );
};

const FaqSection = () => {
  return <Faq {...faq} />;
};

export default Home;

export async function getStaticProps() {
  return {
    props: {
      announcement: {
        title: "Support us by becoming a stargazer! 🚀 ",
        description:
'<script async defer src="https://buttons.github.io/buttons.js"></script><a class="github-button" href="https://github.com/MacroSurfer/MacroSurferFunctions" data-color-scheme="no-preference: light; light: light; dark: dark;" data-size="large" aria-label="Star MacroSurfer/MacroSurferFunctions on GitHub">Star</a>',
        href: "https://github.com/MacroSurfer/MacroSurferFunctions",
        action: false,
      },
    },
  };
}
