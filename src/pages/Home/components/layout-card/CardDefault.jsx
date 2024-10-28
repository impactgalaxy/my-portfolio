import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  useDisclosure,
  ModalCloseButton,
} from "@chakra-ui/react";

export function CardDefault({ title, description, link, client, server }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Card className="mt-6 w-96 group dark:bg-blue-gray-900">
        <CardHeader color="blue-gray" className="relative h-56">
          <img
            src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
            alt="card-image"
            className="transition-transform duration-1000 group-hover:scale-110 motion-reduce:transform-none"
          />
        </CardHeader>
        <CardBody>
          <Typography
            variant="h5"
            color="blue-gray"
            className="mb-2 dark:text-gray-300">
            {title}
          </Typography>
          <Typography className="dark:text-gray-500">{description}</Typography>
        </CardBody>
        <CardFooter className="pt-0 flex items-center justify-between">
          <a target="_blank" href={link}>
            <Button>Live</Button>
          </a>

          <Button onClick={onOpen}>Get Code</Button>
        </CardFooter>
      </Card>
      <Modal
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={onClose}
        motionPreset="slideInBottom">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>What code do you want???</ModalHeader>
          <ModalCloseButton />

          <ModalBody className="space-x-5 p-10">
            <a target="_blank" href={client}>
              <Button>Client side</Button>
            </a>
            <a target="_blank" href={server}>
              <Button>Server side</Button>
            </a>
          </ModalBody>
          <ModalFooter />

          {/* <ModalFooter className="space-x-5">
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter> */}
        </ModalContent>
      </Modal>
    </>
  );
}
