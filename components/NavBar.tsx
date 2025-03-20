import React from "react";
import { Button } from "@/components/ui/button";


import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  ArrowRightIcon,
  Facebook,
  Instagram,
  Mail,
  MessageCircle,
  SendHorizontal,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.div
      className="flex gap-x-3 bg-[#1C1A19] p-5 rounded-lg"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link href="mailto:jeanmariebissari@gmail.com">
              <Button
                effect="expandIcon"
                variant="outline"
                icon={ArrowRightIcon}
                iconPlacement="right"
                className="hover:border-0"
              >
                <Mail />
              </Button>
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>Email me</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link href="https://wa.me/22871107173" passHref>
              <Button
                variant="outline"
                effect="expandIcon"
                icon={SendHorizontal}
                iconPlacement="right"
                className="hover:bg-green-600 hover:border-0"
              >
                {/* <Image alt="whatsapp" src="/icons/whatsapp.svg" width={20} height={20}/> */}
                <MessageCircle />
              </Button>{" "}
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>Whatsapp me</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link href="https://www.facebook.com/jeanmarie.bissari" passHref>
              <Button
                variant="outline"
                effect="expandIcon"
                icon={SendHorizontal}
                iconPlacement="right"
                className="hover:bg-blue-500 hover:border-0"
              >
                {/* <Image alt="whatsapp" src="/icons/whatsapp.svg" width={20} height={20}/> */}
                <Facebook />
              </Button>{" "}
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>Facebook</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link href="https://www.instagram.com/jean_bissari" passHref>
              <Button
                variant="outline"
                effect="expandIcon"
                icon={SendHorizontal}
                iconPlacement="right"
                className="hover:bg-pink-600 hover:border-0"
              >
                {/* <Image alt="whatsapp" src="/icons/whatsapp.svg" width={20} height={20}/> */}
                <Instagram />
              </Button>{" "}
            </Link>
          </TooltipTrigger>
          <TooltipContent className="bg-pink-600">
            <p>Instagram</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </motion.div>
  );
};

export default Navbar;
