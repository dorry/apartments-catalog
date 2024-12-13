"use client";
import { useDisclosure } from "@nextui-org/react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
} from "@nextui-org/react";
import Image from "next/image";
import CreateModal from "../apartments/create";
import Link from "next/link";
export default function MainHeader() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Navbar maxWidth="full" shouldHideOnScroll>
        <NavbarBrand>
          <Link href="/" className="flex gap-4">
            <Image src="/globe.svg" alt="logomark" width={20} height={20} />
            <p className="font-bold text-inherit ml-2">Apartments Catalog</p>
          </Link>
        </NavbarBrand>
        <NavbarContent justify="end">
          <NavbarItem>
            <Button onPress={onOpen} color="primary" variant="flat">
              Add
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      <CreateModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  );
}
