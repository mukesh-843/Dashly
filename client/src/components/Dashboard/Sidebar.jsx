import React, { useState } from "react";
// import profile from "../../profile.jpeg"
import {
  Box,
  Container,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  IconButton,
  useDisclosure,
  Divider,
  Text,
  Flex,
  Heading,
  Avatar,
  List,
  ListItem,
  ListIcon,
  useColorModeValue,
  PopoverTrigger,
  PopoverContent,
  Button,
  PopoverHeader,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
  PopoverFooter,
  ButtonGroup,
  Popover,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { ChevronRightIcon, SettingsIcon } from "@chakra-ui/icons";
import {
  MdDashboard,
  MdAssignment,
  MdSettings,
  MdPeople,
  MdCalendarToday,
  MdInsertDriveFile,
  MdAnalytics,
} from "react-icons/md";

const AdminDashboard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const [selectedOption, setSelectedOption] = useState("");

  // const handleOptionChange = (event) => {
  //   setSelectedOption(event.target.value);
  // };
  const { Open, onisClose } = useDisclosure();

  const [data, setData] = useState({
    eyear: "",
    intensity: 0,
    sector: "",
    topic: "",
    insight: 0,
    url: "",
    region: "",
    syear: "",
    impact: "",
    added: "",
    published: "",
    country: "",
    relevance: 0,
    pestle: "",
    source: "",
    title: "",
    likelihood: 0,
  });

  const handleChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("Data", data);
    const res = await fetch("/api/create-data", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    // const resp = await res.json();
    if (res.status === 200) {
      setData({
        eyear: "",
        intensity: 0,
        sector: "",
        topic: "",
        insight: 0,
        url: "",
        region: "",
        syear: "",
        impact: "",
        added: "",
        published: "",
        country: "",
        relevance: 0,
        pestle: "",
        source: "",
        title: "",
        likelihood: 0,
      });
    }
  };
  return (
    <Container>
      <IconButton
        icon={<ChevronRightIcon />}
        onClick={onOpen}
        position="fixed"
        top="50%"
        left={0}
        transform="translateY(-50%)"
        zIndex={1}
        colorScheme="teal"
        variant="outline"
      />

      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent
          bg={useColorModeValue("gray.100", "gray.800")}
          color={useColorModeValue("gray.800", "white")}
        >
          <DrawerHeader
            borderBottomWidth="1px"
            fontSize="xl"
            fontWeight="bold"
            color="teal.500"
            display="flex"
            alignItems="center"
          >
            <SettingsIcon mr={2} /> Dash.ly
          </DrawerHeader>
          <DrawerBody>
            <Text fontSize="lg" mb={2} fontWeight="bold">
              Menu
            </Text>
            <Divider
              mb={4}
              borderColor={useColorModeValue("gray.300", "gray.600")}
            />

            <List spacing={3}>
              {/* ... Your list items */}

              <ListItem cursor="pointer">
                <ListIcon as={MdDashboard} fontSize="xl" />
                Dashboard
              </ListItem>
              <ListItem cursor="pointer">
                <ListIcon as={MdAssignment} fontSize="xl" />
                Tasks
              </ListItem>
              <ListItem cursor="pointer">
                <ListIcon as={MdPeople} fontSize="xl" />
                Users
              </ListItem>
              <ListItem cursor="pointer">
                <ListIcon as={MdCalendarToday} fontSize="xl" />
                Calendar
              </ListItem>
              <ListItem cursor="pointer">
                <ListIcon as={MdInsertDriveFile} fontSize="xl" />
                Files
              </ListItem>
              <ListItem cursor="pointer">
                <ListIcon as={MdAnalytics} fontSize="xl" />
                Analytics
              </ListItem>
              <ListItem cursor="pointer">
                <ListIcon as={MdSettings} fontSize="xl" />
                Settings
              </ListItem>
              <ListItem cursor="pointer">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  focusable="false"
                  class="chakra-icon css-1e2ae17"
                  role="presentation"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M6 2c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6H6zm7 7V3.5L18.5 9H13z"></path>
                </svg>
                <Popover
                  returnFocusOnClose={false}
                  isOpen={Open}
                  onClose={onisClose}
                  placement="right"
                  closeOnBlur={false}
                >
                  <PopoverTrigger>
                    <Button
                      size="sm"
                      style={{ marginLeft: "-5%", fontWeight: "normal" }}
                      colorScheme="gray"
                    >
                      Add Data
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent width="15%">
                    <PopoverHeader fontWeight="semibold">
                      Add Data
                    </PopoverHeader>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverBody overflowY="scroll">
                      <form>
                        <Flex flexWrap="wrap">
                          {/* Group 1 */}
                          <FormControl
                            flexBasis="calc(43.33% - 5px)"
                            marginRight="16px"
                          >
                            <FormLabel>End Year</FormLabel>
                            <Input
                              type="text"
                              name="eyear"
                              value={data.eyear}
                              onChange={handleChange}
                              placeholder="End Year"
                            />
                          </FormControl>
                          <FormControl
                            flexBasis="calc(43.33% - 5px)"
                            marginRight="16px"
                          >
                            <FormLabel>Intensity</FormLabel>
                            <Input
                              type="number"
                              name="intensity"
                              value={data.intensity}
                              onChange={handleChange}
                              placeholder="Intensity"
                            />
                          </FormControl>

                          <FormControl
                            flexBasis="calc(43.33% - 5px)"
                            marginRight="16px"
                          >
                            <FormLabel>Sector</FormLabel>
                            <Input
                              type="text"
                              name="sector"
                              value={data.sector}
                              onChange={handleChange}
                              placeholder="Sector"
                            />
                          </FormControl>

                          {/* Group 2 */}
                          <FormControl
                            flexBasis="calc(43.33% - 5px)"
                            marginRight="16px"
                          >
                            <FormLabel>Topic</FormLabel>
                            <Input
                              type="text"
                              name="topic"
                              value={data.topic}
                              onChange={handleChange}
                              placeholder="Topic"
                            />
                          </FormControl>

                          <FormControl
                            flexBasis="calc(43.33% - 5px)"
                            marginRight="16px"
                          >
                            <FormLabel>Insight</FormLabel>
                            <Input
                              type="number"
                              name="insight"
                              value={data.insight}
                              onChange={handleChange}
                              placeholder="Insight"
                            />
                          </FormControl>

                          <FormControl
                            flexBasis="calc(43.33% - 5px)"
                            marginRight="16px"
                          >
                            <FormLabel>URL</FormLabel>
                            <Input
                              type="text"
                              name="url"
                              value={data.url}
                              onChange={handleChange}
                              placeholder="URL"
                            />
                          </FormControl>

                          {/* Group 3 */}
                          <FormControl
                            flexBasis="calc(43.33% - 5px)"
                            marginRight="16px"
                          >
                            <FormLabel>Region</FormLabel>
                            <Input
                              type="text"
                              name="region"
                              value={data.region}
                              onChange={handleChange}
                              placeholder="Region"
                            />
                          </FormControl>
                          <FormControl
                            flexBasis="calc(43.33% - 5px)"
                            marginRight="16px"
                          >
                            <FormLabel>Start Year</FormLabel>
                            <Input
                              type="text"
                              name="syear"
                              value={data.syear}
                              onChange={handleChange}
                              placeholder="Start Year"
                            />
                          </FormControl>
                          {/*Copied */}
                          <FormControl
                            flexBasis="calc(43.33% - 5px)"
                            marginRight="16px"
                          >
                            <FormLabel>Impact </FormLabel>
                            <Input
                              type="text"
                              name="impact"
                              value={data.impact}
                              onChange={handleChange}
                              placeholder="Impact"
                            />
                          </FormControl>
                          <FormControl
                            flexBasis="calc(43.33% - 5px)"
                            marginRight="16px"
                          >
                            <FormLabel>Added</FormLabel>
                            <Input
                              type="text"
                              name="added"
                              value={data.added}
                              onChange={handleChange}
                              placeholder="Added"
                            />
                          </FormControl>
                          <FormControl
                            flexBasis="calc(43.33% - 5px)"
                            marginRight="16px"
                          >
                            <FormLabel>Published</FormLabel>
                            <Input
                              type="text"
                              name="published"
                              value={data.published}
                              onChange={handleChange}
                              placeholder="Published"
                            />
                          </FormControl>
                          <FormControl
                            flexBasis="calc(43.33% - 5px)"
                            marginRight="16px"
                          >
                            <FormLabel>Country</FormLabel>
                            <Input
                              type="text"
                              name="country"
                              value={data.country}
                              onChange={handleChange}
                              placeholder="Country"
                            />
                          </FormControl>
                          <FormControl
                            flexBasis="calc(43.33% - 5px)"
                            marginRight="16px"
                          >
                            <FormLabel>Relevance</FormLabel>
                            <Input
                              type="number"
                              name="relevance"
                              value={data.relevance}
                              onChange={handleChange}
                              placeholder="Relevance"
                            />
                          </FormControl>
                          <FormControl
                            flexBasis="calc(43.33% - 5px)"
                            marginRight="16px"
                          >
                            <FormLabel>Pestle</FormLabel>
                            <Input
                              type="text"
                              name="pestle"
                              value={data.pestle}
                              onChange={handleChange}
                              placeholder="Pestle"
                            />
                          </FormControl>
                          <FormControl
                            flexBasis="calc(43.33% - 5px)"
                            marginRight="16px"
                          >
                            <FormLabel>Source</FormLabel>
                            <Input
                              type="text"
                              name="source"
                              value={data.source}
                              onChange={handleChange}
                              placeholder="Source"
                            />
                          </FormControl>
                          <FormControl
                            flexBasis="calc(43.33% - 5px)"
                            marginRight="16px"
                          >
                            <FormLabel>Title</FormLabel>
                            <Input
                              type="text"
                              name="title"
                              value={data.title}
                              onChange={handleChange}
                              placeholder="Title"
                            />
                          </FormControl>
                          <FormControl
                            flexBasis="calc(43.33% - 5px)"
                            marginRight="16px"
                          >
                            <FormLabel>Likelihood</FormLabel>
                            <Input
                              type="number"
                              name="likelihood"
                              value={data.likelihood}
                              onChange={handleChange}
                              placeholder="Likelihood"
                            />
                          </FormControl>
                        </Flex>
                      </form>
                    </PopoverBody>
                    <PopoverFooter display="flex" justifyContent="flex-end">
                      <ButtonGroup size="sm">
                        <Button colorScheme="red" onClick={handleSubmit}>
                          Submit
                        </Button>
                      </ButtonGroup>
                    </PopoverFooter>
                  </PopoverContent>
                </Popover>
              </ListItem>
            </List>

            <Flex alignItems="center" mt="140%">
              <Avatar
                size="lg"
                src="./profile.jpeg"
                mr={4}
                alt="Profile"
              />
              <Box>
                <Heading size="md">Mukesh Gautam</Heading>
                <Text
                  fontSize="sm"
                  color={useColorModeValue("gray.500", "gray.400")}
                >
                  Full Stack Developer
                </Text>
              </Box>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Container>
  );
};

export default AdminDashboard;

/*
                        <Button variant="outline" onClick={onisClose}>Cancel</Button>

*/
